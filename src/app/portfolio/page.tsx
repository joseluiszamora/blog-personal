"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data";
import type { Project } from "@/types";

const categories = [
  "all",
  "frontend",
  "backend",
  "fullstack",
  "mobile",
] as const;
type Category = (typeof categories)[number];

const categoryLabels = {
  all: "Todos",
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
  mobile: "Móvil",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-800">
        {/* Placeholder para imagen del proyecto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-primary-600 dark:text-primary-400">
            {project.category === "mobile"
              ? "📱"
              : project.category === "frontend"
              ? "🎨"
              : project.category === "backend"
              ? "⚙️"
              : "🚀"}
          </div>
        </div>

        {/* Badge de categoría */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium bg-primary-600 text-white rounded-full capitalize">
            {project.category}
          </span>
        </div>

        {/* Badge de destacado */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-medium bg-yellow-500 text-white rounded-full">
              Destacado
            </span>
          </div>
        )}
      </div>

      <CardHeader>
        <h3 className="font-heading font-semibold text-lg text-secondary-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-300 text-sm">
          {project.description}
        </p>
        {project.longDescription && (
          <p className="text-secondary-500 dark:text-secondary-400 text-xs mt-2">
            {project.longDescription}
          </p>
        )}
      </CardHeader>

      <CardContent>
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" size="sm" className="w-full">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Código
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" className="w-full">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-secondary-900 dark:text-white mb-6">
            Mi Portafolio
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Una colección de proyectos que representan mi pasión por el
            desarrollo y mi crecimiento profesional
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        {/* Proyectos Destacados */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white mb-8">
              Proyectos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Otros Proyectos */}
        {regularProjects.length > 0 && (
          <div>
            <h2 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white mb-8">
              Otros Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-heading font-semibold text-xl text-secondary-900 dark:text-white mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300">
              Prueba seleccionando otra categoría o ve todos los proyectos
            </p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-800/50">
            <h3 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white mb-4">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Encuentra más proyectos y contribuciones en mi GitHub
            </p>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Ver GitHub
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
