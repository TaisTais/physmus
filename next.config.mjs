/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    env: {
      // Reference a variable that was defined in the .env file and make it available at Build Time
      NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
      NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: process.env.NEXT_PUBLIC_API_DOMAIN,
        }
      ],
    },
    async rewrites() {
      return [
        {
          source: "/uploads/:path*",
          destination: `${process.env.NEXT_PUBLIC_API_URL}/uploads/:path*`,
        },
      ];
    },
};

export default nextConfig;
