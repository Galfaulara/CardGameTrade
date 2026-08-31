import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { primaryNavigationItems } from "../components/app-shell/primary-navigation-state.ts";
import { groupPrintingVersions } from "../features/catalog/version-families.ts";

assert.deepEqual(primaryNavigationItems.slice(0, 2).map((item) => item.label), ["Home", "Discover"]);
const active = (path: string) => primaryNavigationItems.filter((item) => item.active(path)).map((item) => item.label);
assert.deepEqual(active("/"), ["Home"]);
assert.deepEqual(active("/discover"), ["Discover"]);
assert.deepEqual(active("/stores/store-id"), ["Local Stores"]);
assert.deepEqual(active("/how-it-works"), ["How it works"]);

const base = { canonical_card_id: "card", card_set_id: "set", collector_number: "149", treatment: "normal",
  illustration_id: "art-a", artist_name: "Artist", frame_version: "2015", border_color: "black", is_promo: false,
  variation: false, card_sets: { id: "set", code: "M11", name: "Magic 2011", release_date: null } };
const families = groupPrintingVersions([
  { ...base, id: "en", language_code: "en" }, { ...base, id: "ja", language_code: "ja" },
  { ...base, id: "other-art", language_code: "en", illustration_id: "art-b" },
] as never);
assert.equal(families.length, 2, "Language-only variants group, but distinct artwork must not collapse.");
assert.deepEqual(families.find((family) => family.printings.length === 2)?.printings.map((p) => p.id), ["en", "ja"]);

const shellCss = readFileSync("components/app-shell/app-shell.module.css", "utf8");
const globalCss = readFileSync("app/globals.css", "utf8");
assert.match(shellCss, /position:\s*sticky/);
assert.match(globalCss, /cursor:\s*pointer/);
assert.match(globalCss, /focus-visible/);
const onboarding = readFileSync("app/(auth)/onboarding/onboarding-form.tsx", "utf8");
assert.ok(!onboarding.includes("router.replace(`/users/"), "Onboarding must not race the public profile route.");
console.log("Web UX hardening regression passed.");
