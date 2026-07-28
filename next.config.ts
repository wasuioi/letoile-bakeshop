import type { NextConfig } from "next";

// All imagery is served from public/images. No remote image hosts are
// allowlisted, so next/image cannot be pointed at a third-party CDN.
const nextConfig: NextConfig = {};

export default nextConfig;
