import React from 'react';
import { ResumeData } from '@/utils/types';

interface CreativeTemplateProps {
  data: ResumeData;
  color?: string;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ 
  data,
  color = "#ec4899" 
}) => {
  const { personalInfo, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-gray-800">
      {/* Sidebar */}
      <div className="flex flex-col md:flex-row">
        <div 
          className="w-full md:w-1/3 text-white p-8"
          style={{ backgroundColor: color }}
        >
          {/* Profile */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl opacity-90">{personalInfo.title}</p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-bold mb-4 border-b border-white pb-1">CONTACT</h2>
            
            {personalInfo.email && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </div>
            )}
            
            {personalInfo.phone && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {personalInfo.phone}
              </div>
            )}
            
            {personalInfo.location && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </div>
            )}
            
            {personalInfo.linkedin && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                {personalInfo.linkedin}
              </div>
            )}
            
            {personalInfo.website && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {personalInfo.website}
              </div>
            )}
          </div>
          
          {/* Skills Section */}
          {skills && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 border-b border-white pb-1">SKILLS</h2>
              <div className="grid grid-cols-1 gap-2">
                {skills.hard.map((skill, index) => (
                  <div 
                    key={`hard-${index}`} 
                    className="bg-white bg-opacity-10 p-2 rounded"
                  >
                    {skill}
                  </div>
                ))}
                {skills.soft.map((skill, index) => (
                  <div 
                    key={`soft-${index}`} 
                    className="bg-white bg-opacity-10 p-2 rounded"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education Section */}
          {education && education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4 border-b border-white pb-1">EDUCATION</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p>{edu.institution}</p>
                    <p className="text-sm opacity-80">{edu.graduationYear}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-2/3 p-8">
          {/* Summary */}
          {personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color }}>ABOUT ME</h2>
              <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}
          
          {/* Experience */}
          {experience && experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color }}>EXPERIENCE</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <span className="text-gray-600">{job.startDate} - {job.current ? 'Present' : job.endDate}</span>
                    </div>
                    <p className="text-lg mb-2" style={{ color }}>{job.company} | {job.location}</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects && projects.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color }}>PROJECTS</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 pl-4" style={{ borderColor: color }}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm"
                          style={{ color }}
                        >
                          View Project
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color }}>CERTIFICATIONS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded shadow-sm">
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-gray-700">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm">{cert.date}</p>
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

export default CreativeTemplate; 