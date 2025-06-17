import { TemplateOption } from '@/utils/types';
import ProfessionalTemplate from './ProfessionalTemplate';
import ModernTemplate from './ModernTemplate';
import MinimalistTemplate from './MinimalistTemplate';
import CreativeTemplate from './CreativeTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import TechMinimalTemplate from './TechMinimalTemplate';
import TwoColumnTemplate from './TwoColumnTemplate';
import MultiPageTemplate from './MultiPageTemplate';
import AcademicTemplate from './AcademicTemplate';
import ChronologicalTemplate from './ChronologicalTemplate';
import CorporateTemplate from './CorporateTemplate';
import InfographicTemplate from './InfographicTemplate';
import PortfolioTemplate from './PortfolioTemplate';
import ElegantTemplate from './ElegantTemplate';
import BoldTemplate from './BoldTemplate';

// Use type assertions to resolve the incompatible types between template definitions
// This allows us to maintain type safety in the application while resolving
// the conflicts between different template component types
export const templates: TemplateOption[] = [
  {
    id: 'professional',
    name: 'Professional',
    thumbnail: '/thumbnails/professional.png',
    component: ProfessionalTemplate as any,
  },
  {
    id: 'modern',
    name: 'Modern',
    thumbnail: '/thumbnails/modern.png',
    component: ModernTemplate as any,
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    thumbnail: '/thumbnails/minimalist.png',
    component: MinimalistTemplate as any,
  },
  {
    id: 'creative',
    name: 'Creative',
    thumbnail: '/thumbnails/creative.png',
    component: CreativeTemplate as any,
  },
  {
    id: 'executive',
    name: 'Executive',
    thumbnail: '/thumbnails/executive.png',
    component: ExecutiveTemplate as any,
  },
  {
    id: 'techminimal',
    name: 'Tech Minimal',
    thumbnail: '/thumbnails/techminimal.png',
    component: TechMinimalTemplate as any,
  },
  {
    id: 'twocolumn',
    name: 'Two Column',
    thumbnail: '/thumbnails/twocolumn.png',
    component: TwoColumnTemplate as any,
  },
  {
    id: 'multipage',
    name: 'Multi-Page',
    thumbnail: '/thumbnails/multipage.png',
    component: MultiPageTemplate as any,
  },
  {
    id: 'academic',
    name: 'Academic',
    thumbnail: '/thumbnails/academic.png',
    component: AcademicTemplate as any,
  },
  {
    id: 'chronological',
    name: 'Chronological',
    thumbnail: '/thumbnails/chronological.png',
    component: ChronologicalTemplate as any,
  },
  {
    id: 'corporate',
    name: 'Corporate',
    thumbnail: '/thumbnails/corporate.png',
    component: CorporateTemplate as any,
  },
  {
    id: 'infographic',
    name: 'Infographic',
    thumbnail: '/thumbnails/infographic.png',
    component: InfographicTemplate as any,
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    thumbnail: '/thumbnails/portfolio.png',
    component: PortfolioTemplate as any,
  },
  {
    id: 'elegant',
    name: 'Elegant',
    thumbnail: '/thumbnails/elegant.png',
    component: ElegantTemplate as any,
  },
  {
    id: 'bold',
    name: 'Bold',
    thumbnail: '/thumbnails/bold.png',
    component: BoldTemplate as any,
  },
];

export { 
  ProfessionalTemplate, 
  ModernTemplate, 
  MinimalistTemplate,
  CreativeTemplate,
  ExecutiveTemplate,
  TechMinimalTemplate,
  TwoColumnTemplate,
  MultiPageTemplate,
  AcademicTemplate,
  ChronologicalTemplate,
  CorporateTemplate,
  InfographicTemplate,
  PortfolioTemplate,
  ElegantTemplate,
  BoldTemplate
};