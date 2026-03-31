import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "creative" | "warm";
  size?: "md" | "lg";
  className?: string;
  disabled?: boolean;
  download?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border text-sm font-semibold transition-transform duration-200 ease-out focus-visible:outline-none motion-safe:hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

const variantClasses = {
  primary:
    "border-accent-tech bg-accent-tech text-text-primary shadow-[var(--shadow-soft)] hover:bg-[#186680]",
  secondary:
    "border-border-strong bg-surface text-text-primary hover:border-accent-blue hover:bg-surface-soft",
  ghost: "border-transparent bg-transparent text-text-secondary hover:bg-surface-soft hover:text-text-primary",
  creative:
    "border-accent-creative bg-accent-creative text-background shadow-[var(--shadow-soft)] hover:bg-[#8fd46f]",
  warm: "border-accent-warm bg-accent-warm text-text-primary shadow-[var(--shadow-soft)] hover:bg-[#cf4824]",
};

const sizeClasses = {
  md: "min-h-12 px-5 py-3",
  lg: "min-h-14 px-6 py-3.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  download = false,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (disabled || !href) {
    return (
      <button className={classes} disabled type="button">
        {children}
      </button>
    );
  }

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isDownloadFile = download || /\.(pdf|zip|png|jpe?g|webp)$/i.test(href);

  if (isExternal || isDownloadFile) {
    return (
      <a
        className={classes}
        download={download || undefined}
        href={href}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal && !download ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
