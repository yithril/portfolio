import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface/90 p-6 shadow-[var(--shadow-surface)] backdrop-blur-sm sm:p-8",
        hoverable && "transition-transform duration-200 ease-out hover:-translate-y-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
