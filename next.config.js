/** @type {import('next').Config} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
