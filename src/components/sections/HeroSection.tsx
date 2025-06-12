import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Saludo animado */}
          <div className="animate-slide-down">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
              ¡Hola! 👋 Soy
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary-900 dark:text-white mb-6">
              Jose Luis Zamora
            </h1>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 mb-8">
              Desarrollador Full Stack
            </h2>
          </div>

          {/* Descripción */}
          <div className="animate-slide-up">
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Especializado en crear aplicaciones web y móviles modernas con
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {" "}
                React
              </span>
              ,
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {" "}
                Node.js
              </span>{" "}
              y
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {" "}
                Flutter
              </span>
              . Transformo ideas en experiencias digitales excepcionales.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" className="min-w-[200px]">
                Ver mi trabajo
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Hablemos
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <svg
              className="w-6 h-6 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
