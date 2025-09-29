export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isRemote?: boolean;
  projectName?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'api' | 'tool' | 'library';
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'testing' | 'tools' | 'soft-skills';
  years?: number;
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  gpa?: string;
  honors?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  summary: string;
  profileImage?: string;
  contactInfo: ContactInfo;
}