import type { Metadata } from "next";

// The pricing page is a client component, so its metadata lives here. The canonical also
// folds the checkout return URLs (?plus=welcome, ?book=...) back into /pricing.
export const metadata: Metadata = {
  title: "STRATA Plus pricing",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
