import { getProjectTone, type ProjectRecord } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { TagList } from "@/components/content/tag-list";
import { Section } from "@/components/layout/section";
import { EyebrowLabel } from "@/components/hero/eyebrow-label";

type ProjectHeroProps = {
  project: ProjectRecord;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const tone = getProjectTone(project);

  return (
    <Section className="pt-10 sm:pt-14 lg:pt-18">
      <div className="space-y-6">
        <EyebrowLabel>{project.category}</EyebrowLabel>
        <div className="space-y-4">
          {project.callout ? (
            <p className="text-sm font-medium text-text-muted">
              {project.calloutUrl ? (
                <a className="underline underline-offset-2 hover:opacity-70 transition-opacity" href={project.calloutUrl} rel="noopener noreferrer" target="_blank">
                  {project.callout}
                </a>
              ) : (
                project.callout
              )}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            {project.overview}
          </p>
        </div>
        <TagList tags={project.tags} tone={tone} />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.websiteUrl ? (
            <Button className="w-full sm:w-auto" href={project.websiteUrl}>
              Visit site
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button className="w-full sm:w-auto" href={project.demoUrl} variant="secondary">
              Watch demo
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button className="w-full sm:w-auto" href={project.githubUrl} variant="ghost">
              View GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
