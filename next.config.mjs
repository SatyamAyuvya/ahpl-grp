/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goodglamm.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
