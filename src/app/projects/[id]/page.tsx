// pages/projects/[id].tsx
"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";

const projectsData = {
  project1: {
    title: "Project 1",
    description: "A detailed description of project 1",
    technologies: ["React", "Next.js", "TypeScript"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com/yourusername/project1",
    demo: "https://demo-project1.com",
  },
  // Add more projects as needed
};

export default function ProjectPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];

  const sections = [
    { title: "Description", content: project?.description },
    { title: "Technologies", content: project?.technologies.join(", ") },
    { title: "Features", content: project?.features.join(", ") },
  ];

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    sections.forEach((_, index) => {
      const delay = index * 50;
      setTimeout(() => {
        scrambleRefs.current[index]?.start();
      }, delay);
    });
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <header className="w-full p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          {project?.title}
        </h1>
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
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90"
            >
              GitHub
            </a>
            <a
              href={project?.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
