import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { StaggerItem } from "@/components/motion/stagger-item";
import { cn } from "@/lib/utils";

type TimelineItem = {
  title: string;
  period: string;
  body: string;
  tags?: string[];
};

type TimelineSection = {
  label: string;
  items: TimelineItem[];
};

type ExperienceTimelineProps = {
  sections: TimelineSection[];
};

export function ExperienceTimeline({ sections }: ExperienceTimelineProps) {
  const allSectionsLast = sections.length - 1;

  return (
    <Card className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
          Experience timeline
        </h2>
        <p className="text-sm leading-7 text-text-secondary sm:text-base">
          A quick scan of engineering roles, delivery scope, and technical instruction work.
        </p>
      </div>

      <StaggerContainer className="relative">
        {sections.map((section, sectionIndex) => {
          const isLastSection = sectionIndex === allSectionsLast;

          return (
            <div key={section.label}>
              {/* Section header node */}
              <StaggerItem>
                <div className="flex gap-5 pb-5">
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-data shadow-[0_0_10px_2px_rgba(167,139,250,0.3)]" />
                    <div className="mt-2 w-px flex-1 bg-border" />
                  </div>
                  <div className="flex h-5 items-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent-data">
                      {section.label}
                    </span>
                  </div>
                </div>
              </StaggerItem>

              {/* Section items */}
              {section.items.map((item, itemIndex) => {
                const isCurrent = item.period.includes("Present");
                const separatorIdx = item.title.indexOf(" · ");
                const role = separatorIdx >= 0 ? item.title.slice(0, separatorIdx) : item.title;
                const company = separatorIdx >= 0 ? item.title.slice(separatorIdx + 3) : null;
                const isLastItemInSection = itemIndex === section.items.length - 1;
                const isVeryLast = isLastSection && isLastItemInSection;

                return (
                  <StaggerItem key={`${item.title}-${item.period}`}>
                    <div className="flex gap-5">
                      <div className="relative flex flex-col items-center">
                        <div
                          className={cn(
                            "relative z-10 mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-surface/0",
                            isCurrent
                              ? "bg-accent-tech ring-accent-tech/30 shadow-[0_0_8px_3px_rgba(28,114,147,0.35)]"
                              : "bg-border-strong ring-transparent",
                          )}
                        />
                        {!isVeryLast && (
                          <div className="mt-2 w-px flex-1 bg-border" />
                        )}
                      </div>

                      <div className={cn("min-w-0 space-y-2", !isVeryLast && "pb-8")}>
                        <div className="space-y-0.5">
                          <h3 className="font-heading text-base font-bold leading-snug text-text-primary sm:text-lg">
                            {role}
                          </h3>
                          {company && (
                            <p className="text-sm font-medium text-accent-tech">{company}</p>
                          )}
                          <p className="text-xs font-medium tracking-wide text-text-muted">{item.period}</p>
                        </div>
                        <p className="text-sm leading-7 text-text-secondary">{item.body}</p>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="tech" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}

              {/* Gap between sections */}
              {!isLastSection && <div className="h-2" />}
            </div>
          );
        })}
      </StaggerContainer>
    </Card>
  );
}
