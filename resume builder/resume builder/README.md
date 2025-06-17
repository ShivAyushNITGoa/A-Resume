# Resume Builder

A professional resume builder web application that allows users to create, customize, and download their resumes with ease.

## Features

- Multiple professional resume templates
- Customizable colors and styling
- User-friendly form-based data entry
- Photo upload capability
- PDF download functionality
- Light/Dark mode support
- AI assistant for resume writing help
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up the environment variables:
Create a `.env.local` file in the root directory and add your OpenAI API key:
```
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```
Note: The AI chatbot feature requires an OpenAI API key. If you don't have one, the application will still work without the chatbot functionality.

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

## Usage Guide

1. **Choose a Template**: Select from multiple professional resume templates.
2. **Customize Colors**: Personalize your resume with custom colors.
3. **Enter Your Information**: Fill out the forms with your personal information, experience, education, skills, and achievements.
4. **Preview & Download**: Preview your resume and download it as a PDF.
5. **Get AI Assistance**: Use the AI chatbot to get help with your resume.

## Technologies Used

- Next.js - React framework
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- React Hook Form - Form validation
- html2canvas & jsPDF - PDF generation
- OpenAI API - AI assistant chatbot

## Project Structure

```
resume-builder/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utility functions and services
├── public/           # Static files
├── styles/           # Global CSS
├── templates/        # Resume templates
├── utils/            # Helper functions and types
├── .env.local        # Environment variables (create this file)
└── README.md         # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspired by professional resume templates
- Icons from Heroicons 