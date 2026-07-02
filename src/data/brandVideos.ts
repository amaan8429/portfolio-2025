// Twitter/X videos I've recorded for brands, self-hosted as landscape players.
import { videos } from "./videos";

export type BrandVideo = {
  brand: string;
  videoFile: string; // self-hosted mp4 (see videos.ts)
  tweetUrl: string; // original tweet, for the "Watch on X" link
  note?: string;
};

export const brandVideos: BrandVideo[] = [
  {
    brand: "Bhindi AI",
    videoFile: videos["bhindi-youtube"],
    tweetUrl: "https://x.com/amaan8429/status/1939169952419721681",
    note: "Tweeted about a YouTube video in 2 minutes using Bhindi AI.",
  },
  {
    brand: "Bhindi AI",
    videoFile: videos["bhindi-college"],
    tweetUrl: "https://x.com/amaan8429/status/1944611947812450688",
    note: "How Bhindi AI can make your college life easier.",
  },
  {
    brand: "Bhindi AI",
    videoFile: videos["bhindi-telegram"],
    tweetUrl: "https://x.com/amaan8429/status/1996114826884776253",
    note: "Trying the new Telegram agent on Bhindi AI.",
  },
  {
    brand: "Bhindi AI",
    videoFile: videos["bhindi-agents"],
    tweetUrl: "https://x.com/amaan8429/status/1950808717051503081",
    note: "Using Bhindi AI background agents to make life 10x easier.",
  },
  {
    brand: "Bhindi AI",
    videoFile: videos["bhindi-newagents"],
    tweetUrl: "https://x.com/amaan8429/status/1957695255999836512",
    note: "The new agents on Bhindi AI are game changers.",
  },
  {
    brand: "Bhindi AI",
    videoFile: videos["bhindi-delhi"],
    tweetUrl: "https://x.com/amaan8429/status/1969288778494742941",
    note: "Planning the Delhi trip + shopping with Bhindi AI.",
  },
];
