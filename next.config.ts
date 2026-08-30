import type { NextConfig } from "next";
// Serving the same pages on both apex and www spends crawl budget twice and can
// leave Google indexing neither host. This property declares www as its
// canonical host, so the other one redirects here permanently.
const HOST_REDIRECT = {
  source: "/:path*",
  has: [{ type: "host" as const, value: "dialinlog.com" }],
  destination: "https://www.dialinlog.com/:path*",
  permanent: true,
};

const nextConfig: NextConfig = {
  async redirects() {
    return [HOST_REDIRECT];
  },};
export default nextConfig;
