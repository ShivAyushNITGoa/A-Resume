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

interface ProfessionalTemplateProps {
  data: ResumeData;
  color: string;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data, color }) => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="w-full h-full flex flex-col bg-white text-gray-800 print:text-black">
      {/* Header with name and title */}
      <div 
        className="flex items-center p-8" 
        style={{ backgroundColor: color || '#9c4d61' }}
      >
        {data.personalInfo.photo && (
          <div className="mr-8">
            <img 
              src={data.personalInfo.photo} 
              alt={data.personalInfo.name} 
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        )}
        <div className="text-white">
          <h1 className="text-5xl font-bold tracking-wider mb-3 uppercase">{data.personalInfo.name}</h1>
          <h2 className="text-2xl font-light tracking-wide">{data.personalInfo.title}</h2>
        </div>
      </div>
      
      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="w-1/3 p-8 bg-gray-50 print:bg-gray-100">
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>My Contact</h3>
            <ul className="space-y-4">
              {data.personalInfo.email && (
                <li className="flex items-start hover:text-gray-600 transition-colors">
                  <div className="mr-3" style={{ color: color || '#9c4d61' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm">{data.personalInfo.email}</span>
                </li>
              )}
              {data.personalInfo.phone && (
                <li className="flex items-start hover:text-gray-600 transition-colors">
                  <div className="mr-3" style={{ color: color || '#9c4d61' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm">{data.personalInfo.phone}</span>
                </li>
              )}
              {data.personalInfo.address && (
                <li className="flex items-start hover:text-gray-600 transition-colors">
                  <div className="mr-3" style={{ color: color || '#9c4d61' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">{data.personalInfo.address}</span>
                </li>
              )}
              {data.personalInfo.website && (
                <li className="flex items-start hover:text-gray-600 transition-colors">
                  <div className="mr-3" style={{ color: color || '#9c4d61' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">{data.personalInfo.website}</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>Hard Skills</h3>
            <ul className="space-y-2">
              {data.skills.hard.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <div style={{ backgroundColor: color || '#9c4d61' }} className="w-2 h-2 rounded-full mr-3"></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>Soft Skills</h3>
            <ul className="space-y-2">
              {data.skills.soft.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <div style={{ backgroundColor: color || '#9c4d61' }} className="w-2 h-2 rounded-full mr-3"></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>Education</h3>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold text-base mb-1">{edu.school}</h4>
                  <p className="text-sm italic mb-1">{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</p>
                  <p className="text-sm text-gray-600">Completed in {edu.graduationYear}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="w-2/3 p-8">
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>About Me</h3>
            <p className="text-base leading-relaxed">{data.personalInfo.about}</p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>Professional Experience</h3>
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-bold">{exp.company} | {exp.position}</h4>
                    <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: `${color}20` || '#9c4d6120', color: color }}>{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="mb-3 font-medium text-sm uppercase tracking-wider" style={{ color: color || '#9c4d61' }}>Key responsibilities:</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <div style={{ color: color || '#9c4d61' }} className="mt-1.5 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 pb-2 uppercase tracking-wider" style={{ borderColor: color || '#9c4d61' }}>Achievements</h3>
            <div className="space-y-4">
              {data.achievements.map((achievement, index) => (
                <div key={index} className="flex mb-3 items-center p-3 rounded-lg" style={{ backgroundColor: index % 2 === 0 ? (color ? `${color}10` : '#9c4d6110') : 'transparent' }}>
                  <div className="w-1/4 font-medium" style={{ color: color || '#9c4d61' }}>{achievement.date}</div>
                  <div className="w-3/4">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;