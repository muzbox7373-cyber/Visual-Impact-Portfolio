export interface Project {
  id: string;
  title: string;
  category: 'UI/UX' | 'Front-end' | 'Refactoring' | 'Branding';
  tags: string[];
  thumbnail: string;
  overview: string;
  duration: string;
  role: string;
  contribution: number;
  challenge: string;
  solution: string;
  result: string;
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}