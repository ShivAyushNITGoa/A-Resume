"use client";

import { ResumeData, Education } from '@/utils/types';

interface EducationFormProps {
  data: Education[];
  updateData: (data: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ data, updateData }) => {
  const addEducationItem = () => {
    updateData([
      ...data,
      {
        school: '',
        institution: '',
        degree: '',
        fieldOfStudy: '',
        location: '',
        graduationYear: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ]);
  };

  const removeEducationItem = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    updateData(newData);
  };

  const updateEducationItem = (index: number, field: string, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Education</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Add your educational background, starting with the most recent.
      </p>

      {data.map((education, eduIndex) => (
        <div key={eduIndex} className="p-4 border border-gray-200 dark:border-gray-700 rounded-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Education {eduIndex + 1}</h3>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducationItem(eduIndex)}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`school-${eduIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                School / University *
              </label>
              <input
                type="text"
                id={`school-${eduIndex}`}
                value={education.school}
                onChange={(e) => updateEducationItem(eduIndex, 'school', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Harvard University"
              />
            </div>
            
            <div>
              <label htmlFor={`degree-${eduIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Degree *
              </label>
              <input
                type="text"
                id={`degree-${eduIndex}`}
                value={education.degree}
                onChange={(e) => updateEducationItem(eduIndex, 'degree', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Bachelor of Science"
              />
            </div>
            
            <div>
              <label htmlFor={`fieldOfStudy-${eduIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Field of Study *
              </label>
              <input
                type="text"
                id={`fieldOfStudy-${eduIndex}`}
                value={education.fieldOfStudy}
                onChange={(e) => updateEducationItem(eduIndex, 'fieldOfStudy', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Computer Science"
              />
            </div>
            
            <div>
              <label htmlFor={`graduationYear-${eduIndex}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Graduation Year *
              </label>
              <input
                type="text"
                id={`graduationYear-${eduIndex}`}
                value={education.graduationYear}
                onChange={(e) => updateEducationItem(eduIndex, 'graduationYear', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="2020"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addEducationItem}
        className="flex items-center justify-center w-full p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Another Education
      </button>
    </div>
  );
};

export default EducationForm; 