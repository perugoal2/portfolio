import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export
  images: { unoptimized: true },
  assetPrefix: isGitHubPages ? '/portfolio/' : '',
  basePath: isGitHubPages ? '/portfolio' : '',
};

export default nextConfig;
