import { AuthProvider } from "@/components/auth/AuthProvider";
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
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";

export const metadata: Metadata = {
  title: "STRATA",
  description: "A Bible reading app that grounds every passage in four layers.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
