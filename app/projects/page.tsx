import type { Metadata } from "next";

import { ProjectGrid } from "@/components/projects/project-grid";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { Divider } from "@/components/ui/divider";
import { creativeProjects, technicalProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects | Jonathan Hop",
  description:
    "Systems, platforms, and applied AI work — education platforms, agent workflows, conversational AI, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="pt-6 sm:pt-8 lg:pt-12">
        <SectionHeader
          eyebrow="Projects index"
          title="Systems, platforms, and applied AI work."
          description="Technical systems and creative projects across engineering, education, and storytelling."
        />
      </Section>

      <Section className="pt-0">
        <Stack className="gap-10">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
              Technical work
            </h2>
            <p className="text-sm leading-7 text-text-secondary">
              Education platforms, agent workflows, conversational AI, and applied AI systems.
            </p>
          </div>
          <ProjectGrid projects={technicalProjects} />
        </Stack>
      </Section>

      <Section>
        <Divider />
      </Section>

      <Section className="pt-0">
        <Stack className="gap-10">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
              Creative & educational work
            </h2>
            <p className="text-sm leading-7 text-text-secondary">
              Long-term creator projects — a comic series and a structured book series on learning Go.
            </p>
          </div>
          <ProjectGrid projects={creativeProjects} />
        </Stack>
      </Section>
    </>
  );
}
