/** @type {import('next').Config} */
const repoName = 'Portfolio'
const isPages = process.env.NEXT_PUBLIC_BASE_PATH === `/${repoName}`

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Configure for GitHub Pages project site under /Portfolio
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : undefined,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
}

module.exports = nextConfig
