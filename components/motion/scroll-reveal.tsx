"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, reducedFadeUp, revealLeft, revealRight } from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

const directionVariants = {
  up: fadeUp,
  left: revealLeft,
  right: revealRight,
};

export function ScrollReveal({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? reducedFadeUp : directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={variants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
      {...(delay > 0 && {
        transition: { delay },
      })}
    >
      {children}
    </motion.div>
  );
}
