import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const shell = read("components/app-shell/app-shell.tsx"),
  profile = read(
    "components/profile-social-actions/profile-social-actions.tsx",
  ),
  friends = read("app/(public)/account/friends/friends-manager.tsx"),
  messages = read("app/(public)/account/messages/messages-manager.tsx"),
  guide = read("app/(public)/how-it-works/page.tsx");
assert.match(shell, /MessagesIndicator/);
assert.match(profile, /Add friend/);
assert.match(profile, /Request sent/);
assert.match(profile, /Friends ✓/);
assert.match(friends, /Requests/);
assert.match(friends, /blocked/);
assert.match(messages, /Messaging is unavailable for this conversation/);
assert.match(messages, /Sending…/);
assert.match(guide, /Chat text never accepts an Offer/);
console.log("social messaging frontend regression passed");
