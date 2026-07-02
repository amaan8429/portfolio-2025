import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Pill } from "@/components/bento-cell";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Amaan",
  description: "Full-stack apps, AI tools, and dev utilities I've built.",
};

export default function ProjectsPage() {
  const projects = projectsData
    .map((project, originalIndex) => ({ project, originalIndex }))
    .filter(({ project }) => project.hide === false);

  return (
    <PageShell
      title="Projects"
      intro="Full-stack apps, AI tools, and dev utilities — most live and in use."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map(({ project, originalIndex }) => (
          <Link
            key={originalIndex}
            href={`/projects/${originalIndex}`}
            className="group flex flex-col border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold">
                {project.title}
                {(project as { live?: boolean }).live === false && (
                  <span className="ml-2 align-middle text-xs font-normal text-muted-foreground">
                    · not live
                  </span>
                )}
              </h3>
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                ↗
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3">
              {project.techStack.slice(0, 5).map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
