import {
  cardImageState,
  finishLabel,
  hasMarketProviderData,
  isMtgGame,
  isSpecialFinish,
  shouldRequestMtgMarketPrices,
  shouldShowScryfall,
} from "../features/cards/presentation.ts";
import { resolveResourceGame, type DeckDealGame } from "../features/games/active-game.ts";
import type { MarketPrice } from "../features/marketplace/api.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

// Finish rules: ordinary vs special, unknown tokens default safely to ordinary.
assert(!isSpecialFinish("nonfoil"), "nonfoil must be ordinary.");
assert(!isSpecialFinish("standard"), "standard must be ordinary.");
assert(isSpecialFinish("foil"), "foil must be special.");
assert(isSpecialFinish("etched"), "etched must be special.");
assert(isSpecialFinish("holofoil"), "holofoil must be special.");
assert(isSpecialFinish("reverse_holofoil"), "reverse_holofoil must be special.");
assert(!isSpecialFinish("some_unrecognized_future_finish"), "Unknown finish tokens must default safely to ordinary.");
assert(!isSpecialFinish(undefined) && !isSpecialFinish(null), "Missing finish must be treated as ordinary.");
assert(finishLabel("reverse_holofoil") === "Reverse Holofoil", "Known finishes must use their curated label.");
assert(finishLabel("some_unrecognized_future_finish") === "Some Unrecognized Future Finish", "Unknown finishes must still render a safe, readable label.");

// Game resolution: only an authoritative "mtg" slug enables MTG-only presentation.
const games: DeckDealGame[] = [
  { id: "g-mtg", slug: "mtg", name: "Magic: The Gathering" },
  { id: "g-pokemon", slug: "pokemon", name: "Pokémon" },
  { id: "g-yugioh", slug: "yugioh", name: "Yu-Gi-Oh!" },
];
assert(isMtgGame(resolveResourceGame(games, "g-mtg")?.slug) === true, "MTG game_id must resolve to MTG presentation.");
assert(isMtgGame(resolveResourceGame(games, "g-pokemon")?.slug) === false, "Pokémon game_id must not enable MTG-only sections.");
assert(isMtgGame(resolveResourceGame(games, "g-yugioh")?.slug) === false, "Yu-Gi-Oh! game_id must not enable MTG-only sections.");
assert(isMtgGame(resolveResourceGame(games, "g-unknown")?.slug) === false, "An unresolved game_id must not assume MTG.");
assert(isMtgGame(undefined) === false && isMtgGame(null) === false, "Absent game slugs must not assume MTG.");

// Scryfall must never surface for non-MTG, even when a URI happens to be present.
assert(shouldShowScryfall("mtg", "https://scryfall.com/card/x") === true, "MTG with a Scryfall URI must show the link.");
assert(shouldShowScryfall("mtg", null) === false, "MTG without a Scryfall URI must not show the link.");
assert(shouldShowScryfall("pokemon", "https://scryfall.com/card/x") === false, "Non-MTG must never show a Scryfall link, even if a URI is present.");
assert(shouldShowScryfall(undefined, "https://scryfall.com/card/x") === false, "An unresolved game must not show a Scryfall link.");

// MTG market-price requests must only fire for the authoritative MTG game id.
assert(shouldRequestMtgMarketPrices("g-mtg", "g-mtg") === true, "A card in the MTG game must request MTG market pricing.");
assert(shouldRequestMtgMarketPrices("g-pokemon", "g-mtg") === false, "A Pokémon card must never request MTG market pricing.");
assert(shouldRequestMtgMarketPrices("g-yugioh", "g-mtg") === false, "A Yu-Gi-Oh! card must never request MTG market pricing.");
assert(shouldRequestMtgMarketPrices("g-mtg", undefined) === false, "An unresolved MTG game id must not assume MTG pricing is requestable.");
assert(shouldRequestMtgMarketPrices("g-mtg", null) === false, "A null MTG game id must not assume MTG pricing is requestable.");

// Empty MTG comparison UI must hide rather than render a blank panel.
const prices: MarketPrice[] = [
  { printing_id: "p1", finish: "foil", source: "tcgplayer", currency_code: "USD", market_price: "1.23", captured_at: new Date().toISOString() },
];
assert(hasMarketProviderData(prices) === true, "Present provider data must allow the comparison panel to render.");
assert(hasMarketProviderData([]) === false, "No provider data must hide the comparison panel instead of rendering it empty.");

// Null images fall back safely instead of rendering a broken <img>.
assert(cardImageState("https://example.test/card.jpg").kind === "image", "A present image URL must render as an image.");
assert(cardImageState(null).kind === "fallback", "A null image URL must use the fallback state.");
assert(cardImageState(undefined).kind === "fallback", "A missing image URL must use the fallback state.");

// Listing asking prices are independent of market-price data: an empty market-price
// comparison must not imply anything about whether an asking price should render.
const listingWithNoMarketData = {
  askingPrice: "42.00",
  currencyCode: "USD",
  acceptsCash: true,
};
assert(!hasMarketProviderData([]) && listingWithNoMarketData.askingPrice === "42.00", "A listing's asking price must remain present even when there is no market-price data to compare against.");

console.log("Card-presentation regression passed.");
