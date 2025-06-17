"use client";

import { useState, useRef, useEffect } from 'react';
import { getAISuggestions } from '@/lib/ai-service';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ResumeAIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your resume assistant powered by a comprehensive knowledge base. I can help with:\n\n• Resume structure and formatting\n• Writing effective job descriptions\n• Creating impactful skill sections\n• Industry-specific resume tips\n• Interview preparation\n• Cover letter writing\n\nWhat aspect of your resume would you like help with today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await getAISuggestions(input);
      
      // Add AI response
      const aiMessage: Message = {
        role: 'assistant',
        content: response.success ? response.data : 'Sorry, I encountered an error. Please try again later.'
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Categorized sample questions
  const questionCategories = {
    general: [
      "What sections should I include in my resume?",
      "How long should my resume be?",
      "What resume format is right for me?",
      "How should I name my resume file?"
    ],
    content: [
      "Show me examples of strong resume bullets",
      "How do I write an effective professional summary?",
      "Give me action verbs for leadership roles",
      "How do I quantify achievements on my resume?"
    ],
    skills: [
      "What technical skills should I include for software development?",
      "What are important skills for marketing positions?",
      "What's the best way to format my skills section?",
      "Should I include soft skills on my resume?"
    ],
    industry: [
      "Resume tips for tech/software professionals",
      "Resume advice for healthcare workers",
      "How to write a business/management resume",
      "Resume tips for creative professionals"
    ],
    situations: [
      "How do I explain employment gaps?",
      "Resume tips for recent graduates",
      "How do I make a career change with my resume?",
      "How do I create a resume with no experience?"
    ],
    applications: [
      "How do I optimize my resume for ATS?",
      "Write a cover letter for a job application",
      "How to prepare for resume-based interview questions",
      "What resume mistakes should I avoid?"
    ]
  };

  const categoryLabels = {
    general: "Format & Structure",
    content: "Writing Tips",
    skills: "Skills Section",
    industry: "Industry-Specific",
    situations: "Special Situations",
    applications: "Applications & Interviews"
  };

  const handleSampleQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg z-50 transition-colors ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-600 hover:bg-primary-700'
        } text-white`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 sm:w-96 h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 flex flex-col border border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-primary-600 text-white rounded-t-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Resume Expert
            </h3>
            <p className="text-sm opacity-90">Powered by comprehensive resume knowledge</p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[90%] ${
                    message.role === 'user'
                      ? 'bg-primary-600 text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-gray-700 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-100 dark:bg-gray-700 rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Sample questions with categories */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="mb-2 flex items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400 mr-2">Ask about:</span>
              <div className="flex-1 overflow-x-auto pb-1 flex gap-1.5 scrollbar-hide">
                {Object.keys(categoryLabels).map((category) => (
                  <button
                    key={category}
                    className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1.5 max-h-[120px] overflow-y-auto">
              {questionCategories[activeCategory as keyof typeof questionCategories].map((question, index) => (
                <button
                  key={index}
                  className="px-2.5 py-1.5 text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
                  onClick={() => handleSampleQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-md dark:bg-gray-700"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 disabled:opacity-50"
                disabled={!input.trim() || isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ResumeAIChatBot; 