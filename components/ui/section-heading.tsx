import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <RevealOnScroll
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-brand-electric/30 bg-brand-electric/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-white/60 text-pretty md:text-lg">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}