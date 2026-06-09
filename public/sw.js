// STRATA service worker: makes the app installable (Chrome needs a fetch handler) and
// gives a basic offline experience. Content-hashed build assets are cached first (their
// names change on every rebuild, so this is safe); page navigations are network-first with
// a cached fallback and, failing that, an offline page. Cross-origin requests (Firebase,
// Stripe, etc.) are left untouched. Bump CACHE to invalidate everything on a breaking change.
const CACHE = "strata-v2";
const OFFLINE_URL = "/offline";
const PRECACHE = [
  "/offline",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

// Per-account pages: never store their navigation responses, only fall back to the offline
// page when offline. Their data loads client-side from Firestore, so the shell holds nothing
// private today, but keeping them out of the cache avoids a stale signed-in shell on a
// shared device.
const PRIVATE_PATHS = ["/journal", "/settings", "/highlights"];
function isPrivatePath(pathname) {
  return PRIVATE_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // leave Firebase, Stripe, fonts alone

  // Content-hashed build assets and our static media: cache-first.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/images/")
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
            return response;
          }),
      ),
    );
    return;
  }

  // Page navigations: network-first, then cache, then the offline page. Per-account pages
  // are never written to the cache.
  if (request.mode === "navigate") {
    const cacheable = !isPrivatePath(url.pathname);
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (cacheable) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match(OFFLINE_URL)),
        ),
    );
  }
});
