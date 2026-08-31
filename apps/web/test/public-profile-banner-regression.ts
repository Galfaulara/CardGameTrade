import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const profile = readFileSync("app/(public)/users/[userId]/page.tsx", "utf8");
const styles = readFileSync("app/(public)/users/[userId]/page.module.css", "utf8");

assert.match(profile, /<h1>\{headingName\}<\/h1>/, "Public display name must remain the primary heading.");
assert.match(profile, /@\{user\.username\}/, "The public username must remain visible as a secondary handle.");
assert.match(profile, /collectorInitials/, "A public-name initials fallback must render when no public avatar is available.");
assert.match(profile, /summary\.public_collection_count/, "Public collection count must be preserved.");
assert.match(profile, /summary\.active_listing_count/, "Authoritative active-listing count must remain Cards available.");
assert.match(profile, /summary\.public_wishlist_count/, "Public Wishlist count must be preserved.");
for (const privateField of ["email", "auth_user_id", "first_name", "last_name", "avatar_url"]) {
  assert.ok(!profile.includes(`user.${privateField}`), `Public banner must not expose ${privateField}.`);
}
assert.match(profile, /`\/users\/\$\{userId\}`/, "Existing collector profile URLs must remain unchanged.");
assert.match(profile, /\?view=\$\{item\.id\}/, "Existing profile view links must remain unchanged.");
assert.match(styles, /\.profileHeader\{display:grid/, "Banner must use the shared responsive profile layout.");
assert.match(styles, /@media\(max-width:44rem\).*\.profileHeader\{grid-template-columns:1fr/s, "Mobile banner must stack without overflow.");
assert.match(styles, /\.summary\{display:grid/, "Statistics must render as compact associated summary blocks.");
console.log("Public collector profile banner regression passed.");
