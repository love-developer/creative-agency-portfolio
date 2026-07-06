export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  color: string; // Vibrant gradient accent for this project
  featured: boolean;
  link?: string;
}

export interface CaseStudy {
  id: string;
  project: Project;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  process: { step: string; title: string; description: string }[];
  quote: { text: string; author: string; role: string };
  gallery: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string; // Lucide icon identifier
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  technologies: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
  quote: string;
  socials: { twitter?: string; linkedin?: string; github?: string; instagram?: string };
  favoriteTool: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: { name: string; avatar: string };
}

export interface Award {
  id: string;
  title: string;
  category: string;
  project: string;
  year: string;
  platform: 'Awwwards' | 'FWA' | 'CSSDA' | 'Webby';
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Contract, etc.
  description: string;
  requirements: string[];
}
