import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { collabs } from "@/data/collabs";

export const metadata: Metadata = {
  title: "Collabs — Amaan",
  description:
    "The coolest founders and companies I've worked with — Cluely, Emergent, and Upsurge Labs.",
};

export default function CollabsPage() {
  return (
    <PageShell
      title="Collabs"
      intro="Some of the coolest founders and companies I've worked with — remote and IRL."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {collabs.map((c) => {
          const inner = (
            <>
              <div className="flex items-center gap-3">
                {c.logo && (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                )}
                <h3 className="text-lg font-medium">{c.name}</h3>
              </div>
              {c.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              )}
            </>
          );

          return c.url ? (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40"
            >
              {inner}
            </a>
          ) : (
            <div key={c.name} className="border border-border bg-card p-5">
              {inner}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
