import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface SustainabilityLeaderTemplateProps {
  data: any;
  template: TemplateOption;
}

const SustainabilityLeaderTemplate: React.FC<SustainabilityLeaderTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg shadow-md">
        {/* Sustainability Leader Header */}
        <header className="mb-8 border-b-2 border-green-500 pb-4 px-8 pt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-green-700">{data.name}</h1>
              <p className="text-xl text-gray-600">{data.title}</p>
              <p className="text-sm text-gray-500 mt-2">{data.location}</p>
            </div>
            {data.profileImage && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-100">
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

          {/* Sustainability Mission */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Sustainability Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.sustainabilityMission}</p>
          </section>

          {/* SDG Alignment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              UN Sustainable Development Goals Alignment
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {data.sdgAlignment?.map((sdg: any, index: number) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">
                    {sdg.icon || `#${sdg.number}`}
                  </div>
                  <p className="text-sm font-medium text-green-700">Goal {sdg.number}</p>
                  <p className="text-xs text-gray-600 mt-1">{sdg.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Environmental Impact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Environmental Impact Metrics
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.environmentalImpact?.map((impact: any, index: number) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 text-center mb-2">{impact.metric}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">{impact.value}</span>
                    <span className="text-sm text-gray-500 ml-1">{impact.unit}</span>
                  </div>
                  <p className="text-xs text-center text-gray-600 mt-2">{impact.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sustainability Leadership */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Sustainability Leadership
            </h2>
            {data.sustainabilityLeadership?.map((position: any, index: number) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">{position.title}</h3>
                    <p className="text-gray-600">{position.organization}</p>
                    <p className="text-sm text-gray-500">{position.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{position.duration}</span>
                </div>
                <ul className="list-disc list-inside mt-2 ml-4">
                  {position.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="mb-1 text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Green Initiatives */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Green Initiatives
            </h2>
            <div className="space-y-4">
              {data.greenInitiatives?.map((initiative: any, index: number) => (
                <div key={index} className="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700">{initiative.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{initiative.duration}</p>
                  <p className="text-gray-700">{initiative.description}</p>
                  
                  {/* Key Results */}
                  {initiative.results && (
                    <div className="mt-3">
                      <h4 className="font-medium text-green-700 mb-2">Key Results:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {initiative.results.map((result: string, i: number) => (
                          <li key={i} className="text-gray-700">{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Impact Metrics */}
                  {initiative.metrics && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {initiative.metrics.map((metric: any, i: number) => (
                        <div key={i} className="bg-green-50 p-2 rounded text-center">
                          <p className="text-sm font-medium text-green-700">{metric.value}</p>
                          <p className="text-xs text-gray-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Standards */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Certifications & Standards
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.certifications?.map((cert: any, index: number) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700">{cert.name}</h3>
                  <p className="text-sm text-gray-600">Issuing Organization: {cert.issuer}</p>
                  <p className="text-sm text-gray-500">Date: {cert.date}</p>
                  {cert.expiry && (
                    <p className="text-sm text-green-700">Valid until: {cert.expiry}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sustainable Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Sustainable Skills
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.skillCategories?.map((category: any, index: number) => (
                <div key={index}>
                  <h3 className="font-semibold text-green-700 mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, i: number) => (
                      <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Education
            </h2>
            {data.education?.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
                {edu.focus && (
                  <p className="text-sm text-green-700 mt-1">Focus: {edu.focus}</p>
                )}
              </div>
            ))}
          </section>

          {/* Publications & Talks */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 border-b border-gray-200 pb-2">
              Publications & Talks
            </h2>
            {data.publications?.map((pub: any, index: number) => (
              <div key={index} className="mb-3 pl-4 border-l-2 border-green-200">
                <h3 className="font-semibold">{pub.title}</h3>
                <p className="text-sm text-gray-600">{pub.venue}, {pub.year}</p>
                {pub.link && (
                  <a 
                    href={pub.link} 
                    className="text-sm text-green-700 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Resource →
                  </a>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityLeaderTemplate; 