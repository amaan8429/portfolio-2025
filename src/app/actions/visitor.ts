"use server";

import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const THROTTLE_DURATION = 5 * 60;

export async function incrementVisitorCount(): Promise<number> {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "unknown";

    const lastVisitKey = `last_visit:${ip}`;
    const lastVisitTime = await redis.get(lastVisitKey);
    const currentTime = Math.floor(Date.now() / 1000);

    if (lastVisitTime) {
      const timeSinceLastVisit = currentTime - Number(lastVisitTime);
      if (timeSinceLastVisit < THROTTLE_DURATION) {
        const currentCount = await redis.get("visitor_count");
        return currentCount as number;
      }
    }

    // Update last visit time
    await redis.set(lastVisitKey, currentTime, {
      ex: THROTTLE_DURATION,
    });

    // Increment the counter
    const count = await redis.incr("visitor_count");
    if (typeof count !== "number") {
      return 0;
    }
    return count;
  } catch (error) {
    console.error("Error handling visitor count:", error);
    return 0;
  }
}
