import { ReactNode } from 'react';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}