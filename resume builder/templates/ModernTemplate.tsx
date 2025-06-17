"use client";

import React from 'react';

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    photo?: string;
    about: string;
  };
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }[];
  education: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    graduationYear: string;
  }[];
  skills: {
    hard: string[];
    soft: string[];
  };
  achievements: {
    date: string;
    description: string;
  }[];
}

interface ModernTemplateProps {
  data: ResumeData;
  color: string;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data, color }) => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="w-full h-full flex flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <div 
        className="p-10"
        style={{ backgroundColor: color || '#3b82f6' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {data.personalInfo.photo && (
            <div className="shrink-0">
              <img 
                src={data.personalInfo.photo} 
                alt={data.personalInfo.name} 
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.personalInfo.name}</h1>
            <h2 className="text-xl md:text-2xl font-light mb-4">{data.personalInfo.title}</h2>
            <p className="max-w-2xl">{data.personalInfo.about}</p>
          </div>
        </div>
      </div>
      
      {/* Contact Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-4 px-6">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.address && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{data.personalInfo.address}</span>
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zm1.946 0h3.971c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556zm-.245 7.118A6.004 6.004 0 015.917 11H3.97A6.003 6.003 0 005.784 16.118zM15.916 9a6.004 6.004 0 00-1.784-4.118c.454 1.147.748 2.572.837 4.118h.947zm-12.873 0h-.947A6.003 6.003 0 015.784 3.883c-.454 1.147-.748 2.572-.837 4.118zm15.857 0a6.004 6.004 0 01-1.784 4.118c.454-1.147.748-2.572.837-4.118h.947zm-2.931 0h-3.971c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.234.23.39.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm-4.216 7.118c-.273-.273-.428-.442-.428-.87 0-.43.155-.598.428-.872A6.004 6.004 0 0010 18a6.004 6.004 0 004.216-3.356c-.273.273-.428.442-.428.87 0 .43.155.598.428.872A6.004 6.004 0 0110 18a6.004 6.004 0 01-4.216-3.356z" clipRule="evenodd" />
              </svg>
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 
              className="text-xl font-bold mb-4 pb-2 border-b-2" 
              style={{ borderColor: color || '#3b82f6', color: color || '#3b82f6' }}
            >
              Professional Experience
            </h3>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px]" style={{ borderColor: color || '#3b82f6', borderLeftWidth: '2px' }}>
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full" style={{ backgroundColor: color || '#3b82f6' }}></div>
                  <div className="mb-1">
                    <h4 className="text-lg font-bold">{exp.position}</h4>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{exp.company}</span>
                      <span>{exp.startDate} – {exp.endDate}</span>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 
              className="text-xl font-bold mb-4 pb-2 border-b-2" 
              style={{ borderColor: color || '#3b82f6', color: color || '#3b82f6' }}
            >
              Achievements
            </h3>
            <div className="space-y-3">
              {data.achievements.map((achievement, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2">
                  <div className="sm:w-1/4 font-medium text-sm">{achievement.date}</div>
                  <div className="sm:w-3/4">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-8">
          <div>
            <h3 
              className="text-xl font-bold mb-4 pb-2 border-b-2" 
              style={{ borderColor: color || '#3b82f6', color: color || '#3b82f6' }}
            >
              Education
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-bold">{edu.school}</h4>
                  <p>{edu.degree}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.graduationYear}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 
              className="text-xl font-bold mb-4 pb-2 border-b-2" 
              style={{ borderColor: color || '#3b82f6', color: color || '#3b82f6' }}
            >
              Skills
            </h3>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Hard Skills</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.hard.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: `${color || '#3b82f6'}20`, 
                      color: color || '#3b82f6',
                      border: `1px solid ${color || '#3b82f6'}`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.soft.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: `${color || '#3b82f6'}10`,
                      color: color || '#3b82f6'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate; 