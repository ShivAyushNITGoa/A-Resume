import React from 'react';
import { ResumeData, Skills } from '@/utils/types';
import { formatDate } from '@/utils/helpers';

interface BoldTemplateProps {
  data: ResumeData;
  color?: string;
}

const BoldTemplate: React.FC<BoldTemplateProps> = ({ data, color = '#2563eb' }) => {
  const { personalInfo, skills, experience, education, projects, certifications } = data;

  // Handle skills that can be either string[] or Skills object
  const getSkillsList = () => {
    if (!skills) return [];
    
    if (Array.isArray(skills)) {
      return skills;
    } else {
      return [...(skills.hard || []), ...(skills.soft || [])];
    }
  };

  return (
    <div className="font-sans bg-white max-w-[800px] mx-auto">
      {/* Bold header with sidebar accent */}
      <div className="relative flex flex-col md:flex-row">
        {/* Colored sidebar accent */}
        <div 
          className="absolute top-0 left-0 bottom-0 w-4 md:w-16 h-full" 
          style={{ backgroundColor: color }}
        ></div>
        
        {/* Header content */}
        <div className="w-full pl-8 md:pl-24 pr-8 py-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-1">{personalInfo.name}</h1>
          <h2 className="text-xl font-semibold mb-6" style={{ color }}>{personalInfo.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
            <div className="space-y-1">
              {personalInfo.email && (
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center" style={{ color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <span>{personalInfo.email}</span>
                </div>
              )}
              
              {personalInfo.phone && (
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center" style={{ color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{personalInfo.phone}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              {personalInfo.location && (
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center" style={{ color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              )}
              
              {personalInfo.linkedin && (
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center" style={{ color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M22.225 0H1.77C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.77 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0zM7.1 20.41H3.558V8.967H7.1V20.41zM5.33 7.434c-1.146 0-2.064-0.926-2.064-2.063 0-1.138 0.92-2.063 2.064-2.063 1.14 0 2.064 0.925 2.064 2.063 0 1.137-0.925 2.062-2.064 2.062zM20.41 20.41h-3.54v-5.604c0-1.326-0.394-2.233-1.67-2.233-1.15 0-1.833 0.775-2.133 1.525-0.11 0.268-0.137 0.642-0.137 1.021v5.291H9.39V8.967h3.54v1.523c0.53-0.72 1.46-1.746 3.54-1.746 2.583 0 3.94 1.687 3.94 5.315V20.41z"/>
                    </svg>
                  </div>
                  <a href={personalInfo.linkedin} className="hover:underline" style={{ color }}>
                    LinkedIn
                  </a>
                </div>
              )}
              
              {personalInfo.website && (
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center" style={{ color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 010 11.856 0.75 0.75 0 01-.5.182H4.5v-1.464c0-.412.335-.75.75-.75h.01a3.246 3.246 0 003.234-3.01l.007-.095a3.256 3.256 0 00-3.251-3.467A0.75 0.75 0 005 8.574v-1.464a0.75 0.75 0 01.75-.75 0.704 0.704 0 01.512.189z" clipRule="evenodd" />
                      <path d="M7.5 14.25v-1.5a0.75 0.75 0 00-.75-.75H6v1.5h.75a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-.5V15h.5a.75.75 0 00.75-.75z" />
                    </svg>
                  </div>
                  <a href={personalInfo.website} className="hover:underline" style={{ color }}>
                    Portfolio
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="p-8">
        {/* Summary with accent border */}
        {personalInfo.summary && (
          <div className="mb-10 pl-4 border-l-4" style={{ borderColor: color }}>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}
        
        {/* Skills section */}
        {getSkillsList().length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color }}>
              <div 
                className="w-8 h-8 mr-3 flex items-center justify-center text-white rounded-md"
                style={{ backgroundColor: color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75-.75h6.75a.75.75 0 010 1.5H8.25a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h6.75a.75.75 0 010 1.5H8.25a.75.75 0 01-.75-.75zm7.5-12a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              </div>
              Skills
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {getSkillsList().map((skill, index) => (
                <span 
                  key={index} 
                  className="text-sm py-1 px-3 rounded-md font-medium"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Experience section */}
        {experience && experience.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color }}>
              <div 
                className="w-8 h-8 mr-3 flex items-center justify-center text-white rounded-md"
                style={{ backgroundColor: color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </div>
              Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{job.position}</h3>
                    <p 
                      className="text-sm py-1 px-3 inline-block rounded-full mt-1 md:mt-0 font-medium"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                    </p>
                  </div>
                  
                  <p className="text-base font-medium mb-3">{job.company}, {job.location}</p>
                  
                  <ul className="list-disc pl-5 space-y-1">
                    {job.description.split('\n').map((item, i) => item.trim() && (
                      <li key={i} className="text-gray-700">
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education section */}
        {education && education.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color }}>
              <div 
                className="w-8 h-8 mr-3 flex items-center justify-center text-white rounded-md"
                style={{ backgroundColor: color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </div>
              Education
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg hover:shadow-sm transition-shadow">
                  <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                  <p className="text-base mb-2">{edu.institution}, {edu.location}</p>
                  <p 
                    className="text-sm inline-block mb-2"
                    style={{ color }}
                  >
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </p>
                  
                  {edu.description && (
                    <p className="text-sm text-gray-700 mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Projects section */}
        {projects && projects.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color }}>
              <div 
                className="w-8 h-8 mr-3 flex items-center justify-center text-white rounded-md"
                style={{ backgroundColor: color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                </svg>
              </div>
              Projects
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border-l-4"
                  style={{ borderColor: color, backgroundColor: `${color}05` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    {project.date && <span className="text-sm text-gray-600">{project.date}</span>}
                  </div>
                  
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      style={{ color }}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Certifications section */}
        {certifications && certifications.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color }}>
              <div 
                className="w-8 h-8 mr-3 flex items-center justify-center text-white rounded-md"
                style={{ backgroundColor: color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="border p-3 rounded-lg hover:shadow-md transition-shadow"
                  style={{ borderColor: `${color}30` }}
                >
                  <h3 className="font-bold" style={{ color }}>{cert.name}</h3>
                  <p className="text-sm text-gray-700">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoldTemplate; 