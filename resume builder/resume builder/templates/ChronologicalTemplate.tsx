import React from 'react';
import { ResumeData } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface ChronologicalTemplateProps {
  data: ResumeData;
}

const ChronologicalTemplate: React.FC<ChronologicalTemplateProps> = ({ data }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;
  
  // Sort experience chronologically (most recent first)
  const sortedExperience = [...(experience || [])].sort((a, b) => {
    const dateA = a.current ? new Date() : new Date(a.endDate);
    const dateB = b.current ? new Date() : new Date(b.endDate);
    return dateB.getTime() - dateA.getTime();
  });
  
  // Sort education chronologically (most recent first)
  const sortedEducation = [...(education || [])].sort((a, b) => {
    const dateA = a.current ? new Date() : new Date(a.endDate);
    const dateB = b.current ? new Date() : new Date(b.endDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="p-8 max-w-[800px] mx-auto font-sans bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">{personalInfo.name}</h1>
        <div className="flex justify-between items-end">
          <h2 className="text-lg text-gray-600">{personalInfo.title}</h2>
          <div className="text-right text-sm">
            <div>{personalInfo.phone}</div>
            <div>{personalInfo.email}</div>
            <div>{personalInfo.location}</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 mt-2"></div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {sortedExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">WORK EXPERIENCE</h2>
          <div className="space-y-4">
            {sortedExperience.map((job, index) => (
              <div key={index} className="relative pl-6 pb-4">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-400 rounded-full"></div>
                {/* Timeline line */}
                {index < sortedExperience.length - 1 && (
                  <div className="absolute left-1.5 top-3 w-px h-full bg-gray-300"></div>
                )}
                
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-md font-semibold">{job.position}</h3>
                  <p className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                  </p>
                </div>
                <p className="text-sm text-gray-700 mb-2">{job.company}, {job.location}</p>
                <ul className="list-disc pl-5 text-sm">
                  {job.description.split('\n').map((item, i) => item.trim() && (
                    <li key={i} className="mb-1 text-gray-700">{item.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Education */}
      {sortedEducation.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">EDUCATION</h2>
          <div className="space-y-4">
            {sortedEducation.map((edu, index) => (
              <div key={index} className="relative pl-6 pb-4">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-400 rounded-full"></div>
                {/* Timeline line */}
                {index < sortedEducation.length - 1 && (
                  <div className="absolute left-1.5 top-3 w-px h-full bg-gray-300"></div>
                )}
                
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-md font-semibold">{edu.degree}</h3>
                  <p className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </p>
                </div>
                <p className="text-sm text-gray-700 mb-1">{edu.institution}, {edu.location}</p>
                {edu.description && (
                  <p className="text-sm text-gray-700">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">PROJECTS</h2>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-md font-semibold">{project.title}</h3>
                  {project.date && <p className="text-xs text-gray-600">{project.date}</p>}
                </div>
                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-xs text-blue-600 hover:underline"
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
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">CERTIFICATIONS</h2>
          <div className="grid grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="mt-8 pt-2 border-t border-gray-200 text-xs text-center text-gray-500">
        {personalInfo.name} · {personalInfo.email} · {personalInfo.phone}
      </div>
    </div>
  );
};

export default ChronologicalTemplate; 