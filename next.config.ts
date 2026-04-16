import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '',
};

export default nextConfig;
