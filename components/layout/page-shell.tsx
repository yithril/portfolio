import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
