import { Button } from "@/components/ui/button";
import { getProjectTone, type ProjectRecord } from "@/lib/site-data";
import { ImageGallery } from "@/components/content/image-gallery";
import { TagList } from "@/components/content/tag-list";
import { Card } from "@/components/ui/card";

type FeaturedProjectCardProps = {
  project: ProjectRecord;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const tone = getProjectTone(project);
  const isCreative = project.group === "Creative & Educational Work";

  return (
    <Card className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center" hoverable>
      <ImageGallery items={project.imagePaths} tall={isCreative} title={project.title} />

      <div className="min-w-0 space-y-5">
        <span className="text-xs uppercase tracking-[0.16em] text-text-muted">{project.category}</span>

        <div className="space-y-3">
          <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-base leading-7 text-text-secondary">{project.summary}</p>
          {project.callout ? <p className="text-sm font-medium text-text-primary">{project.callout}</p> : null}
        </div>

        <TagList tags={project.tags} tone={tone} />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              {project.websiteUrl ? (
                <Button className="w-full sm:w-auto" href={project.websiteUrl} variant="ghost">
                  Visit site
                </Button>
              ) : null}
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
