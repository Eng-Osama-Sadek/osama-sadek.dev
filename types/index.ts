export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  gallery: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  features: string[];
  featured: boolean;
  order: number;
  year: number;
  category: "AI" | "Web" | "Mobile" | "Automation" | "Full-Stack";
}

export interface ProjectLink {
  label: string;
  href: string;
  icon: "github" | "external" | "play";
}