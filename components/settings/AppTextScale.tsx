"use client";

import { useSettings } from "@/components/settings/SettingsProvider";
import type { ReactNode } from "react";

// Scales the whole interface by the reader's chosen text size, the way browser zoom does:
// text, spacing, and images grow together and the layout reflows. Uses the size saved for
// this device class (phone or computer), so each keeps its own. `zoom` is used rather than a
// transform so fixed elements (the menu button, overlays) keep positioning correctly. At the
// default size the value is 1, a no-op.
export function AppTextScale({ children }: { children: ReactNode }) {
  const { readerScale } = useSettings();
  return <div style={{ zoom: readerScale }}>{children}</div>;
}
