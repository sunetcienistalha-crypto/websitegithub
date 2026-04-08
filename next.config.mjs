/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/-',
  assetPrefix: '/-/',
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
