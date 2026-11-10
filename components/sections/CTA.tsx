import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";

export function CTA() {
  return (
    <section className="section relative">
      <div className="container-tight">
        <RevealOnScroll>
          <div className="glass gradient-border relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div
              aria-hidden
              className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]"
            />
            <div className="relative">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-cyan">
                Let&apos;s build
              </p>
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
                Have an idea?{" "}
                <span className="gradient-text">I can ship it.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60 text-pretty">
                Whether it&apos;s an AI-powered product, an automation pipeline, or a
                full-stack platform — I can architect it and deliver it fast.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Start a project
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/projects">
                    <Button variant="secondary" size="lg">
                      <Sparkles className="h-4 w-4" />
                      See my work
                    </Button>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}