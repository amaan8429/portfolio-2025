"use server";

import { cookies } from "next/headers";
import { kv } from "@vercel/kv";

export async function leaveMessage(message: string) {
  const cookieStore = cookies();
  const hasSubmitted = (await cookieStore).get("has_submitted_message");

  if (hasSubmitted) {
    return { success: false, error: "You have already submitted a message." };
  }

  if (!message || message.trim().length === 0) {
    return { success: false, error: "Message cannot be empty." };
  }

  try {
    // Store the message in Vercel KV (you can replace this with your preferred database)
    await kv.lpush("anonymous_messages", message);

    // Set a cookie to prevent multiple submissions
    (await cookieStore).set("has_submitted_message", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return { success: true };
  } catch (error) {
    console.error("Error storing message:", error);
    return {
      success: false,
      error: "Failed to store message. Please try again later.",
    };
  }
}
