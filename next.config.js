/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr", "ar"],
    defaultLocale: "tr",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
