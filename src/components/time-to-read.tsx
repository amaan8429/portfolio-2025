"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function TimeToRead() {
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Clock className="w-4 h-4" />
      <span>Time spent: {formatTime(timeSpent)}</span>
    </div>
  );
}
