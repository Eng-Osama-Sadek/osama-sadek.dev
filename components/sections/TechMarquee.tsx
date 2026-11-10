"use client";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

const techs = [
  "ChatGPT", "Claude", "Gemini", "Cursor", "OpenAI GPT-4o",
  "Whisper", "RAG", "Next.js", "React", "NestJS",
  "TypeScript", "Python", "Flask", "PostgreSQL", "Redis",
  "Tailwind CSS", "WebRTC", "WebSockets", "Framer Motion",
];

export function TechMarquee() {
  return (
    <section className="py-16">
      <RevealOnScroll className="container-tight">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          Tools & Technologies I orchestrate
        </p>
      </RevealOnScroll>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/70 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}