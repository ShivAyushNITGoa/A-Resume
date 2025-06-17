"use client";

import { ResumeData } from '@/utils/types';

interface AchievementsFormProps {
  data: ResumeData['achievements'];
  updateData: (data: ResumeData['achievements']) => void;
}

const AchievementsForm: React.FC<AchievementsFormProps> = ({ data, updateData }) => {
  const addAchievementItem = () => {
    updateData([
      ...data,
      {
        date: '',
        description: '',
      },
    ]);
  };

  const removeAchievementItem = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    updateData(newData);
  };

  const updateAchievementItem = (index: number, field: string, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Achievements</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Add key professional achievements, awards, recognition, or measurable results.
      </p>

      {data.map((achievement, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Achievement {index + 1}</h3>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => removeAchievementItem(index)}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor={`date-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date / Year *
              </label>
              <input
                type="text"
                id={`date-${index}`}
                value={achievement.date}
                onChange={(e) => updateAchievementItem(index, 'date', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="2020 - 2022"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description *
              </label>
              <input
                type="text"
                id={`description-${index}`}
                value={achievement.description}
                onChange={(e) => updateAchievementItem(index, 'description', e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                placeholder="Increased department productivity by 15% through implementing new workflow systems"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addAchievementItem}
        className="flex items-center justify-center w-full p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Another Achievement
      </button>
    </div>
  );
};

export default AchievementsForm; 