import type { MarketPrice } from "./api";

export const MARKET_SOURCES = ["tcgplayer", "cardkingdom"] as const;
export type MarketSource = (typeof MARKET_SOURCES)[number];
export type MarketValueClassification =
  | "Close value"
  | "Above value"
  | "Below value";

export const priceFor = (prices: MarketPrice[], source: string) =>
  prices.find((price) => price.source === source) ?? null;

export function marketTotal(
  items: Array<{ prices: MarketPrice[]; quantity: number }>,
  source: MarketSource,
) {
  const missing = items.filter((item) => !priceFor(item.prices, source)).length;
  const partialValue = items.reduce(
    (sum, item) =>
      sum +
      Number(priceFor(item.prices, source)?.market_price ?? 0) * item.quantity,
    0,
  );
  return { value: missing ? null : partialValue, partialValue, missing };
}

export const marketDifference = (
  offered: number | null,
  target: number | null,
) => (offered === null || target === null ? null : offered - target);

export function classifyMarketValue(
  difference: number | null,
  target: number | null,
): MarketValueClassification | null {
  if (
    difference === null ||
    target === null ||
    !Number.isFinite(target) ||
    target <= 0
  )
    return null;
  const percentageDifference = difference / target;
  if (percentageDifference < -0.1) return "Below value";
  if (percentageDifference > 0.1) return "Above value";
  return "Close value";
}

export type MarketComparisonRow = {
  source: MarketSource;
  offered: ReturnType<typeof marketTotal>;
  target: ReturnType<typeof marketTotal>;
  difference: number | null;
  classification: MarketValueClassification | null;
};

export function buildMarketComparison(
  offeredItems: Array<{ prices: MarketPrice[]; quantity: number }>,
  targetItems: Array<{ prices: MarketPrice[]; quantity: number }>,
): MarketComparisonRow[] {
  return MARKET_SOURCES.map((source) => {
    const offered = marketTotal(offeredItems, source);
    const target = marketTotal(targetItems, source);
    const difference = offeredItems.length
      ? marketDifference(offered.value, target.value)
      : null;
    return {
      source,
      offered,
      target,
      difference,
      classification: classifyMarketValue(difference, target.value),
    };
  });
}
