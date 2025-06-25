"use client";

import { Skills } from '@/utils/types';

interface SkillsFormProps {
  data: Skills;
  updateData: (data: Skills) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, updateData }) => {
  const addSkill = (type: 'hard' | 'soft') => {
    updateData({
      ...data,
      [type]: [...data[type], ''],
    });
  };

  const updateSkill = (type: 'hard' | 'soft', index: number, value: string) => {
    const newSkills = [...data[type]];
    newSkills[index] = value;

    updateData({
      ...data,
      [type]: newSkills,
    });
  };

  const removeSkill = (type: 'hard' | 'soft', index: number) => {
    const newSkills = [...data[type]];
    newSkills.splice(index, 1);

    updateData({
      ...data,
      [type]: newSkills,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Add your professional skills categorized as hard skills (technical) and soft skills (interpersonal).
        </p>
      </div>

      {/* Hard Skills */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
        <h3 className="text-lg font-medium mb-2">Hard Skills (Technical)</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Examples: Programming languages, software, analytics tools, etc.
        </p>

        {data.hard.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => updateSkill('hard', index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              placeholder={`Hard Skill ${index + 1}`}
            />
            {data.hard.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill('hard', index)}
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
          onClick={() => addSkill('hard')}
          className="mt-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Hard Skill
        </button>
      </div>

      {/* Soft Skills */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
        <h3 className="text-lg font-medium mb-2">Soft Skills (Interpersonal)</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Examples: Communication, leadership, teamwork, etc.
        </p>

        {data.soft.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => updateSkill('soft', index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              placeholder={`Soft Skill ${index + 1}`}
            />
            {data.soft.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill('soft', index)}
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
          onClick={() => addSkill('soft')}
          className="mt-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Soft Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsForm; 