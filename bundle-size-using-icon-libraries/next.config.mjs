/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

let nextConfig = {};

nextConfig = withBundleAnalyzer(nextConfig);

export default nextConfig;
