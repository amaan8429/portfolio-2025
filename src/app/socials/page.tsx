import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { LinksShowcase } from "@/components/links-showcase";

export const metadata: Metadata = {
  title: "Socials — Amaan",
  description: "Find me on Instagram, GitHub, X, LinkedIn, AurbitLabs, and more.",
};

export default function SocialsPage() {
  return (
    <PageShell
      title="Socials"
      intro="Every link is a different side of me — pick a door."
    >
      <LinksShowcase />
    </PageShell>
  );
}
