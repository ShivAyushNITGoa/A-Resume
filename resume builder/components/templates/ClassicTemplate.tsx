import React from 'react';
import { ResumeData, Skills } from '@/utils/types';

interface ClassicTemplateProps {
  data: ResumeData;
  color?: string;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ 
  data, 
  color = '#333333' 
}) => {
  const { 
    personalInfo,
    education,
    experience,
    skills,
    projects,
    certifications
  } = data;

  return (
    <div className="w-full max-w-[800px] mx-auto bg-white shadow-lg font-serif">
      {/* Header */}
      <header 
        className="px-8 py-6 text-white"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">{personalInfo.name}</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
          {personalInfo.email && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.location}
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              {personalInfo.linkedin}
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {personalInfo.website}
            </div>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Summary Section */}
        {personalInfo.summary && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 pb-1 border-b-2" style={{ borderColor: color }}>
              Professional Summary
            </h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience Section */}
        {experience && experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 pb-1 border-b-2" style={{ borderColor: color }}>
              Work Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold">{exp.position}</h3>
                      <h4 className="text-gray-700">{exp.company}{exp.location && `, ${exp.location}`}</h4>
                    </div>
                    <div className="text-sm text-gray-600 whitespace-nowrap">
                      {exp.startDate && `${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}`}
                    </div>
                  </div>
                  <ul className="list-disc ml-5 text-gray-700">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {education && education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 pb-1 border-b-2" style={{ borderColor: color }}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{edu.degree}</h3>
                      <h4 className="text-gray-700">{edu.institution}{edu.location && `, ${edu.location}`}</h4>
                    </div>
                    <div className="text-sm text-gray-600 whitespace-nowrap">
                      {edu.graduationYear}
                    </div>
                  </div>
                  {edu.fieldOfStudy && <p className="text-gray-700 mt-1">{edu.fieldOfStudy}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 pb-1 border-b-2" style={{ borderColor: color }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.hard.map((skill, index) => (
                <span 
                  key={`hard-${index}`}
                  className="px-3 py-1 rounded text-sm"
                  style={{ backgroundColor: `${color}20` }}
                >
                  {skill}
                </span>
              ))}
              {skills.soft.map((skill, index) => (
                <span 
                  key={`soft-${index}`}
                  className="px-3 py-1 rounded text-sm"
                  style={{ backgroundColor: `${color}20` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 pb-1 border-b-2" style={{ borderColor: color }}>
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">
                        View Project
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {certifications && certifications.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase mb-3 pb-1 border-b-2" style={{ borderColor: color }}>
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{cert.name}</h3>
                    {cert.issuer && <p className="text-gray-700">{cert.issuer}</p>}
                  </div>
                  {cert.date && <div className="text-sm text-gray-600">{cert.date}</div>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ClassicTemplate; 