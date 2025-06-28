/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  i18n: {
    locales: ['tr', 'en', 'de'],
    defaultLocale: 'tr',
  },
  reactStrictMode: true,
}

export default nextConfig
