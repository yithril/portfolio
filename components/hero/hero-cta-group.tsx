import { Button } from "@/components/ui/button";

type HeroCTAGroupProps = {
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
};

export function HeroCTAGroup({ primary, secondary }: HeroCTAGroupProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button className="w-full sm:w-auto" href={primary.href} size="lg">
        {primary.label}
      </Button>
      <Button className="w-full sm:w-auto" href={secondary.href} size="lg" variant="secondary">
        {secondary.label}
      </Button>
    </div>
  );
}
