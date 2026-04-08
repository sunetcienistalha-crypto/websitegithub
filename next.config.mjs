/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/websitegithub',
  assetPrefix: '/websitegithub/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
