"use client";

import React, { useState } from 'react';
import { templates } from '@/templates';

interface TemplateSelectorProps {
  selectedTemplate: string;
  setSelectedTemplate: (templateId: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  setSelectedTemplate,
  backgroundColor,
  setBackgroundColor
}) => {
  const [filter, setFilter] = useState('all');
  
  // Get template categories
  const categories = ['all', ...new Set(templates.flatMap(t => t.features || []))];
  
  // Filter templates
  const filteredTemplates = filter === 'all' 
    ? templates 
    : templates.filter(t => t.features?.includes(filter));
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Choose Your Template</h2>
      
      <div className="mb-6">
        <label htmlFor="templateColor" className="block text-sm font-medium mb-2">
          Template Color
        </label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            id="templateColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-16 h-10 rounded overflow-hidden cursor-pointer border border-gray-300"
          />
          <span className="text-sm">{backgroundColor}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1 text-sm rounded-full ${
                filter === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => {
          const bgColor = template.id === 'minimalist' ? '#f5f5f5' : 
            template.id === 'modern' ? '#3b82f6' : 
            template.id === 'professional' ? '#0f766e' : 
            template.id === 'consultant' ? '#0a66c2' :
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
          
          return (
            <div
              key={template.id}
              className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                selectedTemplate === template.id 
                  ? 'ring-2 ring-primary-600 shadow-lg' 
                  : 'hover:border-primary-200'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <div 
                className="h-40 flex items-center justify-center p-4"
                style={{ backgroundColor: bgColor }}
              >
                <div className="text-center" style={{ color: isLightBg ? '#000000' : '#FFFFFF' }}>
                  <div className="font-bold text-lg mb-1">{template.name}</div>
                  <div className="text-xs mb-3">Resume Template</div>
                  
                  {template.features && template.features.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      {template.features.slice(0, 2).map((feature, index) => (
                        <span 
                          key={index} 
                          className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {template.isNew && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800">
                <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {template.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateSelector; 