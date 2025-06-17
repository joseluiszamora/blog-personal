// "use client";

// import { useEffect } from "react";

// export function ThemeProvider() {
//   useEffect(() => {
//     // Escuchar cambios en las preferencias del sistema
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleSystemChange = (e: MediaQueryListEvent) => {
//       // Solo aplicar si no hay preferencia guardada por el usuario
//       if (!localStorage.getItem("theme")) {
//         const newTheme = e.matches ? "dark" : "light";
//         document.documentElement.classList.toggle("dark", newTheme === "dark");
//         document.documentElement.style.colorScheme = newTheme;
//       }
//     };

//     mediaQuery.addEventListener("change", handleSystemChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleSystemChange);
//     };
//   }, []);

//   return null;
// }

// components/theme-provider.tsx
"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
