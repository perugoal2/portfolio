import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export
  images: { unoptimized: true },
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
};

export default nextConfig;
