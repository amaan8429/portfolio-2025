// Current-year GitHub contribution graph ("green boxes").
// Fetches from a public contributions API (no token needed) and renders the
// classic weekday grid, styled to sit on the dark board.

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = {
  total: Record<string, number>;
  contributions: Day[];
};

const LEVEL_CLASS: Record<number, string> = {
  0: "bg-muted",
  1: "bg-[#0e4429]",
  2: "bg-[#006d32]",
  3: "bg-[#26a641]",
  4: "bg-[#39d353]",
};

export async function GithubContributions({
  username = "amaan8429",
}: {
  username?: string;
}) {
  const year = new Date().getFullYear();

  let data: ApiResponse | null = null;
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) data = await res.json();
  } catch {
    data = null;
  }

  if (!data || !data.contributions?.length) return null;

  const days = data.contributions;
  const total = data.total?.[String(year)] ?? 0;

  // Pad the front so the first day lands on its correct weekday row.
  const firstWeekday = new Date(days[0].date + "T00:00:00").getDay();
  const cells: (Day | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...days,
  ];

  return (
    <div className="col-span-full border border-border bg-card p-5 sm:p-6">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
          GitHub · {year}
        </h2>
        <span className="text-sm text-muted-foreground">
          {total.toLocaleString()} contributions
        </span>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
          {cells.map((cell, i) =>
            cell ? (
              <div
                key={cell.date}
                title={`${cell.count} on ${cell.date}`}
                className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_CLASS[cell.level]}`}
              />
            ) : (
              <div key={`pad-${i}`} className="h-[11px] w-[11px]" />
            )
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span
            key={l}
            className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_CLASS[l]}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
