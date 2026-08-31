export type BulkCandidate = {
  id: string;
  collector_number: string;
  language_code: string;
  card_sets: { code: string; name: string };
  finishes: string[];
};

export function applyBulkPrintingSelection<Row extends {
  candidates: BulkCandidate[];
  status: string;
  printingId?: string;
  finish?: string | null;
  language: string;
  set?: string | null;
  collectorNumber?: string | null;
  message: string | null;
}>(row: Row, candidateIndex: number, requestedFinish?: string): Row {
  const candidate = row.candidates[candidateIndex];
  const finish = candidate && requestedFinish && candidate.finishes.includes(requestedFinish)
    ? requestedFinish
    : candidate?.finishes.length === 1 ? candidate.finishes[0] : null;
  if (!candidate || !finish) return { ...row, status: "AMBIGUOUS", printingId: undefined, finish: null };
  return { ...row, status: "EXACT", printingId: candidate.id, finish, language: candidate.language_code, set: candidate.card_sets.code, collectorNumber: candidate.collector_number, message: null };
}
