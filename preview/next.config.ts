import type { NextConfig } from "next";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const rawLoaderPath = require.resolve("raw-loader");

const nextConfig: NextConfig = {
    allowedDevOrigins: ["172.18.0.1"],
    turbopack: {
        rules: {
            "*.md": {
                loaders: [rawLoaderPath],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
