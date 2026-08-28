import {
  buildMarketComparison,
  classifyMarketValue,
  marketDifference,
  marketTotal,
} from "../features/marketplace/market-value.ts";
import type { MarketPrice } from "../features/marketplace/api.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};
const price = (source: MarketPrice["source"], value: string): MarketPrice => ({
  printing_id: crypto.randomUUID(),
  finish: "nonfoil",
  source,
  currency_code: "USD",
  market_price: value,
  captured_at: new Date().toISOString(),
});

const target = [
  {
    prices: [price("tcgplayer", "10"), price("cardkingdom", "12")],
    quantity: 1,
  },
];
const offer = [
  {
    prices: [price("tcgplayer", "9.5"), price("cardkingdom", "13.5")],
    quantity: 1,
  },
];
const comparison = buildMarketComparison(offer, target);
assert(
  comparison[0]?.difference === -0.5 &&
    comparison[0].classification === "Close value",
  "TCGplayer must independently classify -5% as Close value.",
);
assert(
  comparison[1]?.difference === 1.5 &&
    comparison[1].classification === "Above value",
  "Card Kingdom must independently classify +12.5% as Above value.",
);
assert(
  classifyMarketValue(-10, 100) === "Close value",
  "-10% boundary must be Close value.",
);
assert(
  classifyMarketValue(10, 100) === "Close value",
  "+10% boundary must be Close value.",
);
assert(
  classifyMarketValue(-10.01, 100) === "Below value",
  "Less than -10% must be Below value.",
);
assert(
  classifyMarketValue(10.01, 100) === "Above value",
  "Greater than +10% must be Above value.",
);
assert(
  classifyMarketValue(null, 100) === null && classifyMarketValue(1, 0) === null,
  "Missing or zero targets must not classify.",
);
assert(
  marketDifference(9.5, 10) === -0.5,
  "Difference must equal offered minus target.",
);
const incomplete = marketTotal(
  [
    { prices: [price("cardkingdom", "5")], quantity: 1 },
    { prices: [], quantity: 1 },
  ],
  "cardkingdom",
);
assert(
  incomplete.value === null &&
    incomplete.partialValue === 5 &&
    incomplete.missing === 1,
  "Missing provider prices must make the aggregate incomplete, not zero-valued.",
);
console.log("Market-value regression passed.");
