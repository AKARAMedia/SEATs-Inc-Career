import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep WordPress-style URLs (/jobs/, /work/) so existing links and SEO carry over
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  serverExternalPackages: ["@electric-sql/pglite"],
  experimental: {
    // Local builds use the embedded PGlite DB, which only one process may open at a time
    ...(!process.env.DATABASE_URL && { cpus: 1 }),
  },
  async redirects() {
    return [
      // Old WP feeds/admin entry points
      { source: "/wp-admin/:path*", destination: "/admin/", permanent: false },
      { source: "/wp-login.php", destination: "/admin/login/", permanent: false },
      // Old hot-linked uploads keep working
      { source: "/wp-content/uploads/:path*", destination: "/media/:path*", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
