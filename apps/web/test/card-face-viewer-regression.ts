import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { trueDfcFaces, type CardFace } from "../features/cards/card-faces.ts";

const face = (name: string, image: string | null): CardFace => ({ name, mana_cost: null, type_line: name === "Front" ? "Sorcery" : "Land", oracle_text: `${name} rules`, power: null, toughness: null, loyalty: null, defense: null, image_small_uri: null, image_normal_uri: image, image_large_uri: null });
const front = face("Front", "https://cards.example/front.jpg"), back = face("Back", "https://cards.example/back.jpg");
for (const layout of ["modal_dfc", "transform"]) assert.deepEqual(trueDfcFaces({ layout, faces: [front, back] }), [front, back]);
assert.equal(trueDfcFaces({ layout: "normal", faces: [front, back] }), null, "Single-faced cards must not flip.");
assert.equal(trueDfcFaces({ layout: "flip", faces: [front, back] }), null, "Legacy flip cards must not be classified as true DFCs.");
assert.equal(trueDfcFaces({ layout: "modal_dfc", faces: [front, face("Back", null)] }), null, "Missing back image must hide Flip.");
const viewer = readFileSync("components/card-face-viewer/card-face-viewer.tsx", "utf8");
assert.ok(viewer.includes("useState(false)"), "Front face must be initially visible.");
assert.ok(viewer.includes('"Show back face"') && viewer.includes('"Show front face"'));
assert.ok(viewer.includes("data-printing-id={printingId}") && viewer.includes("data-canonical-card-id={canonicalCardId}") && viewer.includes("data-language={language}"), "Flip must retain printing, canonical, and language identity.");
assert.ok(viewer.includes("face.type_line") && viewer.includes("face.oracle_text"), "Visible face details must follow face state.");
const css = readFileSync("components/card-face-viewer/card-face-viewer.module.css", "utf8");
assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
console.log("Card face viewer regression passed.");
