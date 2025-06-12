import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
