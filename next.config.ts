import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      // `import Icon from ".../icon.svg?svgr"` gives a React component. Plain
      // .svg files (logo, favicon) are untouched and served from /public.
      "*.svg": {
        condition: { query: /[?&]svgr(?=&|$)/ },
        loaders: [{ loader: "@svgr/webpack", options: { svgo: false } }],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
