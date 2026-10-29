import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kestrelvillage.com" }],
        destination: "https://www.kestrelvillage.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "https://em.realscout.com https://www.realscout.com",
              "https://www.googletagmanager.com https://www.google-analytics.com",
              "https://assets.calendly.com https://calendly.com",
              "https://js.stripe.com https://m.stripe.network https://m.stripe.com",
              "https://www.gstatic.com https://www.recaptcha.net https://accounts.google.com;",
              "connect-src 'self'",
              "https://em.realscout.com https://www.realscout.com",
              "https://www.google-analytics.com https://analytics.google.com",
              "https://calendly.com https://assets.calendly.com https://dfp.calendly.com",
              "https://js.stripe.com https://m.stripe.network https://m.stripe.com",
              "https://www.recaptcha.net https://notifier-configs.airbrake.io;",
              "frame-src 'self'",
              "https://em.realscout.com https://www.realscout.com",
              "https://calendly.com",
              "https://js.stripe.com https://m.stripe.network",
              "https://www.recaptcha.net https://accounts.google.com;"
            ].join(" "),
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
