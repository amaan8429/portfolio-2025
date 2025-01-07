// src/components/VisitorCounter.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { incrementVisitorCount } from "../app/actions/visitor";

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateCount = async () => {
      try {
        const newCount = await incrementVisitorCount();
        setCount(newCount);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    };

    updateCount();
  }, []);

  if (error) {
    return (
      <div
        className="flex items-center space-x-2 text-sm text-red-500"
        role="alert"
      >
        <Users className="w-4 h-4" />
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-sm" role="status">
      <Users className="w-4 h-4" />
      <span>{count ? `Visitor #${count}` : "Loading..."}</span>
    </div>
  );
}
