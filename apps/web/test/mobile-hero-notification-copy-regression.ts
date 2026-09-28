import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const heroCss = read("app/(public)/page.module.css"),
  heroPage = read("app/(public)/page.tsx"),
  bell = read("components/notification-bell/notification-bell.tsx"),
  howItWorks = read("app/(public)/how-it-works/page.tsx");

/* --- Hero logo: the card graphic AND its inner content must scale together --- */

assert.match(
  heroPage,
  /<b>DD<\/b><span>Cards worth finding<\/span>/,
  "Hero logo wording must remain intact; the lower text must not be hidden on phone.",
);
assert.match(
  heroCss,
  /\.heroVisual\{container-type:inline-size/,
  "The hero visual must establish an inline-size container so inner content can scale with the card.",
);
assert.match(
  heroCss,
  /\.heroVisual b\{[^}]*font-size:min\(4\.5rem,30cqw\)/,
  '"DD" must scale down proportionally with the card on narrow phones.',
);
assert.match(
  heroCss,
  /\.heroVisual span\{[^}]*font-size:clamp\(\.5rem,5cqw,var\(--font-size-xs\)\)/,
  '"CARDS WORTH FINDING" must also scale down, with a legible lower bound.',
);
assert.match(
  heroCss,
  /padding:min\(var\(--space-6\),10cqw\)/,
  "Internal card padding must scale proportionally so text never touches the card edge.",
);
/* Desktop parity: at the 15rem (240px) reference width the cqw values resolve to
   exactly the previous rem values, so desktop/tablet appearance is unchanged. */
for (const [declaration, rem, cqw] of [
  ["DD font-size", 4.5 * 16, 0.3 * 240],
  ["inner padding", 1.5 * 16, 0.1 * 240],
  ["tagline font-size", 0.75 * 16, 0.05 * 240],
] as const)
  assert.equal(rem, cqw, `${declaration} must be unchanged at desktop width.`);
/* The fallback rem declaration must still precede the container-query one so
   browsers without cqw support keep the current rendering. */
assert.match(
  heroCss,
  /padding:var\(--space-6\);padding:min\(var\(--space-6\),10cqw\)/,
  "A static fallback must precede the container-query padding.",
);
assert.match(
  heroCss,
  /font-size:4\.5rem;font-size:min\(4\.5rem,30cqw\)/,
  "A static fallback must precede the container-query font size.",
);

/* Phone widths: the container itself is already capped, and every inner value is
   derived from that width, so no supported width can clip the lower wording. */
const containerWidth = (viewport: number) =>
  viewport <= 640 ? 9.5 * 16 : viewport <= 832 ? 11 * 16 : 15 * 16;
for (const viewport of [320, 360, 375, 390, 412, 430]) {
  const width = containerWidth(viewport);
  const padding = Math.min(24, 0.1 * width),
    tagline = Math.min(12, Math.max(8, 0.05 * width)),
    dd = Math.min(72, 0.3 * width);
  /* Inner card is inset 7% on each side and carries a 3px border. */
  const innerWidth = width * 0.86 - 6 - padding * 2;
  assert.ok(
    innerWidth > 0,
    `${viewport}px: inner content box must not collapse.`,
  );
  assert.ok(
    dd * 1.35 <= innerWidth,
    `${viewport}px: "DD" (${dd}px) must fit inside ${innerWidth}px without crossing the card edge.`,
  );
  /* "FINDING" is the longest word; uppercase bold with wide tracking is ~0.72em per glyph. */
  assert.ok(
    "FINDING".length * tagline * 0.72 <= innerWidth,
    `${viewport}px: the tagline must wrap within ${innerWidth}px rather than clip.`,
  );
  assert.ok(
    tagline >= 8,
    `${viewport}px: the tagline must stay legible (got ${tagline}px).`,
  );
  assert.ok(
    dd < 72,
    `${viewport}px: "DD" must actually be smaller than the desktop size.`,
  );
}

/* --- Notification copy --- */

assert.match(
  bell,
  /"Mark all as read"/,
  'The notification action must read exactly "Mark all as read".',
);
assert.doesNotMatch(
  bell,
  /"Mark all read"/,
  'The old "Mark all read" copy must be gone.',
);
assert.doesNotMatch(
  howItWorks,
  /mark all read/,
  "Explanatory copy must match the shipped notification action label.",
);
assert.match(howItWorks, /mark all as read/);
/* The button stays disabled with no unread items, so the empty state cannot
   trigger a pointless request while still rendering the corrected copy. */
assert.match(
  bell,
  /disabled=\{busy \|\| !data\.unreadCount\}/,
  "Mark-all must remain disabled when there is nothing unread.",
);
assert.match(bell, /No notifications yet\./);
/* API/domain method names are intentionally untouched by this copy change. */
assert.match(bell, /async function markAll\(\)/);
assert.match(bell, /notifications\/read-all/);

console.log("Mobile hero scaling and notification copy regression passed.");
