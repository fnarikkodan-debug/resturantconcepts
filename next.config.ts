import type { NextConfig } from "next";

// On GitHub Pages a project site lives under /<repo-name>. The deploy
// workflow passes that in as PAGES_BASE_PATH; locally it is empty.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Build to plain static files in ./out (for GitHub Pages).
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image-optimisation server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
