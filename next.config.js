/** @type {import('next').Config} */
const repoName = 'Hafsa-Arshad'
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || `/${repoName}`,
  assetPrefix: (process.env.NEXT_PUBLIC_BASE_PATH || `/${repoName}`) + '/',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
}

module.exports = nextConfig
