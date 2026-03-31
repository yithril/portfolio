import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type AccentStyle = {
  badge: "tech" | "creative" | "warm" | "data";
  bullet: string;
  item: string;
};

type TechStackCardProps = {
  title: string;
  description: string;
  items: string[];
};

const accentStyles: Record<string, AccentStyle> = {
  Backend: {
    badge: "tech",
    bullet: "bg-accent-tech",
    item: "border-accent-tech-border/70 bg-[rgba(28,114,147,0.08)]",
  },
  Frontend: {
    badge: "creative",
    bullet: "bg-accent-creative",
    item: "border-accent-creative-border/70 bg-[rgba(156,227,125,0.08)]",
  },
  "Data & Systems": {
    badge: "data",
    bullet: "bg-accent-data",
    item: "border-accent-data-border/70 bg-[rgba(167,139,250,0.08)]",
  },
  "AI / Applied AI": {
    badge: "warm",
    bullet: "bg-accent-warm",
    item: "border-accent-warm/40 bg-[rgba(228,87,46,0.08)]",
  },
};

export function TechStackCard({ title, description, items }: TechStackCardProps) {
  const accent = accentStyles[title] ?? accentStyles.Backend;

  return (
    <Card className="h-full space-y-5 border-border-strong bg-transparent shadow-none" hoverable>
      <div className="space-y-2">
        <Badge className="w-fit text-xs font-semibold uppercase tracking-[0.14em] text-text-primary" variant={accent.badge}>
          {title}
        </Badge>
        <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary">
          {title}
        </h3>
        <p className="text-sm leading-7 text-text-secondary">{description}</p>
      </div>

      <ul className="grid grid-cols-1 gap-3 text-sm text-text-secondary">
        {items.map((item) => (
          <li className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${accent.item}`} key={item}>
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${accent.bullet}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
