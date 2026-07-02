import type { Metadata } from "next";
import {
  BentoCell,
  BentoLabel,
  BentoStat,
  BentoSub,
  BentoTile,
  Pill,
} from "@/components/bento-cell";
import { PageShell } from "@/components/page-shell";
import { agency } from "@/data/agency";
import { instagramPages } from "@/data/content";
import { collabs } from "@/data/collabs";

export const metadata: Metadata = {
  title: "Agency — Amaan",
  description:
    "AurbitLabs — a small content agency I built and scaled. The pages we've grown and the brands I've worked with.",
};

export default function AgencyPage() {
  return (
    <PageShell title={agency.name} intro={agency.tagline}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 [grid-auto-rows:minmax(140px,auto)]">
        {/* Honest note — wide */}
        <BentoTile className="justify-center bg-gradient-to-br from-accent/50 to-transparent sm:col-span-2">
          <BentoLabel>The honest version</BentoLabel>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {agency.note}
          </p>
        </BentoTile>

        {/* Stat tiles */}
        <BentoTile>
          <BentoLabel>Revenue</BentoLabel>
          <BentoStat>$2.5K</BentoStat>
          <BentoSub>/mo, scaled from zero</BentoSub>
        </BentoTile>
        <BentoTile>
          <BentoLabel>Team</BentoLabel>
          <BentoStat>5</BentoStat>
          <BentoSub>built &amp; managed</BentoSub>
        </BentoTile>

        {/* Pages we've grown */}
        {instagramPages.map((page) => (
          <BentoCell key={page.handle} href={page.url} external>
            <BentoLabel>Page we grew</BentoLabel>
            <div>
              <h3 className="mt-2 text-lg font-medium">{page.handle}</h3>
              <BentoSub>{page.description}</BentoSub>
            </div>
            {page.followers && <Pill>{page.followers} followers</Pill>}
          </BentoCell>
        ))}

        {/* Services — wide */}
        <BentoTile className="sm:col-span-2">
          <BentoLabel>What we do</BentoLabel>
          <div className="mt-2 flex flex-wrap gap-2">
            {agency.services.map((s) => (
              <span
                key={s}
                className="border border-border px-2.5 py-1 text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </BentoTile>

        {/* Brands worked with — wide */}
        <BentoTile className="sm:col-span-2">
          <BentoLabel>Brands &amp; teams I&apos;ve worked with</BentoLabel>
          <div className="mt-3 flex flex-wrap gap-2">
            {collabs.map((c) =>
              c.url ? (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                >
                  {c.name}
                </a>
              ) : (
                <span
                  key={c.name}
                  className="border border-border px-3 py-1.5 text-sm"
                >
                  {c.name}
                </span>
              )
            )}
          </div>
        </BentoTile>
      </div>

      {agency.url && (
        <a
          href={agency.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border border-border px-4 py-2 text-sm transition-colors hover:bg-accent"
        >
          Visit {agency.name} →
        </a>
      )}
    </PageShell>
  );
}
