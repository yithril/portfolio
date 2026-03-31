"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type NavLinkListProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinkList({ items, className, linkClassName, onNavigate }: NavLinkListProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("flex items-center gap-2", className)}>
      {items.map((item) => {
        const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto:");
        const isActive = !isExternal && pathname === item.href;

        const linkClass = cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none",
          isActive
            ? "bg-surface text-text-primary"
            : "text-text-secondary hover:text-text-primary",
          linkClassName,
        );

        if (isExternal) {
          return (
            <a
              className={linkClass}
              href={item.href}
              key={item.href}
              onClick={onNavigate}
              rel="noreferrer"
            >
              {item.label}
            </a>
          );
        }
        return (
          <Link
            className={linkClass}
            href={item.href}
            key={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
