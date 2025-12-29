/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/porfolio',
  assetPrefix: '/porfolio/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
