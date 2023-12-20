/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' }
    }
  }
};

module.exports = nextConfig;
