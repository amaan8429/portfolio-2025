import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { socialLinks } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "Socials — Amaan",
  description: "Find me on GitHub, X, Instagram, LinkedIn, and more.",
};

export default function SocialsPage() {
  return (
    <PageShell title="Socials" intro="Find me around the internet.">
      <div className="grid gap-3 sm:grid-cols-2">
        {socialLinks.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40"
          >
            <span className="text-lg font-medium">{social.title}</span>
            <span className="text-muted-foreground transition-colors group-hover:text-foreground">
              →
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
