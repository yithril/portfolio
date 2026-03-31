import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section className={cn("relative isolate py-12 sm:py-16 lg:py-24", className)} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
