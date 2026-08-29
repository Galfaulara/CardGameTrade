export const FINISH_LABELS: Readonly<Record<string, string>> = {
  nonfoil: "Nonfoil",
  standard: "Standard",
  foil: "Foil",
  etched: "Etched",
  holofoil: "Holofoil",
  reverse_holofoil: "Reverse Holofoil",
};

const specialFinishes = new Set(["foil", "etched", "holofoil", "reverse_holofoil"]);

export function finishLabel(finish: string) {
  return FINISH_LABELS[finish] ?? finish.replaceAll("_", " ").replace(/\b\w/g, (value) => value.toUpperCase());
}

export function isSpecialFinish(finish?: string | null) {
  return Boolean(finish && specialFinishes.has(finish));
}

export function isMtgGame(gameSlug?: string | null) {
  return gameSlug === "mtg";
}

export function shouldShowScryfall(gameSlug: string | null | undefined, uri?: string | null) {
  return isMtgGame(gameSlug) && Boolean(uri);
}

export function shouldRequestMtgMarketPrices(cardGameId: string, mtgGameId?: string | null) {
  return Boolean(mtgGameId && cardGameId === mtgGameId);
}

export function hasMarketProviderData(prices: readonly unknown[]) {
  return prices.length > 0;
}

export function cardImageState(imageUrl?: string | null) {
  return imageUrl ? { kind: "image" as const, url: imageUrl } : { kind: "fallback" as const };
}
