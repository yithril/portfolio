"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { NavLinkList } from "./nav-link-list";

export function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors hover:bg-surface-soft lg:hidden"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span className="sr-only">Open menu</span>
        <div className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
        </div>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/70 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        aria-modal="true"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 border-l border-border bg-background-elevated px-5 py-6 shadow-[var(--shadow-surface)] transition-transform duration-200 ease-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        id="mobile-navigation"
        role="dialog"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-text-primary">Jonathan Hop</p>
            <p className="text-sm text-text-muted">Engineering, AI, and teaching</p>
          </div>
          <button
            aria-label="Close navigation menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>

        <NavLinkList
          className="flex-col items-stretch gap-1"
          items={navigationItems}
          onNavigate={() => setIsOpen(false)}
        />

        <div className="mt-auto">
          <Button className="w-full" href="/resume" variant="secondary">
            View resume
          </Button>
        </div>
      </aside>
    </>
  );
}
