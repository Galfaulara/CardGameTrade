import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const menu = read("components/account-menu/account-menu.tsx");
const css = read("components/account-menu/account-menu.module.css");
const shell = read("components/app-shell/app-shell.tsx");

assert.match(menu, /setOpen\(\(current\) => \{[\s\S]*return !current;/, "Account trigger must toggle open and closed.");
assert.match(menu, /document\.addEventListener\("pointerdown", handlePointerDown\)/, "Outside pointer dismissal must cover touch, pen, and mouse.");
assert.match(menu, /rootRef\.current\?\.contains\(target\)/, "Trigger clicks must count as inside interactions.");
assert.match(menu, /menuRef\.current\?\.contains\(target\)/, "Menu interactions must not dismiss prematurely.");
assert.match(menu, /document\.removeEventListener\("pointerdown", handlePointerDown\)/, "Outside pointer listener must be cleaned up.");
assert.match(menu, /event\.key === "Escape"/, "Escape must close the account menu.");
assert.match(menu, /triggerRef\.current\?\.focus\(\)/, "Escape must restore trigger focus.");
assert.match(menu, /deckdeal:header-popover-open/, "Opening another header popover must close the account menu.");
assert.match(menu, /<Link key=\{href\} href=\{href\} onClick=\{close\}>/, "Navigation selections must close the menu.");
assert.match(menu, /close\(\);\s*void signOut/, "Sign out must close the menu before using existing sign-out behavior.");
assert.match(menu, /usePathname\(\)/, "Route changes must reset account-menu state.");
assert.match(menu, /createPortal\(/, "The viewport popover must escape Header containing blocks.");
assert.match(menu, /visualViewport/, "Placement must account for the visible mobile viewport.");
assert.match(menu, /getBoundingClientRect\(\)/, "Placement must remain associated with the live trigger position.");
assert.match(css, /position:fixed/);
assert.match(css, /max-width:calc\(100vw - 1rem\)/);
assert.match(css, /max-height:calc\(100dvh - 1rem\)/);
assert.match(css, /overflow-y:auto/);
assert.doesNotMatch(css, /bottom:calc\(4\.5rem/, "Mobile menu must not be bottom-anchored and grow upward.");
assert.doesNotMatch(shell, /sidebar/i, "Account-menu work must not introduce a desktop/tablet sidebar.");
assert.match(shell, /<NotificationBell \/>/);
assert.match(shell, /<MessagesIndicator \/>/);

console.log("Account menu viewport and dismissal regression passed.");
