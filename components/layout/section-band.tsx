import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionBandVariant =
  | "hero"
  | "neutral"
  | "tech"
  | "systems"
  | "creative"
  | "resume"
  | "philosophy";

type SectionBandProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
  innerClassName?: string;
  variant?: SectionBandVariant;
  blendTop?: boolean;
  blendBottom?: boolean;
};

const variantClasses: Record<SectionBandVariant, string> = {
  hero: "bg-band-hero",
  neutral: "bg-band-neutral",
  tech: "bg-band-tech",
  systems: "bg-band-systems",
  creative: "bg-band-creative",
  resume: "bg-band-resume",
  philosophy: "bg-band-philosophy",
};

export function SectionBand({
  children,
  className,
  contentClassName,
  id,
  innerClassName,
  variant = "neutral",
  blendTop = false,
  blendBottom = false,
}: SectionBandProps) {
  return (
    <section className={cn("relative isolate overflow-hidden py-12 sm:py-16 lg:py-24", variantClasses[variant], className)} id={id}>
      {blendTop ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/75 to-transparent"
        />
      ) : null}
      {blendBottom ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/65 to-transparent"
        />
      ) : null}
      <Container className={cn("relative z-10", contentClassName)}>
        <div className={innerClassName}>{children}</div>
      </Container>
    </section>
  );
}
