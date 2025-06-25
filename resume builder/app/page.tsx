"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";
import { getAssetPath } from "@/utils/helpers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex justify-center">
              <Image 
                src={getAssetPath('images/campus_logo.svg')}
                alt="GDEVELOPERS Logo"
                className="h-12 w-auto"
                style={{ filter: 'drop-shadow(0 0 0.5rem rgba(0,0,0,0.1))' }}
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Resume Builder
            </h1>
          </div>
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

      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Create Your Professional Resume in Minutes</h2>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                  Our resume builder helps you create stunning, professional resumes 
                  that stand out to employers. Choose from multiple templates,
                  customize colors, and download your resume in various formats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/builder"
                    className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg text-center font-medium transition duration-200"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/templates"
                    className="border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800 py-3 px-6 rounded-lg text-center font-medium transition duration-200"
                  >
                    View Templates
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="aspect-[4/5] bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-full flex justify-center mt-12">
                      <Image 
                        src={getAssetPath('images/campus_logo.svg')}
                        alt="GDEVELOPERS Logo"
                        className="h-20 w-auto mx-auto mb-6"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="text-xl font-bold text-primary-700 dark:text-primary-300">
                      Professional Resume Template
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Choose from multiple templates and customize to your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from a variety of professional and stylish resume templates 
                  designed to impress employers.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customizable Colors</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Make your resume uniquely yours by customizing colors and styling to 
                  match your personal brand.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">PDF Download</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Export your finished resume as a PDF file that's ready to be sent to 
                  potential employers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mt-8">
              <Image 
                src={getAssetPath('images/campus_logo.svg')}
                alt="GDEVELOPERS Logo"
                className="h-16 w-auto"
                width={80}
                height={80}
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} GDEVELOPERS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 