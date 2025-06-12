"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Detectar el tema actual del DOM (que ya fue establecido por ThemeProvider)
    const isDarkMode = document.documentElement.classList.contains("dark");
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(isDarkMode ? "dark" : "light");
    }

    // Escuchar cambios en las preferencias del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Solo aplicar cambio del sistema si no hay tema guardado
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.style.colorScheme = newTheme;
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.style.colorScheme = newTheme;
  };

  const resetToSystem = () => {
    localStorage.removeItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemPreference);
    document.documentElement.classList.toggle(
      "dark",
      systemPreference === "dark"
    );
    document.documentElement.style.colorScheme = systemPreference;
  };

  return { theme, toggleTheme, resetToSystem, mounted };
}
