"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  // Evitar renderizar hasta que el componente esté montado (hidratación)
  if (!mounted) {
    return (
      <div className="w-8 h-8 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
      title={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      <div className="relative w-4 h-4">
        {/* Icono de luna (modo oscuro) */}
        <svg
          className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        {/* Icono de sol (modo claro) */}
        <svg
          className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    </button>
  );
}
