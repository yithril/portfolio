import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type IconButtonProps = {
  href?: string;
  label: string;
  icon: ReactNode;
};

export function IconButton({ href, label, icon }: IconButtonProps) {
  return (
    <Button className="min-w-12 px-4" href={href} variant="ghost">
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </Button>
  );
}
