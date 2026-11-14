import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin Dashboard", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) redirect("/admin/login");

  const [projects, contacts] = await Promise.all([
    prisma.project.findMany({ orderBy: { order: "asc" } }),
    prisma.contact.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
  ]);

  return (
    <main className="min-h-screen bg-hero-gradient px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-white/60">Signed in as {session.user.email}</p>
          </div>
          <SignOutButton />
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Projects ({projects.length})</h2>
          <ul className="divide-y divide-white/10">
            {projects.map((p) => (
              <li key={p.id} className="flex items-center justify-between py-3 text-sm">
                <span>{p.title}</span>
                <span className="text-white/50">
                  {p.category} · {p.year} · {p.published ? "published" : "draft"}
                </span>
              </li>
            ))}
            {projects.length === 0 && (
              <li className="py-3 text-sm text-white/50">No projects. Run: npx prisma db seed</li>
            )}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold">Latest messages ({contacts.length})</h2>
          <ul className="space-y-4">
            {contacts.map((c) => (
              <li key={c.id} className="rounded-xl bg-black/20 p-4 text-sm">
                <div className="font-medium">{c.name} · {c.email}</div>
                <div className="mt-1 text-white/70">{c.message}</div>
                <div className="mt-2 text-xs text-white/40">{c.createdAt.toISOString()} · {c.status}</div>
              </li>
            ))}
            {contacts.length === 0 && <li className="text-sm text-white/50">No messages yet.</li>}
          </ul>
        </section>
      </div>
    </main>
  );
}
