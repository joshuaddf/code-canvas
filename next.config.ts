import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.glsl": {
        loaders: ["raw-loader"],
        as: "*.js", // Treat GLSL files as JavaScript (raw strings)
      },
    },
  },
};

export default nextConfig;
