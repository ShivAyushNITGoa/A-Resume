import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface CulturalAmbassadorTemplateProps {
  data: any;
  template: TemplateOption;
}

const CulturalAmbassadorTemplate: React.FC<CulturalAmbassadorTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg shadow-md">
        {/* Cultural Ambassador Header */}
        <header className="mb-8 border-b-2 border-red-500 pb-4 px-8 pt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-red-700">{data.name}</h1>
              <p className="text-xl text-gray-600">{data.title}</p>
              <p className="text-sm text-gray-500 mt-2">{data.location}</p>
            </div>
            {data.profileImage && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-100">
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

          {/* Cultural Vision */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Cultural Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.culturalVision}</p>
          </section>

          {/* Language Proficiency */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Language Proficiency
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.languages?.map((lang: any, index: number) => (
                <div key={index} className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700">{lang.language}</h3>
                  <div className="mt-2">
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Speaking</span>
                        <span className="text-sm text-gray-600">{lang.speakingLevel}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-red-600 rounded-full" 
                          style={{ width: `${lang.speaking}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Reading</span>
                        <span className="text-sm text-gray-600">{lang.readingLevel}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-red-600 rounded-full" 
                          style={{ width: `${lang.reading}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Writing</span>
                        <span className="text-sm text-gray-600">{lang.writingLevel}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-red-600 rounded-full" 
                          style={{ width: `${lang.writing}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Expertise */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Cultural Expertise
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.culturalExpertise?.map((culture: any, index: number) => (
                <div key={index} className="bg-white border border-red-200 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-red-700">{culture.region}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {culture.yearsExperience} years of experience
                  </p>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-red-700 mb-2">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {culture.expertise.map((area: string, i: number) => (
                        <span key={i} className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-Cultural Communication */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Cross-Cultural Communication
            </h2>
            <div className="bg-red-50 p-5 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                {data.crossCulturalSkills?.map((skill: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 text-red-500 text-xl">•</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{skill.skill}</h3>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* International Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              International Projects
            </h2>
            {data.internationalProjects?.map((project: any, index: number) => (
              <div key={index} className="mb-6 bg-white border border-red-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-red-700">{project.title}</h3>
                    <p className="text-gray-600">{project.organization}</p>
                    <p className="text-sm text-gray-500">
                      {project.location} • {project.duration}
                    </p>
                  </div>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{project.description}</p>
                
                {project.highlights && (
                  <div className="mt-3">
                    <h4 className="font-medium text-red-700 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.highlights.map((highlight: string, i: number) => (
                        <li key={i} className="text-gray-700">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.culturalImpact && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <h4 className="font-medium text-red-700 mb-1">Cultural Impact:</h4>
                    <p className="text-gray-700">{project.culturalImpact}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Cultural Mediation Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Cultural Mediation Experience
            </h2>
            {data.mediationExperience?.map((exp: any, index: number) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-600">{exp.organization}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Educational Background */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Educational Background
            </h2>
            {data.education?.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.location} • {edu.year}</p>
                {edu.fieldOfStudy && (
                  <p className="text-sm text-red-700 mt-1">Field: {edu.fieldOfStudy}</p>
                )}
              </div>
            ))}
          </section>

          {/* Cultural Publications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Cultural Publications & Presentations
            </h2>
            <div className="space-y-4">
              {data.publications?.map((pub: any, index: number) => (
                <div key={index} className="pl-4 border-l-2 border-red-200">
                  <h3 className="font-semibold text-gray-800">{pub.title}</h3>
                  <p className="text-sm text-gray-600">{pub.publisher}, {pub.year}</p>
                  <p className="text-sm text-gray-500">{pub.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Affiliations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 border-b border-gray-200 pb-2">
              Professional Affiliations
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.affiliations?.map((affiliation: any, index: number) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-gray-800">{affiliation.organization}</h3>
                  <p className="text-sm text-gray-600">{affiliation.role}</p>
                  <p className="text-xs text-gray-500">{affiliation.duration}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CulturalAmbassadorTemplate; 