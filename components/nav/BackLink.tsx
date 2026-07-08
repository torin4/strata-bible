import Link from "next/link";

// The one back-nav affordance, used across the app: a left-aligned link that steps one level
// up, placed just below the header on every page, always with a leading chevron (the mirror
// of the app's forward "›"). Kept identical everywhere so the way back is always in the same
// spot, never at the foot of the page and never without its arrow.
export function BackLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-ui text-[11px] uppercase tracking-[.16em] text-mist transition-colors hover:text-gold-bright ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="text-[13px] leading-none transition-transform group-hover:-translate-x-0.5"
      >
        ‹
      </span>
      {label}
    </Link>
  );
}
