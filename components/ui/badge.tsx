import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "neutral" | "tech" | "creative" | "warm" | "data";
};

const variantClasses = {
  neutral:
    "border-[var(--chip-neutral-border)] bg-[var(--chip-neutral-bg)] text-[var(--chip-neutral-text)]",
  tech: "border-[var(--chip-tech-border)] bg-[var(--chip-tech-bg)] text-[var(--chip-tech-text)]",
  creative:
    "border-[var(--chip-creative-border)] bg-[var(--chip-creative-bg)] text-[var(--chip-creative-text)]",
  warm: "border-[var(--chip-warm-border)] bg-[var(--chip-warm-bg)] text-[var(--chip-warm-text)]",
  data: "border-[var(--chip-data-border)] bg-[var(--chip-data-bg)] text-[var(--chip-data-text)]",
} as const;

export function Badge({ children, className, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-chip)] border px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
