export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "frontend" | "backend" | "fullstack" | "mobile";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "mobile" | "database" | "tools" | "ai";
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
  current: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
