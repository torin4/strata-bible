// A quiet, single-line softening that sometimes sits between the turn and the ask.
export function Soft({ text }: { text: string }) {
  return (
    <div className="mt-3 font-body text-[length:calc(13.5px_*_var(--reader-scale,1))] italic leading-[1.6] text-mist">
      {text}
    </div>
  );
}
