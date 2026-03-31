import type { Metadata } from "next";

import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Resume | Jonathan Hop",
  description:
    "8+ years of experience building production systems in fintech, banking, and enterprise environments. Full stack, distributed systems, and applied AI.",
};
import { SectionHeader } from "@/components/layout/section-header";
import { ExperienceTimeline } from "@/components/resume/experience-timeline";
import { ResumeHighlightCard } from "@/components/resume/resume-highlight-card";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { Card } from "@/components/ui/card";
import {
  certifications,
  educationEntries,
  engineeringTimeline,
  instructionTimeline,
  resumeHighlights,
  resumeSummary,
  selectedAchievements,
} from "@/lib/site-data";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { StaggerItem } from "@/components/motion/stagger-item";

const highlightAccents = ["tech", "warm", "creative", "white"] as const;

export default function ResumePage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14 lg:pt-18">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Resume"
            title="8 years of building systems that actually ship."
            description="From distributed fintech pipelines to mobile banking platforms, AI training programs, and bootcamp instruction — here's the full picture."
          />
        </ScrollReveal>
      </Section>

      <Section className="pt-0">
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {resumeHighlights.map((item, i) => (
            <StaggerItem key={item.label}>
              <ResumeHighlightCard
                accent={highlightAccents[i]}
                label={item.label}
                value={item.value}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section className="pt-0">
        <ScrollReveal>
          <ResumeSummary summary={resumeSummary} />
        </ScrollReveal>
      </Section>

      <Section className="pt-0">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">

            {/* Left column: Education, Certifications, Achievements */}
            <Card className="space-y-8">
              <div className="space-y-3">
                <div className="border-b border-border pb-2">
                  <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
                    Education
                  </h2>
                </div>
                <ul className="space-y-2">
                  {educationEntries.map((entry) => (
                    <li className="flex items-center gap-3" key={entry.degree}>
                      <span aria-hidden="true" className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent-blue" />
                      <span className="text-sm leading-7 text-text-secondary sm:text-base">
                        {entry.degree}
                        <span className="text-text-muted"> · {entry.institution}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="border-b border-border pb-2">
                  <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
                    Certifications
                  </h2>
                </div>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li className="flex items-center gap-3" key={cert.name}>
                      <span aria-hidden="true" className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent-blue" />
                      <span className="text-sm leading-7 text-text-secondary sm:text-base">
                        {cert.name}
                        <span className="text-text-muted"> · {cert.issuer}, {cert.year}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="border-b border-border pb-2">
                  <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
                    Selected achievements
                  </h2>
                </div>
                <ul className="space-y-3">
                  {selectedAchievements.map((item) => (
                    <li className="flex gap-3 text-sm leading-7 text-text-secondary sm:text-base" key={item}>
                      <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <ExperienceTimeline
              sections={[
                { label: "Software Development", items: engineeringTimeline },
                { label: "Technical Instruction", items: instructionTimeline },
              ]}
            />
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
