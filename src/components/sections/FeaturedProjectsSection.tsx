// import Link from "next/link";
"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data";
import type { Project } from "@/types";
import { ButtonStyled } from "../ui/ButtonStyled";
import { ButtonGithub } from "../ui/ButtonGithub";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-800">
        {/* Placeholder para imagen del proyecto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-primary-600 dark:text-primary-400">
            🚀
          </div>
        </div>

        {/* Badge de categoría */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium bg-primary-600 text-white rounded-full capitalize">
            {project.category}
          </span>
        </div>
      </div>

      <CardHeader>
        <h3 className="font-heading font-semibold text-lg text-secondary-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-300 text-sm">
          {project.description}
        </p>
      </CardHeader>

      <CardContent>
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
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

export function FeaturedProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-8">
            Una selección de mis trabajos más recientes y representativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <ButtonStyled
            text="Ver todos los proyectos"
            onClick={() => console.log("¡Botón clickeado!")}
          />
          <ButtonGithub></ButtonGithub>
        </div>

        {/* <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg">
              Ver todos los proyectos
              <svg
                className="w-5 h-5 ml-2"
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
        </div> */}
      </div>
    </section>
  );
}
