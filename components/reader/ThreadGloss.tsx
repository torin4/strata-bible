// The faint lapis margin gloss under a reading's title: what carries over from before,
// what this reading is reaching toward.
export function ThreadGloss({ text }: { text: string }) {
  return (
    <div className="mb-1 mt-[14px] border-l border-lapis/40 pl-[13px] font-body text-[length:calc(13.5px_*_var(--reader-scale,1))] italic leading-[1.6] text-mist">
      {text}
    </div>
  );
}
