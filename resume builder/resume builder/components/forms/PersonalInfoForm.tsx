"use client";

import { useState } from 'react';
import { ResumeData } from '@/utils/types';

interface PersonalInfoFormProps {
  data: ResumeData['personalInfo'];
  updateData: (data: ResumeData['personalInfo']) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, updateData }) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(data.photo || null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateData({
      ...data,
      [name]: value,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPhotoPreview(result);
      updateData({
        ...data,
        photo: result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Personal Information</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">This information will appear at the top of your resume. Make sure to provide a professional photo and a concise summary.</p>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Profile Photo
              </label>
              <div className="relative group">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 border-4 border-white dark:border-gray-600 shadow-md">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <svg
                        className="h-24 w-24 text-gray-400 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-3">
                  <label htmlFor="photo" className="cursor-pointer block py-2 px-4 text-center text-sm font-medium bg-primary-500 hover:bg-primary-600 text-white rounded-md transition">
                    {photoPreview ? 'Change Photo' : 'Upload Photo'}
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="sr-only"
                    />
                  </label>
                  <p className="mt-1 text-xs text-center text-gray-500 dark:text-gray-400">JPG, PNG, GIF up to 10MB. Professional headshot recommended.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Professional Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Financial Analyst"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="johndoe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="123 Main St, City, State"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={data.website}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="www.johndoe.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Professional Summary <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Write a concise summary highlighting your expertise, experience, and what makes you unique. Aim for 3-5 sentences.
          </p>
          <textarea
            id="about"
            name="about"
            value={data.about}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Dedicated and detail-oriented Financial Analyst with 10 years of experience. Eager to apply proven-budget maximization skills in monitoring, maintaining, and completing client billing and reconciliations..."
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-red-500">*</span> Required fields
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {data.about.length}/500 characters
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm; 