import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export
  images: { unoptimized: true },
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
};

export default nextConfig;
