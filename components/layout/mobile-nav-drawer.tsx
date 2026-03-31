"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { NavLinkList } from "./nav-link-list";

export function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const overlay = mounted
    ? createPortal(
        <div
          aria-hidden={!isOpen}
          className={cn(
            "fixed inset-0 z-[9999] lg:hidden",
            isOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          {/* Dimming backdrop */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-200",
              isOpen ? "opacity-100" : "opacity-0",
            )}
            onClick={() => setIsOpen(false)}
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          />

          {/* Drawer panel */}
          <aside
            aria-modal="true"
            className={cn(
              "absolute inset-y-0 right-0 flex flex-col gap-6 border-l border-border px-5 py-6 transition-transform duration-200 ease-out",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
            id="mobile-navigation"
            role="dialog"
            style={{
              width: "min(20rem, 85vw)",
              backgroundColor: "#121933",
              boxShadow: "0 -8px 48px rgba(0,0,0,0.6)",
            }}
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
              className="flex-col items-stretch gap-2"
              items={navigationItems}
              linkClassName="py-3 text-base min-h-[48px] flex items-center"
              onNavigate={() => setIsOpen(false)}
            />

            <div className="mt-auto">
              <Button className="w-full" href="/resume" variant="secondary">
                View resume
              </Button>
            </div>
          </aside>
        </div>,
        document.body,
      )
    : null;

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

      {overlay}
    </>
  );
}
