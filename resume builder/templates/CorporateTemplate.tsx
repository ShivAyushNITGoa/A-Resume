import React from 'react';
import { ResumeData, Skills } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface CorporateTemplateProps {
  data: ResumeData;
  color?: string;
}

const CorporateTemplate: React.FC<CorporateTemplateProps> = ({ data, color = '#0f52ba' }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Handle skills that can be either string[] or Skills object
  const renderSkills = () => {
    if (!skills) return null;
    
    if (Array.isArray(skills)) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 mr-2" style={{ backgroundColor: color }}></div>
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      );
    } else {
      // If it's a Skills object with hard and soft skills
      const allSkills = [...(skills.hard || []), ...(skills.soft || [])];
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {allSkills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 mr-2" style={{ backgroundColor: color }}></div>
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="p-8 max-w-[800px] mx-auto font-sans bg-white">
      {/* Header with border and structured layout */}
      <div className="mb-6 pb-4 border-b-2 border-gray-400">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 uppercase">{personalInfo.name}</h1>
            <h2 className="text-xl text-gray-700">{personalInfo.title}</h2>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <p className="text-sm">{personalInfo.phone}</p>
            <p className="text-sm">{personalInfo.email}</p>
            <p className="text-sm">{personalInfo.location}</p>
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="text-sm hover:underline" style={{ color }}>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Professional Summary */}
      {personalInfo.summary && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 bg-gray-100 py-1 px-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      )}
      
      {/* Core Competencies / Skills in a structured table */}
      {skills && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 bg-gray-100 py-1 px-2">
            CORE COMPETENCIES
          </h2>
          {renderSkills()}
        </div>
      )}
      
      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 bg-gray-100 py-1 px-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <div>
                  <h3 className="text-md font-bold text-gray-800">{job.company}</h3>
                  <p className="text-md italic">{job.position}</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{job.location}</p>
                  <p>{formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-sm">
                {job.description.split('\n').map((item, i) => item.trim() && (
                  <li key={i} className="mb-1 text-gray-700">{item.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 bg-gray-100 py-1 px-2">
            EDUCATION
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3 flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-md font-bold">{edu.degree}</h3>
                <p className="text-sm">{edu.institution}, {edu.location}</p>
                {edu.description && (
                  <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                )}
              </div>
              <div className="text-sm text-gray-600">
                {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 bg-gray-100 py-1 px-2">
            KEY PROJECTS
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-md font-bold">{project.title}</h3>
                {project.date && <p className="text-sm text-gray-600">{project.date}</p>}
              </div>
              <p className="text-sm text-gray-700 mb-1">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-sm hover:underline"
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
      
      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 bg-gray-100 py-1 px-2">
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="border-l-2 pl-2" style={{ borderColor: color }}>
                <p className="font-bold text-gray-800 text-sm">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.issuer} • {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="mt-8 pt-2 border-t border-gray-300 text-xs text-center text-gray-500">
        References available upon request
      </div>
    </div>
  );
};

export default CorporateTemplate; 