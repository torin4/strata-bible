"use client";

import { useEffect } from "react";

// Registers the service worker (public/sw.js) in production only, so it never interferes
// with the dev server's hot reloading. The worker handles offline caching and is what makes
// the app installable in Chrome.
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);
  return null;
}
