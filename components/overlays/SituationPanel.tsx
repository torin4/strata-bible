import type { Panel } from "@/lib/types";
import { PanelView } from "./PanelView";

// Movement-level grounding: the ground beneath this stretch of the book.
export function SituationPanel({ panel }: { panel: Panel }) {
  return <PanelView panel={panel} accent="lapis" />;
}
