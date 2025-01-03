"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
}

export function GitHubActivity() {
  const [latestEvent, setLatestEvent] = useState<GitHubEvent | null>(null);

  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const response = await fetch(
          "https://api.github.com/users/amaan8429/events/public"
        );
        const data = await response.json();
        setLatestEvent(data[0]);
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
      }
    }

    fetchGitHubActivity();
  }, []);

  if (!latestEvent) return null;

  return (
    <div className="flex items-center space-x-2 text-sm">
      <GitBranch className="w-4 h-4" />
      <span>
        Latest GitHub activity: {latestEvent.type} on {latestEvent.repo.name}
      </span>
    </div>
  );
}
