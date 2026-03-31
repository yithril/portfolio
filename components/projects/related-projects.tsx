import type { ProjectRecord } from "@/lib/site-data";
import { ProjectGrid } from "./project-grid";

type RelatedProjectsProps = {
  projects: ProjectRecord[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-text-primary">
          Related projects
        </h2>
        <p className="text-base leading-7 text-text-secondary">
          More systems and applied AI work in the portfolio.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  );
}
