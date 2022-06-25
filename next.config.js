/** @type {import('next').NextConfig} */
const nextConfig = {
  //swcMinify: true,
  reactStrictMode: false,
  // env: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  // },
  // experimental: {
  //   modularizeImports: {
  //     // "@mui/material/?(((\\w*)?/?)*)": {
  //     //   transform: "@mui/material/{{ matches.[1] }}/{{member}}",
  //     // },
  //     "@mui/icons-material/?(((\\w*)?/?)*)": {
  //       transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
  //     },
  //   },
  // },
  // async rewrites() {
  //   return [
  //     // Rewrite everything else to use `pages/index`
  //     {
  //       source: "/:path*",
  //       destination: "/",
  //     },
  //   ];
  // },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);

//module.exports = nextConfig;
