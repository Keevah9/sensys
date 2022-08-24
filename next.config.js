/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// const nextImages = require("next-images");
module.exports = {
  images: {
    domains: ["images.pexels.com", "sensys"],
  },
  nextConfig,
};
// module.exports = nextImages();
