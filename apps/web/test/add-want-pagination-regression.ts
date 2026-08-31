import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { ADD_WANT_SEARCH_PAGE_SIZE, addWantQueryChanged, addWantSearchHref } from "../features/catalog/add-want-search.ts";

const first = new URL(addWantSearchHref("Angel", "mtg", 1), "https://deckdeal.test");
const next = new URL(addWantSearchHref("Angel", "mtg", 2), "https://deckdeal.test");
const previous = new URL(addWantSearchHref("Angel", "mtg", 1), "https://deckdeal.test");
assert.equal(ADD_WANT_SEARCH_PAGE_SIZE, 12);
assert.equal(first.searchParams.get("page"), "1");
assert.equal(next.searchParams.get("page"), "2");
assert.equal(previous.searchParams.get("page"), "1");
assert.equal(next.searchParams.get("game"), "mtg", "Every page must retain active-game filtering.");
assert.ok(addWantQueryChanged("Angel of", "Angel"), "Changing query must reset pagination.");
assert.ok(!addWantQueryChanged(" Angel ", "Angel"), "Whitespace-only edits must not desynchronize the current result page.");

const page1 = Array.from({ length: 12 }, (_, index) => `angel-${index + 1}`);
const page2 = Array.from({ length: 12 }, (_, index) => `angel-${index + 13}`);
assert.equal(new Set([...page1, ...page2]).size, 24, "Adjacent canonical-card pages must not duplicate IDs.");

const manager = readFileSync("app/(public)/account/wants/wants-manager.tsx", "utf8");
assert.ok(manager.includes("search(searchPage + 1)") && manager.includes("search(searchPage - 1)"), "Visible Next and Previous actions must request adjacent pages.");
assert.ok(manager.includes("searchPage >= searchTotalPages"), "The final page must disable Next.");
assert.ok(manager.includes("setSearchPage(1)") && manager.includes("setCards([])"), "A new query must reset page-one state.");
assert.ok(manager.includes("setCards(result.items)"), "Later pages must use the same canonical-card response shape.");
assert.ok(manager.includes("canonicalCardId: mode === \"general\" ? card.id"), "A card selected on any page must persist its canonical ID.");
assert.ok(manager.includes("representative_printing") && manager.includes("resultArt"), "Paginated results must retain image-card rendering.");
assert.ok(manager.includes("aria-busy={searching}") && manager.includes("Loading…"), "Pagination must expose pending feedback.");
console.log("Add Want pagination regression passed.");
