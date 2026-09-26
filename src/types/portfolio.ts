export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number;
}
