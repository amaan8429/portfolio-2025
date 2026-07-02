import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { BentoTile } from "@/components/bento-cell";
import { brandVideos } from "@/data/brandVideos";

export const metadata: Metadata = {
  title: "Videos for brands — Amaan",
  description: "Videos I've recorded for brands.",
};

export default function BrandVideosPage() {
  return (
    <PageShell
      title="I record videos for brands"
      intro="Product and face-cam videos I've made for brands on Twitter/X."
    >
      {brandVideos.length === 0 ? (
        <BentoTile className="items-start justify-center">
          <p className="leading-relaxed text-muted-foreground">
            Adding these soon.
          </p>
        </BentoTile>
      ) : (
        <div className="mx-auto grid max-w-3xl gap-4">
          {brandVideos.map((video) => (
            <div
              key={video.videoFile}
              className="flex flex-col border border-border bg-card p-4"
            >
              <video
                controls
                playsInline
                preload="metadata"
                src={video.videoFile}
                className="aspect-video w-full border border-border bg-black"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-medium">{video.brand}</span>
                <a
                  href={video.tweetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Watch on X ↗
                </a>
              </div>
              {video.note && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {video.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}
