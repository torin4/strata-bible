import type { Figure } from "@/lib/types";
import type { ReactNode } from "react";
import { FigureLink } from "./Figure";

// Authored commentary fields (meaning, the theological/archetypal lenses, the ground note)
// carry a little inline markup: <b>, occasionally <i>/<em>, and <fig>word</fig> to turn a
// word into a tap target for an image. Parse that small allowlist into real elements instead
// of dangerously setting HTML. The markup is never nested, so a single linear pass is enough.
// A <fig> only becomes interactive when a matching figure is supplied; otherwise it renders
// as plain text. Scripture text contains no markup and is rendered verbatim by callers.
const SPLIT = /(<\/?(?:b|i|em|fig)>)/g;
const TAG = /^<(\/?)(b|i|em|fig)>$/;

export function Rich({
  text,
  figures,
}: {
  text: string;
  figures?: Figure[];
}) {
  return <>{parse(text, figures)}</>;
}

function parse(text: string, figures?: Figure[]): ReactNode[] {
  const nodes: ReactNode[] = [];
  let open: "strong" | "em" | "fig" | null = null;
  let buffer = "";
  let key = 0;

  const flush = () => {
    if (!buffer) return;
    if (open === "strong") {
      nodes.push(<strong key={key++}>{buffer}</strong>);
    } else if (open === "em") {
      nodes.push(<em key={key++}>{buffer}</em>);
    } else if (open === "fig") {
      const term = buffer.trim().toLowerCase();
      const figure = figures?.find((f) => f.term.toLowerCase() === term);
      nodes.push(
        figure ? (
          <FigureLink key={key++} figure={figure} label={buffer} />
        ) : (
          buffer
        ),
      );
    } else {
      nodes.push(buffer);
    }
    buffer = "";
  };

  for (const part of text.split(SPLIT)) {
    const tag = TAG.exec(part);
    if (!tag) {
      buffer += part;
      continue;
    }
    flush();
    open = tag[1]
      ? null
      : tag[2] === "b"
        ? "strong"
        : tag[2] === "fig"
          ? "fig"
          : "em";
  }
  flush();
  return nodes;
}
