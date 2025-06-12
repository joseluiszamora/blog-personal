import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Me encantaría ayudarte a convertir tu idea en realidad. Hablemos sobre
          cómo podemos trabajar juntos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 min-w-[200px]"
            >
              Contactar ahora
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600 min-w-[200px]"
            >
              Ver mi trabajo
            </Button>
          </Link>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-500">
          <div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-primary-200">Proyectos completados</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-primary-200">Años de experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-primary-200">Clientes satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
