import { DualIdentityHero } from "@/components/hero/dual-identity-hero";
import { SectionBand } from "@/components/layout/section-band";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhilosophyCard } from "@/components/content/philosophy-card";
import { TechStackCard } from "@/components/content/tech-stack-card";
import {
  creativeProjects,
  featuredProjects,
  philosophyCards,
  resumeHighlights,
  selectedAchievements,
  techStackGroups,
} from "@/lib/site-data";
import { ResumeHighlightCard } from "@/components/resume/resume-highlight-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { StaggerItem } from "@/components/motion/stagger-item";

const highlightAccents = ["tech", "warm", "creative", "white"] as const;

export default function Home() {
  return (
    <>
      <SectionBand className="!pt-10 sm:!pt-14 lg:!pt-20" id="home" variant="hero">
        <DualIdentityHero />
      </SectionBand>

      <SectionBand id="stack" variant="tech">
        <ScrollReveal>
          <Stack className="gap-8">
            <SectionHeader
              eyebrow="Core stack"
              title="Core tech stack."
              description="Backend, frontend, systems, and applied AI capabilities organized for fast scanning."
            />
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {techStackGroups.map((group) => (
                <StaggerItem key={group.title}>
                  <TechStackCard
                    description={group.description}
                    items={group.items}
                    title={group.title}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Stack>
        </ScrollReveal>
      </SectionBand>

      <SectionBand id="featured-projects" variant="systems">
        <ScrollReveal>
          <Stack className="gap-8">
            <SectionHeader
              eyebrow="Featured systems"
              title="Systems across learning platforms, agent workflows, and applied AI."
              description="Selected projects spanning education platforms, AI systems, and production-minded experiments."
            />
            <StaggerContainer className="flex flex-col gap-6">
              {featuredProjects.map((project) => (
                <StaggerItem key={project.slug}>
                  <FeaturedProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <Button className="w-full sm:w-auto" href="/projects" variant="secondary">
              View all projects
            </Button>
          </Stack>
        </ScrollReveal>
      </SectionBand>

      <SectionBand id="creative-work" variant="creative">
        <ScrollReveal>
          <Stack className="gap-8">
            <SectionHeader
              eyebrow="Creative & educational work"
              title="Creative works shaped by storytelling and imagination"
              description="An outlet for an active imagination, these works reflect interest in strategy games, and world cultures."
            />
            <StaggerContainer className="flex flex-col gap-6">
              {creativeProjects.map((project) => (
                <StaggerItem key={project.slug}>
                  <FeaturedProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Stack>
        </ScrollReveal>
      </SectionBand>

      <SectionBand id="resume-snapshot" variant="resume">
        <ScrollReveal>
          <Stack className="gap-8">
            <SectionHeader
              eyebrow="Resume snapshot"
              title="Experience and impact at a glance."
              description="Selected highlights from fintech, enterprise systems, AI work, and technical instruction."
            />
            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
              {resumeHighlights.map((item, i) => (
                <StaggerItem key={item.label}>
                  <ResumeHighlightCard accent={highlightAccents[i]} label={item.label} value={item.value} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal delay={0.1}>
              <Card className="space-y-4">
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
                  Selected achievements
                </h3>
                <StaggerContainer className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {selectedAchievements.map((item) => (
                    <StaggerItem key={item}>
                      <div className="rounded-[20px] border border-border bg-surface-soft px-4 py-4 text-sm leading-7 text-text-secondary sm:text-base">
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </Card>
            </ScrollReveal>
          </Stack>
        </ScrollReveal>
      </SectionBand>

      <SectionBand id="philosophy" variant="philosophy">
        <ScrollReveal>
          <Stack className="gap-6">
            <SectionHeader
              eyebrow="Philosophy"
              title="A practical point of view on AI, systems, and communication."
              description="AI can make decisions, but it should never be allowed to run wild."
            />
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {philosophyCards.map((card) => (
                <StaggerItem key={card.title}>
                  <PhilosophyCard body={card.body} title={card.title} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Stack>
        </ScrollReveal>
      </SectionBand>
    </>
  );
}
