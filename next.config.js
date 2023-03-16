/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
   async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3000/:path*',
          },
        ]
      },
}

module.exports = nextConfig
