"use client";

import { useState } from "react";
import { Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const shortcuts = [
  { key: "Ctrl+K", action: "Open search" },
  { key: "Ctrl+D", action: "Toggle dark mode" },
  { key: "Ctrl+H", action: "Go to home" },
  { key: "Ctrl+A", action: "Go to about" },
];

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-accent">
          <Keyboard className="h-5 w-5" />
          <span className="sr-only">Keyboard shortcuts</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="font-mono bg-accent p-1 rounded text-foreground">
                {shortcut.key}
              </span>
              <span className="text-foreground">{shortcut.action}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
