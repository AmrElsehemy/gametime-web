import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slashes and legacy `/…/nine` paths are redirected in one hop by proxy.ts.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
