/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['adminportfolio.articloo.com'], // Add any other domains as needed
  },
}

module.exports = nextConfig
