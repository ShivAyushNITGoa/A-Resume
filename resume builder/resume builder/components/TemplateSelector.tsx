"use client";

import { useState } from 'react';
import { TemplateOption } from '@/utils/types';

interface TemplateSelectorProps {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  templates: TemplateOption[];
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  setSelectedTemplate,
  backgroundColor,
  setBackgroundColor,
  templates,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Choose a Template</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select from our professionally designed templates to create your resume.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => {
          const bgColor = template.id === 'minimalist' ? '#f5f5f5' : 
                        template.id === 'modern' ? '#3b82f6' : 
                        template.id === 'professional' ? '#0f766e' : 
                        template.id === 'creative' ? '#ec4899' : 
                        template.id === 'executive' ? '#334155' : 
                        template.id === 'techminimal' ? '#9333ea' : 
                        backgroundColor;
                        
          const isLightBg = template.id === 'minimalist';
          
          return (
            <div
              key={template.id}
              className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? 'border-primary-600 ring-2 ring-primary-600 ring-opacity-50'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <div 
                  style={{ backgroundColor: bgColor }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center p-4" style={{ color: isLightBg ? '#000000' : '#FFFFFF' }}>
                    <div className="font-bold text-xl mb-2">{template.name}</div>
                    <div className="opacity-75 text-sm">Template</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{template.name}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Customize Colors</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
              Primary Color:
            </label>
            <input
              type="color"
              id="bgColor"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="h-10 w-10 rounded overflow-hidden cursor-pointer"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <ColorPreset color="#9c4d61" onClick={setBackgroundColor} />
            <ColorPreset color="#1a5276" onClick={setBackgroundColor} />
            <ColorPreset color="#117a65" onClick={setBackgroundColor} />
            <ColorPreset color="#7d3c98" onClick={setBackgroundColor} />
            <ColorPreset color="#a04000" onClick={setBackgroundColor} />
            <ColorPreset color="#273746" onClick={setBackgroundColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ColorPresetProps {
  color: string;
  onClick: (color: string) => void;
}

const ColorPreset: React.FC<ColorPresetProps> = ({ color, onClick }) => (
  <button
    type="button"
    className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:scale-110 transition-transform"
    style={{ backgroundColor: color }}
    onClick={() => onClick(color)}
    aria-label={`Select color ${color}`}
  />
);

export default TemplateSelector; 