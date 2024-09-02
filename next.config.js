// Import the environment validation module
await import('./src/env.js');

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // Add Next.js configuration options here
  // For example, you can specify React strict mode, swcMinify, etc.
  reactStrictMode: true, // Enables React's Strict Mode
  swcMinify: true, // Enables SWC-based minification for faster builds
  // Add any other Next.js specific configurations here if needed
};

export default config;
