//API 요청 프록시
import { NextConfig } from "next";

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
  async rewrites() {
    /**
     * https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites
     * Rewrites are applied to client-side routing
     */
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:slug*`,
        destination: `${process.env.API_BASE_URL}/:slug*`,
      },
    ];
  },
};

export default nextConfig;
