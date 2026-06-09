import type { Panel } from "@/lib/types";

type Accent = "lapis" | "gold";

const ACCENT: Record<
  Accent,
  { border: string; openBg: string; kicker: string; tag: string }
> = {
  lapis: {
    border: "border-lapis/30 open:border-lapis/40",
    openBg: "open:bg-lapis/[0.05]",
    kicker: "text-lapis",
    tag: "text-lapis",
  },
  gold: {
    border: "border-gold/40 open:border-gold/[0.5]",
    openBg: "open:bg-gold-soft",
    kicker: "text-gold",
    tag: "text-gold",
  },
};

// A grounding overlay (a Panel) as a closed-by-default, tap-to-open block: book-level
// composition or movement-level situation. Carries optional timeline and sources.
export function PanelView({ panel, accent }: { panel: Panel; accent: Accent }) {
  const c = ACCENT[accent];
  return (
    <details
      className={`group/panel overflow-hidden rounded-[12px] border ${c.border} ${c.openBg}`}
    >
      <summary className="flex cursor-pointer items-center gap-3 px-4 py-3">
        <span className="flex flex-col">
          <span
            className={`font-ui text-[9px] font-semibold uppercase tracking-[.2em] ${c.kicker}`}
          >
            {panel.kicker}
          </span>
          <span className="mt-1 font-display text-[16px] font-medium leading-[1.2] text-parchment-2">
            {panel.title}
          </span>
        </span>
        <span className="ml-auto text-[15px] text-mist-2 transition-transform group-open/panel:rotate-45 group-open/panel:text-gold">
          +
        </span>
      </summary>
      <div className="px-4 pb-4">
        {panel.image ? (
          // Decorative banner inside the panel; the panel text carries the meaning.
          <img
            src={panel.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="mb-4 w-full rounded-[10px] border border-line"
          />
        ) : null}
        {panel.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-3 font-body text-[14px] leading-[1.66] text-parchment-2"
          >
            {paragraph}
          </p>
        ))}
        {panel.timeline ? (
          <dl className="mt-1 border-t border-line pt-3">
            {panel.timeline.map((row) => (
              <div
                key={`${row.tag}-${row.text}`}
                className="mb-[10px] flex gap-3 last:mb-0"
              >
                <dt
                  className={`min-w-[78px] shrink-0 font-ui text-[10px] font-semibold uppercase tracking-[.1em] ${c.tag}`}
                >
                  {row.tag}
                </dt>
                <dd className="font-body text-[13px] leading-[1.5] text-mist">
                  {row.text}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
        {panel.sources ? (
          <div className="mt-3 font-body text-[11px] italic text-mist-2">
            {panel.sources}
          </div>
        ) : null}
      </div>
    </details>
  );
}
