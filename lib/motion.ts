import type { Variants } from "framer-motion";

export const ease = {
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  out: [0.0, 0.0, 0.2, 1.0] as const,
};

export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.65,
  hero: 0.75,
};

export const distance = {
  sm: 12,
  md: 20,
  lg: 28,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: distance.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.smooth },
  },
};

export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -distance.lg },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.smooth },
  },
};

export const revealRight: Variants = {
  hidden: { opacity: 0, x: distance.lg },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: distance.md, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: duration.base, ease: ease.smooth },
  },
};

export const softScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: ease.smooth },
  },
};

export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast, ease: ease.smooth },
  },
};

export const reducedStaggerItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast, ease: ease.smooth },
  },
};
