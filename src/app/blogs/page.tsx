// pages/blogs.tsx
"use client";

import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";

export default function Blogs() {
  const BlogsArray = [
    {
      title:
        "End-to-End DevOps with ESLint, Prettier, Husky, GitHub Actions, CI/CD, and Vercel",
      url: "https://hashnode.com/post/end-to-end-devops-with-eslint-prettier-husky-github-actions-cicd-and-vercel",
    },
    {
      title: "Git, Github CLI, and aliases",
      url: "https://hashnode.com/post/git-github-cli-and-aliases",
    },
    {
      title: "Exploring Mutability in Rust - Rust Series Part 5",
      url: "https://hashnode.com/post/exploring-mutability-in-rust-rust-series-part-5",
    },
    {
      title:
        "A Beginner's Guide to Memory Management in Rust - Rust Series Part 4",
      url: "https://hashnode.com/post/a-beginners-guide-to-memory-management-in-rust-rust-series-part-4",
    },
    {
      title: "The Simple stuff - Rust Series Part 3",
      url: "https://hashnode.com/post/the-simple-stuff-rust-series-part-3",
    },
    {
      title: "Setting up rust locally - Rust Series Part 2",
      url: "https://hashnode.com/post/setting-up-rust-locally-rust-series-part-2",
    },
    {
      title: "Why Rust and Why Not Node.js or Python? - Rust Series Part 1",
      url: "https://hashnode.com/post/why-rust-and-why-not-nodejs-or-python-rust-series-part-1",
    },
    {
      title: "Rust Series Kickoff - Part 0",
      url: "https://hashnode.com/post/rust-series-kickoff-part-0",
    },
    {
      title: "fetch API vs Axios",
      url: "https://hashnode.com/post/fetch-api-vs-axios",
    },
    {
      title: "OSI Model",
      url: "https://hashnode.com/post/osi-model",
    },
    {
      title: "Understanding CORS Errors and How to Address Them",
      url: "https://hashnode.com/post/understanding-cors-errors-and-how-to-address-them",
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
