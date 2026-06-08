import { CompanionMiddle } from "@/components/companion/CompanionMiddle";
import { DiachronicLens } from "@/components/diachronic/DiachronicLens";
import { AskResponse } from "@/components/journal/AskResponse";
import { getDiachronic } from "@/content/diachronic";
import { GROUND_LABEL, PASSAGE_KIND_LABEL } from "@/lib/labels";
import type { Passage as PassageData } from "@/lib/types";
import { Ask } from "./Ask";
import { ClusterList } from "./ClusterList";
import { Layer } from "./Layer";
import { Lenses } from "./Lenses";
import { Misreading } from "./Misreading";
import { Scripture } from "./Scripture";
import { Soft } from "./Soft";
import { Symbols } from "./Symbols";
import { Tensions } from "./Tensions";
import { TheTurn } from "./TheTurn";

// One passage, the atomic reading unit. Canonical render order:
// ground -> verses/statutes/sayings -> symbols -> misreading -> meaning -> lenses
// -> tensions -> the turn -> soft -> ask. Grounded/plain tiers simply leave the later
// layers blank; each block is conditional, so the blanks render as nothing.
export function Passage({
  passage,
  first,
  bookId,
  readingId,
  readingTitle,
}: {
  passage: PassageData;
  first: boolean;
  bookId: string;
  readingId: string;
  readingTitle: string;
}) {
  return (
    <div className={first ? "" : "mt-[30px] border-t border-line pt-[26px]"}>
      <div className="mb-1 flex flex-wrap items-baseline gap-[9px]">
        {passage.label ? (
          <span className="font-display text-[11px] uppercase tracking-[.22em] text-gold">
            {passage.label}
          </span>
        ) : null}
        <span className="font-body text-[11.5px] italic text-mist-2">
          {passage.ref}
        </span>
        <span className="rounded-full border border-line px-2 py-[2px] font-ui text-[8.5px] font-semibold uppercase tracking-[.16em] text-mist-2">
          {PASSAGE_KIND_LABEL[passage.kind]}
        </span>
      </div>
      <div className="mb-4 font-scripture text-[23px] font-medium text-parchment-2">
        {passage.title}
      </div>

      {passage.ground ? (
        <Layer
          variant="ground"
          label={GROUND_LABEL[passage.ground.kind]}
          text={passage.ground.text}
          src={passage.ground.src}
        />
      ) : null}

      {passage.form === "poetry" ? (
        <Scripture
          form="poetry"
          verses={passage.verses ?? []}
          inTextTurn={passage.inTextTurn}
        />
      ) : passage.form === "list" ? (
        <ClusterList
          items={passage.statutes ?? passage.sayings ?? []}
          perItem={passage.perItem}
        />
      ) : (
        <Scripture form="prose" verses={passage.verses ?? []} />
      )}

      {(() => {
        const layer = passage.verses
          ? getDiachronic(readingId, passage.ref)
          : undefined;
        return layer ? (
          <DiachronicLens verses={passage.verses ?? []} layer={layer} />
        ) : null;
      })()}

      {passage.symbols ? <Symbols symbols={passage.symbols} /> : null}
      {passage.misreading ? (
        <Misreading misreading={passage.misreading} />
      ) : null}
      {passage.meaning ? (
        <Layer variant="meaning" label="Meaning" text={passage.meaning} />
      ) : (
        // Grounded/plain tier: the middle is empty. The companion fills it when asked.
        <CompanionMiddle
          bookId={bookId}
          readingId={readingId}
          readingTitle={readingTitle}
          passage={passage}
        />
      )}
      {passage.lenses ? <Lenses lenses={passage.lenses} /> : null}
      {passage.tensions ? <Tensions tensions={passage.tensions} /> : null}
      {passage.addr ? <TheTurn addr={passage.addr} /> : null}
      {passage.soft ? <Soft text={passage.soft} /> : null}
      {passage.ask ? (
        <>
          <Ask text={passage.ask} />
          <AskResponse
            prompt={passage.ask}
            bookId={bookId}
            readingId={readingId}
            readingTitle={readingTitle}
            passageRef={passage.ref}
          />
        </>
      ) : null}
    </div>
  );
}
