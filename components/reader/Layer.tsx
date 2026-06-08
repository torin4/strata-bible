import { Rich } from "./Rich";

type LayerVariant = "ground" | "meaning";

const LABEL_COLOR: Record<LayerVariant, string> = {
  ground: "text-lapis",
  meaning: "text-parchment-2",
};

const DOT_COLOR: Record<LayerVariant, string> = {
  ground: "bg-lapis",
  meaning: "bg-parchment-edge",
};

// One of the four layers as a labeled block: the history/setting/occasion ground, or
// the always-present meaning. The turn and ask have their own components.
export function Layer({
  variant,
  label,
  text,
  src,
}: {
  variant: LayerVariant;
  label: string;
  text: string;
  src?: string;
}) {
  return (
    <div className="mt-5">
      <div
        className={`mb-[6px] flex items-center gap-2 font-ui text-[10px] font-semibold uppercase tracking-[.2em] ${LABEL_COLOR[variant]}`}
      >
        <span
          className={`h-[5px] w-[5px] rounded-full ${DOT_COLOR[variant]}`}
        />
        {label}
      </div>
      <div className="font-body text-[14.5px] leading-[1.66] text-parchment-2">
        <Rich text={text} />
      </div>
      {src ? (
        <div className="mt-[7px] font-body text-[11px] italic text-mist-2">
          {src}
        </div>
      ) : null}
    </div>
  );
}
