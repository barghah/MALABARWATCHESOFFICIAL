import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local — no external domains needed
    // Remote patterns can be added here if needed in the future
    unoptimized: false,
  },
  // Enable static export for deployment on any static host:
  // output: "export",
};

export default nextConfig;
