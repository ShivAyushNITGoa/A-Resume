import React from 'react';
import { ResumeData, Skills } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface PortfolioTemplateProps {
  data: ResumeData;
  color?: string;
}

const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({ data, color = '#14b8a6' }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Handle skills that can be either string[] or Skills object
  const getSkillsList = () => {
    if (!skills) return [];
    
    if (Array.isArray(skills)) {
      return skills;
    } else {
      // If it's a Skills object with hard and soft skills
      return [...(skills.hard || []), ...(skills.soft || [])];
    }
  };

  return (
    <div className="font-sans bg-white max-w-[800px] mx-auto">
      {/* Hero header with accent color background */}
      <div 
        className="p-8 py-16 text-white relative overflow-hidden text-center" 
        style={{ backgroundColor: color }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -mt-20 -mr-20"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-5 rounded-full -mb-20 -ml-20"></div>
        
        <div className="relative z-10">
          {personalInfo.photo && (
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white mx-auto mb-6 shadow-xl">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold mb-2 tracking-tight">{personalInfo.name}</h1>
          <h2 className="text-xl font-light mb-6 opacity-90">{personalInfo.title}</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-lg mx-auto">
            {personalInfo.email && (
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {personalInfo.email}
              </div>
            )}
            
            {personalInfo.phone && (
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {personalInfo.phone}
              </div>
            )}
            
            {personalInfo.location && (
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6569 16.6569L13.4142 20.8995C12.6332 21.6805 11.3668 21.6805 10.5858 20.8995L6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {personalInfo.location}
              </div>
            )}
            
            {personalInfo.website && (
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.6001 9H20.4001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.6001 15H20.4001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.5 3C9.625 7.8 9.625 16.2 11.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 3C14.375 7.8 14.375 16.2 12.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {personalInfo.website}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content with subtle grid background */}
      <div className="p-8 bg-gray-50 bg-opacity-50 bg-grid-pattern">
        {/* Summary section */}
        {personalInfo.summary && (
          <div className="mb-10 max-w-2xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}
        
        {/* Projects showcase - the main focus of this template */}
        {projects && projects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="relative inline-block">
                PORTFOLIO
                <span className="absolute bottom-0 left-0 w-full h-1 rounded" style={{ backgroundColor: color }}></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Project image placeholder (in a real app, you'd use actual project images) */}
                  <div 
                    className="h-48 flex items-center justify-center text-white" 
                    style={{ 
                      backgroundColor: `${color}${index % 2 === 0 ? '' : '99'}`,
                      backgroundImage: `radial-gradient(circle at ${index % 3 === 0 ? 'top left' : index % 3 === 1 ? 'bottom right' : 'center'}, ${color}90, ${color})`
                    }}
                  >
                    <div className="text-center px-4">
                      <div className="text-2xl font-bold">{project.title}</div>
                      {project.date && <div className="text-sm opacity-80">{project.date}</div>}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="inline-flex items-center text-sm font-medium hover:underline"
                        style={{ color }}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Experience timeline */}
        {experience && experience.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="relative inline-block">
                EXPERIENCE
                <span className="absolute bottom-0 left-0 w-full h-1 rounded" style={{ backgroundColor: color }}></span>
              </span>
            </h2>
            
            <div className="relative border-l-2 border-gray-200 ml-3 pl-8 space-y-8 mb-8">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div 
                    className="absolute w-6 h-6 rounded-full -left-[42px] flex items-center justify-center"
                    style={{ backgroundColor: 'white', border: `2px solid ${color}` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold">{job.position}</h3>
                    <div className="flex flex-wrap justify-between items-start">
                      <p className="text-gray-700">{job.company}, {job.location}</p>
                      <p 
                        className="text-sm px-3 py-1 rounded-full" 
                        style={{ backgroundColor: `${color}20`, color: color }}
                      >
                        {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                      </p>
                    </div>
                    
                    <ul className="mt-3 text-sm space-y-2 text-gray-700">
                      {job.description.split('\n').map((item, i) => item.trim() && (
                        <li key={i} className="flex items-start">
                          <span className="mr-2" style={{ color }}>•</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Skills & Education in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          {getSkillsList().length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                <span className="relative inline-block">
                  SKILLS
                  <span className="absolute bottom-0 left-0 w-full h-1 rounded" style={{ backgroundColor: color }}></span>
                </span>
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {getSkillsList().map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: `${color}20`, color: color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                <span className="relative inline-block">
                  EDUCATION
                  <span className="absolute bottom-0 left-0 w-full h-1 rounded" style={{ backgroundColor: color }}></span>
                </span>
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="relative inline-block">
                CERTIFICATIONS
                <span className="absolute bottom-0 left-0 w-full h-1 rounded" style={{ backgroundColor: color }}></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="border rounded-md p-4 hover:shadow-md transition-shadow"
                  style={{ borderColor: `${color}50` }}
                >
                  <h3 className="font-bold text-base" style={{ color }}>{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="p-4 text-center text-sm text-gray-500">
        <p>{personalInfo.name} • {personalInfo.email} • {personalInfo.phone}</p>
      </div>
    </div>
  );
};

export default PortfolioTemplate; 