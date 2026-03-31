import { Card } from "@/components/ui/card";

type ArchitectureDiagramFrameProps = {
  layers: string[];
};

export function ArchitectureDiagramFrame({ layers }: ArchitectureDiagramFrameProps) {
  return (
    <Card className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-heading text-xl font-semibold text-text-primary">Architecture snapshot</h3>
        <p className="text-sm leading-7 text-text-secondary">
          Structured layers for explaining system flow, orchestration, and technical boundaries.
        </p>
      </div>
      <div className="space-y-3">
        {layers.map((layer) => (
          <div className="rounded-2xl border border-border bg-surface-soft px-4 py-3 text-sm text-text-secondary" key={layer}>
            {layer}
          </div>
        ))}
      </div>
    </Card>
  );
}
