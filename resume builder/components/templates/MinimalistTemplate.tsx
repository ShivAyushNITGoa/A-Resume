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

interface MinimalistTemplateProps {
  resumeData: ResumeData;
}

const MinimalistTemplate: React.FC<MinimalistTemplateProps> = ({ resumeData }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } = resumeData;
  
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white text-gray-800 shadow-lg print:shadow-none">
      {/* Header */}
      <header className="mb-6 border-b-2 border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-center">{personalInfo.name}</h1>
        <div className="flex justify-center flex-wrap gap-4 mt-2 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.address && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personalInfo.address}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {workExperience && workExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">WORK EXPERIENCE</h2>
          {workExperience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{job.jobTitle}</h3>
                  <p className="text-sm">{job.company}, {job.location}</p>
                </div>
                <p className="text-sm">{job.startDate} - {job.endDate}</p>
              </div>
              <ul className="list-disc list-inside mt-1 text-sm pl-2">
                {job.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">EDUCATION</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm">{edu.institution}, {edu.location}</p>
                </div>
                <p className="text-sm">{edu.gradDate}</p>
              </div>
              {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{project.name}</h3>
                {project.link && (
                  <a href={project.link} className="text-blue-600 text-xs hover:underline" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">CERTIFICATIONS</h2>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-sm">{cert.date}</p>
              </div>
              <p className="text-sm">{cert.issuer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default MinimalistTemplate; 