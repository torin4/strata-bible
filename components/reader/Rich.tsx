import type { ReactNode } from "react";

// Authored commentary fields (meaning, the theological/archetypal lenses) carry a
// little inline emphasis markup: <b>, and occasionally <i>/<em>. Parse that small
// allowlist into real elements instead of dangerously setting HTML. The markup is
// never nested in the content, so a single linear pass is enough. Scripture text
// contains no markup and is rendered verbatim by callers.
const SPLIT = /(<\/?(?:b|i|em)>)/g;
const TAG = /^<(\/?)(b|i|em)>$/;

export function Rich({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

function parse(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let open: "strong" | "em" | null = null;
  let buffer = "";
  let key = 0;

  const flush = () => {
    if (!buffer) return;
    if (open === "strong") nodes.push(<strong key={key++}>{buffer}</strong>);
    else if (open === "em") nodes.push(<em key={key++}>{buffer}</em>);
    else nodes.push(buffer);
    buffer = "";
  };

  for (const part of text.split(SPLIT)) {
    const tag = TAG.exec(part);
    if (!tag) {
      buffer += part;
      continue;
    }
    flush();
    open = tag[1] ? null : tag[2] === "b" ? "strong" : "em";
  }
  flush();
  return nodes;
}
