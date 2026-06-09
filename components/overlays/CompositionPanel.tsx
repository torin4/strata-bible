import type { Panel } from "@/lib/types";
import { PanelView } from "./PanelView";

// Book-level grounding: how the book was written. Rendered only when a book has authored
// composition prose (none do yet, see BookEntry.composition).
export function CompositionPanel({ panel }: { panel: Panel }) {
  return <PanelView panel={panel} accent="gold" />;
}
