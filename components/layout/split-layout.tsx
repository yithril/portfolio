import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SplitLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function SplitLayout({ children, className }: SplitLayoutProps) {
  return <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8", className)}>{children}</div>;
}
