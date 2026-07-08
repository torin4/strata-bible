// The fourth layer: the prompt the reader is left to answer. The response itself is
// the journal's job (a later phase); here we only pose it.
export function Ask({ text }: { text: string }) {
  return (
    <div className="mt-[18px] rounded-[12px] border border-line bg-parchment/[0.025] px-4 py-[14px]">
      <div className="font-scripture text-[length:calc(17px_*_var(--reader-scale,1))] leading-[1.5] text-parchment">
        {text}
      </div>
    </div>
  );
}
