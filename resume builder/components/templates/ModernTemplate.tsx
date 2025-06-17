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

interface ModernTemplateProps {
  resumeData: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ resumeData }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } = resumeData;
  
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white text-gray-800 shadow-lg print:shadow-none">
      {/* Header with accent color */}
      <header className="bg-blue-600 text-white p-8 rounded-t-lg">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-1">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
            )}
          </div>
          <div className="space-y-1">
            {personalInfo.address && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{personalInfo.address}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* Left column */}
        <div className="md:col-span-1 space-y-8">
          {/* Skills section */}
          {skills && skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-4">SKILLS</h2>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education section */}
          {education && education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-4">EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm">{edu.institution}</p>
                  <p className="text-sm text-gray-600">{edu.location}</p>
                  <p className="text-sm">{edu.gradDate}</p>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Certifications section */}
          {certifications && certifications.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-4">CERTIFICATIONS</h2>
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm">{cert.issuer}</p>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right column (2/3 width) */}
        <div className="md:col-span-2 space-y-8">
          {/* Summary section */}
          {summary && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-4">PROFESSIONAL SUMMARY</h2>
              <p className="text-base leading-relaxed">{summary}</p>
            </section>
          )}

          {/* Experience section */}
          {workExperience && workExperience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-4">WORK EXPERIENCE</h2>
              {workExperience.map((job, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="font-bold text-lg">{job.jobTitle}</h3>
                      <p className="text-gray-800">{job.company} | {job.location}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 md:mt-0">{job.startDate} - {job.endDate}</p>
                  </div>
                  <ul className="list-disc list-inside mt-3 text-base space-y-1 pl-4">
                    {job.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects section */}
          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-4">PROJECTS</h2>
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{project.name}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          className="text-blue-600 text-sm hover:underline flex items-center" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          View Project
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate; 