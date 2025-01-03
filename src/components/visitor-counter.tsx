"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    if (storedCount) {
      setCount(parseInt(storedCount, 10) + 1);
    } else {
      setCount(1);
    }
    localStorage.setItem("visitorCount", (count + 1).toString());
  }, []);

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Users className="w-4 h-4" />
      <span>Visitor #{count}</span>
    </div>
  );
}
