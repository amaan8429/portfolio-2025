"use client";

import { cn } from "@/lib/utils";
import Float from "@/components/float";

const techStacks = [
  { text: "Next.js", position: "top-[0%] left-[20%]" },
  { text: "React.js", position: "top-[20%] left-[80%]" },
  { text: "JavaScript", position: "top-[70%] left-[40%]" },
  { text: "Dart", position: "top-[80%] left-[30%]" },
  { text: "Ngnix", position: "top-[40%] left-[0%]" },
  { text: "AI", position: "top-[15%] left-[45%]" },
  { text: "TypeScript", position: "top-[65%] left-[85%]" },
  { text: "Tailwind CSS", position: "top-[85%] left-[15%]" },
  { text: "ShadcnUI", position: "top-[35%] left-[75%]" },
  { text: "Neon", position: "top-[75%] left-[55%]" },
  { text: "Drizzle", position: "top-[25%] left-[35%]" },
  { text: "zustand", position: "top-[45%] left-[25%]" },
  { text: "Prisma", position: "top-[55%] left-[65%]" },
  { text: "Python", position: "top-[90%] left-[45%]" },
  { text: "PostgreSQL", position: "top-[10%] left-[70%]" },
  { text: "MongoDB", position: "top-[60%] left-[10%]" },
  { text: "Redis", position: "top-[30%] left-[50%]" },
  { text: "Postman", position: "top-[95%] left-[60%]" },
  { text: "Posthog", position: "top-[5%] left-[90%]" },
  { text: "Vercel", position: "top-[82%] left-[75%]" },
  { text: "Upstash", position: "top-[28%] left-[15%]" },
  { text: "Firebase", position: "top-[67%] left-[5%]" },
  { text: "Supabase", position: "top-[92%] left-[25%]" },
  { text: "Solidity", position: "top-[28%] left-[95%]" },
  { text: "Hardhat", position: "top-[73%] left-[20%]" },
  { text: "Flutter", position: "top-[8%] left-[40%]" },
];

export default function TechStacks() {
  return (
    <div className="w-full h-full flex flex-col min-h-screen items-center justify-center bg-background relative">
      {techStacks.map((item, i) => (
        <Float
          key={i}
          timeOffset={i * 0.8}
          amplitude={[
            15 + Math.random() * 20,
            25 + Math.random() * 30,
            20 + Math.random() * 25,
          ]}
          rotationRange={[
            10 + Math.random() * 10,
            10 + Math.random() * 10,
            5 + Math.random() * 5,
          ]}
          speed={0.3 + Math.random() * 0.4}
          className={cn(
            "absolute text-lg flex sm:text-xl md:text-2xl font-light hover:underline cursor-pointer text-[#0015ff]",
            item.position
          )}
        >
          <p>{item.text}</p>
        </Float>
      ))}
    </div>
  );
}
