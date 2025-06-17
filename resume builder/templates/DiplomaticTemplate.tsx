import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface DiplomaticTemplateProps {
  data: any;
  template: TemplateOption;
}

const DiplomaticTemplate: React.FC<DiplomaticTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg shadow-md">
        {/* Diplomatic Header */}
        <header className="mb-8 border-b-2 border-blue-700 pb-4 px-8 pt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-800">{data.name}</h1>
              <p className="text-xl text-gray-600">{data.title}</p>
              <p className="text-sm text-gray-500 mt-2">{data.location}</p>
            </div>
            {data.profileImage && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </header>

        <div className="px-8 pb-8">
          {/* Contact Information */}
          <section className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="flex items-center"><span className="w-6 mr-2">📧</span> {data.email}</p>
                <p className="flex items-center"><span className="w-6 mr-2">📱</span> {data.phone}</p>
              </div>
              <div>
                <p className="flex items-center"><span className="w-6 mr-2">📍</span> {data.location}</p>
                <p className="flex items-center"><span className="w-6 mr-2">🌐</span> {data.website}</p>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </section>

          {/* International Appointments */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">
              International Appointments
            </h2>
            {data.internationalAppointments?.map((appointment: any, index: number) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{appointment.title}</h3>
                    <p className="text-gray-600">{appointment.organization}</p>
                    <p className="text-sm text-gray-500">{appointment.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{appointment.duration}</span>
                </div>
                <ul className="list-disc list-inside mt-2 ml-4">
                  {appointment.responsibilities.map((resp: string, i: number) => (
                    <li key={i} className="mb-1 text-gray-700">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Language Proficiency */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">
              Language Proficiency
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.languages?.map((lang: any, index: number) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">{lang.name}</h3>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 w-24">Speaking:</span>
                      <div className="h-2 bg-gray-200 rounded-full flex-1">
                        <div 
                          className="h-2 bg-blue-600 rounded-full" 
                          style={{ width: `${lang.speaking}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm">{lang.speaking}%</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-600 w-24">Writing:</span>
                      <div className="h-2 bg-gray-200 rounded-full flex-1">
                        <div 
                          className="h-2 bg-blue-600 rounded-full" 
                          style={{ width: `${lang.writing}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm">{lang.writing}%</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-600 w-24">Reading:</span>
                      <div className="h-2 bg-gray-200 rounded-full flex-1">
                        <div 
                          className="h-2 bg-blue-600 rounded-full" 
                          style={{ width: `${lang.reading}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm">{lang.reading}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Competencies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">
              Cultural Competencies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.culturalCompetencies?.map((region: any, index: number) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">{region.name}</h3>
                  <ul className="list-disc list-inside mt-2">
                    {region.competencies.map((competency: string, i: number) => (
                      <li key={i} className="text-gray-700">{competency}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">
              Education
            </h2>
            {data.education?.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
                {edu.honors && <p className="text-sm text-blue-800 mt-1">{edu.honors}</p>}
              </div>
            ))}
          </section>

          {/* International Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">
              International Projects
            </h2>
            {data.internationalProjects?.map((project: any, index: number) => (
              <div key={index} className="mb-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.location} • {project.year}</p>
                <p className="mt-2 text-gray-700">{project.description}</p>
                {project.outcomes && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-blue-700">Outcomes:</h4>
                    <ul className="list-disc list-inside ml-4">
                      {project.outcomes.map((outcome: string, i: number) => (
                        <li key={i} className="text-gray-700">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DiplomaticTemplate; 