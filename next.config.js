/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ]
  },
  // Optimizaciones para Vercel
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig