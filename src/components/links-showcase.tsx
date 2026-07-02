import { socialLinks } from "@/data/socialLinks";
import { cn } from "@/lib/utils";

export function LinksShowcase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group relative flex min-h-[120px] flex-col justify-between overflow-hidden border border-border bg-card p-5 transition-all duration-200",
            "hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40",
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
      ))}
    </div>
  );
}
