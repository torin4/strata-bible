"use client";

import { type ImgHTMLAttributes, useEffect, useRef, useState } from "react";

// An <img> that fades in once it has loaded, instead of popping in. A cached image can
// finish before hydration (so onLoad never fires); the mount check catches that, and the
// first paint at opacity-0 still lets the transition play. Honors reduced motion by
// showing the image immediately. The parent should reserve the image's space (a fixed
// aspect box, or width/height) so the fade plays without a layout shift.
export function FadeImage({
  alt = "",
  className = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-700 ease-out motion-reduce:transition-none ${
        loaded ? "opacity-100" : "opacity-0 motion-reduce:opacity-100"
      }`}
    />
  );
}
