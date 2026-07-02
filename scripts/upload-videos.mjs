// Upload every mp4 in public/videos to Vercel Blob and print the new URLs.
//
// Usage (needs BLOB_READ_WRITE_TOKEN in .env.local):
//   node --env-file=.env.local scripts/upload-videos.mjs
//
// Then paste the printed URLs into src/data/videos.ts.
import { put } from "@vercel/blob";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const dir = "public/videos";

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error(
    "Missing BLOB_READ_WRITE_TOKEN. Add it to .env.local (from your Vercel Blob store) and re-run."
  );
  process.exit(1);
}

const files = (await readdir(dir)).filter((f) => f.endsWith(".mp4"));
const result = {};

for (const file of files) {
  const data = await readFile(path.join(dir, file));
  const { url } = await put(`videos/${file}`, data, {
    access: "public",
    contentType: "video/mp4",
    addRandomSuffix: false,
  });
  const key = file.replace(/\.mp4$/, "");
  result[key] = url;
  console.log(`${key.padEnd(18)} ${url}`);
}

console.log("\n--- paste into src/data/videos.ts ---");
console.log(JSON.stringify(result, null, 2));
