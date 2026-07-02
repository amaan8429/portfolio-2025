import {
  BentoCell,
  BentoLabel,
  BentoStat,
  BentoSub,
  Pill,
} from "@/components/bento-cell";
import { stats } from "@/data/stats";
import { introReel } from "@/data/content";
import { projectsData } from "@/data/projects";
import { GithubContributions } from "@/components/github-contributions";
import Link from "next/link";

const cur8t = projectsData.find((p) => p.title === "cur8t");
const rotreels = projectsData.find((p) => p.title === "rotreels");
const cur8tIndex = projectsData.findIndex((p) => p.title === "cur8t");
const rotreelsIndex = projectsData.findIndex((p) => p.title === "rotreels");

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8">
      {/* Header */}
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
        <div>
          <h1 className="text-3xl font-bold leading-none tracking-tight sm:text-4xl md:text-5xl">
            Amaan
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:whitespace-nowrap">
            I like writing code. Full-stack engineer at a cool company right now.
          </p>
        </div>
        <span className="text-xs text-muted-foreground">@amaan8429</span>
      </header>

      {/* Bento board */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 [grid-auto-rows:minmax(168px,auto)]">
        {/* GitHub contributions — current year */}
        <GithubContributions username="amaan8429" />

        {/* cur8t flagship (2x1) */}
        <BentoCell
          href={`/projects/${cur8tIndex}`}
          className="bg-gradient-to-br from-accent/50 to-transparent sm:col-span-2"
        >
          <BentoLabel>Flagship build</BentoLabel>
          <div>
            <h3 className="mt-2 text-xl font-bold">cur8t</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {cur8t?.description}
            </p>
          </div>
          <div>
            <Pill>Next.js</Pill>
            <Pill>FastAPI</Pill>
            <Pill>AI</Pill>
            <Pill>Postgres</Pill>
          </div>
        </BentoCell>

        {/* rotreels flagship (2x1) */}
        <BentoCell
          href={`/projects/${rotreelsIndex}`}
          className="bg-gradient-to-br from-accent/50 to-transparent sm:col-span-2"
        >
          <BentoLabel>Flagship build</BentoLabel>
          <div>
            <h3 className="mt-2 text-xl font-bold">
              rotreels{" "}
              <span className="align-middle text-xs font-normal text-muted-foreground">
                · not live
              </span>
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {rotreels?.description}
            </p>
          </div>
          <div>
            <Pill>Remotion</Pill>
            <Pill>ffmpeg</Pill>
            <Pill>ElevenLabs</Pill>
            <Pill>BullMQ</Pill>
          </div>
        </BentoCell>

        {/* Intro — 2025 at a glance */}
        <div className="col-span-full border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            2025 at a glance
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The craziest year of my life — building, creating, and shipping.
            Everything below is the detail.
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Grew Instagram to 120K+ followers",
              "Shipped cur8t & rotreels",
              "Scaled AurbitLabs to $2.5K/mo",
              "Worked with Cluely, Emergent & Upsurge",
              "Built & managed a team of 5",
              "Started making videos for brands",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-muted-foreground">
                <span className="text-foreground">→</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={introReel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-fit border border-border px-4 py-2 text-sm transition-colors hover:bg-accent"
          >
            Watch the 2025 reel ↗
          </a>
        </div>

        {/* Instagram */}
        <BentoCell href="/create">
          <BentoLabel>Instagram</BentoLabel>
          <BentoStat>{stats.instagramFollowers}</BentoStat>
          <BentoSub>followers grown from zero</BentoSub>
        </BentoCell>

        {/* Agency */}
        <BentoCell href="/agency">
          <BentoLabel>Agency</BentoLabel>
          <BentoStat>{stats.agencyMRR}</BentoStat>
          <BentoSub>/mo · AurbitLabs · team of {stats.teamSize}</BentoSub>
        </BentoCell>

        {/* Brands */}
        <BentoCell href="/collabs" className="sm:col-span-2">
          <BentoLabel>Worked with</BentoLabel>
          <div className="mt-2 text-lg font-medium leading-snug">
            The coolest founders &amp; companies
          </div>
          <BentoSub>Cluely · Emergent · Upsurge Labs</BentoSub>
        </BentoCell>

        {/* Brand videos */}
        <BentoCell
          href="/brand-videos"
          className="bg-gradient-to-br from-accent/50 to-transparent sm:col-span-2"
        >
          <BentoLabel>Content</BentoLabel>
          <div className="mt-2 text-lg font-medium leading-snug">
            I record videos for brands
          </div>
          <BentoSub>Product videos on X</BentoSub>
        </BentoCell>

        {/* Writing */}
        <BentoCell href="/blogs">
          <BentoLabel>Writing</BentoLabel>
          <BentoStat>{stats.blogPosts}</BentoStat>
          <BentoSub>blog posts · Rust series</BentoSub>
        </BentoCell>

        {/* Team */}
        <BentoCell href="/agency">
          <BentoLabel>Team</BentoLabel>
          <BentoStat>{stats.teamSize}</BentoStat>
          <BentoSub>built &amp; managed</BentoSub>
        </BentoCell>
      </div>

      <Link
        href="/projects"
        className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        → See all projects
      </Link>
    </main>
  );
}
