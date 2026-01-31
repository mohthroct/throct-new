import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/throct-new" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/throct-new" : "",
};

export default nextConfig;
