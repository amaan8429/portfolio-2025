// pages/blogs.tsx
"use client";

import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";

export default function Blogs() {
  const BlogsArray = [
    {
      title: "Understanding the basics of React Hooks and how to use them",
      url: "https://www.google.com",
    },
    {
      title: "How to build a responsive website using Tailwind CSS",
      url: "https://www.google.com",
    },
    {
      title: "The benefits of using TypeScript in your projects",
      url: "https://www.google.com",
    },
    {
      title: "How to create a custom React hook",
      url: "https://www.google.com",
    },
  ];
  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    BlogsArray.forEach((_, index) => {
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
          Blogs
        </h1>
      </header>

      <section className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 md:gap-10">
          {BlogsArray.map((blog, index) => (
            <a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-200 group"
            >
              <div className="transform hover:scale-105 transition-transform duration-200">
                <ScrambleIn
                  ref={(el) => {
                    scrambleRefs.current[index] = el;
                  }}
                  text={blog.title}
                  scrambleSpeed={25}
                  scrambledLetterCount={5}
                  autoStart={false}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                  scrambledClassName="text-gray-400"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
