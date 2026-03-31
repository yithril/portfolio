import { EyebrowLabel } from "@/components/hero/eyebrow-label";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", alignment, className)}>
      {eyebrow ? <EyebrowLabel variant="tech">{eyebrow}</EyebrowLabel> : null}
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-bold tracking-[-0.03em] text-text-primary sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-text-secondary sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
