import { Surface } from "@/components/ui/surface";

type VideoFeatureProps = {
  title: string;
  body: string;
};

export function VideoFeature({ title, body }: VideoFeatureProps) {
  return (
    <Surface className="space-y-4">
      <div className="flex aspect-video items-center justify-center rounded-[20px] border border-border bg-background-elevated text-text-muted">
        Demo media
      </div>
      <div className="space-y-2">
        <h3 className="font-heading text-xl font-semibold text-text-primary">{title}</h3>
        <p className="text-sm leading-7 text-text-secondary">{body}</p>
      </div>
    </Surface>
  );
}
