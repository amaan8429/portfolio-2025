"use server";

import { ActionResponse, messageSchema } from "@/types";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function leaveMessage(message: string): Promise<ActionResponse> {
  try {
    const validatedMessage = messageSchema.safeParse(message);
    if (!validatedMessage.success) {
      return {
        success: false,
        error: validatedMessage.error.errors[0].message,
      };
    }

    const timestamp = new Date().toISOString();

    const messageData = {
      content: message,
      timestamp,
    };

    await redis.lpush("messages", messageData);

    await redis.ltrim("messages", 0, 999);
    const ip = (await headers()).get("x-forwarded-for") || "unknown";
    const rateLimitKey = `ratelimit:message:${ip}`;
    const hasRecentMessage = await redis.get(rateLimitKey);
    if (hasRecentMessage) {
      return {
        success: false,
        error: "Please wait a few minutes before sending another message",
      };
    }
    await redis.set(rateLimitKey, "1", { ex: 300 });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error saving message:", error);
    return {
      success: false,
      error: "Failed to save message. Please try again later.",
    };
  }
}
