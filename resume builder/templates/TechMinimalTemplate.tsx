import React from 'react';
import { ResumeData } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface TechMinimalTemplateProps {
  data: ResumeData;
}

const TechMinimalTemplate: React.FC<TechMinimalTemplateProps> = ({ data }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  return (
    <div className="p-8 max-w-[800px] mx-auto font-mono bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
        <h2 className="text-lg text-gray-700 mb-2">{personalInfo.title}</h2>
        <div className="flex flex-wrap text-sm text-gray-600 gap-x-4 gap-y-1">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.location && <p>{personalInfo.location}</p>}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          )}
          {personalInfo.website && (
            <a href={personalInfo.website} className="text-blue-600 hover:underline">
              Portfolio
            </a>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            $ cat summary.txt
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed font-mono">
            {personalInfo.summary}
          </p>
        </div>
      )}
      
      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            $ ls skills/
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded border border-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            $ ls experience/
          </h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="text-md font-bold">{job.position}</h3>
                <p className="text-xs text-gray-600 font-mono">
                  {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                </p>
              </div>
              <p className="text-sm text-gray-700 mb-1 font-semibold">{job.company}, {job.location}</p>
              <div className="text-sm">
                {job.description.split('\n').map((item, i) => item.trim() && (
                  <div key={i} className="mb-1 flex">
                    <span className="text-blue-600 mr-2">&gt;</span>
                    <span className="text-gray-700">{item.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            $ ls education/
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <h3 className="text-md font-bold">{edu.degree}</h3>
                <p className="text-xs text-gray-600 font-mono">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </p>
              </div>
              <p className="text-sm text-gray-700">{edu.institution}, {edu.location}</p>
              {edu.description && (
                <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            $ ls projects/
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex justify-between mb-1">
                  <h3 className="text-md font-bold">{project.title}</h3>
                  {project.date && <p className="text-xs text-gray-600 font-mono">{project.date}</p>}
                </div>
                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-xs text-blue-600 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    $ git clone {project.link}
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
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            $ ls certifications/
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <p className="text-sm font-bold">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.issuer} - {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="mt-8 pt-2 border-t border-gray-200 text-xs text-center text-gray-500 font-mono">
        $ echo "{personalInfo.name} | {personalInfo.email} | {personalInfo.phone}"
      </div>
    </div>
  );
};

export default TechMinimalTemplate; 