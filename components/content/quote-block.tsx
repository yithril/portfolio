import { Surface } from "@/components/ui/surface";

type QuoteBlockProps = {
  quote: string;
  source: string;
};

export function QuoteBlock({ quote, source }: QuoteBlockProps) {
  return (
    <Surface className="space-y-4">
      <p className="font-heading text-2xl leading-tight tracking-[-0.03em] text-text-primary">
        “{quote}”
      </p>
      <p className="text-sm text-text-muted">{source}</p>
    </Surface>
  );
}
