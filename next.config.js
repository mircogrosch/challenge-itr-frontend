/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["bucket1.glanacion.com"]
  },
  env:{
    API_URL: "http://localhost:3001"
  }
}

module.exports = nextConfig
