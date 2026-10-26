import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // Keep WordPress-style URLs (/jobs/, /work/) so existing links and SEO carry over
  trailingSlash: true,
  // Cache Components/PPR rely on setTimeout semantics the Cloudflare Workers runtime
  // doesn't fully support yet, which hangs every request until the platform kills it.
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
      // Work/Company/Team merged into anchor sections on the one-page homepage
      { source: "/work/", destination: "/#recruit", permanent: true },
      { source: "/company/", destination: "/#company-intro", permanent: true },
      { source: "/team/", destination: "/#company-intro", permanent: true },
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

// Wires up local wrangler dev bindings (e.g. DATABASE_URL from .dev.vars); no-op in production builds.
initOpenNextCloudflareForDev();
