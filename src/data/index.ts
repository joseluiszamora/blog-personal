import { Project, Skill, Experience } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "frontend", icon: "🔺" },
  { name: "Vue.js", level: 80, category: "frontend", icon: "💚" },
  { name: "TypeScript", level: 88, category: "frontend", icon: "🔷" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "🎨" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
  { name: "Python", level: 80, category: "backend", icon: "🐍" },
  { name: "Express", level: 82, category: "backend", icon: "🚀" },
  { name: "NestJS", level: 75, category: "backend", icon: "🏠" },

  // Mobile
  { name: "Flutter", level: 85, category: "mobile", icon: "📱" },
  { name: "React Native", level: 70, category: "mobile", icon: "📲" },

  // Database
  { name: "PostgreSQL", level: 85, category: "database", icon: "🐘" },
  { name: "MongoDB", level: 80, category: "database", icon: "🍃" },
  { name: "Redis", level: 70, category: "database", icon: "🔴" },

  // Tools
  { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  { name: "Git", level: 90, category: "tools", icon: "📝" },
  { name: "AWS", level: 70, category: "tools", icon: "☁️" },

  // AI
  { name: "Machine Learning", level: 65, category: "ai", icon: "🤖" },
  { name: "OpenAI API", level: 80, category: "ai", icon: "🧠" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con Next.js y Stripe",
    longDescription:
      "Una plataforma de e-commerce moderna con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración.",
    image: "/placeholder-project.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/usuario/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplicación móvil de gestión de tareas con Flutter",
    image: "/placeholder-project.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "Provider"],
    githubUrl: "https://github.com/usuario/task-app",
    featured: true,
    category: "mobile",
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Dashboard de analíticas en tiempo real con Vue.js",
    image: "/placeholder-project.jpg",
    technologies: ["Vue.js", "Chart.js", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/usuario/analytics",
    liveUrl: "https://analytics-demo.vercel.app",
    featured: true,
    category: "frontend",
  },
  {
    id: "4",
    title: "API REST",
    description: "API REST escalable con autenticación JWT",
    image: "/placeholder-project.jpg",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/usuario/api-rest",
    featured: false,
    category: "backend",
  },
  {
    id: "5",
    title: "Chat App",
    description: "Aplicación de chat en tiempo real",
    image: "/placeholder-project.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/usuario/chat-app",
    liveUrl: "https://chat-demo.vercel.app",
    featured: false,
    category: "fullstack",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description: "Sitio web portfolio con animaciones",
    image: "/placeholder-project.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/usuario/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
    featured: false,
    category: "frontend",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Startup Inc.",
    position: "Senior Full Stack Developer",
    description:
      "Desarrollo de aplicaciones web y móviles usando React, Node.js y Flutter. Liderazgo de equipo de desarrollo.",
    technologies: ["React", "Node.js", "Flutter", "PostgreSQL", "AWS"],
    startDate: new Date("2022-01-01"),
    current: true,
  },
  {
    id: "2",
    company: "Digital Agency",
    position: "Frontend Developer",
    description:
      "Creación de interfaces de usuario responsivas y optimizadas para diversos clientes.",
    technologies: ["Vue.js", "JavaScript", "SASS", "Figma"],
    startDate: new Date("2020-06-01"),
    endDate: new Date("2021-12-31"),
    current: false,
  },
  {
    id: "3",
    company: "Freelance",
    position: "Desarrollador Web",
    description:
      "Desarrollo de sitios web y aplicaciones para pequeñas y medianas empresas.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    startDate: new Date("2019-01-01"),
    endDate: new Date("2020-05-31"),
    current: false,
  },
];
