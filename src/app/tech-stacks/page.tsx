"use client";

import { cn } from "@/lib/utils";
import Float from "@/components/float";
import { techStacks } from "@/data/techStacks";

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
