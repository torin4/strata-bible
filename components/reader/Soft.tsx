// A quiet, single-line softening that sometimes sits between the turn and the ask.
export function Soft({ text }: { text: string }) {
  return (
    <div className="mt-3 font-body text-[13.5px] italic leading-[1.6] text-mist">
      {text}
    </div>
  );
}
