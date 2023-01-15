/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dvgatxs4z/**",
      },
    ],
  },
};

module.exports = nextConfig;
