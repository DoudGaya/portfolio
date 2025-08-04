/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion', '@sanity/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Handle framer-motion export * issue
    config.module.rules.push({
      test: /node_modules\/framer-motion\/.*\.mjs$/,
      type: 'javascript/esm',
      resolve: {
        fullySpecified: false,
      },
    })
    
    return config
  },
}

module.exports = nextConfig
