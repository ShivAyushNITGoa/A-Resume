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

interface MinimalistTemplateProps {
  data: ResumeData;
  color: string;
}

const MinimalistTemplate: React.FC<MinimalistTemplateProps> = ({ data, color }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <header className="mb-8 pb-4 border-b" style={{ borderColor: color || '#000000' }}>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {data.personalInfo.photo && (
              <img 
                src={data.personalInfo.photo} 
                alt={data.personalInfo.name}
                className="w-32 h-32 object-cover rounded-sm"
              />
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-1" style={{ color: color || '#000000' }}>
                {data.personalInfo.name}
              </h1>
              <h2 className="text-xl mb-3 font-light">
                {data.personalInfo.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {data.personalInfo.email && (
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{data.personalInfo.email}</span>
                  </div>
                )}
                {data.personalInfo.phone && (
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{data.personalInfo.phone}</span>
                  </div>
                )}
                {data.personalInfo.address && (
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{data.personalInfo.address}</span>
                  </div>
                )}
                {data.personalInfo.website && (
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>{data.personalInfo.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* About */}
        {data.personalInfo.about && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2" style={{ color: color || '#000000' }}>About</h3>
            <p className="text-sm leading-relaxed">{data.personalInfo.about}</p>
          </section>
        )}
        
        {/* Two-column layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="md:col-span-2 space-y-6">
            {/* Experience */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: color || '#000000' }}>Professional Experience</h3>
              <div className="space-y-5">
                {data.experience.map((exp, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold">{exp.position}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-xs mb-2 text-gray-600 dark:text-gray-400">{exp.company}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Achievements */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: color || '#000000' }}>Achievements</h3>
              <div className="space-y-2 text-sm">
                {data.achievements.map((achievement, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 font-medium text-gray-600 dark:text-gray-400 text-xs">{achievement.date}</div>
                    <div className="sm:w-3/4">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {/* Education */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: color || '#000000' }}>Education</h3>
              <div className="space-y-3 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-medium">{edu.school}</h4>
                    <p className="text-xs">{edu.degree}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{edu.graduationYear}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Skills */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: color || '#000000' }}>Skills</h3>
              {/* Hard Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Hard Skills</h4>
                <ul className="space-y-1 text-xs">
                  {data.skills.hard.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: color || '#000000' }}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Soft Skills */}
              <div>
                <h4 className="text-sm font-medium mb-2">Soft Skills</h4>
                <ul className="space-y-1 text-xs">
                  {data.skills.soft.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: color || '#000000' }}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalistTemplate; 