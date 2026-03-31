"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { staggerContainer } from "@/lib/motion";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const prefersReduced = useReducedMotion();

  const variants = prefersReduced
    ? { hidden: {}, visible: {} }
    : staggerContainer;

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={variants}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
