/** @type {import('next').NextConfig} */ // Optional: Add JSDoc for type hints
const nextConfig = {
  // your Next.js configurations here
  output: "standalone", // example config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};

module.exports = nextConfig; // Must use module.exports for .js
