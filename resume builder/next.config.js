/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Configure static export
  // Add basePath if you're deploying to a subdirectory (e.g., username.github.io/repo-name)
  // basePath: process.env.NODE_ENV === 'production' ? '/resume-builder' : '',
  // If you want trailing slashes in your URLs
  trailingSlash: true,
};

module.exports = nextConfig; 