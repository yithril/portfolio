import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { resumePdfHref } from "@/lib/site-data";

type ResumeSummaryProps = {
  summary: string;
};

export function ResumeSummary({ summary }: ResumeSummaryProps) {
  return (
    <Card className="space-y-5">
      <div className="space-y-3">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
          Summary
        </h2>
        <p className="text-base leading-8 text-text-secondary">{summary}</p>
      </div>
      <Button download href={resumePdfHref} variant="primary">
        Download Resume (PDF)
      </Button>
    </Card>
  );
}
