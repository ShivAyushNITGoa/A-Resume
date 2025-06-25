"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useReactToPrint } from 'react-to-print';
import { templates } from '@/templates';
import { ResumeData } from '@/utils/types';
import ThemeToggle from '@/components/theme-toggle';
import ResumeTemplateRenderer from '@/components/ResumeTemplateRenderer';
import { getAssetPath } from '@/utils/helpers';

export default function Preview() {
  const router = useRouter();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('#9c4d61');
  const [scale, setScale] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(true);
  const resumeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLoading(true);
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('resumeData');
    const storedTemplate = localStorage.getItem('selectedTemplate');
    const storedColor = localStorage.getItem('backgroundColor');
    
    if (storedData) {
      setResumeData(JSON.parse(storedData));
    }
    
    if (storedTemplate) {
      setSelectedTemplate(storedTemplate);
    }
    
    if (storedColor) {
      setBackgroundColor(storedColor);
    }
    
    setLoading(false);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${resumeData?.personalInfo.name || 'Resume'}_${new Date().toLocaleDateString()}`,
    onBeforeGetContent: () => {
      return new Promise<void>((resolve) => {
        resolve();
      });
    },
    onAfterPrint: () => {
      // Analytics tracking could go here
    }
  });

  const handleDownloadPDF = () => {
    handlePrint();
  };

  const handleEdit = () => {
    router.push('/builder');
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    localStorage.setItem('backgroundColor', newColor);
  };

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScale(parseInt(e.target.value));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 dark:border-primary-400 mb-4"></div>
          <h2 className="text-xl font-bold">Loading your resume...</h2>
        </div>
      </div>
    );
  }

  if (!resumeData || !selectedTemplate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">No Resume Data Found</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">You need to create a resume first before previewing it.</p>
          <Link
            href="/builder"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Create Resume
          </Link>
        </div>
      </div>
    );
  }

  // Check if the template is one of our new templates
  const isNewTemplate = ['minimalist', 'modern', 'creative', 'classic'].includes(selectedTemplate);

  // Find the original template component if needed
  let TemplateComponent = null;
  if (!isNewTemplate) {
    const selectedTemplateObj = templates.find(template => template.id === selectedTemplate);
    TemplateComponent = selectedTemplateObj?.component;
    
    if (!TemplateComponent) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold mb-4">Template Not Found</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">The selected template could not be found. Please try selecting a different template.</p>
            <Link
              href="/builder"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Return to Builder
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src={getAssetPath('images/logo.svg')} 
              alt="GDEVELOPERS Logo" 
              className="h-10 w-auto"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Resume Builder
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={handleEdit}
              className="flex items-center border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Resume
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-xl font-bold">Resume Preview</h2>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <label htmlFor="bgColor" className="mr-2 text-sm whitespace-nowrap">Theme Color:</label>
                    <div className="relative">
                      <input
                        type="color"
                        id="bgColor"
                        value={backgroundColor}
                        onChange={handleColorChange}
                        className="w-8 h-8 rounded overflow-hidden cursor-pointer"
                      />
                      <div 
                        className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600"
                        style={{ backgroundColor }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="scale" className="mr-2 text-sm whitespace-nowrap">Zoom:</label>
                    <input
                      type="range"
                      id="scale"
                      min="50"
                      max="150"
                      step="10"
                      value={scale}
                      onChange={handleScaleChange}
                      className="w-24 h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-2 text-sm">{scale}%</span>
                  </div>
                </div>
              </div>
              <div 
                ref={resumeRef} 
                className="p-6 overflow-hidden"
                style={{
                  transform: `scale(${scale / 100})`,
                  transformOrigin: 'top center',
                  height: `${scale > 100 ? '150vh' : 'auto'}`
                }}
              >
                {isNewTemplate ? (
                  <ResumeTemplateRenderer 
                    selectedTemplate={selectedTemplate} 
                    resumeData={resumeData}
                    backgroundColor={backgroundColor}
                  />
                ) : (
                  TemplateComponent && (
                    <TemplateComponent 
                      data={resumeData} 
                      backgroundColor={backgroundColor}
                    />
                  )
                )}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Resume Tips</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Keep your resume concise and focused on your most relevant experience.</li>
                <li>Use action verbs and quantify your achievements when possible.</li>
                <li>Tailor your resume for each job application to match the specific requirements.</li>
                <li>Proofread carefully for spelling and grammar errors.</li>
                <li>Choose a professional color scheme that matches your industry standards.</li>
              </ul>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleEdit}
                className="px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Edit Resume
              </button>
              <button
                onClick={handleDownloadPDF}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image 
              src={getAssetPath('images/logo.svg')} 
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