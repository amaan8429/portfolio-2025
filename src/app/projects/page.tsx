// pages/projects.tsx
"use client";

import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";

export default function Projects() {
  const titles = ["Project 1", "Project 2", "Project 3", "Project 4"];
  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    titles.forEach((_, index) => {
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
          Projects
        </h1>
      </header>

      <section className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 md:gap-10">
          {titles.map((title, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <ScrambleIn
                ref={(el) => {
                  scrambleRefs.current[index] = el;
                }}
                text={title}
                scrambleSpeed={25}
                scrambledLetterCount={5}
                autoStart={false}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                scrambledClassName="text-gray-400"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
