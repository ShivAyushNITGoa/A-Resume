import React from 'react';
import { ResumeData, Skills } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface TwoColumnTemplateProps {
  data: ResumeData;
  color?: string;
}

const TwoColumnTemplate: React.FC<TwoColumnTemplateProps> = ({ data, color = '#3b82f6' }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Handle skills that can be either string[] or Skills object
  const renderSkills = () => {
    if (!skills) return null;
    
    if (Array.isArray(skills)) {
      return (
        <ul className="list-disc pl-5 text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="mb-1 text-gray-700">{skill}</li>
          ))}
        </ul>
      );
    } else {
      // If it's a Skills object with hard and soft skills
      const allSkills = [...(skills.hard || []), ...(skills.soft || [])];
      return (
        <ul className="list-disc pl-5 text-sm">
          {allSkills.map((skill, index) => (
            <li key={index} className="mb-1 text-gray-700">{skill}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="p-8 max-w-[800px] mx-auto font-sans bg-white">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">{personalInfo.name}</h1>
        <h2 className="text-xl text-gray-700 mb-2">{personalInfo.title}</h2>
        <div className="flex flex-wrap justify-center text-sm text-gray-600 gap-x-4">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.location && <p>{personalInfo.location}</p>}
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
      
      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="md:w-1/3">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 pb-1 mb-2" style={{ borderColor: color }}>
                PROFILE
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          )}
          
          {/* Skills */}
          {skills && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 pb-1 mb-2" style={{ borderColor: color }}>
                SKILLS
              </h2>
              {renderSkills()}
            </div>
          )}
          
          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 pb-1 mb-2" style={{ borderColor: color }}>
                EDUCATION
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-md font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-700">{edu.institution}, {edu.location}</p>
                  <p className="text-xs text-gray-600 mb-1">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </p>
                  {edu.description && (
                    <p className="text-sm text-gray-700">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 pb-1 mb-2" style={{ borderColor: color }}>
                CERTIFICATIONS
              </h2>
              {certifications.map((cert, index) => (
                <div key={index} className="mb-2">
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.issuer} · {cert.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Right Column */}
        <div className="md:w-2/3">
          {/* Experience */}
          {experience && experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 pb-1 mb-2" style={{ borderColor: color }}>
                EXPERIENCE
              </h2>
              {experience.map((job, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-md font-semibold">{job.position}</h3>
                    <p className="text-xs text-gray-600">
                      {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">{job.company}, {job.location}</p>
                  <ul className="list-disc pl-5 text-sm">
                    {job.description.split('\n').map((item, i) => item.trim() && (
                      <li key={i} className="mb-1 text-gray-700">{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b-2 pb-1 mb-2" style={{ borderColor: color }}>
                PROJECTS
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-md font-semibold">{project.title}</h3>
                    {project.date && <p className="text-xs text-gray-600">{project.date}</p>}
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-xs hover:underline"
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
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 pt-2 border-t border-gray-200 text-xs text-center text-gray-500">
        {personalInfo.name} | {personalInfo.email} | {personalInfo.phone}
      </div>
    </div>
  );
};

export default TwoColumnTemplate; 