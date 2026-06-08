// Shown when a reading's span crosses chapter lines on purpose (epistles, prophets).
// The chapter numbers are a later overlay; the argument is the unit.
export function SpanBanner({ span }: { span: string }) {
  return (
    <div className="mb-[18px] flex items-start gap-[9px] rounded-[11px] border border-lapis/30 bg-lapis/[0.06] px-[13px] py-[11px]">
      <div className="text-[13px] leading-[1.2] text-lapis">&#10231;</div>
      <div className="text-[12.5px] leading-[1.5] text-mist">
        One reading, <b className="font-semibold text-lapis">{span}</b>. It
        crosses the chapter line on purpose. The chapter numbers are a later
        overlay; the argument is the unit.
      </div>
    </div>
  );
}
