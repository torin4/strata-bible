/** @type {import('next').NextConfig} */

// Content-Security-Policy is shipped Report-Only first: it never blocks, it only reports,
// so a wrong directive cannot white-screen the live app. Watch the browser console on a
// deploy for a build or two, then rename the header to "Content-Security-Policy" to
// enforce. The allowlist covers Firebase Auth/Firestore, Stripe Checkout, and our own
// self-hosted fonts and service worker. 'unsafe-inline' on scripts is required by Next's
// hydration bootstrap until a nonce/middleware is wired up; the rest of the policy still
// gives real protection (framing, object, base-uri, connect allowlist).
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
  "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://*.firebaseapp.com https://api.stripe.com",
  "frame-src https://js.stripe.com https://checkout.stripe.com https://*.firebaseapp.com",
  "worker-src 'self'",
  "manifest-src 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: csp },
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
