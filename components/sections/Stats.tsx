import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { siteConfig } from "@/lib/constants";

const stats = [
  { label: "Projects Shipped", value: siteConfig.stats.projects, suffix: "+" },
  { label: "Years of Experience", value: siteConfig.stats.yearsExperience, suffix: "+" },
  { label: "Avg. Efficiency Gain", value: siteConfig.stats.efficiencyGain, suffix: "%" },
  { label: "Happy Clients", value: siteConfig.stats.clients, suffix: "+" },
];

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="container-tight">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.08}>
              <div className="glass gradient-border rounded-2xl p-6 text-center">
                <div className="font-display text-3xl font-bold text-white md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}