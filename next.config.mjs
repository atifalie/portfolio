/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // 👇 ADD THESE TWO LINES
  basePath: '/porfolio',
  assetPrefix: '/porfolio/',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
