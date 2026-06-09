import { COMPANY } from "@/lib/company";
import Link from "next/link";

// Site footer: pricing, about, the legal pages, and a contact address, so they are always
// reachable (and so a payment processor can find them).
export function Footer() {
  return (
    <footer className="mt-14 border-t border-line pt-7 text-center">
      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-ui text-[11px] uppercase tracking-[.14em] text-mist">
        <Link
          href="/pricing"
          className="transition-colors hover:text-gold-bright"
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="transition-colors hover:text-gold-bright"
        >
          About
        </Link>
        <Link
          href="/terms"
          className="transition-colors hover:text-gold-bright"
        >
          Terms
        </Link>
        <Link
          href="/privacy"
          className="transition-colors hover:text-gold-bright"
        >
          Privacy
        </Link>
        <Link
          href="/refund-policy"
          className="transition-colors hover:text-gold-bright"
        >
          Refunds
        </Link>
        <a
          href={`mailto:${COMPANY.contactEmail}`}
          className="transition-colors hover:text-gold-bright"
        >
          Contact
        </a>
      </nav>
      <p className="mt-4 font-body text-[12px] italic leading-[1.6] text-mist-2">
        © 2026 {COMPANY.name}. Scripture is the Berean Standard Bible, public
        domain.
      </p>
    </footer>
  );
}
