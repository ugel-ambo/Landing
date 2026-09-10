import type { NextConfig } from "next";

const remotePatterns: Array<{
  protocol?: 'http' | 'https';
  hostname: string;
  port?: string;
  pathname?: string;
}> = [
    {
      protocol: 'https',
      hostname: 'diariooficial.elperuano.pe',
      pathname: '/NormasElperuano/**',
    },
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
    },
    {
      protocol: 'http',
      hostname: 'localhost',
      pathname: '/**',
    },
    {
      protocol: 'http',
      hostname: '127.0.0.1',
      pathname: '/**',
    },
  ];

if (process.env.NEXT_PUBLIC_ADMIN_URL) {
  try {
    const adminUrl = new URL(process.env.NEXT_PUBLIC_ADMIN_URL);
    remotePatterns.push({
      protocol: adminUrl.protocol.replace(':', '') as 'http' | 'https',
      hostname: adminUrl.hostname,
      port: adminUrl.port || undefined,
      pathname: '/**',
    });
  } catch (e) {
    console.warn("Invalid NEXT_PUBLIC_ADMIN_URL:", e);
  }
}

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    remotePatterns,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },
};

export default nextConfig;

