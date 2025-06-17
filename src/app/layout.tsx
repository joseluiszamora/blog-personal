import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ThemeDebugInfo } from "@/components/ui/ThemeDebugInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jose Luis - Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack especializado en React, Node.js y Flutter. Creando experiencias digitales modernas y funcionales.",
  keywords: [
    "desarrollador",
    "full stack",
    "react",
    "nodejs",
    "flutter",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "Jose Luis" }],
  creator: "Jose Luis",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    title: "Jose Luis - Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Node.js y Flutter",
    siteName: "Jose Luis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Luis - Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Node.js y Flutter",
    creator: "@tu-usuario",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
                  const systemPreference = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  return savedTheme || systemPreference;
                }

                const theme = getInitialTheme();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        /> */}
      </head>
      {/* <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> */}
      <body className="antialiased ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <ThemeDebugInfo />
      </body>
    </html>
  );
}

// app/layout.tsx
// import { Footer } from "../components/layout/Footer";
// import { Navbar } from "../components/layout/Navbar";
// import { ThemeProvider } from "../components/ui/ThemeProvider";
// import "./globals.css";

// export const metadata = {
//   title: "Mi App",
//   description: "Ejemplo dark/light con next-themes",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning>
//       <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
// <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//   <Navbar />
//   <main className="min-h-screen pt-16">{children}</main>
//   <Footer />
// </ThemeProvider>
//       </body>
//     </html>
//   );
// }
