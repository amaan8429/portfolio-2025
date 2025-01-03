"use client";

import { Twitter, Music, PauseCircle } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function SiteFooter() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button
              onClick={toggleAudio}
              variant="ghost"
              size="icon"
              className="hover:bg-accent"
              aria-label="Toggle audio"
            >
              {isPlaying ? (
                <PauseCircle className="h-5 w-5" />
              ) : (
                <Music className="h-5 w-5" />
              )}
            </Button>
            <audio
              ref={audioRef}
              src="/audio/audio-nextjs1.mp3"
              loop
              className="hidden"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-sm text-muted-foreground">
              Made by{" "}
              <Link
                href="https://twitter.com/amaan8429"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                Amaan
              </Link>
            </span>
            <Link
              href="https://twitter.com/amaan8429"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
