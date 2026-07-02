import Link from "next/link";
import { cn } from "@/lib/utils";

type BentoCellProps = {
  href: string;
  /** internal route (Link) vs external url (new tab) */
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * A single tile in the bento board. Handles the shared frame, hover, and
 * internal-vs-external linking. Grid spans are passed in via `className`
 * (e.g. "sm:col-span-2 sm:row-span-2").
 */
export function BentoCell({
  href,
  external = false,
  className,
  children,
}: BentoCellProps) {
  const shared = cn(
    "group relative flex flex-col justify-between overflow-hidden",
    "border border-border bg-card p-5 min-h-[168px]",
    "transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/40",
    className
  );

  const arrow = (
    <span className="absolute right-4 top-4 text-muted-foreground transition-colors group-hover:text-foreground">
      ↗
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={shared}
      >
        {arrow}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={shared}>
      {arrow}
      {children}
    </Link>
  );
}

/** A static (non-link) tile that matches the bento frame. For info/stat tiles. */
export function BentoTile({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between overflow-hidden border border-border bg-card p-5 min-h-[140px]",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Small uppercase label at the top of a tile. */
export function BentoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  );
}

/** Large headline number. */
export function BentoStat({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-4xl font-bold leading-none tracking-tight sm:text-[42px]">
      {children}
    </div>
  );
}

/** Muted supporting line. */
export function BentoSub({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}

/** Small bordered chip (tech tags, actions). */
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-1 mt-1 inline-block border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}
