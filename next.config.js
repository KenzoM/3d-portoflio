/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/assets/", // Adjust the output path as needed
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
