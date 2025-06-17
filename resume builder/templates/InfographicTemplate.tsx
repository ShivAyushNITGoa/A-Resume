import React from 'react';
import { ResumeData, Skills } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface InfographicTemplateProps {
  data: ResumeData;
  color?: string;
}

const InfographicTemplate: React.FC<InfographicTemplateProps> = ({ data, color = '#6366f1' }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Handle skills that can be either string[] or Skills object
  const getAllSkills = () => {
    if (!skills) return [];
    
    if (Array.isArray(skills)) {
      return skills;
    } else {
      // If it's a Skills object with hard and soft skills
      return [...(skills.hard || []), ...(skills.soft || [])];
    }
  };

  // Group skills into columns for better visual display
  const getSkillColumns = () => {
    const allSkills = getAllSkills();
    const skillCount = allSkills.length;
    const columns = 2; // Number of columns
    const itemsPerColumn = Math.ceil(skillCount / columns);
    
    const skillColumns = [];
    for (let i = 0; i < columns; i++) {
      skillColumns.push(allSkills.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    
    return skillColumns;
  };

  return (
    <div className="p-6 max-w-[800px] mx-auto bg-white">
      {/* Header with colorful background and circular photo */}
      <div className="relative rounded-lg overflow-hidden mb-8" style={{ backgroundColor: color }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-10 -ml-16 -mb-16"></div>
        
        <div className="flex flex-col md:flex-row items-center p-8 text-white">
          {personalInfo.photo && (
            <div className="mb-6 md:mb-0 md:mr-8">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight mb-2">{personalInfo.name}</h1>
            <h2 className="text-xl opacity-90 mb-4">{personalInfo.title}</h2>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              {personalInfo.email && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <span>LinkedIn</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="col-span-1">
          {/* Profile summary */}
          {personalInfo.summary && (
            <div className="mb-8">
              <h3 className="text-lg font-bold relative mb-4 pb-2">
                <span className="relative z-10">PROFILE</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: color }}></span>
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">{personalInfo.summary}</p>
            </div>
          )}
          
          {/* Skills with visual bars */}
          {getAllSkills().length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold relative mb-4 pb-2">
                <span className="relative z-10">SKILLS</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: color }}></span>
              </h3>
              <div className="space-y-3">
                {getSkillColumns()[0]?.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill}</span>
                      <span className="text-gray-500">{90 - (idx * 5)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="rounded-full h-2" 
                        style={{ 
                          width: `${90 - (idx * 5)}%`,
                          backgroundColor: color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold relative mb-4 pb-2">
                <span className="relative z-10">EDUCATION</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: color }}></span>
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 pl-4 pb-2 relative" style={{ borderColor: color }}>
                    <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1" style={{ backgroundColor: color }}></div>
                    <h4 className="font-bold text-sm">{edu.degree}</h4>
                    <p className="text-sm text-gray-700">{edu.institution}, {edu.location}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </p>
                    {edu.description && (
                      <p className="text-xs text-gray-600 mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div>
              <h3 className="text-lg font-bold relative mb-4 pb-2">
                <span className="relative z-10">CERTIFICATIONS</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: color }}></span>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: color }}></div>
                    <div>
                      <p className="text-sm font-medium">{cert.name}</p>
                      <p className="text-xs text-gray-500">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right column (spans 2) */}
        <div className="col-span-1 md:col-span-2">
          {/* Experience with timeline */}
          {experience && experience.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold relative mb-6 pb-2">
                <span className="relative z-10">PROFESSIONAL EXPERIENCE</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: color }}></span>
              </h3>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 pl-6 pb-6 relative" style={{ borderColor: index % 2 === 0 ? color : '#9ca3af' }}>
                    <div 
                      className="absolute w-4 h-4 rounded-full -left-[9px] top-0 flex items-center justify-center"
                      style={{ backgroundColor: 'white', border: `2px solid ${index % 2 === 0 ? color : '#9ca3af'}` }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: index % 2 === 0 ? color : '#9ca3af' }}></div>
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-base">{job.position}</h4>
                        <p className="text-sm text-gray-700">{job.company}, {job.location}</p>
                      </div>
                      <div 
                        className="text-xs px-3 py-1 rounded-full mt-1 md:mt-0"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                      </div>
                    </div>
                    
                    <ul className="mt-3 space-y-2">
                      {job.description.split('\n').map((item, i) => item.trim() && (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-1" viewBox="0 0 20 20" fill={color}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Projects with cards */}
          {projects && projects.length > 0 && (
            <div>
              <h3 className="text-lg font-bold relative mb-6 pb-2">
                <span className="relative z-10">PROJECTS</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: color }}></span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-base mb-2">{project.title}</h4>
                    {project.date && <p className="text-xs text-gray-500 mb-2">{project.date}</p>}
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-xs font-medium inline-flex items-center hover:underline"
                        style={{ color }}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfographicTemplate; 