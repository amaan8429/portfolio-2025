// app/projects/[id]/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import ScrambleIn, { ScrambleInHandle } from "@/components/scramble-in";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Turn a Twitter/X or YouTube link into an embeddable player.
function getVideoEmbed(url: string): { type: "youtube" | "twitter"; src: string } | null {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const id = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    if (id) return { type: "youtube", src: `https://www.youtube.com/embed/${id}?rel=0` };
  }
  if (url.includes("x.com") || url.includes("twitter.com")) {
    const id = url.match(/status\/(\d+)/)?.[1];
    if (id)
      return {
        type: "twitter",
        src: `https://platform.twitter.com/embed/Tweet.html?id=${id}&dnt=true`,
      };
  }
  return null;
}

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

  const videoFile = (project as { demoVideoFile?: string }).demoVideoFile;
  const embed =
    !videoFile && project.demoVideo ? getVideoEmbed(project.demoVideo) : null;
  const hasVideo = Boolean(videoFile || embed);
  const tweetLink =
    project.demoVideo && /(?:x|twitter)\.com/.test(project.demoVideo)
      ? project.demoVideo
      : null;
  const notLive = (project as { live?: boolean }).live === false;

  return (
    <>
      {/* Slim nav bar — keeps navigation out of the header */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6 md:px-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Amaan
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
          {notLive && (
            <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">
              · not live
            </span>
          )}
        </h1>

        {/* Stacked: video on top, details below */}
        <div className="space-y-8">
          {hasVideo && (
            <div className="space-y-2">
              <h2 className="text-lg font-medium sm:text-xl">Demo</h2>
              {videoFile ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  src={videoFile}
                  className="aspect-video w-full max-w-4xl border border-border bg-black"
                />
              ) : embed?.type === "youtube" ? (
                <div className="aspect-video w-full max-w-4xl border border-border">
                  <iframe
                    src={embed.src}
                    className="h-full w-full"
                    title={`${project.title} demo`}
                    allowFullScreen
                  />
                </div>
              ) : (
                <iframe
                  src={embed!.src}
                  className="mx-auto h-[600px] w-full max-w-md border border-border bg-white"
                  title={`${project.title} demo`}
                  scrolling="no"
                />
              )}
              {tweetLink && (
                <a
                  href={tweetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Watch on X ↗
                </a>
              )}
            </div>
          )}

          <div className="grid gap-6 sm:gap-8">
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
                  className="text-lg sm:text-xl md:text-2xl font-medium"
                  scrambledClassName="text-gray-400"
                />
                <p className="break-words text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-2 flex gap-4">
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
              {notLive ? (
                <span
                  className={cn(
                    "px-4 py-2 rounded-lg",
                    "border border-border text-muted-foreground"
                  )}
                >
                  Not live
                </span>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
