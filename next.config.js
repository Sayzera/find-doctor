/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr", "ar"],
    defaultLocale: "tr",
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
}

module.exports = nextConfig
