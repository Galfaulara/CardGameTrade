import type { MarketPrice } from "./api";
import styles from "./market-prices.module.css";
import { hasMarketProviderData } from "../cards/presentation";
import {
  MARKET_SOURCES,
  priceFor,
  type MarketComparisonRow,
  type MarketSource,
} from "./market-value";
export {
  buildMarketComparison,
  classifyMarketValue,
  marketDifference,
  marketTotal,
} from "./market-value";

export const marketPriceKey = (printingId: string, finish: string) =>
  `${printingId}:${finish}`;
export const groupMarketPrices = (prices: MarketPrice[]) => {
  const map = new Map<string, MarketPrice[]>();
  for (const price of prices)
    map.set(marketPriceKey(price.printing_id, price.finish), [
      ...(map.get(marketPriceKey(price.printing_id, price.finish)) ?? []),
      price,
    ]);
  return map;
};
export const formatMarketMoney = (
  value: number,
  currency = "USD",
  signed = false,
) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    signDisplay: signed ? "always" : "auto",
  }).format(value);
const money = (price: MarketPrice) =>
  formatMarketMoney(Number(price.market_price), price.currency_code);
const freshness = (value: string) => {
  const date = new Date(value);
  const today = new Date();
  return date.toDateString() === today.toDateString()
    ? "Updated today"
    : `Updated ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
};

export function MarketPrices({
  prices,
  title = "Market prices",
  compact = false,
}: {
  prices: MarketPrice[];
  title?: string;
  compact?: boolean;
}) {
  if (!hasMarketProviderData(prices)) return null;
  return (
    <section
      aria-label={title}
      style={compact ? { fontSize: ".78rem" } : undefined}
    >
      <strong>{title}</strong>
      {MARKET_SOURCES.map((source) => {
        const price = priceFor(prices, source);
        return (
          <div
            key={source}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: ".75rem",
            }}
          >
            <span>{source === "tcgplayer" ? "TCGplayer" : "Card Kingdom"}</span>
            <span>
              {price ? money(price) : "—"}
              {price ? ` · ${freshness(price.captured_at)}` : ""}
            </span>
          </div>
        );
      })}
    </section>
  );
}

const providerLabel = (source: MarketSource) =>
  source === "tcgplayer" ? "TCGplayer" : "Card Kingdom";

export function MarketValueSummary({
  rows,
  offeredTitle = "Your offer total",
  targetTitle = "Target value",
  differenceTitle = "Difference",
}: {
  rows: MarketComparisonRow[];
  offeredTitle?: string;
  targetTitle?: string;
  differenceTitle?: string;
}) {
  const value = (amount: number | null, signed = false) =>
    amount === null ? "—" : formatMarketMoney(amount, "USD", signed);
  return (
    <section
      className={styles.summary}
      aria-label="Market value comparison. Difference equals offered market value minus target market value."
    >
      <div className={styles.box}>
        <strong>{offeredTitle}</strong>
        {rows.map((row) => (
          <div className={styles.row} key={row.source}>
            <span>{providerLabel(row.source)}</span>
            <span>{value(row.offered.value)}</span>
          </div>
        ))}
        {rows.map((row) =>
          row.offered.missing ? (
            <small key={row.source}>
              {row.offered.missing} offered card
              {row.offered.missing === 1 ? " has" : "s have"} no{" "}
              {providerLabel(row.source)} price.
            </small>
          ) : null,
        )}
      </div>
      <div className={styles.box}>
        <strong>{targetTitle}</strong>
        {rows.map((row) => (
          <div className={styles.row} key={row.source}>
            <span>{providerLabel(row.source)}</span>
            <span>{value(row.target.value)}</span>
          </div>
        ))}
        {rows.map((row) =>
          row.target.missing ? (
            <small key={row.source}>
              Target has no {providerLabel(row.source)} price.
            </small>
          ) : null,
        )}
      </div>
      <div className={styles.box}>
        <strong>{differenceTitle}</strong>
        {rows.map((row) => (
          <div className={styles.difference} key={row.source}>
            <div className={styles.row}>
              <span>{providerLabel(row.source)}</span>
              <span>{value(row.difference, true)}</span>
            </div>
            {row.classification ? (
              <span
                className={`${styles.classification} ${row.classification === "Above value" ? styles.above : row.classification === "Below value" ? styles.below : styles.close}`}
              >
                {row.classification}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
