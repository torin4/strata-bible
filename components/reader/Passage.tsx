import { CompanionMiddle } from "@/components/companion/CompanionMiddle";
import { AskResponse } from "@/components/journal/AskResponse";
import { GROUND_LABEL, PASSAGE_KIND_LABEL } from "@/lib/labels";
import type { Passage as PassageData } from "@/lib/types";
import { Ask } from "./Ask";
import { ClusterList } from "./ClusterList";
import { Layer } from "./Layer";
import { Lenses } from "./Lenses";
import { Misreading } from "./Misreading";
import { PassageNotes } from "./PassageNotes";
import { Prayer } from "./Prayer";
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
  bookId,
  readingId,
  readingTitle,
  isFree,
  firstScene,
}: {
  passage: PassageData;
  bookId: string;
  readingId: string;
  readingTitle: string;
  isFree: boolean;
  // True on the reading's first scene: layer headers introduce themselves there.
  firstScene?: boolean;
}) {
  const verseNumbers = (
    passage.verses ??
    passage.statutes ??
    passage.sayings ??
    []
  ).map((v) => v.n);

  return (
    <>
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
          figures={passage.figures}
        />
      ) : null}

      {passage.form === "poetry" ? (
        <Scripture
          form="poetry"
          verses={passage.verses ?? []}
          inTextTurn={passage.inTextTurn}
          readingId={readingId}
          passageRef={passage.ref}
        />
      ) : passage.form === "list" ? (
        <ClusterList
          items={passage.statutes ?? passage.sayings ?? []}
          perItem={passage.perItem}
          readingId={readingId}
          passageRef={passage.ref}
        />
      ) : (
        <Scripture
          form="prose"
          verses={passage.verses ?? []}
          readingId={readingId}
          passageRef={passage.ref}
        />
      )}

      {passage.symbols ? <Symbols symbols={passage.symbols} /> : null}
      {passage.misreading ? (
        <Misreading misreading={passage.misreading} />
      ) : null}
      {passage.meaning ? (
        <Layer
          variant="meaning"
          label="Meaning"
          text={passage.meaning}
          figures={passage.figures}
        />
      ) : (
        // Grounded/plain tier: the middle is empty. The companion fills it when asked.
        <CompanionMiddle
          bookId={bookId}
          readingId={readingId}
          readingTitle={readingTitle}
          passage={passage}
          isFree={isFree}
        />
      )}
      {passage.lenses ? <Lenses lenses={passage.lenses} /> : null}
      {passage.tensions ? <Tensions tensions={passage.tensions} /> : null}
      {passage.addr ? (
        <TheTurn addr={passage.addr} introduce={firstScene} />
      ) : null}
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
      {passage.prayer ? <Prayer prayer={passage.prayer} /> : null}
      <PassageNotes
        readingId={readingId}
        passageRef={passage.ref}
        verseNumbers={verseNumbers}
      />
    </>
  );
}
