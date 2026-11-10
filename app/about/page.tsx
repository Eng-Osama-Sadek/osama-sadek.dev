import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "AI Maker & Automation Architect — 4+ years building production apps by orchestrating AI models.",
};

const skills = [
  { label: "AI Orchestration (ChatGPT, Claude, Gemini, Cursor)", level: 95 },
  { label: "Prompt Engineering & AI Agents", level: 93 },
  { label: "RAG Architectures & Vector Search", level: 88 },
  { label: "Full-Stack Web/Mobile Architecture", level: 90 },
  { label: "Database Design (PostgreSQL, MSSQL)", level: 85 },
  { label: "API Integration & AI-Assisted Debugging", level: 92 },
];

const experience = [
  {
    period: "2021 — Present",
    role: "AI Maker & Automation Architect",
    company: "Freelance / Remote",
    bullets: [
      "Architected and shipped 8+ production-grade applications by directing AI models to write code, design APIs, and build responsive UIs.",
      "Leveraged AI tools to implement RAG architectures, cutting manual document analysis time by 70%.",
      "Managed end-to-end delivery: precise prompts → generation → testing → deployment.",
    ],
  },
  {
    period: "2007 — Present",
    role: "Senior Infrastructure & Digital Transformation Manager",
    company: "Middle Egypt Electricity Distribution Company",
    bullets: [
      "Led technical teams of 100+ personnel across grid operations and digital workflow modernization.",
      "Drove modernization of internal tooling and reporting pipelines across multiple departments.",
    ],
  },
];

const education = [
  { year: "2005", title: "B.Sc. Electrical Engineering (Power & Machines)", org: "Assiut University" },
  { year: "2026", title: "Back-End AI Engineering Intern (Accepted)", org: "FlyRank AI" },
  { year: "2025", title: "Gorilla Problem Solving Assessment — 97th Percentile", org: "Gorilla" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="container-tight">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
            <RevealOnScroll>
              <Badge variant="default" className="mb-4">
                <Sparkles className="h-3 w-3" />
                AI Maker & Automation Architect
              </Badge>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
                Hello, I&apos;m <span className="gradient-text">{siteConfig.name}</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/70 text-pretty">
                I don&apos;t write boilerplate by hand — I architect systems and direct
                AI models (ChatGPT, Claude, Gemini, Cursor) to build them. What used to
                take a team weeks, I ship in days with production-grade quality.
              </p>
              <p className="mt-4 max-w-2xl text-white/60 text-pretty">
                Background in Electrical Engineering and 18+ years in infrastructure
                leadership. For the last 4+ years I&apos;ve been building full-stack
                web, mobile, and AI automation systems for clients worldwide.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                {siteConfig.location} — Open to Remote Worldwide
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={siteConfig.cv} download>
                  <Button variant="primary">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="ghost">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15} className="mx-auto">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <div className="absolute -inset-4 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10">
                  <Image
                    src="https://github.com/Eng-Osama-Sadek.png"
                    alt={siteConfig.name}
                    fill
                    priority
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section">
          <div className="container-tight">
            <SectionHeading
              eyebrow="Skills"
              title="What I actually do best"
              description="Deep focus on architecture, prompt engineering, and full-stack delivery."
            />
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {skills.map((skill, i) => (
                <RevealOnScroll key={skill.label} delay={i * 0.06}>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/80">{skill.label}</span>
                      <span className="text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-brand-gradient"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-tight">
            <SectionHeading eyebrow="Experience" title="Where I've been" />
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="relative border-l border-white/10 pl-8">
                {experience.map((exp, i) => (
                  <RevealOnScroll key={exp.role} delay={i * 0.1} className="mb-12 last:mb-0">
                    <div className="relative">
                      <span className="absolute -left-[41px] top-2 flex h-5 w-5 items-center justify-center rounded-full border border-brand-electric bg-brand-navy">
                        <span className="h-2 w-2 rounded-full bg-brand-electric" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                        {exp.period}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold">{exp.role}</h3>
                      <p className="text-sm text-white/50">{exp.company}</p>
                      <ul className="mt-3 space-y-2">
                        {exp.bullets.map((b) => (
                          <li key={b} className="text-sm text-white/70">• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-tight">
            <SectionHeading eyebrow="Education" title="Credentials & Certifications" />
            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {education.map((e, i) => (
                <RevealOnScroll key={e.title} delay={i * 0.08}>
                  <div className="glass gradient-border h-full rounded-2xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                      {e.year}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{e.org}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}