import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function Surface({ children, className }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface-soft p-5 backdrop-blur-sm sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
