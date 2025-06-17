import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface DigitalNomadTemplateProps {
  data: any;
  template: TemplateOption;
}

const DigitalNomadTemplate: React.FC<DigitalNomadTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg shadow-md">
        {/* Digital Nomad Header */}
        <header className="mb-8 border-b-2 border-purple-400 pb-4 px-8 pt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-purple-600">{data.name}</h1>
              <p className="text-xl text-gray-600">{data.title}</p>
              <div className="flex items-center mt-2">
                <p className="text-sm text-gray-500">Current Location: {data.currentLocation}</p>
                {data.timezone && (
                  <p className="text-sm text-gray-500 ml-4">Timezone: {data.timezone}</p>
                )}
              </div>
            </div>
            {data.profileImage && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100">
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
                <p className="flex items-center"><span className="w-6 mr-2">🌐</span> {data.website}</p>
                <p className="flex items-center"><span className="w-6 mr-2">💬</span> {data.messenger}</p>
              </div>
            </div>
          </section>

          {/* Digital Nomad Profile */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Professional Profile
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.profile}</p>
          </section>

          {/* Remote Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Remote Work Skills
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.remoteSkills?.map((skill: any, index: number) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-600 text-center mb-2">{skill.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {skill.items.map((item: string, i: number) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Remote Work Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Remote Work Experience
            </h2>
            {data.remoteExperience?.map((exp: any, index: number) => (
              <div key={index} className="mb-6 bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.locationType || 'Remote'}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                    {exp.locations && (
                      <p className="text-xs text-gray-500 mt-1">Worked from: {exp.locations.join(', ')}</p>
                    )}
                  </div>
                </div>
                <ul className="list-disc list-inside mt-3 ml-2">
                  {exp.responsibilities.map((resp: string, i: number) => (
                    <li key={i} className="mb-1 text-gray-700">{resp}</li>
                  ))}
                </ul>
                
                {/* Collaboration Tools */}
                {exp.tools && (
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-purple-600 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool: string, i: number) => (
                        <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Digital Tools Proficiency */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Digital Tools Proficiency
            </h2>
            <div className="space-y-3">
              {data.digitalTools?.map((toolCategory: any, index: number) => (
                <div key={index}>
                  <h3 className="font-semibold text-purple-600 mb-2">{toolCategory.category}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {toolCategory.tools.map((tool: any, i: number) => (
                      <div key={i} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span className="font-medium text-gray-700 flex-grow">{tool.name}</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full" 
                            style={{ width: `${tool.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Time Zone Flexibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Time Zone Flexibility
            </h2>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="font-semibold text-purple-600 mb-1">Working Hours</h3>
                  <p className="text-gray-700">{data.workingHours}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-purple-600 mb-1">Preferred Time Zones</h3>
                  <p className="text-gray-700">{data.preferredTimezones}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-purple-600 mb-1">Availability</h3>
                  <p className="text-gray-700">{data.availability}</p>
                </div>
              </div>
              {data.timeZoneExperience && (
                <div className="mt-4 pt-4 border-t border-purple-200">
                  <h3 className="font-semibold text-purple-600 mb-2">Time Zone Experience</h3>
                  <p className="text-gray-700">{data.timeZoneExperience}</p>
                </div>
              )}
            </div>
          </section>

          {/* Global Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Global Projects
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.globalProjects?.map((project: any, index: number) => (
                <div key={index} className="bg-white border border-purple-200 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-purple-600">{project.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{project.client} • {project.year}</p>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech: string, i: number) => (
                        <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* Education & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Education & Certifications
            </h2>
            {data.education?.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
            
            {data.certifications && (
              <div className="mt-4">
                <h3 className="font-semibold text-purple-600 mb-2">Certifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {data.certifications.map((cert: any, i: number) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 border-b border-gray-200 pb-2">
              Languages
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.languages?.map((lang: any, index: number) => (
                <div key={index} className="bg-purple-50 p-3 rounded-lg text-center">
                  <h3 className="font-semibold text-purple-600">{lang.language}</h3>
                  <p className="text-sm text-gray-600 mt-1">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalNomadTemplate; 