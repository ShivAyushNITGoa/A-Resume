"use client";

import { useState } from 'react';
import { ResumeData, Experience } from '@/utils/types';

interface ExperienceFormProps {
  data: Experience[];
  updateData: (data: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, updateData }) => {
  const addExperienceItem = () => {
    updateData([
      ...data,
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        responsibilities: [''],
        description: '',
      },
    ]);
  };

  const removeExperienceItem = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    updateData(newData);
  };

  const updateExperienceItem = (index: number, field: string, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  const addResponsibility = (expIndex: number) => {
    const newData = [...data];
    newData[expIndex].responsibilities.push('');
    updateData(newData);
  };

  const updateResponsibility = (expIndex: number, respIndex: number, value: string) => {
    const newData = [...data];
    newData[expIndex].responsibilities[respIndex] = value;
    updateData(newData);
  };

  const removeResponsibility = (expIndex: number, respIndex: number) => {
    const newData = [...data];
    newData[expIndex].responsibilities.splice(respIndex, 1);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Add your work experience, starting with your most recent position.
      </p>

      {data.map((experience, expIndex) => (
        <div key={expIndex} className="p-4 border border-gray-200 dark:border-gray-700 rounded-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Experience {expIndex + 1}</h3>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperienceItem(expIndex)}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor={`company-${expIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                id={`company-${expIndex}`}
                value={experience.company}
                onChange={(e) => updateExperienceItem(expIndex, 'company', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Acme Corporation"
              />
            </div>
            
            <div>
              <label htmlFor={`position-${expIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Position Title *
              </label>
              <input
                type="text"
                id={`position-${expIndex}`}
                value={experience.position}
                onChange={(e) => updateExperienceItem(expIndex, 'position', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Senior Financial Analyst"
              />
            </div>
            
            <div>
              <label htmlFor={`location-${expIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location *
              </label>
              <input
                type="text"
                id={`location-${expIndex}`}
                value={experience.location}
                onChange={(e) => updateExperienceItem(expIndex, 'location', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="New York, NY"
              />
            </div>
            
            <div>
              <label htmlFor={`startDate-${expIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Start Date *
              </label>
              <input
                type="text"
                id={`startDate-${expIndex}`}
                value={experience.startDate}
                onChange={(e) => updateExperienceItem(expIndex, 'startDate', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Jan 2020"
              />
            </div>
            
            <div>
              <label htmlFor={`endDate-${expIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                End Date (or "Present") *
              </label>
              <input
                type="text"
                id={`endDate-${expIndex}`}
                value={experience.endDate}
                onChange={(e) => updateExperienceItem(expIndex, 'endDate', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Present"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Key Responsibilities *
            </label>
            
            {experience.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) => updateResponsibility(expIndex, respIndex, e.target.value)}
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                  placeholder={`Responsibility ${respIndex + 1}`}
                />
                {experience.responsibilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeResponsibility(expIndex, respIndex)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addResponsibility(expIndex)}
              className="mt-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Another Responsibility
            </button>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addExperienceItem}
        className="flex items-center justify-center w-full p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Another Position
      </button>
    </div>
  );
};

export default ExperienceForm; 