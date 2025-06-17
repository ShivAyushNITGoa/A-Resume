import React from 'react';
import dynamic from 'next/dynamic';
import { ResumeData } from '@/utils/types';
import { templates, TemplateOption } from '@/templates';

// Import original templates
const MinimalistTemplate = dynamic(() => import('./templates/MinimalistTemplate'), { ssr: false });
const ModernTemplate = dynamic(() => import('./templates/ModernTemplate'), { ssr: false });
const CreativeTemplate = dynamic(() => import('./templates/CreativeTemplate'), { ssr: false });
const ClassicTemplate = dynamic(() => import('./templates/ClassicTemplate'), { ssr: false });
const ConsultantTemplate = dynamic(() => import('@/templates/ConsultantTemplate'), { ssr: false });

// Import new global templates
const GlobalExecutiveTemplate = dynamic(() => import('@/templates/GlobalExecutiveTemplate'), { ssr: false });
const TechInnovatorTemplate = dynamic(() => import('@/templates/TechInnovatorTemplate'), { ssr: false });
const DiplomaticTemplate = dynamic(() => import('@/templates/DiplomaticTemplate'), { ssr: false });
const AcademicGlobalTemplate = dynamic(() => import('@/templates/AcademicGlobalTemplate'), { ssr: false });
const StartupVisionaryTemplate = dynamic(() => import('@/templates/StartupVisionaryTemplate'), { ssr: false });
const SustainabilityLeaderTemplate = dynamic(() => import('@/templates/SustainabilityLeaderTemplate'), { ssr: false });
const DigitalNomadTemplate = dynamic(() => import('@/templates/DigitalNomadTemplate'), { ssr: false });
const CulturalAmbassadorTemplate = dynamic(() => import('@/templates/CulturalAmbassadorTemplate'), { ssr: false });

// Adapter function to convert between different resume data formats
const adaptResumeData = (originalData: any, templateId: string): any => {
  // Check if it's already in the new format
  if (originalData.personalInfo && typeof originalData.personalInfo.name === 'string') {
    return originalData;
  }
  
  // Basic conversion from old format to new format
  const baseData = {
    personalInfo: {
      name: originalData.personalInfo?.name || '',
      email: originalData.personalInfo?.email || '',
      phone: originalData.personalInfo?.phone || '',
      address: originalData.personalInfo?.location || originalData.personalInfo?.address || '',
      linkedin: originalData.personalInfo?.linkedin || '',
      website: originalData.personalInfo?.website || '',
      location: originalData.personalInfo?.location || '',
      title: originalData.personalInfo?.title || originalData.personalInfo?.position || '',
      profileImage: originalData.personalInfo?.profileImage || '',
    },
    summary: originalData.personalInfo?.summary || originalData.personalInfo?.about || '',
    workExperience: (originalData.experience || []).map((exp: any) => ({
      jobTitle: exp.position || '',
      company: exp.company || '',
      location: exp.location || '',
      startDate: exp.startDate || '',
      endDate: exp.current ? 'Present' : (exp.endDate || ''),
      description: exp.responsibilities || [exp.description || ''],
      responsibilities: Array.isArray(exp.responsibilities) ? exp.responsibilities : [exp.description || ''],
    })),
    education: (originalData.education || []).map((edu: any) => ({
      degree: edu.degree || '',
      institution: edu.institution || edu.school || '',
      location: edu.location || '',
      gradDate: edu.graduationYear || edu.endDate || '',
      year: edu.graduationYear || edu.endDate || '',
      gpa: '',
    })),
    skills: [
      ...(originalData.skills?.hard || []),
      ...(originalData.skills?.soft || [])
    ].filter((skill: string) => skill.trim() !== ''),
    projects: (originalData.projects || []).map((proj: any) => ({
      name: proj.title || '',
      description: proj.description || '',
      technologies: [],
      link: proj.link || '',
    })),
    certifications: (originalData.certifications || []).map((cert: any) => ({
      name: cert.name || '',
      issuer: cert.issuer || '',
      date: cert.date || '',
    })),
  };
  
  // Add specialized fields for new global templates
  if (templateId === 'global-executive') {
    return {
      ...baseData,
      name: baseData.personalInfo.name,
      title: baseData.personalInfo.title,
      email: baseData.personalInfo.email,
      phone: baseData.personalInfo.phone,
      location: baseData.personalInfo.location,
      website: baseData.personalInfo.website,
      internationalExperience: baseData.workExperience.map((exp: any) => ({
        title: exp.jobTitle,
        company: exp.company,
        location: exp.location || 'International',
        duration: `${exp.startDate} - ${exp.endDate}`,
        responsibilities: exp.responsibilities || [],
        achievements: [],
      })),
      globalLeadership: [],
      culturalCompetencies: [],
      languages: [],
      education: baseData.education,
      globalAchievements: [],
    };
  } else if (templateId === 'tech-innovator') {
    return {
      ...baseData,
      name: baseData.personalInfo.name,
      title: baseData.personalInfo.title,
      email: baseData.personalInfo.email,
      phone: baseData.personalInfo.phone,
      location: baseData.personalInfo.location,
      website: baseData.personalInfo.website,
      technicalExpertise: [],
      innovationProjects: [],
      technicalLeadership: [],
      innovationMetrics: [],
      patentsPublications: [],
      education: baseData.education,
      certifications: baseData.certifications,
    };
  } else if (templateId === 'digital-nomad') {
    return {
      ...baseData,
      name: baseData.personalInfo.name,
      title: baseData.personalInfo.title,
      email: baseData.personalInfo.email,
      phone: baseData.personalInfo.phone, 
      currentLocation: baseData.personalInfo.location || 'Remote',
      website: baseData.personalInfo.website,
      timezone: 'UTC+0',
      profile: baseData.summary,
      remoteSkills: [],
      remoteExperience: baseData.workExperience.map((exp: any) => ({
        title: exp.jobTitle,
        company: exp.company,
        locationType: 'Remote',
        duration: `${exp.startDate} - ${exp.endDate}`,
        responsibilities: exp.responsibilities || [],
      })),
      education: baseData.education,
      languages: [],
    };
  }
  
  // Return standard adapted data for other templates
  return baseData;
};

