/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.global.news.samsung.com",
      },
      {
        hostname: "images.samsung.com",
      },
    ],
  },
};

export default nextConfig;
