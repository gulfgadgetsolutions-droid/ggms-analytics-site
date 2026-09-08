import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-*",
      },
      {
        protocol: "https",
        hostname: "ggmsglobal.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
