import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["games", "support", "privacy"].map((section) => ({
      source: `/${section}/nine/:path*`,
      destination: `/${section}/exactly-one/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
