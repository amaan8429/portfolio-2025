// CREATE dimension — audience & content work.
// Drop real image/video URLs into `thumbnail` / `embedUrl` later; UI already supports them.

export type ContentItem = {
  title: string;
  description: string;
  metric?: string;
  url: string;
  thumbnail?: string; // optional image, shown when provided
  embedUrl?: string; // optional video embed, shown when provided
};

export const instagram = {
  handle: "@amaan.zip",
  followers: "120K+",
  url: "https://www.instagram.com/amaan.zip",
};

// The Instagram pages I built and grew (together 120K+ followers).
// Add `followers` once you have the per-page splits; tweak `description` to taste.
export const instagramPages: {
  handle: string;
  url: string;
  description: string;
  followers?: string;
}[] = [
  {
    handle: "@technerdpeter",
    url: "https://www.instagram.com/technerdpeter/",
    description: "Tech & developer content.",
  },
  {
    handle: "@interviewpeter",
    url: "https://www.instagram.com/interviewpeter/",
    description: "Interview & career content.",
  },
];

// The pinned "2025 at a glance" reel — used as the intro on the home page.
export const introReel = {
  url: "https://www.instagram.com/p/DTpK2kHkuHE/",
  embedUrl: "https://www.instagram.com/p/DTpK2kHkuHE/embed",
};

export const viralReel: ContentItem = {
  title: "My 2025 in one reel",
  description:
    "A quick look at the year — building, creating, and shipping, all in one reel.",
  url: introReel.url,
  embedUrl: introReel.embedUrl,
};

export const contentWork: ContentItem[] = [
  {
    title: "Face-cam videos",
    description:
      "Recorded face-cam videos for X and for brands — bought an iPhone and built a setup specifically to make better content.",
    metric: "X + Instagram",
    url: "https://x.com/amaan8429",
  },
  {
    title: "Brand page management",
    description:
      "Managed Instagram pages for brands — content, growth, and consistency handled end to end.",
    url: "https://www.instagram.com/amaan.8429",
  },
];
