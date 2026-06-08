"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Replays the staggered page entrance on every route change, including the cases a fresh
// mount misses: moving between readings on the same dynamic route, and the browser's
// forward/back buttons. Remounting on a pathname change restarts the CSS animation. The
// underlying `.stagger-children` already honors reduced-motion.
export function PageTransition({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <div
      key={pathname}
      className={`stagger-children${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
