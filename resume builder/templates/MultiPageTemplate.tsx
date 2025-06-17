import React from 'react';
import { ResumeData } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface MultiPageTemplateProps {
  data: ResumeData;
}

const MultiPageTemplate: React.FC<MultiPageTemplateProps> = ({ data }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Page header component for consistent styling across pages
  const PageHeader = () => (
    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="text-white text-xl font-bold tracking-wide p-4 text-center">
        {personalInfo.name.toUpperCase()} - {personalInfo.title}
      </div>
    </div>
  );

  // Page footer component for page numbers and contact info
  const PageFooter = ({ pageNumber }: { pageNumber: number }) => (
    <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-100 flex justify-between items-center px-4 text-xs text-gray-600">
      <div>{personalInfo.email} | {personalInfo.phone}</div>
      <div>Page {pageNumber}</div>
    </div>
  );

  return (
    <div className="font-sans bg-white">
      {/* Page 1 */}
      <div className="p-8 pt-20 pb-12 max-w-[800px] mx-auto min-h-[1100px] relative page">
        <PageHeader />
        
        {/* Profile Photo Placeholder */}
        <div className="flex mb-8 mt-6">
          <div className="mr-6">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Photo</span>
            </div>
          </div>
          
          {/* Summary */}
          {personalInfo.summary && (
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
                PROFILE
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mb-8 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
            CONTACT INFORMATION
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <span className="font-medium mr-2">Location:</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Email:</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Phone:</span>
              <span>{personalInfo.phone}</span>
            </div>
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <span className="font-medium mr-2">LinkedIn:</span>
                <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">Profile</a>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Website:</span>
                <a href={personalInfo.website} className="text-blue-600 hover:underline">Portfolio</a>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
              SKILLS & EXPERTISE
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="flex">
                  <div className="w-1/4 pr-4">
                    <p className="text-sm text-gray-600">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="text-md font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-sm text-gray-700">{edu.institution}, {edu.location}</p>
                    {edu.description && (
                      <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <PageFooter pageNumber={1} />
      </div>

      {/* Page 2 */}
      <div className="p-8 pt-20 pb-12 max-w-[800px] mx-auto min-h-[1100px] relative page">
        <PageHeader />
        
        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-8 mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="flex">
                  <div className="w-1/4 pr-4">
                    <p className="text-sm text-gray-600">
                      {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                    </p>
                    <p className="text-sm font-medium text-gray-700 mt-1">{job.location}</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="text-md font-semibold text-gray-800">{job.position}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-2">{job.company}</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {job.description.split('\n').map((item, i) => item.trim() && (
                        <li key={i} className="text-gray-700">{item.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <PageFooter pageNumber={2} />
      </div>

      {/* Page 3 (if needed) */}
      {(projects && projects.length > 0) || (certifications && certifications.length > 0) ? (
        <div className="p-8 pt-20 pb-12 max-w-[800px] mx-auto min-h-[1100px] relative page">
          <PageHeader />
          
          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className="mb-8 mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-1">
                KEY PROJECTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-md font-bold text-gray-800">{project.title}</h3>
                      {project.date && <p className="text-xs text-gray-600">{project.date}</p>}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-xs text-blue-600 hover:underline flex items-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
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
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-1">
                CERTIFICATIONS & LICENSES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 border-l-4 border-blue-600 pl-3 py-2">
                    <p className="font-medium text-gray-800">{cert.name}</p>
                    <p className="text-xs text-gray-600">{cert.issuer} · {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <PageFooter pageNumber={3} />
        </div>
      ) : null}
    </div>
  );
};

export default MultiPageTemplate; 