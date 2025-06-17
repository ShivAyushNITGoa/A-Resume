import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface GlobalExecutiveTemplateProps {
  data: any;
  template: TemplateOption;
}

const GlobalExecutiveTemplate: React.FC<GlobalExecutiveTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Global Executive Header */}
        <header className="mb-8 border-b-2 border-blue-500 pb-4">
          <h1 className="text-4xl font-bold text-blue-900">{data.name}</h1>
          <p className="text-xl text-gray-600">{data.title}</p>
          <p className="text-sm text-gray-500 mt-2">{data.location}</p>
        </header>

        {/* International Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">International Experience</h2>
          {data.internationalExperience?.map((exp: any, index: number) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside mt-2 ml-4">
                {exp.responsibilities.map((resp: string, i: number) => (
                  <li key={i} className="mb-1">{resp}</li>
                ))}
              </ul>
              {exp.achievements && (
                <div className="mt-2">
                  <h4 className="font-semibold text-blue-900">Key Achievements:</h4>
                  <ul className="list-disc list-inside ml-4">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Global Leadership Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Global Leadership</h2>
          {data.globalLeadership?.map((leadership: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{leadership.role}</h3>
              <p className="text-gray-600">{leadership.organization}</p>
              <p className="text-sm text-gray-500">{leadership.duration}</p>
              <p className="mt-2">{leadership.description}</p>
            </div>
          ))}
        </section>

        {/* Cultural Competencies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Cultural Competencies</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.culturalCompetencies?.map((competency: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">{competency.region}</h3>
                <ul className="list-disc list-inside mt-2">
                  {competency.skills.map((skill: string, i: number) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Language Proficiency */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Language Proficiency</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.languages?.map((lang: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">{lang.name}</h3>
                <p className="text-sm text-gray-600">Proficiency: {lang.level}</p>
                {lang.certification && (
                  <p className="text-sm text-gray-600">Certification: {lang.certification}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Education & Certifications</h2>
          {data.education?.map((edu: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              {edu.honors && <p className="text-sm text-blue-900">{edu.honors}</p>}
            </div>
          ))}
        </section>

        {/* Global Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Global Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.globalAchievements?.map((achievement: any, index: number) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.year}</p>
                <p className="mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlobalExecutiveTemplate; 