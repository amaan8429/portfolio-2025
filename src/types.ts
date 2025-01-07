import { z } from "zod";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  demo: string;
};

export type ActionResponse = {
  success: boolean;
  error?: string;
};

export const messageSchema = z
  .string()
  .min(1, "Message cannot be empty")
  .max(500, "Message is too long (max 500 characters)");
