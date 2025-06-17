import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface AcademicGlobalTemplateProps {
  data: any;
  template: TemplateOption;
}

const AcademicGlobalTemplate: React.FC<AcademicGlobalTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto border border-gray-300 bg-white rounded shadow-md">
        {/* Academic Global Header */}
        <header className="mb-8 border-b-2 border-green-700 pb-4 px-8 pt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-green-900">{data.name}</h1>
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

          {/* Research Focus */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              Research Focus
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.researchFocus}</p>
            {data.researchInterests && (
              <div className="mt-4 flex flex-wrap gap-2">
                {data.researchInterests.map((interest: string, index: number) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Academic Positions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              Academic Positions
            </h2>
            {data.academicPositions?.map((position: any, index: number) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <p className="text-gray-600">{position.institution}</p>
                    <p className="text-sm text-gray-500">{position.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{position.duration}</span>
                </div>
                <ul className="list-disc list-inside mt-2 ml-4">
                  {position.responsibilities.map((resp: string, i: number) => (
                    <li key={i} className="mb-1 text-gray-700">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Publications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              Publications
            </h2>
            {data.publicationCategories?.map((category: any, catIndex: number) => (
              <div key={catIndex} className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{category.name}</h3>
                <ul className="space-y-4">
                  {category.publications.map((pub: any, pubIndex: number) => (
                    <li key={pubIndex} className="pl-4 border-l-2 border-green-200">
                      <p className="font-medium">{pub.title}</p>
                      <p className="text-sm text-gray-600">{pub.authors}</p>
                      <p className="text-sm text-gray-600 italic">{pub.journal}, {pub.year}</p>
                      {pub.doi && (
                        <p className="text-sm text-green-700">DOI: {pub.doi}</p>
                      )}
                      {pub.impact && (
                        <div className="mt-1 flex items-center">
                          <span className="text-xs text-gray-500 mr-2">Impact Factor:</span>
                          <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">{pub.impact}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Publication Metrics */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              Publication Metrics
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.publicationMetrics?.map((metric: any, index: number) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-green-800 text-lg">{metric.value}</h3>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* International Collaborations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              International Collaborations
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.internationalCollaborations?.map((collab: any, index: number) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">{collab.institution}</h3>
                  <p className="text-sm text-gray-600">{collab.location} • {collab.duration}</p>
                  <p className="mt-2 text-gray-700">{collab.project}</p>
                  {collab.outcomes && (
                    <div className="mt-2">
                      <h4 className="font-semibold text-green-700">Outcomes:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {collab.outcomes.map((outcome: string, i: number) => (
                          <li key={i} className="text-sm text-gray-700">{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              Education
            </h2>
            {data.education?.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.location} • {edu.year}</p>
                {edu.dissertation && (
                  <p className="text-sm text-green-800 mt-1">Dissertation: {edu.dissertation}</p>
                )}
              </div>
            ))}
          </section>

          {/* Grants & Funding */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-gray-200 pb-2">
              Grants & Funding
            </h2>
            {data.grants?.map((grant: any, index: number) => (
              <div key={index} className="mb-4 bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-green-800">{grant.title}</h3>
                  <span className="text-green-800 font-bold">{grant.amount}</span>
                </div>
                <p className="text-gray-600">{grant.agency}</p>
                <p className="text-sm text-gray-500">{grant.duration}</p>
                <p className="mt-2 text-gray-700">{grant.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AcademicGlobalTemplate; 