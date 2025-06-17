import React from 'react';
import { ResumeData, Skills } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface ElegantTemplateProps {
  data: ResumeData;
  color?: string;
}

const ElegantTemplate: React.FC<ElegantTemplateProps> = ({ data, color = '#4b5563' }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Handle skills that can be either string[] or Skills object
  const getSkillsList = () => {
    if (!skills) return [];
    
    if (Array.isArray(skills)) {
      return skills;
    } else {
      return [...(skills.hard || []), ...(skills.soft || [])];
    }
  };

  return (
    <div className="font-serif bg-white max-w-[800px] mx-auto">
      {/* Elegant header with initials accent */}
      <div className="relative pt-12 pb-8 px-10 border-b border-gray-200">
        {/* Initials background accent */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 opacity-5 select-none">
          <div className="text-[180px] font-bold tracking-tighter text-center" style={{ color }}>
            {personalInfo.name.split(' ').map(name => name[0]).join('')}
          </div>
        </div>
        
        <div className="relative text-center">
          <h1 className="text-4xl font-light tracking-wide uppercase mb-2">
            {personalInfo.name}
          </h1>
          <h2 className="text-lg font-normal tracking-widest uppercase mb-6" style={{ color }}>
            {personalInfo.title}
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            {personalInfo.email && (
              <div>{personalInfo.email}</div>
            )}
            {personalInfo.phone && (
              <div>{personalInfo.phone}</div>
            )}
            {personalInfo.location && (
              <div>{personalInfo.location}</div>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="hover:underline" style={{ color }}>
                LinkedIn
              </a>
            )}
            {personalInfo.website && (
              <a href={personalInfo.website} className="hover:underline" style={{ color }}>
                Portfolio
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="px-10 py-8">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-10">
            <h3 className="text-lg uppercase font-light tracking-wider mb-4 pb-1 border-b" style={{ borderColor: color, color }}>
              Profile
            </h3>
            <p className="text-gray-700 leading-relaxed italic">
              {personalInfo.summary}
            </p>
          </div>
        )}
        
        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-10">
            <h3 className="text-lg uppercase font-light tracking-wider mb-4 pb-1 border-b" style={{ borderColor: color, color }}>
              Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index}>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h4 className="text-base font-semibold">{job.position}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDate(job.startDate)} – {job.current ? 'Present' : formatDate(job.endDate)}
                    </span>
                  </div>
                  
                  <p className="text-sm mb-3" style={{ color }}>
                    {job.company}{job.location ? `, ${job.location}` : ''}
                  </p>
                  
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    {job.description.split('\n').map((item, i) => item.trim() && (
                      <li key={i}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Two column layout for education and skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h3 className="text-lg uppercase font-light tracking-wider mb-4 pb-1 border-b" style={{ borderColor: color, color }}>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex flex-wrap justify-between items-baseline mb-1">
                      <h4 className="text-base font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-gray-500">
                        {formatDate(edu.startDate)} – {edu.current ? 'Present' : formatDate(edu.endDate)}
                      </span>
                    </div>
                    
                    <p className="text-sm mb-1" style={{ color }}>
                      {edu.institution}{edu.location ? `, ${edu.location}` : ''}
                    </p>
                    
                    {edu.description && (
                      <p className="text-sm text-gray-700">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Skills */}
          {getSkillsList().length > 0 && (
            <div>
              <h3 className="text-lg uppercase font-light tracking-wider mb-4 pb-1 border-b" style={{ borderColor: color, color }}>
                Expertise
              </h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {getSkillsList().map((skill, index) => (
                  <div key={index} className="flex items-baseline">
                    <span className="mr-2 text-xs" style={{ color }}>■</span>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg uppercase font-light tracking-wider mb-4 pb-1 border-b" style={{ borderColor: color, color }}>
              Selected Projects
            </h3>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h4 className="text-base font-semibold">{project.title}</h4>
                    {project.date && (
                      <span className="text-sm text-gray-500">{project.date}</span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-xs inline-block"
                      style={{ color }}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg uppercase font-light tracking-wider mb-4 pb-1 border-b" style={{ borderColor: color, color }}>
              Certifications
            </h3>
            
            <div className="flex flex-wrap gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-2">
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-500">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="mt-4 border-t border-gray-200 px-10 py-4">
        <div className="text-xs text-center text-gray-500">
          <p>{personalInfo.name} • {personalInfo.phone} • {personalInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ElegantTemplate; 