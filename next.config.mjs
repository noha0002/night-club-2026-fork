/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "happiness-night-club-api.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
