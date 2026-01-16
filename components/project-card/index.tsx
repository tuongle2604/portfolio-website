"use client";

// import { useState } from "react";
// import { motion } from "motion/react";
// import type { ReactNode } from "react";
// import { cn } from "@/lib/utils";
// import { cva } from "class-variance-authority";
import { GridPattern, BlueprintPattern, RadialPattern } from "./patterns";
import { Project } from "@/lib/data";
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

interface ProjectCardProps {
  project: Project;
  variant: "radical" | "grid" | "blueprint";
}

export function ProjectCard({
  project,
  variant = "radical",
}: ProjectCardProps) {
  const patternComponents = {
    radical: RadialPattern,
    grid: GridPattern,
    blueprint: BlueprintPattern,
  };

  const PatternComponent = patternComponents[variant];

  return (
    <Card className="flex flex-col relative z-10 bg-black group overflow-hidden lg:py-7">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/8 left-0 w-full h-1/2 bg-linear-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" /> */}
      </div>

      <PatternComponent />

      <div className="relative z-10">
        <CardHeader className="lg:pb-4">
          <CardTitle className="text-xl lg:text-2xl">
            <h3>{project.name}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1">
          <p className="flex-1 mb-4 text-muted-foreground lg:mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
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
      </div>
    </Card>
  );
}
