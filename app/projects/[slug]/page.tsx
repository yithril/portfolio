import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ImageGallery } from "@/components/content/image-gallery";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { RelatedProjects } from "@/components/projects/related-projects";
import { ProjectHero } from "@/components/projects/project-hero";
import { Card } from "@/components/ui/card";
import { allProjects, getProjectBySlug } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Jonathan Hop`,
    description: project.summary,
  };
}

function getYoutubeEmbedUrl(url: string): string | null {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (longMatch) return `https://www.youtube.com/embed/${longMatch[1]}`;
  return null;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const youtubeEmbedUrl = project.demoUrl ? getYoutubeEmbedUrl(project.demoUrl) : null;
  const hasImages = project.imagePaths.length > 0;

  return (
    <>
      {/* ── Hero: title, overview, tags, buttons ── */}
      <ProjectHero project={project} />

      {/* ── YouTube embed (if demo URL is a YouTube link) ── */}
      {youtubeEmbedUrl ? (
        <Section className="pt-0">
          <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-surface)]">
            <div className="aspect-video w-full">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                src={youtubeEmbedUrl}
                title={`${project.title} demo`}
              />
            </div>
          </div>
        </Section>
      ) : null}

      {/* ── Image gallery ── */}
      {hasImages ? (
        <Section className="pt-0">
          <Card>
            <ImageGallery items={project.imagePaths} title={project.title} />
          </Card>
        </Section>
      ) : null}

      {/* ── Summary + Problem ── */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Card className="space-y-4">
            <SectionHeader
              eyebrow="Summary"
              title="Project summary"
              description={project.summary}
            />
            <p className="text-sm leading-7 text-text-secondary sm:text-base">{project.overview}</p>
          </Card>

          <Card className="space-y-4">
            <SectionHeader
              eyebrow="Problem"
              title="What needed to be solved"
              description={project.problemIntro ?? project.summary}
            />
            <ul className="space-y-3">
              {project.problemPoints.map((item) => (
                <li className="flex gap-3 text-sm leading-7 text-text-secondary sm:text-base" key={item}>
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-tech" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* ── Approach + Tech stack ── */}
      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Card className="space-y-4">
            <SectionHeader
              eyebrow="Approach"
              title="How it was built"
              description="Key implementation decisions, system behavior, and workflow structure."
            />
            <ul className="space-y-3">
              {project.approachPoints.map((item) => (
                <li className="flex gap-3 text-sm leading-7 text-text-secondary sm:text-base" key={item}>
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-creative" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-4">
            <SectionHeader
              eyebrow="Tech stack"
              title="Tools and platform choices"
              description="Core technologies used in the project."
            />
            <ul className="grid grid-cols-1 gap-3">
              {project.stack.map((item) => (
                <li className="rounded-[20px] border border-border bg-surface-soft px-4 py-3 text-sm leading-7 text-text-secondary" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* ── Tradeoffs + Lessons ── */}
      <Section>
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Tradeoffs and lessons"
            title="What mattered during implementation"
            description="Challenges, tradeoffs, and takeaways from the project."
          />
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Card className="space-y-4">
              <h3 className="font-heading text-xl font-semibold text-text-primary">Challenges / Tradeoffs</h3>
              <ul className="space-y-3">
                {project.tradeoffs.map((item) => (
                  <li className="flex gap-3 text-sm leading-7 text-text-secondary sm:text-base" key={item}>
                    <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-warm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="space-y-4">
              <h3 className="font-heading text-xl font-semibold text-text-primary">Outcome / Lessons</h3>
              <ul className="space-y-3">
                {project.lessons.map((item) => (
                  <li className="flex gap-3 text-sm leading-7 text-text-secondary sm:text-base" key={item}>
                    <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-creative" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* ── Related projects ── */}
      <Section className="pt-0">
        <RelatedProjects projects={relatedProjects} />
      </Section>
    </>
  );
}
