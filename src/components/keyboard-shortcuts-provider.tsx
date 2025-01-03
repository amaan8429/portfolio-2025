"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

export function KeyboardShortcutsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { setTheme } = useTheme();

  const shortcutHandlers = {
    "CTRL+K": () => {
      // Open search (you might want to implement a global search component)
      console.log("Search opened");
    },
    "CTRL+D": () => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    },
    "CTRL+H": () => {
      router.push("/");
    },
    "CTRL+A": () => {
      router.push("/about");
    },
  };

  useKeyboardShortcuts(shortcutHandlers);

  return <>{children}</>;
}
