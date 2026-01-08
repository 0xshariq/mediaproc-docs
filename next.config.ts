import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack : {
    root: "/home/sharique/desktop/mcp-servers-and-cli/mediaproc/web/"
  }
};

export default nextConfig;
