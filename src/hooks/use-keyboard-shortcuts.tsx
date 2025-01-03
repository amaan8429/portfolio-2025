import { useEffect } from "react";

type ShortcutHandler = () => void;

interface ShortcutMap {
  [key: string]: ShortcutHandler;
}

export function useKeyboardShortcuts(shortcuts: ShortcutMap) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = `${event.ctrlKey ? "Ctrl+" : ""}${event.key.toUpperCase()}`;
      const handler = shortcuts[key];
      if (handler) {
        event.preventDefault();
        handler();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shortcuts]);
}
