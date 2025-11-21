import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'diariooficial.elperuano.pe',
        pathname: '/NormasElperuano/**',
      },
    ],
  },
};

export default nextConfig;
