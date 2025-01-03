// pages/tech-stacks/[id].tsx
"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";

const techStacksData = {
  frontend: {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    experience: "3 years",
    description:
      "Modern frontend development with focus on performance and user experience",
    projects: ["Project 1", "Project 2", "Project 3"],
  },
  // Add more tech stacks as needed
};

export default function TechStackPage() {
  const params = useParams();
  const stackId = params?.id as string;
  const stack = techStacksData[stackId as keyof typeof techStacksData];

  const sections = [
    { title: "Technologies", content: stack?.technologies.join(", ") },
    { title: "Experience", content: stack?.experience },
    { title: "Description", content: stack?.description },
    { title: "Related Projects", content: stack?.projects.join(", ") },
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
          {stack?.title}
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
        </div>
      </section>
    </main>
  );
}
