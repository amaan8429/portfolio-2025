import Link from "next/link";

/** Consistent nav bar + header + width for the dimension detail pages. */
export function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Slim nav bar — navigation lives here, not stacked above the title */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6 md:px-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Amaan
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-3 leading-relaxed text-muted-foreground">{intro}</p>
          )}
        </div>
        {children}
      </main>
    </>
  );
}
