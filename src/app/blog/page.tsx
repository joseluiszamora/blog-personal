import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// Mock data para posts del blog
const blogPosts = [
  {
    id: "1",
    title: "Introducción a Next.js 15: Nuevas características y mejoras",
    excerpt:
      "Explora las últimas funcionalidades de Next.js 15 y cómo pueden mejorar tu flujo de desarrollo.",
    publishedAt: new Date("2024-12-01"),
    readTime: 8,
    tags: ["Next.js", "React", "JavaScript"],
    featured: true,
  },
  {
    id: "2",
    title: "Optimización de Performance en React: Guía Completa",
    excerpt:
      "Técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React.",
    publishedAt: new Date("2024-11-15"),
    readTime: 12,
    tags: ["React", "Performance", "JavaScript"],
    featured: true,
  },
  {
    id: "3",
    title: "Estado de Flutter en 2024: Lo que todo desarrollador debe saber",
    excerpt:
      "Un análisis profundo del ecosistema Flutter y las tendencias actuales.",
    publishedAt: new Date("2024-11-01"),
    readTime: 10,
    tags: ["Flutter", "Mobile", "Dart"],
    featured: false,
  },
  {
    id: "4",
    title: "Construyendo APIs REST con Node.js y TypeScript",
    excerpt: "Mejores prácticas para crear APIs robustas y mantenibles.",
    publishedAt: new Date("2024-10-20"),
    readTime: 15,
    tags: ["Node.js", "TypeScript", "API"],
    featured: false,
  },
  {
    id: "5",
    title: "CSS Grid vs Flexbox: Cuándo usar cada uno",
    excerpt: "Una guía práctica para elegir la mejor herramienta de layout.",
    publishedAt: new Date("2024-10-05"),
    readTime: 6,
    tags: ["CSS", "Frontend", "Layout"],
    featured: false,
  },
];

function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Card hover className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h2 className="font-heading font-semibold text-xl text-secondary-900 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-3">
              {post.excerpt}
            </p>
          </div>
          {post.featured && (
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-500 text-white rounded-full">
              Destacado
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-3">
          <time dateTime={post.publishedAt.toISOString()}>
            {formatDate(post.publishedAt)}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readTime} min de lectura</span>
        </div>
      </CardHeader>

      <CardContent>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Leer más */}
        <Link href={`/blog/${post.id}`}>
          <Button variant="ghost" size="sm" className="w-full">
            Leer más
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-secondary-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Reflexiones sobre desarrollo, tecnología y las últimas tendencias en
            el mundo del software
          </p>
        </div>

        {/* Artículos destacados */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white mb-8">
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Todos los artículos */}
        <div>
          <h2 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white mb-8">
            Todos los Artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-800/50 text-center">
            <h3 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white mb-4">
              ¿Te gusta mi contenido?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 max-w-md mx-auto">
              Mantente al día con mis últimos artículos y reflexiones sobre
              desarrollo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu-email@ejemplo.com"
                className="flex-1 px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button size="sm" className="whitespace-nowrap">
                Suscribirse
              </Button>
            </div>
          </Card>
        </div>

        {/* Empty state para cuando no hay posts */}
        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="font-heading font-semibold text-xl text-secondary-900 dark:text-white mb-2">
              Próximamente...
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300">
              Estoy trabajando en contenido increíble para compartir contigo.
              ¡Vuelve pronto!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
