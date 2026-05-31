import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    instantNavigationDevToolsToggle: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**', // Crucial for parsing sub-directories
      },
      {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
        pathname: '/**', // Whitelists the Met Museum assets cleanly
      },
      {
        protocol: 'https',
        hostname: 'egyptianmuseumcairo.eg',
        pathname: '/**', // Crucial for deep-linking into their WordPress content folders
      },
    ],
  },
};

export default nextConfig;
