"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { reducedStaggerItem, staggerItem } from "@/lib/motion";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? reducedStaggerItem : staggerItem;

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
