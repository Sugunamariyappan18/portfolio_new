
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}
