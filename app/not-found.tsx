import { Section } from "@/components/layout/section";
import { EyebrowLabel } from "@/components/hero/eyebrow-label";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-xl space-y-6 text-center">
        <EyebrowLabel className="mx-auto">404</EyebrowLabel>
        <h1 className="font-heading text-4xl font-bold tracking-[-0.03em] text-text-primary sm:text-5xl">
          Page not found.
        </h1>
        <p className="text-base leading-7 text-text-secondary sm:text-lg">
          That page doesn't exist or may have moved. Head back to the homepage.
        </p>
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </div>
    </Section>
  );
}
