const nextConfig = {
  experimental: {
    cacheComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "night-club-2026.onrender.com",
      },
      {
        protocol: "https",
        hostname: "happiness-night-club-api.onrender.com",
      },
    ],
  },
};

export default nextConfig;
