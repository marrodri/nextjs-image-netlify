/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'maps.googleapis.com',
      'res.cloudinary.com'
    ],
    formats: ['image/webp']
  }
}

module.exports = nextConfig
