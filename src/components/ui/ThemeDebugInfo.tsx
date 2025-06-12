"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeDebugInfo() {
  const { theme, mounted } = useTheme();

  if (!mounted || process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3 shadow-lg">
      <div className="font-semibold mb-1">Theme Debug</div>
      <div>
        Current: <span className="font-mono">{theme}</span>
      </div>
      <div>
        System:{" "}
        <span className="font-mono">
          {typeof window !== "undefined"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
            : "unknown"}
        </span>
      </div>
      <div>
        Saved:{" "}
        <span className="font-mono">
          {typeof window !== "undefined"
            ? localStorage.getItem("theme") || "none"
            : "unknown"}
        </span>
      </div>
    </div>
  );
}
