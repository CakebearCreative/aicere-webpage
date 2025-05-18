/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: [''], // Deprecated
    remotePatterns: [], // Example: [{ protocol: 'https', hostname: 'example.com', port: '', pathname: '/images/**' }]
  },
}

module.exports = nextConfig 