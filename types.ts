export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  date: string;
  location: string;
  description: string[];
}

export interface SkillItem {
  id: string;
  category: string;
  skills: string[];
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  approach: string;
  outcome: string;
  images?: string[];
}

export interface DashboardItem {
  id: string;
  area: string;
  application: string;
}