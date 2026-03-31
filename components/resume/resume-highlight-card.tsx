import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AccentVariant = "tech" | "creative" | "warm" | "white";

type ResumeHighlightCardProps = {
  value: string;
  label: string;
  accent?: AccentVariant;
};

const accentConfig: Record<AccentVariant, { bar: string; value: string }> = {
  tech: { bar: "bg-accent-tech", value: "text-accent-tech" },
  creative: { bar: "bg-accent-creative", value: "text-accent-creative" },
  warm: { bar: "bg-accent-warm", value: "text-accent-warm" },
  white: { bar: "bg-text-primary/30", value: "text-text-primary" },
};

export function ResumeHighlightCard({ value, label, accent }: ResumeHighlightCardProps) {
  const styles = accent ? accentConfig[accent] : null;

  return (
    <Card className="relative overflow-hidden space-y-2" hoverable>
      {styles && (
        <div
          aria-hidden="true"
          className={cn("absolute inset-x-0 top-0 h-0.5", styles.bar)}
        />
      )}
      <p
        className={cn(
          "font-heading text-3xl font-bold tracking-[-0.04em]",
          styles ? styles.value : "text-text-primary",
        )}
      >
        {value}
      </p>
      <p className="text-sm leading-6 text-text-secondary">{label}</p>
    </Card>
  );
}
