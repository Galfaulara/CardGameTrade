import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const bell = read("components/notification-bell/notification-bell.tsx");
const bellCss = read("components/notification-bell/notification-bell.module.css");
const deepLink = read("components/card-activity-deep-link/card-activity-deep-link.tsx");
const cardPage = read("app/(public)/cards/[canonicalCardId]/page.tsx");
const activity = read("app/(public)/account/inventory/inventory-manager.tsx");
const account = read("components/account-menu/account-menu.tsx");
const friends = read("app/(public)/account/friends/friends-manager.tsx");
const inventoryService = readFileSync(
  new URL("../../api/src/inventory/inventory.service.ts", import.meta.url),
  "utf8",
);

assert.match(bell, /setOpen\(\(current\) =>[\s\S]*return !current/, "Bell must toggle the panel.");
assert.match(bell, /document\.addEventListener\("pointerdown", pointerdown\)/, "Outside dismissal must use pointer events.");
assert.match(bell, /rootRef\.current\?\.contains\(target\)/, "Bell interactions must count as inside.");
assert.match(bell, /panelRef\.current\?\.contains\(target\)/, "Panel interactions must not dismiss prematurely.");
assert.match(bell, /document\.removeEventListener\("pointerdown", pointerdown\)/, "Pointer listener must be cleaned up.");
assert.match(bell, /event\.key === "Escape"/, "Escape must close Notifications.");
assert.match(bell, /triggerRef\.current\?\.focus\(\)/, "Escape must restore focus to the bell.");
assert.match(bell, /onClick=\{\(\) => \{\s*close\(\);\s*if \(!item\.readAt\) void markOne/, "Selection must close immediately and issue at most one read request.");
assert.match(bell, /deckdeal:header-popover-open/, "Notifications must coordinate with other header popovers.");
assert.match(account, /detail: "account"/, "Account must identify itself to header-popover coordination.");
assert.match(bell, /detail: "notifications"/, "Notifications must identify itself to header-popover coordination.");

assert.match(bell, /`\/cards\/\$\{item\.canonicalCardId\}\?activity=\$\{item\.inventoryItemId\}`/, "Interest must deep-link by exact canonical and inventory IDs.");
assert.match(bell, /friend_request_received[\s\S]*\/account\/friends\?view=incoming/, "Friend requests must open incoming requests.");
assert.match(bell, /friend_request_accepted[\s\S]*`\/users\/\$\{item\.actor\.id\}`/, "Friend acceptance must open the authoritative actor profile.");
assert.match(friends, /searchParams\.get\("view"\) === "incoming"/, "The request destination must select incoming requests.");
assert.match(cardPage, /<CardActivityDeepLink canonicalCardId=\{canonicalCardId\} inventoryItemId=\{query\.activity\}/, "Card Details must consume the concise activity query contract.");
assert.match(deepLink, /fetch\(`\/api\/me\/inventory\/\$\{encodeURIComponent\(inventoryItemId\)\}`/, "Deep link must load the exact item through the owner-scoped endpoint.");
assert.match(deepLink, /candidate\.printing\.canonical_cards\.id !== canonicalCardId/, "Mismatched card and inventory identities must be rejected.");
assert.match(deepLink, /<ActivityDialog item=\{item\} onClose=\{close\}/, "Deep links must reuse the existing Card Activity dialog.");
assert.match(deepLink, /next\.delete\("activity"\)/, "Closing Activity must normalize the URL.");
assert.match(deepLink, /That Card Activity context is no longer available/, "Stale or unauthorized contexts must fail gracefully.");
assert.match(activity, /fetch\(`\/api\/me\/inventory\/\$\{item\.id\}\/activity`/, "The established Activity loader must be reused.");
assert.match(inventoryService, /id: inventoryItemId,\s*owner_user_id: userId/, "Exact inventory loading must remain owner-authorized server-side.");

assert.match(bellCss, /width:\s*min\(24rem, calc\(100vw - 2rem\)\)/, "Desktop panel must be viewport bounded.");
assert.match(bellCss, /position:fixed;top:4\.25rem;right:\.5rem;left:\.5rem/, "Mobile panel must remain fixed inside both viewport edges.");
assert.match(bellCss, /max-height:calc\(100dvh/, "Mobile height must follow the dynamic viewport.");
assert.match(bellCss, /overflow:\s*auto/, "Notification rows must scroll internally.");

console.log("Notification dismissal and deep-link regression passed.");
