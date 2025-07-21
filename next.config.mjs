/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goodglamm.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
