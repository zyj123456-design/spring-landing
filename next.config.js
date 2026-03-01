/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // optimizeCss: true // Disabled to fix build issues
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif']
  },
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
