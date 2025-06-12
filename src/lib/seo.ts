import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export function generateSEO({
  title,
  description = "Desarrollador Full Stack especializado en React, Node.js y Flutter. Creando experiencias digitales modernas y funcionales.",
  keywords = [
    "desarrollador",
    "full stack",
    "react",
    "nodejs",
    "flutter",
    "javascript",
    "typescript",
  ],
  canonicalUrl,
  ogImage = "/og-image.jpg",
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | Jose Luis Zamora`
    : "Jose Luis Zamora - Desarrollador Full Stack";

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Jose Luis Zamora" }],
    creator: "Jose Luis Zamora",
    publisher: "Jose Luis Zamora",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: canonicalUrl || "https://tu-dominio.com",
      title: fullTitle,
      description,
      siteName: "Jose Luis Zamora Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@tu-usuario",
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
