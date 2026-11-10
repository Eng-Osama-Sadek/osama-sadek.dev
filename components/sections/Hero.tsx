"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { AuroraBackground } from "@/components/layout/AuroraBackground";
import { siteConfig } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24">
      <AuroraBackground />

      <div className="container-tight relative">
        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {siteConfig.availableForHire && (
            <motion.div variants={item} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {siteConfig.availability}
              </div>
            </motion.div>
          )}

          <motion.p
            variants={item}
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-cyan"
          >
            {siteConfig.title}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>.
            <br />
            I ship production apps <span className="gradient-text">with AI</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base text-white/60 text-pretty md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic>
              <Link href="/projects">
                <Button variant="primary" size="lg">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  <Sparkles className="h-4 w-4" />
                  Hire Me
                </Button>
              </Link>
            </Magnetic>
            <Magnetic>
              <a href={siteConfig.cv} download>
                <Button variant="ghost" size="lg">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}