"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/theme-toggle';
import TemplateSelector from '@/components/TemplateSelector';
import PersonalInfoForm from '@/components/forms/PersonalInfoForm';
import ExperienceForm from '@/components/forms/ExperienceForm';
import EducationForm from '@/components/forms/EducationForm';
import SkillsForm from '@/components/forms/SkillsForm';
import AchievementsForm from '@/components/forms/AchievementsForm';
import { ResumeData, PersonalInfo, Experience, Education, Project, Certification } from '@/utils/types';
import { templates } from '@/templates';

const tabs = [
  { id: 'template', label: 'Choose Template' },
  { id: 'personal', label: 'Personal Info' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'preview', label: 'Preview' },
];

const defaultResumeData: ResumeData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    linkedin: '',
    website: '',
    photo: '',
    about: '',
    summary: '',
  },
  experience: [{
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    responsibilities: [''],
    description: '',
  }],
  education: [{
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
  }],
  skills: {
    hard: [''],
    soft: [''],
  },
  projects: [{
    title: '',
    description: '',
    date: '',
    link: '',
  }],
  certifications: [{
    name: '',
    issuer: '',
    date: '',
  }],
};

// Create a custom extended type to include achievements
interface ExtendedResumeData extends ResumeData {
  achievements?: {
    date: string;
    description: string;
  }[];
}

export default function Builder() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('template');
  const [resumeData, setResumeData] = useState<ExtendedResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].id);
  const [backgroundColor, setBackgroundColor] = useState('#9c4d61');

  // Initialize achievements using useEffect to avoid state updates during render
  useEffect(() => {
    if (!resumeData.achievements) {
      setResumeData(prev => ({
        ...prev,
        achievements: [{
          date: '',
          description: '',
        }]
      }));
    }
  }, []);

  const updateResumeData = (section: keyof ExtendedResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const handlePreview = () => {
    // Store data in localStorage to pass to preview page
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('selectedTemplate', selectedTemplate);
    localStorage.setItem('backgroundColor', backgroundColor);
    
    // Navigate to preview page
    router.push('/preview');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'template':
        return (
          <TemplateSelector 
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
          />
        );
      case 'personal':
        return (
          <PersonalInfoForm 
            data={resumeData.personalInfo}
            updateData={(data) => updateResumeData('personalInfo', data)}
          />
        );
      case 'experience':
        return (
          <ExperienceForm 
            data={resumeData.experience}
            updateData={(data) => updateResumeData('experience', data)}
          />
        );
      case 'education':
        return (
          <EducationForm 
            data={resumeData.education}
            updateData={(data) => updateResumeData('education', data)}
          />
        );
      case 'skills':
        return (
          <SkillsForm 
            data={resumeData.skills}
            updateData={(data) => updateResumeData('skills', data)}
          />
        );
      case 'achievements':
        return (
          <AchievementsForm 
            data={resumeData.achievements || []}
            updateData={(data) => updateResumeData('achievements', data)}
          />
        );
      case 'preview':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Preview & Download</h2>
            <p className="mb-6">Your resume is ready to preview and download!</p>
            <button
              onClick={handlePreview}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Preview Resume
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/logo.svg" 
              alt="GDEVELOPERS Logo" 
              className="h-10 w-auto"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Resume Builder
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex overflow-x-auto pb-1">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`whitespace-nowrap py-2 px-4 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {index + 1}. {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="mb-6">{renderTabContent()}</div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={activeTab === tabs[0].id}
                className={`px-4 py-2 border border-gray-300 rounded-md ${
                  activeTab === tabs[0].id
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Previous
              </button>
              
              {activeTab !== tabs[tabs.length - 1].id ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handlePreview}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image 
              src="/images/logo.svg" 
              alt="GDEVELOPERS Logo" 
              className="h-12 w-auto"
              width={48}
              height={48}
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