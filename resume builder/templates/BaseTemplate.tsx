import React from 'react';
import { TemplateOption } from './index';

interface BaseTemplateProps {
  data: any;
  template: TemplateOption;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-gray-600">{data.title}</p>
        </header>

        {/* Contact Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
            </div>
            <div>
              <p>Location: {data.location}</p>
              <p>Website: {data.website}</p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700">{data.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          {data.experience?.map((exp: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.responsibilities.map((resp: string, i: number) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {data.education?.map((edu: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} | {edu.year}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills?.map((skill: string, index: number) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Template-specific Features */}
        {template.features && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Special Features</h2>
            <ul className="list-disc list-inside">
              {template.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {template.languages && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {template.languages.map((language, index) => (
                <span key={index} className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                  {language}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Regions */}
        {template.regions && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Regions</h2>
            <div className="flex flex-wrap gap-2">
              {template.regions.map((region, index) => (
                <span key={index} className="bg-green-100 px-3 py-1 rounded-full text-sm">
                  {region}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BaseTemplate; 