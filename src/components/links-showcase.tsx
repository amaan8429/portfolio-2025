import { socialLinks } from "@/data/socialLinks";
import { cn } from "@/lib/utils";

// Brand color per platform — used for the hover glow so each tile is
// unmistakably that link.
const BRAND: Record<string, string> = {
  Instagram: "#E1306C",
  GitHub: "#ffffff",
  Twitter: "#ffffff",
  AurbitLabs: "#7CFC9B",
  LinkedIn: "#0A66C2",
  Discord: "#5865F2",
  Email: "#dddddd",
};

export function LinksShowcase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {socialLinks.map((link) => {
        const brand = BRAND[link.title] ?? "#ffffff";
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={
              {
                "--brand": brand,
                "--tint": `${brand}22`,
              } as React.CSSProperties
            }
            className={cn(
              "group relative flex min-h-[120px] flex-col justify-between overflow-hidden border border-border bg-card p-5 transition-all duration-200",
              "hover:-translate-y-0.5 hover:[border-color:var(--brand)] hover:[box-shadow:inset_0_0_0_100px_var(--tint)]",
              link.wide && "sm:col-span-2"
            )}
          >
            <span className="absolute right-4 top-4 text-muted-foreground transition-colors group-hover:text-foreground">
              ↗
            </span>
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
              {link.title}
            </span>
            <div>
              <div className="text-lg font-bold tracking-tight">
                {link.handle}
              </div>
              <div className="text-xs text-muted-foreground">{link.blurb}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
