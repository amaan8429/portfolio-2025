import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { instagram, instagramPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Create — Amaan",
  description:
    "The Instagram pages I built and grew to 120K+ followers, plus face-cam and brand content work.",
};

export default function CreatePage() {
  return (
    <PageShell
      title="Create"
      intro={`Content & audience. I built and grew Instagram pages to ${instagram.followers} followers combined, and I make face-cam videos for X and for brands.`}
    >
      {/* Pages I built */}
      {/* Main personal account */}
      <a
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-10 flex items-center justify-between gap-4 border border-border bg-gradient-to-br from-accent/50 to-transparent p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/40"
      >
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            My main account
          </div>
          <div className="mt-1 text-lg font-medium">{instagram.handle}</div>
        </div>
        <span className="text-muted-foreground transition-colors group-hover:text-foreground">
          ↗
        </span>
      </a>

      <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
        Pages I built
      </h2>
      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        {instagramPages.map((page) => (
          <a
            key={page.handle}
            href={page.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-medium">{page.handle}</h3>
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                ↗
              </span>
            </div>
            {page.followers && (
              <div className="mt-1 text-sm font-medium text-emerald-500">
                {page.followers} followers
              </div>
            )}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {page.description}
            </p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
