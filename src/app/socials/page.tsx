"use client";

import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";

export default function Socials() {
  const socialLinks = [
    {
      title: "GitHub",
      url: "https://github.com/amaan8429",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/amaan8429",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/amaan8429",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/amaan.8429",
    },
    {
      title: "Discord",
      url: "https://discord.com/users/amaan8429",
    },
    {
      title: "Email",
      url: "mailto:amaanrizvi73@gmail.com",
    },
  ];

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    socialLinks.forEach((_, index) => {
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
          Socials
        </h1>
      </header>

      <section className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 md:gap-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <ScrambleIn
                  ref={(el) => {
                    scrambleRefs.current[index] = el;
                  }}
                  text={social.title}
                  scrambleSpeed={25}
                  scrambledLetterCount={5}
                  autoStart={false}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium group-hover:text-primary"
                  scrambledClassName="text-gray-400"
                />
                <span className="text-sm text-gray-400 group-hover:text-primary">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
