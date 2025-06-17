import React from 'react';
import { ResumeData } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface AcademicTemplateProps {
  data: ResumeData;
}

const AcademicTemplate: React.FC<AcademicTemplateProps> = ({ data }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  return (
    <div className="p-8 max-w-[800px] mx-auto font-serif bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 uppercase mb-1">{personalInfo.name}</h1>
        <h2 className="text-xl text-gray-700 mb-2">{personalInfo.title}</h2>
        <div className="flex flex-wrap justify-center text-sm gap-4">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.location && <p>{personalInfo.location}</p>}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} className="text-blue-800 hover:underline">
              LinkedIn Profile
            </a>
          )}
          {personalInfo.website && (
            <a href={personalInfo.website} className="text-blue-800 hover:underline">
              Academic Profile
            </a>
          )}
        </div>
      </div>
      
      {/* Research Interests or Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Research Interests</h2>
          <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-gray-200 pl-4">
            {personalInfo.summary}
          </p>
        </div>
      )}
      
      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-semibold">{edu.degree}</h3>
                <p className="text-sm text-gray-600 italic">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </p>
              </div>
              <p className="text-sm text-gray-800 mb-1">{edu.institution}, {edu.location}</p>
              {edu.description && (
                <p className="text-sm text-gray-700 italic">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Academic Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Academic Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-semibold">{job.position}</h3>
                <p className="text-sm text-gray-600 italic">
                  {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                </p>
              </div>
              <p className="text-sm font-medium mb-1">{job.company}, {job.location}</p>
              <ul className="list-disc pl-5 text-sm">
                {job.description.split('\n').map((item, i) => item.trim() && (
                  <li key={i} className="mb-1 text-gray-700">{item.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {/* Publications and Research Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Publications & Research</h2>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index} className="pl-5 border-l border-gray-300">
                <h3 className="text-md font-semibold">{project.title}</h3>
                {project.date && <p className="text-sm text-gray-600 italic">{project.date}</p>}
                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-sm text-blue-800 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Skills and Research Methods */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Skills & Research Methods</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {skills.map((skill, index) => (
              <div key={index} className="text-sm text-gray-700">
                • {skill}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Certifications and Awards */}
      {certifications && certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2">Certifications & Awards</h2>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-baseline">
                <span className="text-gray-500 mr-2">•</span>
                <div>
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-600 italic">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="mt-8 pt-2 border-t border-gray-200 text-xs text-center text-gray-500">
        Curriculum Vitae - {personalInfo.name} ({formatDate(new Date().toISOString().split('T')[0])})
      </div>
    </div>
  );
};

export default AcademicTemplate; 