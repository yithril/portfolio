import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
  variant?: "neutral" | "tech" | "creative" | "warm" | "data";
};

export function EyebrowLabel({ children, className, variant = "neutral" }: EyebrowLabelProps) {
  return (
    <Badge
      className={cn(
        "w-fit text-xs font-semibold tracking-[0.16em] uppercase",
        variant === "neutral" && "text-text-muted",
        className,
      )}
      variant={variant}
    >
      {children}
    </Badge>
  );
}
