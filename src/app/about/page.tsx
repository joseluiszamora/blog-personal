import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { experiences } from "@/data";

function Timeline() {
  return (
    <div className="relative">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative pl-8 pb-8 last:pb-0">
          {/* Línea vertical */}
          <div className="absolute left-0 top-0 h-full w-px bg-secondary-200 dark:bg-secondary-700" />

          {/* Punto */}
          <div className="absolute left-0 top-2 w-2 h-2 bg-primary-600 rounded-full transform -translate-x-[3px]" />

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-secondary-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-secondary-500 dark:text-secondary-400">
                  {exp.startDate.getFullYear()} -{" "}
                  {exp.current ? "Presente" : exp.endDate?.getFullYear()}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-secondary-900 dark:text-white mb-6">
            Sobre mí
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Conoce mi trayectoria, filosofía de desarrollo y lo que me apasiona
            del mundo tech
          </p>
        </div>

        {/* Introducción */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Soy un desarrollador Full Stack apasionado por crear soluciones
                digitales que marquen la diferencia. Con más de 3 años de
                experiencia, me especializo en tecnologías modernas como React,
                Node.js y Flutter.
              </p>
              <p className="text-lg leading-relaxed">
                Mi enfoque se centra en escribir código limpio, escalable y
                mantenible, siempre buscando las mejores prácticas y las últimas
                tendencias en desarrollo. Me gusta trabajar en equipo y creo
                firmemente en la importancia de la comunicación clara y la
                colaboración efectiva.
              </p>
              <p className="text-lg leading-relaxed">
                Cuando no estoy programando, disfruto aprendiendo nuevas
                tecnologías, contribuyendo a proyectos open source y
                compartiendo conocimientos con la comunidad de desarrolladores.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experiencia */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl text-secondary-900 dark:text-white mb-8 text-center">
            Experiencia Profesional
          </h2>
          <Timeline />
        </div>

        {/* Filosofía */}
        <Card className="mb-16">
          <CardHeader>
            <h2 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white">
              Mi Filosofía de Desarrollo
            </h2>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-2">
                  Código Limpio
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Escribo código que es fácil de leer, entender y mantener. La
                  claridad es tan importante como la funcionalidad.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-2">
                  Aprendizaje Continuo
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  La tecnología evoluciona constantemente, y yo evoluciono con
                  ella. Siempre estoy aprendiendo algo nuevo.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-2">
                  User-Centric
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  El usuario final siempre está en el centro de mis decisiones
                  de desarrollo. La experiencia del usuario es primordial.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-2">
                  Colaboración
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Los mejores productos se construyen en equipo. Valoro la
                  comunicación abierta y el trabajo colaborativo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Educación y Certificaciones */}
        <Card>
          <CardHeader>
            <h2 className="font-heading font-bold text-2xl text-secondary-900 dark:text-white">
              Educación y Certificaciones
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-lg text-secondary-900 dark:text-white">
                  Ingeniería en Sistemas Computacionales
                </h3>
                <p className="text-primary-600 dark:text-primary-400">
                  Universidad Tecnológica
                </p>
                <p className="text-secondary-600 dark:text-secondary-300">
                  2018 - 2022
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-lg text-secondary-900 dark:text-white">
                  React Developer Certificate
                </h3>
                <p className="text-primary-600 dark:text-primary-400">Meta</p>
                <p className="text-secondary-600 dark:text-secondary-300">
                  2023
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-lg text-secondary-900 dark:text-white">
                  AWS Cloud Practitioner
                </h3>
                <p className="text-primary-600 dark:text-primary-400">
                  Amazon Web Services
                </p>
                <p className="text-secondary-600 dark:text-secondary-300">
                  2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
