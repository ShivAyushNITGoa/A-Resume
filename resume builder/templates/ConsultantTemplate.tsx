import React from 'react';

interface ConsultantTemplateProps {
  data: ResumeData;
  backgroundColor?: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address?: string;
    location?: string;
    linkedin?: string;
    website?: string;
    photo?: string;
    about?: string;
    summary?: string;
  };
  experience: {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    responsibilities?: string[];
    description?: string;
    projects?: string[];
    clients?: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    fieldOfStudy?: string;
    location?: string;
    graduationYear?: string;
    startDate?: string;
    endDate?: string;
    current?: boolean;
    description?: string;
  }[];
  skills: {
    hard: string[];
    soft: string[];
    consulting?: string[];
  };
  projects?: {
    title: string;
    description: string;
    date?: string;
    link?: string;
    client?: string;
    outcome?: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    date: string;
  }[];
  achievements?: {
    date: string;
    description: string;
  }[];
}

const ConsultantTemplate: React.FC<ConsultantTemplateProps> = ({ data, backgroundColor = '#0a66c2' }) => {
  const {
    personalInfo,
    experience,
    education,
    skills,
    projects = [],
    certifications = [],
    achievements = []
  } = data;

  return (
    <div className="consultant-template bg-white text-gray-800 rounded shadow-lg w-full max-w-4xl mx-auto">
      {/* Header */}
      <header style={{ backgroundColor }} className="px-8 py-6 text-white rounded-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <h2 className="text-xl mt-1 opacity-90">{personalInfo.title}</h2>
          </div>
          <div className="flex flex-col text-sm space-y-1">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {(personalInfo.location || personalInfo.address) && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location || personalInfo.address}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8">
        {/* Professional Summary */}
        {personalInfo.summary && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Expertise/Skills */}
        {(skills.hard.length > 0 || skills.soft.length > 0 || (skills.consulting && skills.consulting.length > 0)) && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.consulting && skills.consulting.length > 0 && (
                <div>
                  <h4 className="font-medium text-base mb-2">Consulting Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.consulting.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm text-white" 
                        style={{ backgroundColor }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skills.hard.length > 0 && (
                <div>
                  <h4 className="font-medium text-base mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.hard.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 border rounded-full text-sm" 
                        style={{ borderColor: backgroundColor, color: backgroundColor }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skills.soft.length > 0 && (
                <div>
                  <h4 className="font-medium text-base mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 border rounded-full text-sm bg-gray-100" 
                        style={{ borderColor: 'transparent' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Professional Experience */}
        {experience.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="mb-4">
                  <div className="flex flex-col md:flex-row justify-between mb-1">
                    <div>
                      <h4 className="font-bold text-base">{job.position}</h4>
                      <div className="text-base">{job.company}</div>
                    </div>
                    <div className="text-sm text-gray-600 md:text-right mt-1 md:mt-0">
                      <div>{job.location}</div>
                      <div>
                        {job.startDate} - {job.current ? 'Present' : job.endDate}
                      </div>
                    </div>
                  </div>
                  
                  {job.description && (
                    <p className="text-gray-700 my-2">{job.description}</p>
                  )}
                  
                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1 mt-2">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {job.clients && job.clients.length > 0 && (
                    <div className="mt-2">
                      <span className="font-medium">Key Clients:</span>{' '}
                      {job.clients.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Highlights - ideal for consultants */}
        {projects.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
              Consulting Project Highlights
            </h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="pb-3">
                  <div className="flex flex-col md:flex-row justify-between mb-1">
                    <h4 className="font-bold text-base">
                      {project.title}
                      {project.client && <span className="font-normal"> - {project.client}</span>}
                    </h4>
                    {project.date && (
                      <div className="text-sm text-gray-600">{project.date}</div>
                    )}
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                  {project.outcome && (
                    <div className="mt-1 text-sm font-medium" style={{ color: backgroundColor }}>
                      Outcome: {project.outcome}
                    </div>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm mt-1 inline-block"
                      style={{ color: backgroundColor }}
                    >
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="font-bold">{edu.degree}</div>
                    <div>{edu.institution}</div>
                    {edu.location && (
                      <div className="text-sm text-gray-600">{edu.location}</div>
                    )}
                    <div className="text-sm text-gray-600">
                      {edu.startDate && edu.endDate ? 
                        `${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}` : 
                        edu.graduationYear
                      }
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-gray-600">{cert.issuer}</div>
                    </div>
                    {cert.date && (
                      <div className="text-sm text-gray-600">{cert.date}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <section className="mt-6">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b-2" style={{ borderColor: backgroundColor }}>
              Professional Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4">
                  {achievement.date && (
                    <div className="text-sm font-medium min-w-[80px]" style={{ color: backgroundColor }}>
                      {achievement.date}
                    </div>
                  )}
                  <div className="flex-grow">{achievement.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ConsultantTemplate; 