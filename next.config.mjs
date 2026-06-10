/** @type {import('next').NextConfig} */

// Content-Security-Policy, now ENFORCED. The allowlist covers Firebase Auth/Firestore, the
// Stripe extension's Cloud Functions (the customer portal callable lives on cloudfunctions
// .net / run.app) and Stripe Checkout, plus our own self-hosted fonts and service worker.
// 'unsafe-inline' on scripts is required by Next's hydration bootstrap until a nonce/
// middleware is wired up; the rest of the policy still gives real protection (framing,
// object, base-uri, connect allowlist). If a directive ever blocks something in production,
// the instant fix is to rename the header below back to "Content-Security-Policy-Report-Only"
// (it then only reports, never blocks) while the missing source is added.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self' https://checkout.stripe.com",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://js.stripe.com https://apis.google.com https://www.gstatic.com https://*.firebaseapp.com",
  "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://*.firebaseapp.com https://*.cloudfunctions.net https://*.run.app https://api.stripe.com",
  "frame-src https://js.stripe.com https://checkout.stripe.com https://*.firebaseapp.com",
  "worker-src 'self'",
  "manifest-src 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
