"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion-variants";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "li" | "span";
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.25,
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </MotionTag>
  );
}