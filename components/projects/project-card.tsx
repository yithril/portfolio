import Link from "next/link";

import { ImageGallery } from "@/components/content/image-gallery";
import { TagList } from "@/components/content/tag-list";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProjectTone, type ProjectRecord } from "@/lib/site-data";

type ProjectCardProps = {
  project: ProjectRecord;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const tone = getProjectTone(project);
  const isCreative = project.group === "Creative & Educational Work";

  return (
    <Card className="flex h-full flex-col gap-5 transition-transform duration-200 ease-out motion-safe:hover:-translate-y-1">
      <ImageGallery compact items={project.imagePaths} title={project.title} />

      <div className="flex flex-1 flex-col gap-4">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
          {project.group}
        </span>

        <div className="space-y-2">
          <Link
            className="block font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary transition-colors hover:text-accent-tech"
            href={isCreative && project.websiteUrl ? project.websiteUrl : `/projects/${project.slug}`}
          >
            <h3 className="m-0">{project.title}</h3>
          </Link>
          <p className="text-sm leading-7 text-text-secondary sm:text-base">{project.summary}</p>
        </div>

        {project.callout ? (
          <p className="text-sm font-medium text-text-primary">
            {project.calloutUrl ? (
              <a className="underline underline-offset-2 hover:opacity-70 transition-opacity" href={project.calloutUrl} rel="noopener noreferrer" target="_blank">
                {project.callout}
              </a>
            ) : (
              project.callout
            )}
          </p>
        ) : null}

        <TagList tags={project.tags} tone={tone} />

        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {isCreative ? (
            project.websiteUrl ? (
              <Button className="w-full sm:w-auto" href={project.websiteUrl} variant="primary">
                Visit site
              </Button>
            ) : null
          ) : (
            <>
              <Button className="w-full sm:w-auto" href={`/projects/${project.slug}`} variant="primary">
                View project
              </Button>
              {project.demoUrl ? (
                <Button className="w-full sm:w-auto" href={project.demoUrl} variant="ghost">
                  Watch demo
                </Button>
              ) : null}
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
