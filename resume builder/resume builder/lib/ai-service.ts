import { AIServiceResponse } from '@/utils/types';

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';

/**
 * Resume advice knowledge base for offline/local responses
 */
export const resumeKnowledgeBase = {
  // Resume Structure
  structure: {
    sections: [
      "Contact Information: Full name, phone number, email address, location, LinkedIn profile",
      "Professional Summary: 2-3 sentence overview highlighting your experience, skills, and value proposition",
      "Work Experience: Reverse chronological order, company names, job titles, dates, accomplishments",
      "Education: Degrees, institutions, graduation dates, relevant coursework or honors",
      "Skills: Technical skills, soft skills, languages, certifications",
      "Projects (optional): Relevant projects with brief descriptions and outcomes",
      "Certifications (optional): Professional certifications with dates",
      "Awards & Achievements (optional): Professional recognitions and accomplishments"
    ],
    formatting: [
      "Length: 1 page for entry-level, 2 pages maximum for experienced professionals",
      "Margins: 0.5-1 inch on all sides",
      "Font: Professional fonts like Calibri, Arial, or Helvetica at 10-12pt size",
      "File format: PDF unless otherwise specified",
      "File name: FirstName_LastName_Resume.pdf"
    ],
    resumeFormats: [
      "Chronological: Focuses on work history in reverse chronological order, best for consistent career progression",
      "Functional: Emphasizes skills and abilities rather than job history, good for career changers or gaps",
      "Combination: Blends chronological and functional formats, highlighting both skills and experience",
      "Targeted: Customized for a specific position, emphasizing relevant experience and skills"
    ]
  },
  
  // Job Descriptions
  jobDescriptions: {
    tips: [
      "Use action verbs (Developed, Implemented, Led, Created)",
      "Quantify achievements with metrics (Increased efficiency by 20%, Reduced costs by $10K)",
      "Focus on accomplishments, not just duties",
      "Tailor descriptions to match target job requirements",
      "Use present tense for current roles, past tense for previous roles"
    ],
    actionVerbs: {
      leadership: ["Led", "Managed", "Directed", "Supervised", "Coordinated", "Oversaw", "Guided", "Mentored", "Executed", "Chaired"],
      technical: ["Developed", "Programmed", "Implemented", "Engineered", "Designed", "Built", "Coded", "Configured", "Optimized", "Troubleshot"],
      communication: ["Presented", "Negotiated", "Persuaded", "Authored", "Corresponded", "Facilitated", "Mediated", "Promoted", "Publicized", "Reconciled"],
      analysis: ["Analyzed", "Assessed", "Evaluated", "Researched", "Investigated", "Calculated", "Estimated", "Forecasted", "Measured", "Tested"],
      achievement: ["Achieved", "Improved", "Increased", "Reduced", "Resolved", "Delivered", "Exceeded", "Generated", "Gained", "Saved"]
    },
    formula: "Action Verb + Task + Result/Impact: 'Redesigned inventory system, reducing processing time by 35%'",
    examples: {
      software: [
        "Developed a responsive web application using React and Node.js, increasing user engagement by 45%",
        "Optimized database queries, reducing page load time by 60% and improving user experience",
        "Led a team of 5 developers to deliver a cloud migration project 2 weeks ahead of schedule",
        "Implemented automated testing workflow, reducing bug reports by 30% in production environment"
      ],
      marketing: [
        "Created social media strategy that increased brand engagement by 78% across platforms",
        "Launched email marketing campaign resulting in $50K additional revenue in Q3 2023",
        "Managed a $500K digital advertising budget, achieving 25% better ROI than previous campaigns",
        "Developed content strategy that generated 45% increase in organic website traffic"
      ],
      finance: [
        "Analyzed business operations and identified cost-saving opportunities, reducing overhead by $200K annually",
        "Developed financial forecasting models that improved budget accuracy by 30%",
        "Led implementation of new accounting software, reducing month-end close time by 40%",
        "Managed investment portfolio of $15M, achieving 12% annual return against industry average of 8%"
      ],
      healthcare: [
        "Coordinated care for 45+ patients daily while maintaining 98% satisfaction rating",
        "Implemented new patient intake protocol, reducing wait times by 25%",
        "Trained 15 new staff members on electronic health record system",
        "Developed patient education materials that improved compliance with treatment plans by 35%"
      ]
    }
  },
  
  // Skills Section
  skills: {
    technical: {
      softwareDevelopment: ["JavaScript", "Python", "Java", "C++", "React", "Node.js", "SQL", "Cloud platforms", "Git", "Docker", "Kubernetes", "RESTful APIs", "GraphQL", "CI/CD", "Agile methodologies"],
      dataScience: ["R", "Python", "SQL", "Machine Learning", "Statistical analysis", "Data visualization", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Tableau", "Power BI", "Natural Language Processing", "Predictive modeling"],
      marketing: ["SEO", "SEM", "Social media", "Content strategy", "Email marketing", "Analytics", "CRM systems", "A/B testing", "Conversion optimization", "Google Analytics", "Market research", "Brand development", "Marketing automation"],
      finance: ["Financial analysis", "Forecasting", "Budgeting", "Excel", "Financial modeling", "QuickBooks", "SAP", "Risk assessment", "Investment analysis", "Tax planning", "Accounting principles", "ERP systems"]
    },
    soft: [
      "Communication", "Leadership", "Problem-solving", "Teamwork", 
      "Time management", "Adaptability", "Critical thinking", "Creativity",
      "Emotional intelligence", "Negotiation", "Conflict resolution", "Decision-making",
      "Attention to detail", "Customer service", "Strategic planning", "Presentation skills"
    ],
    presentation: "Categorize skills by type, list most relevant to the job first, avoid rating scales",
    formatOptions: [
      "Simple list: Clean, easy to scan, works with ATS",
      "Categorized lists: Group by skill type (technical, soft, languages)",
      "Tag cloud: Visual representation for creative fields (use sparingly)",
      "Skill bars: Visual element but avoid using scales/ratings"
    ]
  },
  
  // ATS (Applicant Tracking System)
  ats: {
    tips: [
      "Use standard section headings (Experience, Education, Skills)",
      "Include keywords from the job posting",
      "Avoid using tables, headers/footers, or text boxes",
      "Use a clean, simple format with standard fonts",
      "Submit in requested file format (usually PDF)",
      "Avoid complex graphics or images"
    ],
    keywords: "Extract relevant skills and requirements directly from job descriptions",
    keywordStrategy: [
      "Identify primary keywords (required skills, qualifications, software)",
      "Include secondary keywords (industry terminology, desirable qualities)",
      "Use exact phrasing from job listing where possible",
      "Incorporate keywords naturally throughout all sections",
      "Include acronyms and their spelled-out versions (e.g., 'CRM (Customer Relationship Management)')"
    ],
    commonATS: [
      "Workday", "Taleo", "Greenhouse", "Lever", "BambooHR", 
      "iCIMS", "JazzHR", "Jobvite", "Breezy HR", "ADP Recruiting"
    ]
  },
  
  // Common Resume Mistakes
  commonMistakes: [
    "Using generic objectives instead of targeted professional summaries",
    "Including irrelevant experience or personal information",
    "Using passive language instead of action verbs",
    "Lack of quantifiable achievements",
    "Typos and grammatical errors",
    "Poor formatting or difficult-to-read layouts",
    "Too lengthy or too brief for experience level",
    "Missing keywords relevant to the industry/role",
    "Including outdated or irrelevant skills",
    "Using unprofessional email address",
    "Including references or 'References available upon request'",
    "Not tailoring resume to the specific position",
    "Using clichés like 'team player' or 'detail-oriented' without backing them up",
    "Including salary history or requirements"
  ],
  
  // Career-Specific Advice
  careerSpecific: {
    tech: {
      sections: ["Technical Skills", "Projects", "Contributions to open source"],
      tips: [
        "Highlight programming languages and technologies",
        "Include GitHub/portfolio links",
        "Showcase problem-solving abilities",
        "List relevant certifications"
      ],
      keySkills: [
        "Programming languages relevant to the position",
        "Web frameworks and libraries",
        "Database systems and management",
        "Cloud services (AWS, Azure, GCP)",
        "DevOps tools and practices",
        "Version control systems",
        "Testing and debugging experience",
        "Agile/Scrum methodologies"
      ],
      projectFormat: "Project Name | Technologies Used | Brief Description | Outcome/Impact"
    },
    business: {
      sections: ["Professional Experience", "Achievements", "Skills"],
      tips: [
        "Emphasize results and business impact",
        "Highlight leadership and team management",
        "Include relevant metrics and KPIs",
        "Show progression and growth"
      ],
      keySkills: [
        "Project management methodologies",
        "Team leadership and development",
        "Budget management",
        "Strategic planning",
        "Client relationship management",
        "Business analysis",
        "Risk management",
        "Communication and presentation skills"
      ]
    },
    creative: {
      sections: ["Portfolio", "Projects", "Clients"],
      tips: [
        "Include link to online portfolio",
        "Showcase diverse project types",
        "Highlight creative process",
        "Include client or stakeholder feedback"
      ],
      keySkills: [
        "Design software proficiency",
        "User experience design",
        "Brand development",
        "Creative direction",
        "Multimedia production",
        "Storytelling",
        "Campaign development",
        "Client presentation skills"
      ],
      portfolioTips: [
        "Curate your best work, not all your work",
        "Provide context and explain your role for each project",
        "Show process work, not just final products",
        "Include measurable results where possible"
      ]
    },
    healthcare: {
      sections: ["Clinical Experience", "Certifications", "Specialized Skills"],
      tips: [
        "Highlight patient care and outcomes",
        "Include all relevant certifications with expiration dates",
        "Mention experience with specific procedures or equipment",
        "Note any specialized training or continuing education"
      ],
      keySkills: [
        "Patient assessment",
        "Electronic health records systems",
        "Medical terminology",
        "Care coordination",
        "Treatment planning",
        "Patient education",
        "Regulatory compliance",
        "Crisis management"
      ]
    },
    education: {
      sections: ["Teaching Experience", "Curriculum Development", "Professional Development"],
      tips: [
        "Highlight student achievements and outcomes",
        "Include teaching methods and technologies used",
        "Detail curriculum or program development experience",
        "Show adaptability to different learning styles"
      ],
      keySkills: [
        "Lesson planning",
        "Student assessment",
        "Classroom management",
        "Educational technology",
        "Differentiated instruction",
        "Parent/family communication",
        "Curriculum development",
        "Student engagement techniques"
      ]
    }
  },
  
  // Cover Letter Advice
  coverLetter: {
    structure: [
      "Header: Your contact info and date",
      "Greeting: Addressed to specific person when possible",
      "Opening paragraph: Express enthusiasm for the role",
      "Body paragraphs: Connect your experience to job requirements",
      "Closing paragraph: Call to action and thank you",
      "Signature: Professional sign-off"
    ],
    tips: [
      "Customize for each application",
      "Research the company",
      "Address specific job requirements",
      "Keep to one page",
      "Use the same formatting as your resume",
      "Proofread carefully"
    ],
    openingLines: [
      "I was excited to see your opening for [Position] at [Company], as my background in [relevant experience] aligns perfectly with your requirements.",
      "As a long-time admirer of [Company]'s innovative approach to [industry/product], I'm thrilled to apply for the [Position] role.",
      "With [X] years of experience in [relevant field] and a proven track record of [key achievement], I'm eager to bring my expertise to the [Position] role at [Company].",
      "Your posting for a [Position] caught my attention immediately, as it combines my passion for [industry/field] with my skills in [relevant skill]."
    ],
    closingLines: [
      "I'm excited about the opportunity to bring my unique blend of skills and experience to [Company]. I look forward to discussing how I can contribute to your team.",
      "Thank you for considering my application. I welcome the opportunity to further discuss how my background and skills would benefit [Company].",
      "I would appreciate the opportunity to discuss how my skills can help [Company] achieve its goals. I'm available at your convenience for an interview.",
      "I'm enthusiastic about the possibility of joining [Company] and would welcome the chance to elaborate on how my qualifications will benefit your team."
    ],
    templates: {
      career_change: "I'm writing to express my interest in the [Position] role at [Company]. While my background is in [Previous Field], I've developed transferable skills in [Relevant Skills] that directly apply to this position. Recently, I [Relevant Achievement/Project] which demonstrates my ability to [Key Requirement]. I'm excited about transitioning into [New Field] because [Genuine Reason].",
      recent_graduate: "I'm applying for the [Position] at [Company] as advertised on [Source]. As a recent graduate with a degree in [Field] from [University], I've developed strong skills in [Relevant Skills]. During my studies, I [Academic/Internship Achievement] where I [Relevant Experience]. I'm particularly drawn to [Company] because [Specific Reason] and believe I can contribute to your team by [Value Proposition].",
      experienced_professional: "With [X] years of experience as a [Current Role] at [Current/Previous Company], I've successfully [Key Achievement] resulting in [Quantifiable Result]. At [Company], I led [Notable Project] which [Positive Outcome]. My expertise in [Relevant Skills] directly aligns with your requirements for the [Position] role. I'm particularly impressed by [Company's Recent Achievement/Initiative] and would bring the same level of innovation and dedication to your team."
    }
  },
  
  // Employment Gaps
  employmentGaps: [
    "Focus on skills developed during the gap (courses, volunteer work, freelance)",
    "Be honest but brief about the reason if asked",
    "Use a functional resume format to emphasize skills over chronology",
    "Include relevant activities during the gap (education, volunteer work)",
    "Highlight how the gap made you a stronger candidate"
  ],
  
  // Interview Preparation
  interviewPrep: {
    resumeQuestions: [
      "Walk me through your resume",
      "Tell me about this specific experience/project",
      "Explain this gap in your resume",
      "Why did you make this career transition?",
      "How does your experience prepare you for this role?"
    ],
    tips: [
      "Know your resume thoroughly",
      "Prepare stories that demonstrate skills and achievements",
      "Be ready to explain career transitions or gaps",
      "Connect past experiences to the current role",
      "Practice explaining technical concepts simply"
    ],
    commonQuestions: [
      "Tell me about yourself",
      "Why are you interested in this position?",
      "What are your greatest strengths and weaknesses?",
      "Describe a challenging situation and how you handled it",
      "Where do you see yourself in five years?",
      "Why should we hire you?",
      "What questions do you have for us?"
    ],
    starMethod: {
      description: "Structure your answers using the STAR method: Situation, Task, Action, Result",
      example: "Situation: Our company was losing customers due to slow response times.\nTask: I was asked to improve our customer service process.\nAction: I implemented a new ticketing system and trained the team on efficiency techniques.\nResult: We reduced response time by 60% and improved customer satisfaction ratings from 3.2 to 4.8/5."
    }
  },
  
  // Resume Examples
  resumeExamples: {
    summaries: {
      entryLevel: "Recent Computer Science graduate with strong foundation in Java, Python, and web development. Completed 3 internship projects focusing on database optimization and UI design. Seeking an entry-level software developer position to leverage my technical skills and collaborative mindset.",
      midLevel: "Software Developer with 5+ years of experience specializing in full-stack development. Proficient in React, Node.js, and AWS cloud infrastructure. Successfully delivered 12+ web applications that increased client efficiency by an average of 35%. Strong communicator with experience leading small development teams.",
      senior: "Senior Project Manager with 10+ years of experience in the healthcare technology sector. Led cross-functional teams to deliver $2M+ projects on time and under budget. Expertise in agile methodologies, risk management, and stakeholder communication. Track record of improving operational efficiency by 25-40% across multiple organizations."
    },
    bullets: {
      software: [
        "Architected and implemented a microservices-based application using Node.js and Docker, improving system scalability by 200%",
        "Reduced database query response time by 75% through optimization of SQL queries and implementation of proper indexing",
        "Developed automated testing framework that increased code coverage from 65% to 92% and reduced bug reports by 45%",
        "Led migration of legacy monolithic application to cloud-based architecture, resulting in 30% cost reduction and 99.9% uptime"
      ],
      management: [
        "Managed cross-functional team of 15 staff to deliver $1.2M project under budget and 2 weeks ahead of schedule",
        "Implemented new project management methodology that improved on-time delivery rate from 75% to 94% across all department projects",
        "Reduced operational costs by $350K annually through process optimization and strategic vendor negotiations",
        "Developed and led training program for 25 junior project managers, resulting in 40% improvement in project outcomes"
      ],
      sales: [
        "Exceeded sales targets by 127% in 2022, generating $1.8M in new business revenue",
        "Developed and implemented new client outreach strategy that increased lead conversion rate from 12% to 28%",
        "Built and maintained relationships with 45+ enterprise clients, achieving 95% retention rate and $3.2M in annual recurring revenue",
        "Identified and secured opportunities in new market segment, resulting in 35% year-over-year growth and $750K in additional sales"
      ]
    }
  }
};

/**
 * Get local response from knowledge base
 * @param prompt User's query
 * @returns Best matching response from knowledge base
 */
function getLocalResponse(prompt: string): string {
  prompt = prompt.toLowerCase();
  
  // Check for specific requests that need specialized responses
  if (prompt.includes("examples") || prompt.includes("sample") || prompt.includes("template")) {
    if (prompt.includes("software") || prompt.includes("developer") || prompt.includes("engineer") || prompt.includes("tech")) {
      return getResumeExamples("software");
    } else if (prompt.includes("market") || prompt.includes("sales") || prompt.includes("advertis")) {
      return getResumeExamples("marketing");
    } else if (prompt.includes("financ") || prompt.includes("account") || prompt.includes("banking")) {
      return getResumeExamples("finance");
    } else if (prompt.includes("healthcare") || prompt.includes("medical") || prompt.includes("nurse") || prompt.includes("doctor")) {
      return getResumeExamples("healthcare");
    } else if (prompt.includes("resume examples") || prompt.includes("resume samples") || prompt.includes("resume templates")) {
      return getResumeExamples("general");
    }
  }
  
  if (prompt.includes("ats") || prompt.includes("applicant tracking") || prompt.includes("tracking system") || prompt.includes("get past ats")) {
    return getATSAdvice();
  }
  
  if ((prompt.includes("bullet") || prompt.includes("description")) && (prompt.includes("write") || prompt.includes("how") || prompt.includes("example"))) {
    return getBulletPointAdvice();
  }
  
  if (prompt.includes("cover letter") || prompt.includes("covering letter")) {
    return getCoverLetterAdvice();
  }
  
  if (prompt.includes("skills") && (prompt.includes("software") || prompt.includes("developer") || prompt.includes("engineer") || prompt.includes("tech"))) {
    return getSkillsForRole("software");
  } else if (prompt.includes("skills") && (prompt.includes("market") || prompt.includes("sales") || prompt.includes("advertis"))) {
    return getSkillsForRole("marketing");
  } else if (prompt.includes("skills") && (prompt.includes("financ") || prompt.includes("account") || prompt.includes("banking"))) {
    return getSkillsForRole("finance");
  } else if (prompt.includes("skills") && (prompt.includes("healthcare") || prompt.includes("medical") || prompt.includes("nurse") || prompt.includes("doctor"))) {
    return getSkillsForRole("healthcare");
  } else if (prompt.includes("skills") && prompt.includes("list")) {
    return getSkillsForRole("general");
  }
  
  // Define keyword mappings to knowledge base sections
  const keywordMappings: {[key: string]: string[]} = {
    // Structure related keywords
    structure: ["structure", "format", "layout", "sections", "length", "organize", "margins", "font"],
    jobDescriptions: ["job description", "work experience", "bullet points", "achievements", "action verbs", "responsibilities", "duties", "experience section"],
    skills: ["skills", "abilities", "technologies", "competencies", "expertise", "technical skills", "soft skills", "hard skills"],
    ats: ["ats", "applicant tracking", "tracking system", "keywords", "scan", "parser", "application system", "resume screening"],
    commonMistakes: ["mistakes", "errors", "problems", "avoid", "wrong", "don't", "common issues", "pitfalls"],
    careerSpecific: ["tech", "software", "developer", "engineer", "business", "management", "creative", "design", "marketing", "finance", "healthcare", "specific industry"],
    coverLetter: ["cover letter", "covering letter", "application letter", "introduction letter", "accompaniment"],
    employmentGaps: ["gap", "break", "time off", "unemployment", "career break", "hiatus", "absence", "between jobs"],
    interviewPrep: ["interview", "question", "preparation", "explain resume", "talk about", "discuss experience"]
  };
  
  // Search for matching section based on keywords
  let bestMatch = "";
  let bestMatchScore = 0;
  
  for (const [section, keywords] of Object.entries(keywordMappings)) {
    const matchScore = keywords.filter(keyword => prompt.includes(keyword)).length;
    if (matchScore > bestMatchScore) {
      bestMatch = section;
      bestMatchScore = matchScore;
    }
  }
  
  // If no good match, provide general advice
  if (bestMatchScore === 0) {
    return `
Here are some general resume tips:

1. Keep your resume concise and focused - 1-2 pages maximum
2. Tailor your resume for each job application
3. Use a clean, professional format with consistent styling
4. Start bullet points with strong action verbs
5. Quantify achievements when possible (numbers, percentages, etc.)
6. Include keywords from the job description
7. Proofread carefully for errors
8. Save as PDF unless specified otherwise
9. Focus on accomplishments, not just responsibilities
10. Include only relevant information for the position

What specific aspect of your resume would you like more help with?`;
  }
  
  // Generate response based on the matched section
  switch (bestMatch) {
    case "structure":
      return `
Here's advice on resume structure:

Recommended Sections:
${resumeKnowledgeBase.structure.sections.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

Formatting Guidelines:
${resumeKnowledgeBase.structure.formatting.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

Would you like more specific advice on a particular section?`;
      
    case "jobDescriptions":
      return `
Here's how to write effective job descriptions:

Tips:
${resumeKnowledgeBase.jobDescriptions.tips.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

Strong Action Verbs:
- Leadership: ${resumeKnowledgeBase.jobDescriptions.actionVerbs.leadership.join(', ')}
- Technical: ${resumeKnowledgeBase.jobDescriptions.actionVerbs.technical.join(', ')}
- Analysis: ${resumeKnowledgeBase.jobDescriptions.actionVerbs.analysis.join(', ')}

Formula for effective bullet points:
${resumeKnowledgeBase.jobDescriptions.formula}

Would you like examples for a specific job type?`;
      
    case "skills":
      return `
Here's advice on creating an effective skills section:

Technical Skills Examples:
- Software Development: ${resumeKnowledgeBase.skills.technical.softwareDevelopment.join(', ')}
- Data Science: ${resumeKnowledgeBase.skills.technical.dataScience.join(', ')}
- Marketing: ${resumeKnowledgeBase.skills.technical.marketing.join(', ')}

Important Soft Skills:
${resumeKnowledgeBase.skills.soft.join(', ')}

Best Practices:
${resumeKnowledgeBase.skills.presentation}

What industry are you targeting with your resume?`;
      
    case "ats":
      return `
Here's how to optimize your resume for Applicant Tracking Systems (ATS):

${resumeKnowledgeBase.ats.tips.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

Keyword Strategy:
${resumeKnowledgeBase.ats.keywords}

Would you like me to explain any of these tips in more detail?`;
      
    case "commonMistakes":
      return `
Here are common resume mistakes to avoid:

${resumeKnowledgeBase.commonMistakes.map((mistake, i) => `${i+1}. ${mistake}`).join('\n')}

Would you like suggestions on how to fix any of these specific issues?`;
      
    case "careerSpecific":
      return `
Here's career-specific resume advice:

For Tech/IT Roles:
- Key Sections: ${resumeKnowledgeBase.careerSpecific.tech.sections.join(', ')}
${resumeKnowledgeBase.careerSpecific.tech.tips.map((tip, i) => `- ${tip}`).join('\n')}

For Business/Management:
- Key Sections: ${resumeKnowledgeBase.careerSpecific.business.sections.join(', ')}
${resumeKnowledgeBase.careerSpecific.business.tips.map((tip, i) => `- ${tip}`).join('\n')}

For Creative Fields:
- Key Sections: ${resumeKnowledgeBase.careerSpecific.creative.sections.join(', ')}
${resumeKnowledgeBase.careerSpecific.creative.tips.map((tip, i) => `- ${tip}`).join('\n')}

What specific industry or role are you targeting?`;
      
    case "coverLetter":
      return `
Here's advice for writing an effective cover letter:

Structure:
${resumeKnowledgeBase.coverLetter.structure.map((section, i) => `${i+1}. ${section}`).join('\n')}

Tips:
${resumeKnowledgeBase.coverLetter.tips.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

Would you like a template or examples for your specific situation?`;
      
    case "employmentGaps":
      return `
Here's how to address employment gaps on your resume:

${resumeKnowledgeBase.employmentGaps.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

How long is the gap you're trying to address?`;
      
    case "interviewPrep":
      return `
Here's how to prepare for resume-related interview questions:

Common Questions About Your Resume:
${resumeKnowledgeBase.interviewPrep.resumeQuestions.map((q, i) => `${i+1}. "${q}"`).join('\n')}

Preparation Tips:
${resumeKnowledgeBase.interviewPrep.tips.map((tip, i) => `${i+1}. ${tip}`).join('\n')}

Which specific question would you like help preparing for?`;
      
    default:
      return `
Here are some general resume tips:

1. Keep your resume concise and focused - 1-2 pages maximum
2. Tailor your resume for each job application
3. Use a clean, professional format with consistent styling
4. Start bullet points with strong action verbs
5. Quantify achievements when possible (numbers, percentages, etc.)
6. Include keywords from the job description
7. Proofread carefully for errors
8. Save as PDF unless specified otherwise
9. Focus on accomplishments, not just responsibilities
10. Include only relevant information for the position

What specific aspect of your resume would you like more help with?`;
  }
}

/**
 * Get AI suggestions for resume improvement
 * @param prompt User's query about resume
 * @returns Response with AI suggestions
 */
export async function getAISuggestions(prompt: string): Promise<AIServiceResponse> {
  if (!API_KEY) {
    // Return local knowledge base response if API key is not available
    const localResponse = getLocalResponse(prompt);
    return {
      data: localResponse,
      success: true
    };
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful resume assistant. Your goal is to help users create better resumes. 
            Provide concise, practical advice for resume improvement. Focus on formatting, content, 
            wording suggestions, and industry best practices. Be specific and actionable in your advice.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get AI response');
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';

    return {
      data: aiResponse,
      success: true
    };
  } catch (error) {
    console.error('AI service error:', error);
    
    // Fall back to local knowledge base if API call fails
    const localResponse = getLocalResponse(prompt);
    return {
      data: localResponse,
      success: true
    };
  }
}

/**
 * Get specific resume examples based on the job type
 * @param jobType Type of job (software, marketing, finance, etc.)
 * @returns Formatted resume examples
 */
function getResumeExamples(jobType: string): string {
  jobType = jobType.toLowerCase();
  let examples = "";
  
  if (jobType.includes("software") || jobType.includes("developer") || jobType.includes("engineer") || jobType.includes("tech")) {
    examples = `
Here are some strong resume examples for software/tech roles:

Professional Summary:
"Full-stack software engineer with 5+ years of experience in JavaScript, React, and Node.js. Specialized in developing scalable web applications with microservices architecture. Reduced API response times by 40% at ABC Tech and implemented CI/CD pipelines that reduced deployment time by 60%. Eager to leverage technical expertise and leadership skills as a Senior Developer at XYZ Company."

Work Experience Bullets:
1. "Architected and implemented a microservices-based application using Node.js and Docker, improving system scalability by 200%"
2. "Reduced database query response time by 75% through optimization of SQL queries and implementation of proper indexing"
3. "Developed automated testing framework that increased code coverage from 65% to 92% and reduced bug reports by 45%"
4. "Led migration of legacy monolithic application to cloud-based architecture, resulting in 30% cost reduction and 99.9% uptime"

Project Example:
"E-commerce Platform Redesign | React, Node.js, MongoDB | Led frontend team of 3 developers to rebuild client's e-commerce platform, implementing responsive design and optimized checkout process | Increased mobile conversion rates by 35% and reduced cart abandonment by 25%"

Technical Skills to Highlight:
• Programming: JavaScript/TypeScript, Python, Java, C#
• Frontend: React, Angular, Vue.js, HTML5, CSS3
• Backend: Node.js, Express, Django, Spring Boot
• Database: MongoDB, PostgreSQL, MySQL
• Cloud: AWS (EC2, S3, Lambda), Azure, Google Cloud
• Tools: Git, Docker, Kubernetes, Jenkins, Jira
• Testing: Jest, Mocha, Selenium, Cypress

Would you like more specific examples for a particular aspect of the resume?`;

  } else if (jobType.includes("market") || jobType.includes("sales") || jobType.includes("advertis")) {
    examples = `
Here are some strong resume examples for marketing/sales roles:

Professional Summary:
"Results-driven Marketing Manager with 7+ years of experience developing integrated marketing campaigns for B2B and B2C audiences. Expertise in digital marketing, content strategy, and marketing analytics. Increased organic traffic by 85% and generated $1.2M in marketing-attributed revenue at ABC Company. Seeking to leverage data-driven marketing expertise as Senior Marketing Manager at XYZ Corporation."

Work Experience Bullets:
1. "Developed and executed comprehensive social media strategy that increased follower engagement by 78% and drove 120K new website visits"
2. "Led rebranding initiative that increased brand recognition by 45% according to customer surveys and contributed to 32% sales growth"
3. "Managed $500K digital advertising budget across Google, Facebook, and LinkedIn, achieving 310% ROI and 22K qualified leads"
4. "Created email marketing automation workflow that improved lead nurturing effectiveness by 40% and shortened sales cycle by 15 days"

Project Example:
"Product Launch Campaign | Developed integrated marketing strategy for new product launch including digital, social, and email components | Generated 5,000+ leads and $450K in revenue within first quarter | Exceeded sales targets by 130%"

Key Skills to Highlight:
• Digital Marketing: SEO, SEM, PPC, Display Advertising
• Content Marketing: Strategy, Creation, Distribution
• Social Media Marketing: Strategy, Campaign Management
• Marketing Automation: HubSpot, Marketo, Mailchimp
• Analytics: Google Analytics, Data Studio, Attribution Modeling
• CRM: Salesforce, HubSpot CRM, Zoho
• Presentation: Storytelling, Stakeholder Communication

Would you like more specific examples for a particular aspect of the resume?`;

  } else if (jobType.includes("financ") || jobType.includes("account") || jobType.includes("banking")) {
    examples = `
Here are some strong resume examples for finance/accounting roles:

Professional Summary:
"Strategic Finance Manager with 8+ years of experience in financial planning, analysis, and reporting for Fortune 500 companies. Expertise in budgeting, forecasting, and financial modeling. Implemented cost-saving initiatives that reduced operating expenses by $2.3M at ABC Corporation. Seeking to leverage financial acumen and leadership skills as Finance Director at XYZ Company."

Work Experience Bullets:
1. "Developed comprehensive financial models and forecasts that improved budget accuracy by 35% and supported $50M in strategic investment decisions"
2. "Led implementation of new ERP system, streamlining financial reporting processes and reducing month-end close time from 10 days to 4 days"
3. "Performed detailed cost analysis across 12 departments, identifying and implementing $1.8M in annual cost savings without impacting operational efficiency"
4. "Managed team of 5 financial analysts responsible for $250M annual budget, ensuring 100% compliance with corporate policies and regulatory requirements"

Project Example:
"Financial Process Optimization | Led cross-functional team to evaluate and restructure financial reporting workflows | Reduced monthly close process by 60% and improved data accuracy by 40% | Saved approximately 120 person-hours per month"

Key Skills to Highlight:
• Financial Analysis: Modeling, Forecasting, Budgeting
• Technical: Advanced Excel, SQL, Power BI, Tableau
• Systems: SAP, Oracle, NetSuite, QuickBooks
• Regulatory: GAAP, IFRS, SOX Compliance
• Risk Management: Financial Risk Assessment, Mitigation Strategies
• Leadership: Team Management, Stakeholder Communication
• Project Management: Process Improvement, Change Management

Would you like more specific examples for a particular aspect of the resume?`;

  } else if (jobType.includes("healthcare") || jobType.includes("medical") || jobType.includes("nurse") || jobType.includes("doctor")) {
    examples = `
Here are some strong resume examples for healthcare roles:

Professional Summary:
"Dedicated Registered Nurse with 6+ years of experience in critical care and emergency medicine. Expertise in patient assessment, care planning, and interdisciplinary collaboration. Implemented new patient monitoring protocol that reduced adverse events by 28% at ABC Hospital. Seeking to leverage clinical expertise and leadership skills as Nurse Manager at XYZ Medical Center."

Work Experience Bullets:
1. "Provided comprehensive care for 8-10 high-acuity patients per shift, maintaining 96% patient satisfaction ratings"
2. "Developed and implemented new patient education materials that improved medication adherence by 42% and reduced readmission rates by 18%"
3. "Served as charge nurse for 15-bed ICU, coordinating workflow for 10 staff members and ensuring optimal resource allocation"
4. "Led implementation of new electronic health record system, training 45 staff members and reducing documentation time by 35%"

Project Example:
"Patient Care Improvement Initiative | Led interdisciplinary team to develop standardized care protocols for post-surgical patients | Reduced complications by 32% and average length of stay by 1.3 days | Recognized with hospital's Quality Improvement Award"

Key Skills to Highlight:
• Clinical: Patient Assessment, Medication Administration, Wound Care
• Technical: EHR Systems (Epic, Cerner, Meditech), Medical Equipment Operation
• Administrative: Care Coordination, Resource Management, Scheduling
• Communication: Patient Education, Interdisciplinary Collaboration
• Specialties: Critical Care, Emergency, Surgical, Pediatric (as applicable)
• Certifications: BLS, ACLS, PALS, Specialty Certifications
• Leadership: Charge Nurse, Precepting, Committee Participation

Would you like more specific examples for a particular aspect of the resume?`;

  } else {
    examples = `
Here are some general strong resume examples that can be adapted to your field:

Professional Summary:
"Results-oriented professional with 5+ years of experience in [your field]. Expertise in [key skill 1], [key skill 2], and [key skill 3]. Successfully [major achievement] at [previous company], resulting in [quantifiable result]. Seeking to leverage expertise and leadership skills as [target position] at [target company]."

Work Experience Bullets (Formula: Action Verb + Task + Result):
1. "Led cross-functional team of 8 members to implement new [system/process], resulting in 30% improvement in [relevant metric]"
2. "Developed innovative approach to [common challenge], reducing [negative outcome] by 25% and increasing [positive outcome] by 40%"
3. "Managed budget of $[amount], consistently delivering projects under budget while exceeding quality expectations"
4. "Created comprehensive training program for [topic], resulting in 45% improvement in team performance and 20% reduction in errors"

Project Example Format:
"[Project Name] | [Your Role] | [Brief Description of What You Did] | [Quantifiable Results or Impact]"

Key Skills Format:
• Technical Skills: [List 4-6 relevant technical skills]
• Process Skills: [List 3-4 relevant processes you're familiar with]
• Tools: [List 3-5 relevant tools/software you've mastered]
• Soft Skills: [List 3-4 relevant soft skills that matter in your field]

For more customized examples, please specify your industry or role.

Would you like more specific examples for a particular aspect of the resume?`;
  }
  
  return examples;
}

/**
 * Generate ATS optimization advice with examples
 * @returns Formatted ATS advice
 */
function getATSAdvice(): string {
  return `
Here's how to optimize your resume for Applicant Tracking Systems (ATS):

Key ATS Optimization Strategies:
1. Use standard section headings (e.g., "Experience," "Education," "Skills")
2. Include exact keywords and phrases from the job description
3. Avoid tables, text boxes, headers/footers, and complex formatting
4. Use a clean, simple format with standard fonts (Arial, Calibri, Helvetica)
5. Submit in the requested file format (usually PDF, unless specified otherwise)
6. Avoid images, graphics, or special characters that ATS can't read
7. Include your name and contact information in the main content area, not just in a header

Keyword Strategy:
• Create a "Skills" section that includes technical skills mentioned in the job posting
• Incorporate keywords naturally throughout your experience descriptions
• Include both spelled-out terms and acronyms (e.g., "Search Engine Optimization (SEO)")
• Use job title variations that match the posting (e.g., "Project Manager" and "Project Management")
• Focus on hard skills and industry-specific terminology

Example of Before & After ATS Optimization:

BEFORE (Poor for ATS):
Creative Marketing Guru
• Generated amazing results for clients
• Expert in social media
• Excellent communication skills
• Increased web traffic significantly

AFTER (Optimized for ATS):
Digital Marketing Specialist
• Developed and executed social media campaigns across Facebook, Instagram, and LinkedIn, increasing engagement by 78%
• Created SEO-optimized content that improved organic search rankings by 45 positions for key terms
• Managed Google Ads campaigns with $10,000 monthly budget, achieving 320% ROI
• Increased website traffic by 15,000 monthly visitors through content marketing and backlink strategies

Common ATS platforms include: Workday, Taleo, Greenhouse, Lever, BambooHR, iCIMS, and ADP Recruiting.

Would you like more specific ATS optimization tips for your particular industry?`;
}

/**
 * Generate resume bullet point examples
 * @returns Formatted bullet point examples and advice
 */
function getBulletPointAdvice(): string {
  return `
Here's how to write powerful resume bullet points:

Formula for Effective Bullet Points:
Action Verb + What You Did + Result/Impact

The key is to focus on achievements, not just duties or responsibilities.

Examples of Weak vs. Strong Bullet Points:

WEAK: "Responsible for customer service"
STRONG: "Resolved 50+ customer inquiries daily with 98% satisfaction rating"

WEAK: "Managed social media accounts"
STRONG: "Grew Instagram following by 10,000+ followers in 6 months, increasing engagement by 45%"

WEAK: "Participated in software development"
STRONG: "Developed inventory management module that reduced processing time by 35% and eliminated data entry errors"

Tips for Writing Effective Bullet Points:
1. Start with strong action verbs (Achieved, Implemented, Developed, Led)
2. Quantify results whenever possible (use numbers, percentages, dollar amounts)
3. Focus on your achievements and contributions, not just job duties
4. Tailor bullet points to match requirements in the job description
5. Keep each bullet to 1-2 lines maximum for readability
6. Use present tense for current positions, past tense for previous roles

Strong Action Verbs by Category:
• Leadership: Led, Managed, Directed, Coordinated, Supervised, Mentored
• Achievement: Achieved, Improved, Increased, Reduced, Delivered, Generated
• Technical: Developed, Programmed, Implemented, Engineered, Designed, Built
• Communication: Presented, Negotiated, Authored, Facilitated, Mediated, Promoted
• Analysis: Analyzed, Evaluated, Assessed, Researched, Investigated, Identified

Would you like more industry-specific bullet point examples?`;
}

/**
 * Generate cover letter advice and examples
 * @returns Formatted cover letter advice
 */
function getCoverLetterAdvice(): string {
  return `
Here's comprehensive advice for writing an effective cover letter:

Cover Letter Structure:
1. Header: Your contact information and date
2. Greeting: Address to specific person when possible (research the hiring manager's name)
3. Opening Paragraph: Express enthusiasm for the position and briefly mention how you found it
4. Body Paragraphs (1-2): Connect your experience to the job requirements, highlight relevant achievements
5. Closing Paragraph: Call to action and thank you
6. Professional sign-off: "Sincerely," "Best regards," followed by your name

Strong Opening Lines:
• "I'm excited to apply for the [Position] role at [Company], as my background in [relevant experience] aligns perfectly with your requirements."
• "As a [your profession] with [X] years of experience in [relevant field], I was thrilled to discover the [Position] opening at [Company]."
• "Having followed [Company]'s innovative work in [industry/field], I'm eager to apply my [key skill] expertise to the [Position] role."

Effective Body Paragraph Formula:
1. State a key requirement from the job description
2. Connect it to your relevant experience or skill
3. Provide a specific example with measurable results
4. Explain how this would benefit the company

Example:
"The job description emphasizes the need for experience in data analysis and reporting. In my current role as Marketing Analyst at ABC Company, I've developed comprehensive dashboard systems that track campaign performance across 12 key metrics. This reduced reporting time by 40% and helped identify optimization opportunities that increased ROI by 28%. I'm excited to bring this analytical approach to XYZ Company to help drive your marketing performance."

Strong Closing Lines:
• "I'm enthusiastic about the possibility of bringing my [key skills] to [Company] and would welcome the opportunity to discuss how I can contribute to your team."
• "Thank you for considering my application. I look forward to the possibility of discussing how my background and skills would benefit [Company]."
• "I would appreciate the opportunity to further discuss how my skills and experience align with your needs. Please feel free to contact me at [phone] or [email] to arrange a conversation."

Cover Letter Templates for Different Situations:

Career Change:
"I'm writing to express my interest in the [Position] role at [Company]. While my background is in [Previous Field], I've developed transferable skills in [Relevant Skills] that directly apply to this position. Recently, I [Relevant Achievement/Project] which demonstrates my ability to [Key Requirement]. I'm excited about transitioning into [New Field] because [Genuine Reason]."

Recent Graduate:
"I'm applying for the [Position] at [Company] as advertised on [Source]. As a recent graduate with a degree in [Field] from [University], I've developed strong skills in [Relevant Skills]. During my studies, I [Academic/Internship Achievement] where I [Relevant Experience]. I'm particularly drawn to [Company] because [Specific Reason] and believe I can contribute to your team by [Value Proposition]."

Experienced Professional:
"With [X] years of experience as a [Current Role] at [Current/Previous Company], I've successfully [Key Achievement] resulting in [Quantifiable Result]. At [Company], I led [Notable Project] which [Positive Outcome]. My expertise in [Relevant Skills] directly aligns with your requirements for the [Position] role. I'm particularly impressed by [Company's Recent Achievement/Initiative] and would bring the same level of innovation and dedication to your team."

Would you like specific advice on adapting your cover letter for a particular situation or role?`;
}

/**
 * Get recommended skills for a specific role
 * @param roleType Type of role (software, marketing, finance, etc.)
 * @returns Formatted skills recommendations
 */
function getSkillsForRole(roleType: string): string {
  roleType = roleType.toLowerCase();
  let skills = "";
  
  if (roleType.includes("software") || roleType.includes("developer") || roleType.includes("engineer") || roleType.includes("tech")) {
    skills = `
Here are recommended skills for a software engineering/development resume:

Technical Skills (customize based on your actual expertise):

Programming Languages:
• JavaScript/TypeScript
• Python
• Java
• C#/C++
• Go
• Ruby
• PHP

Frontend Development:
• HTML5/CSS3
• React
• Angular
• Vue.js
• Redux
• Webpack
• Responsive Design
• UI/UX principles

Backend Development:
• Node.js
• Express
• Django
• Spring Boot
• Ruby on Rails
• ASP.NET
• REST APIs
• GraphQL
• Microservices

Database Technologies:
• SQL (MySQL, PostgreSQL)
• NoSQL (MongoDB, Cassandra)
• Redis
• Database design
• Query optimization

DevOps/Cloud:
• AWS (EC2, S3, Lambda)
• Azure
• Google Cloud Platform
• Docker
• Kubernetes
• CI/CD (Jenkins, GitLab CI)
• Infrastructure as Code

Version Control:
• Git
• GitHub/GitLab/Bitbucket
• Branching strategies

Testing:
• Unit testing
• Integration testing
• Jest, Mocha, Selenium
• Test-driven development

Soft Skills (equally important):
• Problem-solving
• Algorithmic thinking
• Communication
• Collaboration
• Time management
• Adaptability
• Continuous learning

Methodologies:
• Agile/Scrum
• Kanban
• Object-oriented design
• Design patterns

Format your skills section by grouping related technologies together. For a software role, include a dedicated "Technical Skills" section, and incorporate your most relevant skills into your work experience descriptions.

Would you like more specific advice on how to format or prioritize these skills?`;

  } else if (roleType.includes("market") || roleType.includes("sales") || roleType.includes("advertis")) {
    skills = `
Here are recommended skills for a marketing/sales resume:

Technical Marketing Skills:

Digital Marketing:
• Search Engine Optimization (SEO)
• Search Engine Marketing (SEM)
• Pay-Per-Click (PPC) Advertising
• Google Ads
• Social Media Marketing
• Email Marketing
• Content Marketing
• Affiliate Marketing
• Conversion Rate Optimization (CRO)

Analytics & Data:
• Google Analytics
• Google Tag Manager
• Data Studio
• A/B Testing
• Market Research
• Competitive Analysis
• Attribution Modeling
• Customer Journey Mapping

Content Skills:
• Content Strategy
• Copywriting
• Blogging
• Video Production
• Podcast Creation
• Social Media Content
• Email Copywriting
• Brand Messaging

Technical Tools:
• CRM Software (Salesforce, HubSpot)
• Marketing Automation (Marketo, HubSpot)
• SEO Tools (SEMrush, Ahrefs)
• Social Media Management (Hootsuite, Buffer)
• Email Platforms (Mailchimp, Constant Contact)
• CMS (WordPress, Drupal)
• Design Software (Adobe Creative Suite)

Soft Skills:
• Strategic Thinking
• Creativity
• Communication
• Presentation Skills
• Project Management
• Client Relationship Management
• Team Collaboration
• Adaptability

Sales-Specific Skills (if applicable):
• Lead Generation
• Prospecting
• Sales Funnel Management
• Consultative Selling
• Negotiation
• Account Management
• Sales Strategy
• CRM Management

Format your skills section by grouping similar skills together. For marketing roles, highlight both technical proficiencies and soft skills, and be sure to back them up with quantifiable achievements in your work experience section.

Would you like more specific advice on how to format or prioritize these skills?`;

  } else if (roleType.includes("financ") || roleType.includes("account") || roleType.includes("banking")) {
    skills = `
Here are recommended skills for a finance/accounting resume:

Technical Finance/Accounting Skills:

Accounting & Reporting:
• Financial Statement Preparation
• GAAP/IFRS Knowledge
• Accounts Payable/Receivable
• General Ledger Management
• Month/Year-End Close Process
• Cost Accounting
• Tax Preparation
• Regulatory Compliance

Financial Analysis:
• Financial Modeling
• Forecasting & Budgeting
• Variance Analysis
• Cash Flow Management
• Capital Budgeting
• Ratio Analysis
• Risk Assessment
• Investment Analysis

Technical Tools:
• Excel (Advanced)
• ERP Systems (SAP, Oracle, NetSuite)
• QuickBooks
• Hyperion
• PowerBI/Tableau
• SQL
• Bloomberg Terminal
• Financial Edge

Banking/Finance Specific (if applicable):
• Credit Analysis
• Portfolio Management
• Asset Management
• Risk Management
• Banking Regulations
• Securities Analysis
• Loan Underwriting
• Treasury Management

Certifications (include if you have them):
• CPA (Certified Public Accountant)
• CFA (Chartered Financial Analyst)
• MBA (Master of Business Administration)
• CFP (Certified Financial Planner)
• ChFC (Chartered Financial Consultant)
• CIA (Certified Internal Auditor)
• CISA (Certified Information Systems Auditor)

Soft Skills:
• Analytical Thinking
• Attention to Detail
• Problem Solving
• Time Management
• Communication
• Ethical Judgment
• Team Collaboration
• Client Relationship Management

Format your skills section by organizing into categories such as "Technical Accounting Skills," "Financial Analysis," "Software Proficiency," and "Certifications." For finance roles, be sure to emphasize your analytical abilities and attention to detail throughout your resume.

Would you like more specific advice on how to format or prioritize these skills?`;

  } else if (roleType.includes("healthcare") || roleType.includes("medical") || roleType.includes("nurse") || roleType.includes("doctor")) {
    skills = `
Here are recommended skills for a healthcare resume:

Clinical Skills (customize based on your role):

Patient Care:
• Patient Assessment
• Vital Signs Monitoring
• Medication Administration
• Wound Care
• IV Management
• Pain Management
• Patient Education
• Discharge Planning

Specialized Clinical Skills (if applicable):
• Critical Care
• Emergency Care
• Surgical Assistance
• Labor & Delivery
• Pediatric Care
• Geriatric Care
• Mental Health Assessment
• Chronic Disease Management

Technical Skills:
• Electronic Health Records (Epic, Cerner, Meditech)
• Medical Equipment Operation
• Diagnostic Testing
• Lab Result Interpretation
• Medical Coding (ICD-10, CPT)
• Telemedicine

Administrative Skills:
• Care Coordination
• Documentation
• Treatment Planning
• Quality Improvement
• Resource Management
• Scheduling
• Regulatory Compliance
• Risk Management

Certifications (include if you have them):
• BLS (Basic Life Support)
• ACLS (Advanced Cardiac Life Support)
• PALS (Pediatric Advanced Life Support)
• Specialty Certifications
• License Information

Soft Skills:
• Communication
• Empathy
• Critical Thinking
• Time Management
• Teamwork
• Adaptability
• Cultural Sensitivity
• Ethics and Integrity

Format your skills section by organizing into categories such as "Clinical Skills," "Technical Proficiencies," "Administrative Skills," and "Certifications." For healthcare roles, emphasize your patient care abilities and any specialized training you have received.

Would you like more specific advice on how to format or prioritize these skills?`;

  } else {
    skills = `
Here are general skills categories to consider for your resume:

Technical Skills (customize based on your field):
• Industry-specific software
• Specialized tools and equipment
• Technical methodologies
• Certifications and credentials
• Industry-specific processes
• Programming/coding (if applicable)
• Design software (if applicable)
• Technical writing (if applicable)

Analytical Skills:
• Data analysis
• Research
• Problem-solving
• Critical thinking
• Decision making
• Trend analysis
• Process improvement
• Quality control

Administrative Skills:
• Project management
• Scheduling
• Documentation
• Reporting
• Resource allocation
• Budget management
• Compliance
• Process development

Communication Skills:
• Written communication
• Verbal communication
• Presentation
• Public speaking
• Client/customer relations
• Cross-functional collaboration
• Training/teaching
• Negotiation

Leadership Skills (if applicable):
• Team management
• Mentoring
• Strategic planning
• Delegation
• Conflict resolution
• Performance evaluation
• Change management
• Vision setting

For your resume, select the most relevant skills from these categories based on:
1. Your actual expertise
2. The requirements in the job description
3. Skills valued in your target industry

Format your skills section by grouping related skills together, and back up these skills with concrete examples in your work experience section.

For more tailored advice, please specify your industry or role.`;
  }
  
  return skills;
} 