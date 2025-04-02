/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Generates static HTML/CSS/JS files
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/My-digital-cv' : '',

  trailingSlash: true,  // Adds trailing slashes to URLs
};

export default nextConfig;
