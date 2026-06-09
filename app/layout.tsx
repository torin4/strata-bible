import { AuthProvider } from "@/components/auth/AuthProvider";
import { SubscriptionProvider } from "@/components/auth/SubscriptionProvider";
import { PlusWelcome } from "@/components/billing/PlusWelcome";
import { MenuDrawer } from "@/components/nav/MenuDrawer";
import { ServiceWorker } from "@/components/pwa/ServiceWorker";
import { HighlightProvider } from "@/components/reader/HighlightProvider";
import { SettingsProvider } from "@/components/settings/SettingsProvider";
import { COMPANY } from "@/lib/company";
import type { Metadata } from "next";
import "@/styles/tokens.css";
import "@/styles/globals.css";
// Self-hosted fonts. Cinzel (display), Cormorant Garamond (scripture + passage titles),
// EB Garamond (body + layers), Hanken Grotesk (UI). Italics are loaded where the design
// uses them (thread, refs, lenses caveat, tensions).
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/500.css";
import "@fontsource/cinzel/600.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/eb-garamond/400.css";
import "@fontsource/eb-garamond/400-italic.css";
import "@fontsource/eb-garamond/500-italic.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";

const DESCRIPTION =
  "An illuminated reading of scripture, grounded in the history it grew out of.";

export const metadata: Metadata = {
  // The canonical home; makes every relative OG/canonical URL absolute.
  metadataBase: new URL(COMPANY.url),
  title: "STRATA",
  description: DESCRIPTION,
  applicationName: "STRATA",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "STRATA",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    siteName: "STRATA",
    title: "STRATA",
    description: DESCRIPTION,
    url: COMPANY.url,
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary",
    title: "STRATA",
    description: DESCRIPTION,
    images: ["/icons/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <SubscriptionProvider>
            <SettingsProvider>
              <HighlightProvider>
                <MenuDrawer />
                <PlusWelcome />
                <ServiceWorker />
                {children}
              </HighlightProvider>
            </SettingsProvider>
          </SubscriptionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
