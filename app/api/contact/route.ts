import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validators";
import { siteConfig } from "@/lib/constants";

const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const rateMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || entry.reset < now) {
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, message, budget, timeline, website } = parsed.data;
    if (website) return NextResponse.json({ ok: true });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "DevShowcase <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px">
          <h2>New inquiry via your portfolio</h2>
          <table style="border-collapse:collapse">
            <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0"><strong>Budget</strong></td><td>${escapeHtml(budget ?? "—")}</td></tr>
            <tr><td style="padding:4px 12px 4px 0"><strong>Timeline</strong></td><td>${escapeHtml(timeline ?? "—")}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb" />
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send. Try again." }, { status: 500 });
  }
}