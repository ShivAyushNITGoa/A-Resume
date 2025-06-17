import React from 'react';

type ResumeData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  workExperience: Array<{
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    gradDate: string;
    gpa?: string;
  }>;
  skills: string[];
  projects?: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
};

interface CreativeTemplateProps {
  resumeData: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ resumeData }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } = resumeData;
  
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white text-gray-800 shadow-lg print:shadow-none">
      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="col-span-4 bg-purple-700 text-white p-6 min-h-screen print:min-h-0">
          {/* Profile section */}
          <div className="mb-10 text-center">
            <div className="w-32 h-32 mx-auto bg-white rounded-full mb-4 flex items-center justify-center overflow-hidden border-4 border-white">
              {/* This could be a profile image or initials */}
              <div className="text-purple-700 text-4xl font-bold">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-1">{personalInfo.name}</h1>
            <p className="text-purple-200 text-sm">{workExperience[0]?.jobTitle || 'Professional'}</p>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b border-purple-500 pb-1">CONTACT</h2>
            <ul className="space-y-3">
              {personalInfo.email && (
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">{personalInfo.email}</span>
                </li>
              )}
              {personalInfo.phone && (
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">{personalInfo.phone}</span>
                </li>
              )}
              {personalInfo.address && (
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{personalInfo.address}</span>
                </li>
              )}
              {personalInfo.linkedin && (
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-sm">{personalInfo.linkedin}</span>
                </li>
              )}
              {personalInfo.website && (
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 4a6 6 0 00-6 6h2a4 4 0 014-4v-2zm0 12a6 6 0 006-6h-2a4 4 0 01-4 4v2zm0-12a6 6 0 016 6h-2a4 4 0 00-4-4V4zm0 12a6 6 0 01-6-6h2a4 4 0 004 4v2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{personalInfo.website}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 border-b border-purple-500 pb-1">SKILLS</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-purple-800 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 border-b border-purple-500 pb-1">EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold text-sm">{edu.degree}</h3>
                  <p className="text-purple-200 text-xs">{edu.institution}</p>
                  <p className="text-purple-300 text-xs">{edu.gradDate}</p>
                  {edu.gpa && <p className="text-purple-300 text-xs">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 border-b border-purple-500 pb-1">CERTIFICATIONS</h2>
              {certifications.map((cert, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-bold text-sm">{cert.name}</h3>
                  <p className="text-purple-200 text-xs">{cert.issuer} | {cert.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="col-span-8 p-8">
          {/* Summary */}
          {summary && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-purple-700">ABOUT ME</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-11">{summary}</p>
            </div>
          )}

          {/* Work Experience */}
          {workExperience && workExperience.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-purple-700">EXPERIENCE</h2>
              </div>
              <div className="pl-11">
                {workExperience.map((job, index) => (
                  <div key={index} className="mb-6 relative pb-6 border-l-2 border-purple-200 pl-6 last:border-0 last:pb-0">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-700"></div>
                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                      <h3 className="font-bold text-lg text-gray-800">{job.jobTitle}</h3>
                      <p className="text-purple-700 font-medium">{job.startDate} - {job.endDate}</p>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{job.company}, {job.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-purple-700">PROJECTS</h2>
              </div>
              <div className="pl-11 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-purple-700">{project.name}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          className="text-purple-600 text-xs hover:underline inline-flex items-center" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-gray-700 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">{tech}</span>
                      ))}
                    </div>
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

export default CreativeTemplate; 