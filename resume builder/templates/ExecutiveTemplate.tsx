import React from 'react';
import { ResumeData } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface ExecutiveTemplateProps {
  data: ResumeData;
}

const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({ data }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  return (
    <div className="p-8 max-w-[800px] mx-auto font-serif bg-white">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold tracking-wider text-gray-900 uppercase mb-1">{personalInfo.name}</h1>
          <h2 className="text-xl text-gray-700 tracking-wide">{personalInfo.title}</h2>
        </div>
        <div className="flex justify-center text-sm text-gray-600 space-x-4 mt-2">
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.location && <p>{personalInfo.location}</p>}
          {personalInfo.linkedin && (
            <p>
              <a href={personalInfo.linkedin} className="text-blue-800 hover:underline">LinkedIn</a>
            </p>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 tracking-wider">Executive Profile</h2>
          <div className="text-sm text-gray-700 leading-relaxed italic border-l-4 border-gray-300 pl-4">
            {personalInfo.summary}
          </div>
        </div>
      )}
      
      {/* Core Competencies / Skills */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 tracking-wider">Core Competencies</h2>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-gray-700 mr-2"></div>
                <span className="text-sm text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 tracking-wider">Professional Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between items-baseline mb-1 border-b border-gray-300 pb-1">
                <h3 className="text-lg font-semibold text-gray-800">{job.position}</h3>
                <p className="text-sm text-gray-600 italic">
                  {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                </p>
              </div>
              <p className="text-md font-medium mb-2">{job.company}, {job.location}</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {job.description.split('\n').map((item, i) => item.trim() && (
                  <li key={i} className="text-gray-700">{item.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 tracking-wider">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-600 italic">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </p>
              </div>
              <p className="text-md">{edu.institution}, {edu.location}</p>
              {edu.description && (
                <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Notable Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 tracking-wider">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 p-3 rounded">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-md font-semibold text-gray-800">{project.title}</h3>
                  {project.date && <p className="text-xs text-gray-600 italic">{project.date}</p>}
                </div>
                <p className="text-sm text-gray-700">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-xs text-blue-800 hover:underline mt-1 inline-block"
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
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 tracking-wider">Certifications</h2>
          <div className="grid grid-cols-2 gap-2">
            {certifications.map((cert, index) => (
              <div key={index} className="text-sm">
                <p className="font-medium text-gray-800">{cert.name}</p>
                <p className="text-xs text-gray-600 italic">{cert.issuer} · {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="mt-8 pt-2 border-t border-gray-300 text-xs text-center text-gray-500">
        {personalInfo.name} · {personalInfo.title} · {personalInfo.phone} · {personalInfo.email}
      </div>
    </div>
  );
};

export default ExecutiveTemplate; 