interface ResumeTemplateRendererProps {
  selectedTemplate: string;
  resumeData: any;
  backgroundColor?: string;
}

const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({
  selectedTemplate,
  resumeData,
  backgroundColor
}) => {
  // Find the template object
  const templateObj = templates.find(t => t.id === selectedTemplate) || templates[0];
  
  // Adapt data to ensure compatibility with all templates
  const adaptedData = adaptResumeData(resumeData, selectedTemplate);
  
  // Render the appropriate template based on selection
  switch (selectedTemplate) {
    case 'minimalist':
      return <MinimalistTemplate resumeData={adaptedData} />;
    case 'modern':
      return <ModernTemplate resumeData={adaptedData} />;
    case 'creative':
      return <CreativeTemplate resumeData={adaptedData} />;
    case 'classic':
      return <ClassicTemplate resumeData={adaptedData} />;
    case 'consultant':
      return <ConsultantTemplate data={adaptedData} backgroundColor={backgroundColor} />;
    case 'global-executive':
      return <GlobalExecutiveTemplate data={adaptedData} template={templateObj} />;
    case 'tech-innovator':
      return <TechInnovatorTemplate data={adaptedData} template={templateObj} />;
    case 'diplomatic':
      return <DiplomaticTemplate data={adaptedData} template={templateObj} />;
    case 'academic-global':
      return <AcademicGlobalTemplate data={adaptedData} template={templateObj} />;
    case 'startup-visionary':
      return <StartupVisionaryTemplate data={adaptedData} template={templateObj} />;
    case 'sustainability-leader':
      return <SustainabilityLeaderTemplate data={adaptedData} template={templateObj} />;
    case 'digital-nomad':
      return <DigitalNomadTemplate data={adaptedData} template={templateObj} />;
    case 'cultural-ambassador':
      return <CulturalAmbassadorTemplate data={adaptedData} template={templateObj} />;
    default:
      // If template not found, use the component from the template object if available
      if (templateObj && templateObj.component) {
        const DynamicTemplate = templateObj.component;
        return <DynamicTemplate data={adaptedData} template={templateObj} />;
      }
      // Fallback to minimalist
      return <MinimalistTemplate resumeData={adaptedData} />;
  }
};

export default ResumeTemplateRenderer; 