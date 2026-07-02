import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { BlogsArray } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs — Amaan",
  description: "Writing on Rust, DevOps, and web development.",
};

export default function BlogsPage() {
  return (
    <PageShell
      title="Blogs"
      intro="Writing on Rust, DevOps, and web development — mostly on Hashnode."
    >
      <div className="grid gap-3">
        {BlogsArray.map((blog) => (
          <a
            key={blog.url}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40"
          >
            <span className="font-medium">{blog.title}</span>
            <span className="text-muted-foreground transition-colors group-hover:text-foreground">
              ↗
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
