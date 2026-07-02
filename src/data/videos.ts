// Central registry of self-hosted video URLs.
//
// Dev: served locally from /public/videos (gitignored).
// Prod: replace each value with its Vercel Blob URL after running the upload
//       script (scripts/upload-videos.mjs). This is the ONLY file to change.
const BLOB = "https://hno4ktwrhvsyz7zu.public.blob.vercel-storage.com/videos";

export const videos = {
  cur8t: `${BLOB}/cur8t.mp4`,
  rotreels: `${BLOB}/rotreels.mp4`,
  "bhindi-youtube": `${BLOB}/bhindi-youtube.mp4`,
  "bhindi-college": `${BLOB}/bhindi-college.mp4`,
  "bhindi-telegram": `${BLOB}/bhindi-telegram.mp4`,
  "bhindi-agents": `${BLOB}/bhindi-agents.mp4`,
  "bhindi-newagents": `${BLOB}/bhindi-newagents.mp4`,
  "bhindi-delhi": `${BLOB}/bhindi-delhi.mp4`,
} as const;
