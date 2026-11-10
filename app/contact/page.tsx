import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Available for remote freelance work worldwide. Let's build something great.",
};

const channels = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone, href: siteConfig.whatsapp },
  { icon: Github, label: "GitHub", value: "Eng-Osama-Sadek", href: siteConfig.github },
  { icon: Linkedin, label: "LinkedIn", value: "osama-sadek", href: siteConfig.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="container-tight pb-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something great together"
            description="Available for remote freelance worldwide. Tell me about your project — I reply within 24h."
          />
        </section>

        <section className="container-tight grid gap-10 pb-24 md:grid-cols-[1fr_360px]">
          <RevealOnScroll>
            <div className="glass gradient-border rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="space-y-4">
            <div className="glass gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available now
              </div>
              <p className="mt-2 text-sm text-white/60">
                Currently accepting new remote freelance projects.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </div>
            </div>

            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass gradient-border flex items-center gap-3 rounded-2xl p-4 transition-all hover:bg-white/[0.05]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-electric/10 text-brand-cyan">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
                  <p className="truncate text-sm text-white/80">{value}</p>
                </div>
              </a>
            ))}
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}