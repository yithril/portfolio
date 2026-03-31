import type { ProjectRecord } from "@/lib/site-data";
import { Grid } from "@/components/layout/grid";
import { ProjectCard } from "./project-card";

type ProjectGridProps = {
  projects: ProjectRecord[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <Grid className="md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </Grid>
  );
}
