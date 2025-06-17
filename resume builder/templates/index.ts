import React from 'react';
import dynamic from 'next/dynamic';

export interface TemplateOption {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<any>;
  thumbnail: string;
  isNew?: boolean;
  features?: string[];
  languages?: string[];
  regions?: string[];
  industries?: string[];
}

export const templates: TemplateOption[] = [
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean and straightforward design focusing on content',
    component: dynamic(() => import('./MinimalistTemplate'), { ssr: false }),
    thumbnail: '/templates/minimalist.png',
    isNew: true
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with a professional color accent',
    component: dynamic(() => import('./ModernTemplate'), { ssr: false }),
    thumbnail: '/templates/modern.png',
    isNew: true
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Unique design for standing out in creative fields',
    component: dynamic(() => import('./CreativeTemplate'), { ssr: false }),
    thumbnail: '/templates/creative.png',
    isNew: true
  },
  {
    id: 'consultant',
    name: 'Consultant',
    description: 'Professional template highlighting consulting expertise and client projects',
    component: dynamic(() => import('./ConsultantTemplate'), { ssr: false }),
    thumbnail: '/templates/consultant.png',
    isNew: true,
    features: ['Client project showcase', 'Consulting skills section', 'Professional achievements'],
    industries: ['Consulting', 'Business Services', 'Project Management']
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional resume layout ideal for conventional industries',
    component: dynamic(() => import('./ClassicTemplate'), { ssr: false }),
    thumbnail: '/templates/classic.png'
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'Bold and eye-catching layout',
    component: dynamic(() => import('./BoldTemplate'), { ssr: false }),
    thumbnail: '/templates/bold.png'
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Elegant and refined design for professionals',
    component: dynamic(() => import('./ElegantTemplate'), { ssr: false }),
    thumbnail: '/templates/elegant.png'
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Showcase your work and projects',
    component: dynamic(() => import('./PortfolioTemplate'), { ssr: false }),
    thumbnail: '/templates/portfolio.png'
  },
  {
    id: 'infographic',
    name: 'Infographic',
    description: 'Visually engaging infographic style',
    component: dynamic(() => import('./InfographicTemplate'), { ssr: false }),
    thumbnail: '/templates/infographic.png'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Formal layout for corporate roles',
    component: dynamic(() => import('./CorporateTemplate'), { ssr: false }),
    thumbnail: '/templates/corporate.png'
  },
  {
    id: 'twocolumn',
    name: 'Two Column',
    description: 'Modern two-column layout',
    component: dynamic(() => import('./TwoColumnTemplate'), { ssr: false }),
    thumbnail: '/templates/twocolumn.png'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Professional and clean design',
    component: dynamic(() => import('./ProfessionalTemplate'), { ssr: false }),
    thumbnail: '/templates/professional.png'
  },
  {
    id: 'chronological',
    name: 'Chronological',
    description: 'Chronological work history focus',
    component: dynamic(() => import('./ChronologicalTemplate'), { ssr: false }),
    thumbnail: '/templates/chronological.png'
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Academic CV for research and education',
    component: dynamic(() => import('./AcademicTemplate'), { ssr: false }),
    thumbnail: '/templates/academic.png'
  },
  {
    id: 'multipage',
    name: 'Multi-Page',
    description: 'Multi-page layout for extensive experience',
    component: dynamic(() => import('./MultiPageTemplate'), { ssr: false }),
    thumbnail: '/templates/multipage.png'
  },
  {
    id: 'techminimal',
    name: 'Tech Minimal',
    description: 'Minimalist design for tech professionals',
    component: dynamic(() => import('./TechMinimalTemplate'), { ssr: false }),
    thumbnail: '/templates/techminimal.png'
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Executive-level resume template',
    component: dynamic(() => import('./ExecutiveTemplate'), { ssr: false }),
    thumbnail: '/templates/executive.png'
  },
  {
    id: 'global-executive',
    name: 'Global Executive',
    description: 'Sophisticated design for international business leaders',
    component: dynamic(() => import('./GlobalExecutiveTemplate'), { ssr: false }),
    thumbnail: '/templates/global-executive.png',
    features: ['Multi-language support', 'International experience section', 'Global achievements'],
    languages: ['English', 'Spanish', 'French', 'German', 'Chinese'],
    regions: ['North America', 'Europe', 'Asia', 'Middle East']
  },
  {
    id: 'tech-innovator',
    name: 'Tech Innovator',
    description: 'Modern template for technology and innovation leaders',
    component: dynamic(() => import('./TechInnovatorTemplate'), { ssr: false }),
    thumbnail: '/templates/tech-innovator.png',
    features: ['Project portfolio', 'Technical skills matrix', 'Innovation metrics'],
    languages: ['English', 'Japanese', 'Korean'],
    regions: ['Silicon Valley', 'Asia-Pacific', 'Europe']
  },
  {
    id: 'diplomatic',
    name: 'Diplomatic',
    description: 'Elegant design for international relations and diplomacy',
    component: dynamic(() => import('./DiplomaticTemplate'), { ssr: false }),
    thumbnail: '/templates/diplomatic.png',
    features: ['Language proficiency levels', 'International assignments', 'Cultural competencies'],
    languages: ['English', 'French', 'Arabic', 'Russian', 'Chinese'],
    regions: ['United Nations', 'European Union', 'ASEAN']
  },
  {
    id: 'academic-global',
    name: 'Academic Global',
    description: 'Comprehensive CV for international academic positions',
    component: dynamic(() => import('./AcademicGlobalTemplate'), { ssr: false }),
    thumbnail: '/templates/academic-global.png',
    features: ['Publication metrics', 'International collaborations', 'Research impact'],
    languages: ['English', 'German', 'French', 'Spanish'],
    regions: ['North America', 'Europe', 'Asia-Pacific']
  },
  {
    id: 'startup-visionary',
    name: 'Startup Visionary',
    description: 'Dynamic template for entrepreneurs and startup leaders',
    component: dynamic(() => import('./StartupVisionaryTemplate'), { ssr: false }),
    thumbnail: '/templates/startup-visionary.png',
    features: ['Growth metrics', 'Investment rounds', 'Market expansion'],
    languages: ['English', 'Mandarin', 'Hindi'],
    regions: ['Silicon Valley', 'Shenzhen', 'Bangalore', 'Tel Aviv']
  },
  {
    id: 'sustainability-leader',
    name: 'Sustainability Leader',
    description: 'Eco-conscious design for sustainability professionals',
    component: dynamic(() => import('./SustainabilityLeaderTemplate'), { ssr: false }),
    thumbnail: '/templates/sustainability-leader.png',
    features: ['Environmental impact metrics', 'SDG alignment', 'Green initiatives'],
    languages: ['English', 'Swedish', 'German', 'Spanish'],
    regions: ['Scandinavia', 'Europe', 'North America']
  },
  {
    id: 'digital-nomad',
    name: 'Digital Nomad',
    description: 'Modern template for location-independent professionals',
    component: dynamic(() => import('./DigitalNomadTemplate'), { ssr: false }),
    thumbnail: '/templates/digital-nomad.png',
    features: ['Remote work experience', 'Time zone flexibility', 'Digital tools proficiency'],
    languages: ['English', 'Spanish', 'Portuguese'],
    regions: ['Global', 'Latin America', 'Southeast Asia']
  },
  {
    id: 'cultural-ambassador',
    name: 'Cultural Ambassador',
    description: 'Rich design for cultural exchange and international relations',
    component: dynamic(() => import('./CulturalAmbassadorTemplate'), { ssr: false }),
    thumbnail: '/templates/cultural-ambassador.png',
    features: ['Cultural competencies', 'International projects', 'Cross-cultural communication'],
    languages: ['English', 'Arabic', 'Chinese', 'Russian', 'Spanish'],
    regions: ['Middle East', 'Asia', 'Europe', 'Africa']
  }
];

export default templates; 