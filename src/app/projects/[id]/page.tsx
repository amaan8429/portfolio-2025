// app/projects/[id]/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectPage() {
  const params = useParams();
  const projectIndex = parseInt(params?.id as string);
  const project = projectsData[projectIndex];

  const sections = [
    { title: "Description", content: project?.description },
    { title: "Tech Stack", content: project?.techStack.join(", ") },
    { title: "Features", content: project?.features.join(", ") },
  ];

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    if (!project) return;

    sections.forEach((_, index) => {
      setTimeout(() => {
        scrambleRefs.current[index]?.start();
      }, index * 50);
    });
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      <header className="w-full p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center flex-1">
            {project.title}
          </h1>
        </div>
      </header>

      <section className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 md:gap-10">
          {sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <ScrambleIn
                ref={(el) => {
                  scrambleRefs.current[index] = el;
                }}
                text={section.title}
                scrambleSpeed={25}
                scrambledLetterCount={5}
                autoStart={false}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                scrambledClassName="text-gray-400"
              />
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}

          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              )}
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
