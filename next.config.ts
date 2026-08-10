import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network IP for testing from external devices
  allowedDevOrigins: ['192.168.29.8', 'localhost', '127.0.0.1'],
};

export default nextConfig;
