import Link from "next/link";

import { navigationItems } from "@/lib/site-data";
import { Container } from "./container";
import { MobileNavDrawer } from "./mobile-nav-drawer";
import { NavLinkList } from "./nav-link-list";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4">
        <Link className="flex flex-col" href="/">
          <span className="font-heading text-lg font-semibold tracking-[-0.03em] text-text-primary">
            Jonathan Hop
          </span>
          <span className="text-xs text-text-muted">Senior Full Stack Engineer</span>
        </Link>

        <NavLinkList className="hidden gap-1 lg:flex" items={navigationItems} />

        <MobileNavDrawer />
      </Container>
    </header>
  );
}
