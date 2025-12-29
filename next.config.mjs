/** @type {import('next').NextConfig} */
const repoName = 'portfolio';

const nextConfig = {
  output: 'export',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
