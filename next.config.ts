import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  ...(process.env.NODE_ENV === "production" && {
    reactRemoveProperties: {
      properties: ["^data-testid$"],
    },
  }),
};

export default nextConfig;
