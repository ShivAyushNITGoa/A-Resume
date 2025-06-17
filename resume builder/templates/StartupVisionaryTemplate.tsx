import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface StartupVisionaryTemplateProps {
  data: any;
  template: TemplateOption;
}

const StartupVisionaryTemplate: React.FC<StartupVisionaryTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg shadow-md">
        {/* Startup Visionary Header */}
        <header className="mb-8 border-b-2 border-orange-500 pb-4 px-8 pt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-orange-600">{data.name}</h1>
              <p className="text-xl text-gray-600">{data.title}</p>
              <p className="text-sm text-gray-500 mt-2">{data.location}</p>
            </div>
            {data.profileImage && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-100">
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

          {/* Entrepreneur Profile */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Entrepreneur Profile
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.visionaryStatement}</p>
          </section>

          {/* Growth Metrics */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Growth Metrics
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.growthMetrics?.map((metric: any, index: number) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-orange-600">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  {metric.subtext && <p className="text-xs text-gray-500 mt-1">{metric.subtext}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Ventures & Startups */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Ventures & Startups
            </h2>
            {data.ventures?.map((venture: any, index: number) => (
              <div key={index} className="mb-6 bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600">{venture.name}</h3>
                    <p className="text-gray-600">{venture.role}</p>
                    <p className="text-sm text-gray-500">{venture.industry} • {venture.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">{venture.duration}</span>
                    {venture.status && (
                      <span className={`block mt-1 text-xs px-2 py-1 rounded-full ${
                        venture.status === 'Acquired' ? 'bg-green-100 text-green-800' :
                        venture.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {venture.status}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{venture.description}</p>
                
                {/* Key Metrics */}
                {venture.metrics && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {venture.metrics.map((m: any, i: number) => (
                      <div key={i} className="bg-orange-50 p-2 rounded text-center">
                        <p className="text-sm font-medium text-orange-600">{m.value}</p>
                        <p className="text-xs text-gray-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Funding Rounds */}
                {venture.fundingRounds && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-orange-600 mb-2">Funding Rounds</h4>
                    <div className="space-y-2">
                      {venture.fundingRounds.map((round: any, i: number) => (
                        <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium">{round.round}</span>
                          <span className="text-gray-700">{round.amount}</span>
                          <span className="text-sm text-gray-500">{round.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Achievements */}
                {venture.achievements && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-orange-600 mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {venture.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="text-gray-700">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Market Expansion */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Market Expansion
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.marketExpansion?.map((market: any, index: number) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-600">{market.region}</h3>
                  <p className="text-sm text-gray-600 mb-2">{market.year}</p>
                  <ul className="list-disc list-inside">
                    {market.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="text-sm text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Portfolio */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Investment Portfolio
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.investments?.map((investment: any, index: number) => (
                <div key={index} className="bg-white border border-orange-200 p-3 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-orange-600">{investment.company}</h3>
                  <p className="text-xs text-gray-500">{investment.industry}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm">{investment.year}</span>
                    <span className="text-sm font-medium">{investment.stake}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills & Expertise */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.skillCategories?.map((category: any, index: number) => (
                <div key={index}>
                  <h3 className="font-semibold text-orange-600 mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, i: number) => (
                      <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Education & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-gray-200 pb-2">
              Education & Certifications
            </h2>
            {data.education?.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default StartupVisionaryTemplate; 