"use client";

import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import { templates } from '@/templates';

export default function TemplatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.svg" 
              alt="GDEVELOPERS Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Resume Builder
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/builder"
              className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition duration-200"
            >
              Create Resume
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resume Templates</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose from our collection of professionally designed templates to create your perfect resume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => {
              const bgColor = template.id === 'minimalist' ? '#f5f5f5' : 
                template.id === 'modern' ? '#3b82f6' : 
                template.id === 'professional' ? '#0f766e' : 
                template.id === 'creative' ? '#ec4899' : 
                template.id === 'executive' ? '#334155' : 
                template.id === 'techminimal' ? '#9333ea' :
                template.id === 'twocolumn' ? '#0369a1' :
                template.id === 'multipage' ? '#c026d3' :
                template.id === 'academic' ? '#15803d' :
                template.id === 'chronological' ? '#ea580c' :
                template.id === 'global-executive' ? '#1e40af' :
                template.id === 'tech-innovator' ? '#7e22ce' :
                template.id === 'diplomatic' ? '#1d4ed8' :
                template.id === 'academic-global' ? '#15803d' :
                template.id === 'startup-visionary' ? '#ea580c' :
                template.id === 'sustainability-leader' ? '#16a34a' :
                template.id === 'digital-nomad' ? '#9333ea' :
                template.id === 'cultural-ambassador' ? '#dc2626' :
                '#1e3a8a';
                
              const isLightBg = template.id === 'minimalist';
              
              // Get template features for display
              const features = template.features || [];
              const languages = template.languages || [];
              const regions = template.regions || [];
              
              return (
                <div key={template.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden relative">
                    <div 
                      style={{ backgroundColor: bgColor }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="text-center p-6 z-10" style={{ color: isLightBg ? '#000000' : '#FFFFFF' }}>
                        <div className="font-bold text-2xl mb-2">{template.name}</div>
                        <div className="text-sm mb-2">Resume Template</div>
                        {template.isNew && (
                          <span className="bg-white bg-opacity-30 text-white px-2 py-1 rounded-full text-xs absolute top-2 right-2">
                            NEW
                          </span>
                        )}
                        {features.length > 0 && (
                          <div className="text-xs mt-2 flex flex-wrap justify-center gap-1">
                            {features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="bg-white bg-opacity-30 px-2 py-0.5 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}
                        <img 
                          src="/images/logo.svg" 
                          alt="GDEVELOPERS Logo" 
                          className="h-16 w-auto mx-auto mt-4 opacity-50"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                      <Link
                        href={`/builder?template=${template.id}`}
                        className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-lg font-medium"
                      >
                        Use This Template
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {template.description}
                    </p>
                    
                    {/* Display language and region tags if available */}
                    {(languages.length > 0 || regions.length > 0) && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {languages.slice(0, 3).map((lang, index) => (
                          <span key={`lang-${index}`} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                            {lang}
                          </span>
                        ))}
                        {regions.slice(0, 2).map((region, index) => (
                          <span key={`region-${index}`} className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                            {region}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      href={`/builder?template=${template.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Use This Template →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <img 
              src="/images/logo.svg" 
              alt="GDEVELOPERS Logo" 
              className="h-12 w-auto"
            />
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} GDEVELOPERS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 