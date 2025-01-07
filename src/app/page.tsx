"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";
import { titles } from "@/data/headings";

export default function Home() {
  const router = useRouter();

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);
  useEffect(() => {
    titles.forEach((_, index) => {
      const delay = index * 50;
      setTimeout(() => {
        scrambleRefs.current[index]?.start();
      }, delay);
    });
  }, []);

  const handleClick = (index: number) => {
    switch (index) {
      case 0:
        router.push("/simple");
        break;
      case 1:
        router.push("/about-me");
        break;
      case 2:
        router.push("/projects");
        break;
      case 3:
        router.push("/blogs");
        break;
      case 4:
        router.push("/socials");
        break;
      case 5:
        router.push("/tech-stacks");
        break;
      case 6:
        router.push("/reviews");
        break;
      case 7:
        window.open("https://drive.google.com/  ", "_blank");
        break;
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col">
      <header className="w-full p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Amaan&apos;s Portfolio
        </h1>
      </header>

      <section className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 md:gap-10">
          {titles.map((model, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="transform hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <ScrambleIn
                ref={(el) => {
                  scrambleRefs.current[index] = el;
                }}
                text={model}
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
