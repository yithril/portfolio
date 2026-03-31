import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { IdentityPanelData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type IdentityPanelProps = {
  panel: IdentityPanelData;
};

const accentClasses = {
  tech: "border-accent-tech-border bg-accent-tech-soft",
  creative: "border-accent-creative-border bg-accent-creative-soft",
};

export function IdentityPanel({ panel }: IdentityPanelProps) {
  return (
    <Card className={cn("space-y-5 border", accentClasses[panel.accent])}>
      <div className="space-y-3">
        <Badge className="text-text-primary" variant={panel.accent}>
          {panel.accent === "tech" ? "AI systems" : "Creator / education"}
        </Badge>
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
            {panel.title}
          </h3>
          <p className="text-sm leading-7 text-text-secondary sm:text-base">{panel.summary}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {panel.highlights.map((highlight) => (
          <li className="flex items-start gap-3 text-sm leading-6 text-text-secondary" key={highlight}>
            <span
              aria-hidden="true"
              className={cn(
                "mt-2 h-2 w-2 rounded-full",
                panel.accent === "tech" ? "bg-accent-tech" : "bg-accent-creative",
              )}
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
