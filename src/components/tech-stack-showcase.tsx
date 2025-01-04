"use client";

import { useState } from "react";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Vercel", icon: "▲" },
  { name: "shadcn/ui", icon: "🎨" },
];

export function TechStackShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-accent">
          <Code className="h-5 w-5" />
          <span className="sr-only">Tech Stack</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-foreground">Our Tech Stack</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-x-2 p-2 bg-accent rounded-md"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm text-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
