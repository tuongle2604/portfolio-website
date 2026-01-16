import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const patternVariants = ["radical", "grid", "blueprint"] as const;

  return (
    <section
      id="projects"
      className="py-12 px-4 lg:py-24 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl text-foreground">
          Projects
        </h2>

        <div className="grid gap-6 mb-12 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              variant={patternVariants[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
