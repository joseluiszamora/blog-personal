import { Card } from "@/components/ui/Card";
import { skills } from "@/data";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card hover className="p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>
      </div>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </Card>
  );
}

export function SkillsSection() {
  const skillCategories = {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    mobile: skills.filter((skill) => skill.category === "mobile"),
    database: skills.filter((skill) => skill.category === "database"),
    tools: skills.filter((skill) => skill.category === "tools"),
    ai: skills.filter((skill) => skill.category === "ai"),
  };

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Móvil",
    database: "Base de Datos",
    tools: "Herramientas",
    ai: "Inteligencia Artificial",
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones
            innovadoras
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-xl text-gray-900 dark:text-white mb-6 text-center">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
