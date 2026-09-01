import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const notifications = read(
    "components/notification-bell/notification-bell.tsx",
  ),
  messages = read("components/messages-indicator/messages-indicator.tsx"),
  icons = read("components/header-icons/header-icons.tsx"),
  notificationCss = read(
    "components/notification-bell/notification-bell.module.css",
  ),
  messageCss = read(
    "components/messages-indicator/messages-indicator.module.css",
  );

assert.doesNotMatch(notifications, /🔔|ðŸ””/);
assert.doesNotMatch(messages, /💬|ðŸ’¬/);
assert.match(notifications, /<BellIcon \/>/);
assert.match(messages, /<MessageIcon \/>/);
assert.equal((icons.match(/<svg/g) ?? []).length, 2);
assert.equal((icons.match(/strokeWidth="1\.8"/g) ?? []).length, 2);
assert.match(notifications, /type="button"/);
assert.match(notifications, /Notifications, \$\{data\.unreadCount\} unread/);
assert.match(messages, /href="\/account\/messages"/);
assert.match(messages, /Messages, \$\{unread\} unread/);
assert.match(notifications, /data\.unreadCount\s*>\s*0/);
assert.match(messages, /unread > 0/);
assert.match(notifications, /data\.unreadCount\s*>\s*99\s*\?\s*"99\+"/);
assert.match(messages, /unread\s*>\s*99\s*\?\s*"99\+"/);
assert.match(notificationCss, /\.bell:focus-visible/);
assert.match(messageCss, /\.link:focus-visible/);
assert.match(notificationCss, /\.badge/);
assert.match(messageCss, /\.badge/);

console.log("Minimal header icon regression passed.");
