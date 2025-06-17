import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface TechInnovatorTemplateProps {
  data: any;
  template: TemplateOption;
}

const TechInnovatorTemplate: React.FC<TechInnovatorTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Tech Innovator Header */}
        <header className="mb-8 border-b-2 border-purple-500 pb-4">
          <h1 className="text-4xl font-bold text-purple-900">{data.name}</h1>
          <p className="text-xl text-gray-600">{data.title}</p>
          <p className="text-sm text-gray-500 mt-2">{data.location}</p>
        </header>

        {/* Technical Expertise */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Technical Expertise</h2>
          <div className="grid grid-cols-3 gap-4">
            {data.technicalExpertise?.map((expertise: any, index: number) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900">{expertise.category}</h3>
                <ul className="list-disc list-inside mt-2">
                  {expertise.skills.map((skill: string, i: number) => (
                    <li key={i} className="text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Innovation Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Innovation Projects</h2>
          {data.innovationProjects?.map((project: any, index: number) => (
            <div key={index} className="mb-6 bg-white border border-purple-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">{project.name}</h3>
                  <p className="text-gray-600">{project.role}</p>
                  <p className="text-sm text-gray-500">{project.technologies}</p>
                </div>
                <span className="text-sm text-gray-500">{project.duration}</span>
              </div>
              <p className="mt-2">{project.description}</p>
              {project.achievements && (
                <div className="mt-2">
                  <h4 className="font-semibold text-purple-900">Key Achievements:</h4>
                  <ul className="list-disc list-inside ml-4">
                    {project.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Technical Leadership */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Technical Leadership</h2>
          {data.technicalLeadership?.map((leadership: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{leadership.role}</h3>
              <p className="text-gray-600">{leadership.organization}</p>
              <p className="text-sm text-gray-500">{leadership.duration}</p>
              <p className="mt-2">{leadership.description}</p>
            </div>
          ))}
        </section>

        {/* Innovation Metrics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Innovation Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.innovationMetrics?.map((metric: any, index: number) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900">{metric.category}</h3>
                <p className="text-2xl font-bold mt-2">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Patents & Publications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Patents & Publications</h2>
          {data.patentsPublications?.map((item: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.type}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
              {item.description && <p className="mt-2">{item.description}</p>}
            </div>
          ))}
        </section>

        {/* Technical Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Technical Education</h2>
          {data.education?.map((edu: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              {edu.specialization && (
                <p className="text-sm text-purple-900">Specialization: {edu.specialization}</p>
              )}
            </div>
          ))}
        </section>

        {/* Technical Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Technical Certifications</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.certifications?.map((cert: any, index: number) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900">{cert.name}</h3>
                <p className="text-sm text-gray-600">Issuing Organization: {cert.issuer}</p>
                <p className="text-sm text-gray-500">Date: {cert.date}</p>
                {cert.validity && (
                  <p className="text-sm text-purple-900">Valid until: {cert.validity}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechInnovatorTemplate; 