import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  return <div className={cn("grid grid-cols-1 gap-6 lg:gap-8", className)}>{children}</div>;
}
