import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { GridBeam } from "./project-card/GridBeam";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const patternVariants = ["radical", "grid", "blueprint"] as const;
  // const variants = ["grid", "topography", "blueprint"] as const;

  // function pickRandom(arr: typeof variants) {
  //   return arr[Math.floor(Math.random() * arr.length)];
  // }

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

        {/* Featured Projects */}
        {/* <div className="grid gap-6 mb-12 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <Card
              key={idx}
              className="flex flex-col transition-shadow hover:shadow-lg bg-black"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="flex-1 mb-4 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Other Projects */}
        {/* {otherProjects.length > 0 && (
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">Other Projects</h3>
            <div className="space-y-3">
              {otherProjects.map((project, idx) => (
                <Card key={idx} className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {project.github && (
                          <Button asChild variant="ghost" size="icon">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button asChild variant="ghost" size="icon">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
