import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const socials = [
  { href: siteConfig.github, label: "GitHub", icon: Github },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
  { href: siteConfig.whatsapp, label: "WhatsApp", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-brand-navy/40 backdrop-blur-xl">
      <div className="container-tight py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
                OS
              </span>
              <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
            </div>
            <p className="mt-3 text-sm text-white/60">{siteConfig.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand-electric/40 hover:bg-brand-electric/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Framer Motion & a lot of AI orchestration.
          </p>
        </div>
      </div>
    </footer>
  );
}