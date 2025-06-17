// Types for resume data
export type ResumeData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  workExperience: Array<{
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    gradDate: string;
    gpa?: string;
  }>;
  skills: string[];
  projects?: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
};

/**
 * Generates a placeholder resume with sample data
 */
export function generatePlaceholderResume(): ResumeData {
  return {
    personalInfo: {
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '(555) 123-4567',
      address: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/alexjohnson',
      website: 'alexjohnson.dev'
    },
    summary: 'Detail-oriented software engineer with over 5 years of experience developing and optimizing web applications. Proficient in JavaScript, TypeScript, React, and Node.js. Passionate about creating intuitive user interfaces and scalable backend solutions.',
    workExperience: [
      {
        jobTitle: 'Senior Frontend Developer',
        company: 'Tech Innovations Inc.',
        location: 'San Francisco, CA',
        startDate: 'Jan 2021',
        endDate: 'Present',
        description: [
          "Led a team of 5 frontend developers in rebuilding the company's flagship web application using React and TypeScript",
          "Improved application performance by 40% through code optimization and implementing lazy loading strategies",
          "Collaborated with UX/UI designers to implement responsive designs and ensure accessibility compliance",
          "Mentored junior developers through code reviews and pair programming sessions"
        ]
      },
      {
        jobTitle: 'Frontend Developer',
        company: 'Digital Solutions LLC',
        location: 'Oakland, CA',
        startDate: 'Mar 2018',
        endDate: 'Dec 2020',
        description: [
          "Developed and maintained multiple client-facing web applications using React, Redux, and CSS-in-JS",
          "Implemented automated testing using Jest and React Testing Library, achieving 85% code coverage",
          "Worked closely with backend developers to design and consume RESTful APIs",
          "Participated in agile development processes, including daily standups and sprint planning"
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California',
        location: 'Berkeley, CA',
        gradDate: 'May 2018',
        gpa: '3.8/4.0'
      }
    ],
    skills: [
      'JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'HTML5', 'CSS3', 
      'SASS/SCSS', 'Git', 'RESTful APIs', 'GraphQL', 'Jest', 'Webpack', 'Agile'
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'A full-stack e-commerce application with product listings, cart functionality, and secure checkout',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
        link: 'https://github.com/alexj/ecommerce-platform'
      },
      {
        name: 'Task Management Dashboard',
        description: 'A productivity tool for teams to manage tasks, deadlines, and collaborative projects',
        technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
        link: 'https://task-dashboard-demo.netlify.app'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer – Associate',
        issuer: 'Amazon Web Services',
        date: 'Jun 2022'
      },
      {
        name: 'Professional Scrum Master I (PSM I)',
        issuer: 'Scrum.org',
        date: 'Feb 2021'
      }
    ]
  };
}

/**
 * Generates an empty resume template with no data
 */
export function generateEmptyResume(): ResumeData {
  return {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    workExperience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: []
  };
}

/**
 * Formats a date string into a more readable format
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  // If it's already in a readable format, return as is
  if (dateString.includes(' ')) return dateString;
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    });
  } catch (error) {
    return dateString;
  }
}

/**
 * Validates the resume data for required fields
 */
export function validateResume(resume: ResumeData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check personal info
  if (!resume.personalInfo.name) errors.push('Name is required');
  if (!resume.personalInfo.email) errors.push('Email is required');
  if (!resume.personalInfo.phone) errors.push('Phone is required');
  
  // Check summary
  if (!resume.summary) errors.push('Professional summary is required');
  
  // Check work experience
  if (!resume.workExperience.length) {
    errors.push('At least one work experience entry is required');
  } else {
    resume.workExperience.forEach((job, index) => {
      if (!job.jobTitle) errors.push(`Job title is required for work experience #${index + 1}`);
      if (!job.company) errors.push(`Company name is required for work experience #${index + 1}`);
      if (!job.description.length) errors.push(`Description is required for work experience #${index + 1}`);
    });
  }
  
  // Check education
  if (!resume.education.length) {
    errors.push('At least one education entry is required');
  } else {
    resume.education.forEach((edu, index) => {
      if (!edu.degree) errors.push(`Degree is required for education #${index + 1}`);
      if (!edu.institution) errors.push(`Institution is required for education #${index + 1}`);
    });
  }
  
  // Check skills
  if (!resume.skills.length) errors.push('At least one skill is required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Extracts skills from a resume summary using basic keyword matching
 */
export function extractSkillsFromSummary(summary: string): string[] {
  // Common programming languages, frameworks, and technologies
  const commonSkills = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin',
    'React', 'Angular', 'Vue', 'Next.js', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', '.NET',
    'HTML', 'CSS', 'SASS', 'SCSS', 'Bootstrap', 'Tailwind', 'Material UI',
    'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'DynamoDB', 'Redis',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub', 'GitLab',
    'Agile', 'Scrum', 'Kanban', 'TDD', 'BDD', 'CI/CD', 'DevOps'
  ];
  
  // Extract skills that appear in the summary
  const foundSkills: string[] = [];
  commonSkills.forEach(skill => {
    if (summary.toLowerCase().includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    }
  });
  
  return foundSkills;
}

/**
 * Creates a file name for the resume download based on the person's name
 */
export function generateResumeFileName(name: string): string {
  if (!name) return 'resume';
  
  // Replace spaces with underscores and remove special characters
  const cleanName = name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_').toLowerCase();
  return `${cleanName}_resume`;
} 