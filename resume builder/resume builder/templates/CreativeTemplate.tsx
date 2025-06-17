import React from 'react';
import { ResumeData } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  return (
    <div className="p-8 max-w-[800px] mx-auto font-sans bg-white">
      {/* Header with Accent Color Bar */}
      <div className="relative pb-4 mb-6">
        <div className="absolute top-0 left-0 h-3 w-full bg-purple-600"></div>
        <div className="pt-5 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-purple-800 mb-1">{personalInfo.name}</h1>
            <h2 className="text-xl text-gray-700">{personalInfo.title}</h2>
          </div>
          <div className="text-right">
            <p className="text-sm mb-1">{personalInfo.email}</p>
            <p className="text-sm mb-1">{personalInfo.phone}</p>
            <p className="text-sm mb-1">{personalInfo.location}</p>
            {personalInfo.linkedin && (
              <p className="text-sm mb-1">
                <a href={personalInfo.linkedin} className="text-purple-600 hover:underline">LinkedIn</a>
              </p>
            )}
            {personalInfo.website && (
              <p className="text-sm">
                <a href={personalInfo.website} className="text-purple-600 hover:underline">Portfolio</a>
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold text-purple-700">SUMMARY</h2>
            <div className="flex-grow ml-3 h-px bg-purple-300"></div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}
      
      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold text-purple-700">SKILLS</h2>
            <div className="flex-grow ml-3 h-px bg-purple-300"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold text-purple-700">EXPERIENCE</h2>
            <div className="flex-grow ml-3 h-px bg-purple-300"></div>
          </div>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-md font-semibold">{job.position}</h3>
                <p className="text-xs text-gray-600">
                  {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                </p>
              </div>
              <p className="text-sm text-purple-600 mb-1">{job.company}, {job.location}</p>
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
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold text-purple-700">EDUCATION</h2>
            <div className="flex-grow ml-3 h-px bg-purple-300"></div>
          </div>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="text-md font-semibold">{edu.degree}</h3>
                <p className="text-xs text-gray-600">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </p>
              </div>
              <p className="text-sm text-purple-600">{edu.institution}, {edu.location}</p>
              {edu.description && (
                <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold text-purple-700">PROJECTS</h2>
            <div className="flex-grow ml-3 h-px bg-purple-300"></div>
          </div>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-md font-semibold">{project.title}</h3>
                {project.date && <p className="text-xs text-gray-600">{project.date}</p>}
              </div>
              <p className="text-sm text-gray-700 mb-1">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-xs text-purple-600 hover:underline"
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
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold text-purple-700">CERTIFICATIONS</h2>
            <div className="flex-grow ml-3 h-px bg-purple-300"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="p-3 bg-purple-50 rounded-md border border-purple-100 text-sm">
                <p className="font-medium text-purple-800">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.issuer} · {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer with contact info for page 2+ */}
      <div className="mt-8 pt-2 border-t border-purple-200 text-xs text-center text-gray-500">
        {personalInfo.name} · {personalInfo.phone} · {personalInfo.email}
      </div>
    </div>
  );
};

export default CreativeTemplate; 