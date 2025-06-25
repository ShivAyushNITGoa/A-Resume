import React from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  linkedin: string;
  website: string;
  photo?: string;
  about: string;
  summary: string;
}

export interface Education {
  school: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  graduationYear: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  description: string;
}

export interface Project {
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  date: string;
  description: string;
}

export interface Skills {
  hard: string[];
  soft: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

export interface TemplateOption {
  id: string;
  name: string;
  thumbnail: string;
  component: React.ComponentType<{ data: ResumeData; color?: string }>;
}

export interface AIServiceResponse {
  data: string;
  success: boolean;
  error?: string;
} 