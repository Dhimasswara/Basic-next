/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    API_BACKEND: 'http://localhost:4000/',
    }
}

module.exports = nextConfig

