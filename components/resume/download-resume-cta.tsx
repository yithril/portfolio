import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { resumePdfHref } from "@/lib/site-data";

export function DownloadResumeCTA() {
  return (
    <Card className="space-y-4">
      <div className="space-y-2">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
          Download resume
        </h2>
        <p className="text-sm leading-7 text-text-secondary sm:text-base">
          Download the latest PDF version of the resume or view the web version on this page.
        </p>
      </div>
      <Button download href={resumePdfHref} variant="primary">
        Download PDF
      </Button>
    </Card>
  );
}
