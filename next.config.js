/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    modularizeImports: {
      // "@mui/material/?(((\\w*)?/?)*)": {
      //   transform: "@mui/material/{{ matches.[1] }}/{{member}}",
      // },
      "@mui/icons-material/?(((\\w*)?/?)*)": {
        transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
      },
    },
  },
};

module.exports = nextConfig;
