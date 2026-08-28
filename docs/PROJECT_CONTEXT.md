# DeckDeal Project Context

## Product

DeckDeal is a store-centered marketplace for trading card games, initially Magic: The Gathering. Users register real owned cards, manage collections, list cards, create Wishlists, express Interests, negotiate Offers, and complete store-mediated exchanges through participating LGS locations.

## Architecture

- `apps/api`: NestJS 10 / Express backend.
- `apps/web`: Next.js web app.
- `apps/admin`: Next.js admin app.
- `apps/mobile`: Expo/React Native app.
- `apps/docs`: Next.js docs app.
- `packages/db`: Prisma/database package.
- `packages/domain`: shared domain logic.
- `packages/validation`: Zod validation.
- `packages/ui`: shared React UI.
- `packages/ui-tokens`: shared design tokens.
- `packages/types`: shared TS types.

Database: PostgreSQL.
ORM: Prisma 7.x.
Schema: `packages/db/prisma/schema.prisma`.
Package management: npm workspaces with `package-lock.json`.

## Card model

Three layers:

- `canonical_cards`: card/gameplay identity.
- `card_printings`: exact set/printing/version.
- `inventory_items`: actual registered owned physical inventory.

`inventory_items` is the marketplace ownership truth. Physical cards formally offered in trades must already exist as inventory.

An isolated development/admin bulk-inventory utility now supports normalized, dry-run-first imports that resolve exact local printings and finishes before atomic writes. Bulk inventory import is an important planned product feature: its eventual frontend should provide preview, validation, and explicit confirmation, with Moxfield-style text and CSV feeding the same normalized importer. A durable import-batch/audit model may be added when that user-facing feature is built.

## Major domains/tables

Includes:
`games`, `card_sets`, `canonical_cards`, `card_printings`, `printing_finishes`, `user_profiles`, `stores`, `store_staff`, `collections`, `inventory_items`, `inventory_item_photos`, `price_snapshots`, `listings`, `listing_offers`, `offer_items`, `transactions`, `transaction_items`, `wishlists`, `wishlist_items`, `wishlist_offers`, `wishlist_offer_items`, `wishlist_offer_requested_items`, `inventory_item_interests`, `store_trade_handoffs`, `transaction_item_custody`.

Verify exact columns in Prisma/source before coding.

## Listings

- Only `available` inventory may be listed.
- One inventory row cannot have multiple simultaneous open (`active`/`paused`) listings.
- Pending offers do not reserve the listed card.
- Reservation occurs at valid acceptance (`in_trade`).
- Completed card-trade listings end as `traded`.

## Wishlists

A Wishlist belongs to the user who wants a card. A Wishlist item can target a canonical card or an exact printing.

A different user who owns a matching inventory item creates a Wishlist Offer.

Direction:

- Wishlist owner wants the offered card.
- Card owner is the Wishlist Offer creator.
- Requested return terms belong to `wishlist_offer_requested_items`.
- Requested cards may be exact inventory or flexible criteria, but accepted trades must resolve to actual inventory.

Current Wishlist acceptance is pure-card only until payment exists.

## Interests

Interests are soft signals, not Offers.

Types:

- `buy`
- `trade`
- `buy_or_trade`
- `watch`

They do not reserve inventory, transfer ownership, or create Transactions.

`watch` is valid but non-convertible.

Conversion history is persisted with exactly one of:

- `converted_listing_offer_id`
- `converted_wishlist_offer_id`
  plus `converted_at`.

Listing-origin: interested user converts into a Listing Offer.
Wishlist-origin: Wishlist owner created the Interest, but the target card owner creates the Wishlist Offer.

## Offers

- Offered physical cards must belong to the offerer.
- Offered inventory must be `available`.
- Full registered quantity is required unless inventory is split first.
- Pending Offers do not reserve cards.
- Seller-scoped received Listing Offers are private reads across actor-owned Listings.
- Wrong-user terminal operations are rejected.
- Only pending Offers can be withdrawn/rejected.
- Only the authenticated Listing seller may reject or accept a pending Offer.
- Terminal Offers cannot transition again.
- Withdrawal/rejection must not erase Interest-to-Offer provenance.

## Acceptance and transactions

Current non-payment acceptance is user-to-user and store-mediated.

On valid pure-card acceptance:

- transaction is created;
- participating inventory becomes `in_trade`;
- transaction items represent each physical movement;
- a store handoff and custody rows are created;
- mediation store is chosen and validated at acceptance;
- mediation store must be active, verified, and trade-mediation enabled;
- ownership remains unchanged until Store release completes the transfer.

## Store handoff and custody

Custody:

1. `awaiting_delivery_to_store`
2. `in_store`
3. `verified_by_store`
4. `released_to_recipient`

Handoff:

1. `awaiting_items`
2. `partially_received`
3. `all_items_received`
4. `validated`
5. `completed`

Only active staff at the mediation store may act. Cards cannot be verified before receipt or released before full handoff validation.

## Ownership transfer

On release:

- the source ownership row remains tied historically to the former owner;
- source status becomes `removed`;
- source collection is cleared;
- a new recipient inventory row is created;
- new row is `available`;
- `transaction_items.result_inventory_item_id` preserves provenance.

Physical characteristics carry forward. Prior-owner private metadata does not.

Repeated ownership chains have been tested successfully across multiple generations.

## Daily market pricing

External market references are historical `price_snapshots`, never seller
asking prices. TCGplayer reference values are synchronized through Scryfall's
provider-wide bulk printing dataset and mapped by exact printing and finish
(`usd`, `usd_foil`, `usd_etched`). Card Kingdom retail references synchronize
separately from MTGJSON's daily `AllPricesToday` and `AllIdentifiers` bulk files;
MTGJSON UUIDs resolve through `scryfallId` to DeckDeal's exact printing. DeckDeal
does not use Card Kingdom buylist values, scrape storefront HTML, or fabricate
missing values.

Run `npm.cmd run sync:prices --workspace=api` once daily from the production
scheduler. Page renders make zero provider requests: API/UI reads batch the
latest successful snapshot for exact `printing_id + finish + source` from
DeckDeal's database. Daily retries update the same effective observation,
prior dates remain historical, provider failure never erases the latest valid
snapshot, and `captured_at` is the user-facing freshness authority. Pricing is
informational and missing/stale prices never block Listings, Offers, Trades, or
Store custody.

Offer comparisons keep providers independent and define Difference as Offered
market value minus Target market value. A difference from -10% through +10%,
inclusive, is `Close value`; greater than +10% is `Above value`; less than -10%
is `Below value`. Missing provider coverage makes that provider's total,
difference, and classification unavailable rather than treating the card as
zero. These are current/latest references, not offer-time locked settlement
values.

My Listings keeps two healthy-width horizontal cards on normal desktop and
falls back to one column before either card's content becomes unreadable. Card
names wrap only at normal word boundaries and art remains bounded at 63:88.

## Backend status

The core non-payment backend has been extensively tested through API and DB assertions.

An isolated, read-only public Discovery layer now provides bounded collection
and store-inventory browse models. Public collection discovery includes only
public collections owned by active users and exposes only available inventory.
Store inventory is currently publicly discoverable only when it is available,
owned solely by an active and verified store with trade mediation enabled.
Previews and inventory pages are bounded, and private inventory/user/store
metadata is excluded. Future store-specific visibility or catalog controls may
refine this interim store policy.

### Marketplace preview and homepage policy

Public collection visibility and marketplace availability are deliberately
different. Full public collection pages continue to expose bounded available
physical inventory without implying an offer. Collection/store previews are
marketplace-facing: inventory must be `available` and have an exact-owner
`active` Listing accepting trade, cash, or both. Paused/terminal Listings are
excluded. Summaries preserve public/available `card_quantity` and separately
report marketplace quantity and row counts.

Homepage resources are bounded to one LGS rail, then up to three collector
rails, then the separate Recently Listed feed; every preview is capped at ten.
Collection selection prefers distinct owners, then fills normally. Default
preview order is trade-capable first, explicit rarity (`mythic`, `rare`,
`special`/`bonus`, `uncommon`, `common`, unknown/null), newest active Listing,
then Listing ID. Warm gold identifies an LGS, not sponsorship or rank.

Future owner preview strategies are Recommended (default), Rarity, Recently
listed, Recently added, Oldest added, Highest market value only after reliable
pricing, and Manual showcase with automatic fallback. Curation never makes
unlisted/unavailable inventory marketplace-available.

Users now have one nullable user-level preferred DeckDeal store. It is a
social signal and future UI default, not authority over Listing, Wishlist, or
Transaction mediation. Public collection list/detail responses expose a safe
store summary only while that store is currently active, verified, and enabled
for trade mediation; the stored preference is retained if eligibility later
changes. User-, Wishlist-, and Listing-level preferred stores remain distinct,
and the transaction mediating store is still validated at acceptance. The
preference appears once with collection identity, never per card. Authenticated
Profile/My Inventory management will later allow selecting, changing, or
removing it from currently eligible stores; no unauthenticated setter exists.

`/discover` is the canonical long-form public discovery route, with distinct
URL-driven Collections, Stores, and Listings modes. Dedicated read-only feed
endpoints use opaque, filter-bound cursor pagination; the server renders the
first bounded page and a small client continuation layer provides optional
near-viewport loading while always retaining an accessible Load More fallback.
The homepage remains a separate curated LGS-first surface rather than becoming
an infinite feed.

Collections are the browsing object in Collections mode. Every public
Collection owned by an active user remains eligible in All even with no
Marketplace cards; Available now requires at least one exact-owner, available
inventory item with an active Listing accepting trade or cash. Each result has
a bounded five-card marketplace-only preview. Stores are the browsing object in
Stores mode. Every active, verified, trade-mediation-enabled Store remains
eligible in All even with no inventory or Listings; Available now requires an
active exact-owner Store Listing, and previews are capped at five. Listings mode
is a newest-first feed of truthful active Listings backed by available,
seller-owned inventory, supporting both User and Store sellers.

Initial filters are deliberately limited to All/Available now for Collections
and Stores, and exact All, trade-only, sale-only, or trade-and-sale intent for
Listings. No popularity, relevance, Featured, Sponsored, or other ranking is
implemented. Future collection game/owner/location/size/activity filters,
Store geography/open-hours/inventory relevance and Featured controls, and
Listing catalog/condition/finish/language/seller/location/price filters remain
roadmap work, as do organic collection and Store ranking signals. Sponsored
placement must remain explicitly disclosed.

### Catalog search and public card pages

For MTG, Scryfall is DeckDeal's basic search-quality reference. Default catalog
search represents canonical gameplay identities, uses case-insensitive card-name
matching with AND semantics across normalized whitespace-separated terms, and is
shown as a responsive grid rather than a preview rail. Search is server-paginated
at 60 cards per web page; the complete local match universe remains reachable.
Each result is hydrated without N+1 requests using a deterministic representative
printing: English first, then paper, usable image, non-promo, newest release, and
a stable ID tie-break, with safe fallback when ideal printings do not exist.

The authoritative public route is `/cards/[canonicalCardId]`, with optional exact
printing context in `?printing=[printingId]`. Search, public collection/store
previews, Recently Listed, and full public collections converge on that route;
inventory and Listing surfaces preserve their known exact printing. Invalid or
cross-card printing IDs safely fall back to the representative printing.

The public card read model exposes canonical rules characteristics and normalized
multi-face data without exposing raw catalog JSON, plus a selected exact printing,
a bounded ten-item alternative-printing selector, and a trusted synchronized HTTPS
Scryfall permalink. The page omits format-legality matrices and does not fabricate
market pricing. "Available on DeckDeal" includes user and LGS sellers for every
printing of the canonical card, but only exact-owner active Listings backed by
available inventory and accepting trade or cash. All matches are accessible via
bounded server pagination (12 by default, 24 maximum), with selected-printing
Listings first, then trade-capable, newest, and stable ID order.

Future card-page work includes a selected-printing-only filter, full printing
browser, `price_snapshots` reference pricing/history, Wishlist and owned-inventory
actions, Listing creation, collection context, rulings, related cards/tokens,
visual mana symbols, and marketplace location filtering. Future advanced search
includes catalog filters (game, set, color/color identity, rarity, type, mana
value, language), marketplace availability/trade/sale/condition/finish/seller and
location filters, relevance/name/release/rarity/value sorts, and a deliberately
bounded subset of Scryfall-style syntax. Full Scryfall syntax is not planned for
this phase. Legacy preferred-store reconciliation and the migration-baseline
review remain pre-Staging roadmap work.

Future organic store ranking should combine geographic relevance, recent
successful mediated activity, current marketplace inventory relevance,
reliability, and controlled rotation, with problem/dispute penalties—not
lifetime trade count alone. Backoffice will use **Featured Store** (toggle,
priority, starts/ends scheduling), not “Favorite Store.” Paid placement must be
explicitly labeled **Sponsored** and must not silently redefine “Popular.”

Planned backoffice phases:

- **A — Core Operations:** users/status/moderation, store applications,
  verification/activation, mediation and staff, Listing/Offer/Transaction
  inspection, collection/report moderation, audit logs, flags/settings.
- **B — Discovery & Merchandising:** Featured Store scheduling/priority,
  ranking configuration/overrides/diagnostics, future featured collections.
- **C — Trust & Safety:** reports, disputes, fraud signals, custody/transaction
  exceptions, store performance, moderation queues.
- **D — Commercial:** after monetization—sponsorships, commissions, provider
  visibility, refunds/disputes, and payout/split visibility.

Covered:

- inventory/collections;
- listings;
- Wishlists/public browse;
- Interests CRUD and duplicate-active rules;
- `buy`, `trade`, `buy_or_trade`, `watch`;
- Listing and Wishlist Interest conversion;
- cash/card/mixed Offer creation shapes where supported;
- wrong-user guards;
- duplicate conversion;
- Offer withdrawal/rejection;
- Offer acceptance;
- listing conflict checks;
- transaction creation;
- inventory reservation;
- LGS handoff;
- receive/verify/release;
- custody audit;
- ownership transfer;
- current-vs-historical inventory;
- multi-generation provenance and re-entry.

A validation inconsistency was found and fixed: `inventoryItemInterestTypeSchema` now includes `watch`.

Milestone:
**CORE NON-PAYMENT BACKEND LIFECYCLES COMPLETE.**

Temporary Friday staging-beta scope is trade-only: authenticated users can now
manage **My Listings**, create trade-only Listings from owned Inventory, follow
an actionable public **TRADE** intent into **Start Trade**, submit
card-for-card Listing Offers using exact owned Inventory items, review private
**Received Offers**, seller-accept or reject pending Offers, and open
participant-scoped **My Trades** plus trade detail after acceptance. Pending
Offers remain non-reserving: no ownership transfer, custody, handoff, or
Transaction is created until valid seller acceptance. Acceptance now chooses and
validates the mediation Store, creates the Transaction immediately, and still
keeps ownership unchanged until Store release. Active Store staff now enter the
minimal **Store Workspace**, review exact mediated handoffs, receive and verify
each custody item, then release a fully validated trade through the certified
ownership-transfer lifecycle. Completed Trades update for both participants and
new recipient Inventory becomes available without copying former-owner private
metadata. Cash/payment remains deferred.

Store operational authority remains `human Clerk authentication -> DeckDeal
user_profile -> active store_staff -> Store business workspace/resources`.
Deferred beyond the Friday closed beta: Store staff management, fine-grained
roles, full Backoffice, general Store marketplace administration, and payment.

Do not keep expanding manual backend lifecycle testing unless frontend integration finds a regression or a new backend feature needs coverage.

## Payment

Payment is intentionally deferred until after the core frontend.

Planned vertical slice:

1. frontend payment initiation;
2. DeckDeal backend creates provider intent/order;
3. provider sandbox/test flow;
4. provider webhook/backend confirmation;
5. DeckDeal transaction/payment state update;
6. frontend reflects authoritative backend state;
7. commission/store/platform split rules;
8. failure/cancel/refund/idempotency tests;
9. only then live Production credentials.

Do not trust browser claims of payment success. Payment and custody remain separate concerns.

## Authentication/authorization

Development routes often include `/users/:userId/...`.

Before public Staging, authorization must be bound to authenticated identity from the selected auth system. A supplied user UUID cannot be treated as sufficient authority.

### Clerk authentication foundation

Step 3A uses Clerk for external authentication. The Nest API independently
authenticates Clerk session tokens with the official backend SDK and resolves
the Clerk subject through the existing `user_profiles.auth_provider` plus
`auth_user_id` binding to DeckDeal's authoritative `user_profiles.id` UUID.
Public `/users` URLs and every ownership foreign key continue using the
DeckDeal UUID. Email, username, and display name are never implicit identity-
linking authorities.

`GET /api/auth/me` is opt-in protected. Valid but unmapped Clerk users are
authenticated with `onboarded: false`; mapped active users receive only their
safe DeckDeal public identity, while mapped inactive users receive a disabled
account state and are not normally authorized. Catalog, Discovery, public
Listings, and every certified public web route remain anonymous. Web-to-API
authenticated requests use Clerk session tokens in the Authorization bearer
header; custom DeckDeal code does not persist tokens in localStorage or URLs.
Authorized parties and CORS origins are environment allowlists.

Authentication does not yet secure the existing user-ID-scoped mutation
routes. They must not be exposed to untrusted clients until Step 3B replaces
path/body identity trust with authorization against the authenticated
principal. Store staff will remain authenticated DeckDeal users whose Store
authority comes from `store_staff`; Clerk identities never map directly to a
Store. Backoffice authorization remains a separate later design and must not
derive final authority solely from Clerk metadata.

Local, Staging, and Production must use isolated Clerk applications, keys, and
users. A future Expo client will send Clerk bearer/session tokens to this same
independent Nest API boundary; the architecture does not depend exclusively on
Next.js cookies. The development-only Clerk linker requires an explicit subject,
DeckDeal UUID, and confirmation and never performs email-based linking.

#### Step 3A real-world certification

Real Clerk development verification is complete. With local credentials kept
in ignored environment files, the DeckDeal Web application successfully
completed Clerk sign-up and sign-in, displayed the signed-in header state, and
preserved the Clerk session across a browser refresh.

Before any DeckDeal mapping existed, the real session token issued to the
signed-in `http://localhost:3000` application was transported cross-origin as a
Bearer token to `GET http://localhost:4000/api/auth/me`. The Nest API accepted
it through Clerk `authenticateRequest()` under the configured localhost
authorized-party policy and returned HTTP 200 with `authenticated: true` and
`onboarded: false`. This verifies that a genuine Clerk identity can authenticate
without being implicitly matched by email, name, or username, and that
authentication remains distinct from DeckDeal onboarding. The focused
malformed-token, forged-token, and unconfigured-origin regressions remain in
place; authorized-party validation must not be weakened.

The same Clerk development user was then explicitly linked, using the
development-only linker, to the existing Sanza profile with DeckDeal user ID
`16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e`. The same real signed-in Clerk session
then received HTTP 200 from `/api/auth/me` with `authenticated: true`,
`onboarded: true`, `account_status: active`, and the exact expected DeckDeal
identity: ID `16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e`, display name `Sanza`, and
username `Gaal`. No email, name, or username matching was used. This deliberate
development mapping preserves Sanza's existing inventory, collections,
Listings, ownership history, preferred Store, and transaction/test history;
Sanza must not be recreated or replaced.

Step 3A real-world authentication verification is complete. This certification
does not change the remaining authorization boundary: Step 3A authentication
does **not** itself secure the existing user-ID-scoped mutation endpoints.
Step 3B authorization retrofit remains mandatory before exposing writes to
untrusted clients.

### Step 3B authorization boundary

The API is now default-protected: routes are private unless explicitly marked
as certified public read models. Normal protected operations require a valid
Clerk session resolved to an active, onboarded DeckDeal profile. The verified
`AuthenticatedPrincipal.deckdealUserId` is the user authority; email, display
identity, request bodies, query parameters, frontend state, and caller-supplied
UUIDs are not authority.

Legacy `:userId`, `:ownerUserId`, and `:staffUserId` route shapes remain
temporarily for compatibility, but the authorization guard requires an exact
match with the authenticated DeckDeal principal before controller or service
execution. Domain services continue to scope private resources by owner,
participant, or recipient relationship. Request DTOs do not assign actor
ownership; ownership columns are derived from the guarded DeckDeal actor.
Future authenticated API cleanup may replace these legacy shapes with `/me`
routes without broad route churn in Step 3B.

Store authority follows Clerk -> DeckDeal user -> active `store_staff` at the
exact Store. A Store UUID is never authority. Current staff data has no finer
permission semantics, so active exact-Store membership is the narrowest safe
current policy for handoff/custody operations. Private Inventory, Collection,
Offer, Interest, Wishlist, Transaction, handoff, and custody reads are
protected. Purpose-built Catalog, Discovery, public User/Store/Collection/Card,
public Wishlist items, and public Marketplace Listing reads remain anonymous.
See `docs/AUTHORIZATION_MATRIX.md` for the complete route inventory.

Step 3C ordinary-user onboarding is now complete. Each new DeckDeal user
must claim a globally unique, case-insensitive username as the canonical
public identity label; display names remain non-unique presentation data.

#### Step 3B certification

Step 3B now has a reusable authenticated Nest integration harness. It imports
the real `AppModule` and overrides only the Clerk request-authentication
dependency inside `TestingModule`; actor selection exists only as mutable test
process state and is not reachable through production headers, query values,
routes, environment shortcuts, or special tokens. The real global guard,
metadata, controllers, validation, services, ownership predicates, Store staff
checks, and Prisma database behavior remain in the request pipeline.

The authenticated HTTP matrix is certified with Sanza/User1, Trade Test
User/User2, and the actual active DeckDeal Test LGS staff user. It covers
unmapped and disabled principals, legacy path spoofing, private reads and
writes across every current protected domain, strict rejection of body
ownership fields, transaction participation, Store handoff/custody authority,
anonymous public models, and exact before/after snapshots for denied requests.
Testing found and fixed one authorization-order defect: handoff lifecycle state
was evaluated before Store staff membership. Membership is now checked first,
preventing non-staff callers from learning operational state.

The durable non-payment lifecycle regression executes two complete generations
of a card trade through authenticated HTTP actors: Interest, Listing Offer,
seller acceptance, eligible Store selection, Transaction/items/handoff/custody,
staff receive/verify/release, historical removed source rows, new available
recipient rows, `result_inventory_item_id`, private metadata non-copy, and
re-collection/re-listing/re-trading of transferred Inventory. Both new suites
pass repeatedly with marker-scoped dependency-safe cleanup. Authentication-
foundation and public-product certification remain passing.

Active Store staff membership grants the currently implemented operational
Store authority because the present schema does not encode finer permissions.
Role-level permission refinement remains future work. No migration or Step 3C
work was required.

Milestone: **AUTHORIZATION BOUNDARY CERTIFIED FOR AUTHENTICATED FRONTEND WORK.**

### Step 3C ordinary-user onboarding

A newly authenticated Clerk user now remains authenticated but not DeckDeal-
onboarded until completing DeckDeal onboarding. `GET /api/auth/me` therefore
returns `authenticated: true` plus `onboarded: false` for a valid Clerk subject
with no DeckDeal mapping. The authenticated web `/onboarding` route is not
public; it uses the existing `AllowUnmappedDeckDealUser` authorization class so
valid Clerk users without a DeckDeal profile may finish setup while anonymous,
already-onboarded, and disabled mapped identities cannot create replacement
accounts.

On completion, DeckDeal creates the ordinary user profile and Clerk binding in
one transaction. Security/domain identity remains the immutable
`user_profiles.id` UUID, which also remains the canonical `/users/[DeckDeal
UUID]` route authority. Clerk subject is authentication identity only. The
public username is DeckDeal-owned domain data, not authentication authority.

`user_profiles.username` preserves the chosen casing for public presentation
where possible, while `user_profiles.username_normalized` stores the canonical
`lowercase(trim(username))` identity. Database uniqueness is enforced by the
additive `uq_user_profiles_username_normalized` unique index, so `Gaal`,
`gaal`, and other case-only variants collide even under concurrent requests.
The allowed username contract is centralized in shared validation:
`^[A-Za-z0-9][A-Za-z0-9_]{2,23}$`, trimmed before validation, with no stored
`@`, spaces, or other punctuation. Reserved names are centrally blocked for
both availability checks and final completion, including: `deckdeal`, `admin`,
`administrator`, `support`, `staff`, `moderator`, `official`, `security`,
`help`, and `system`.

Display name remains presentation-only and may be null or non-unique. Where a
public collector identity matters, the frontend now shows `display_name ·
@username` when both exist, otherwise compact `@username` or the display name
fallback. `PublicUserLink` still links collectors to `/users/[DeckDeal UUID]`.
Friendly username routes such as `/@sanza` remain future work.

#### Step 3C certification

`apps/api/test/onboarding-regression.ts` extends the authenticated Nest
TestingModule harness to verify ordinary-user onboarding through the real
global guard/controller/service/Prisma pipeline. It certifies anonymous `401`,
unmapped authenticated onboarding, already-onboarded and disabled-account
rejection, syntax and reserved-name validation, case-insensitive duplicate
rejection, database-enforced uniqueness under concurrency, same-subject
single-account enforcement, `/auth/me` transition from `onboarded: false` to
`true`, verified Clerk-subject binding, absence of implicit email/name linking,
absence of unintended Inventory/Listing/Offer/etc. creation, preservation of
Sanza/Gaal, and dependency-safe cleanup back to baseline.

### Public-read certification

Step 2H certified the anonymous public foundation as feature-complete before
Authentication. Homepage, Catalog Search, Discover, Card, Collection,
Collector, and Store routes form one public navigation graph: cards converge on
the canonical Card route with exact printing context where known, collectors
always route to `/users/[userId]`, and Stores always route to
`/stores/[storeId]`. Public Collection and Store Inventory reads remain neutral
and may include unlisted cards; all Marketplace previews, Available views, Card
availability, and Discover Listings remain active-Listing-backed.

Remaining public enhancements are backlog rather than Authentication blockers.
The API ESLint 9 flat-config repair and fresh-database/migration-baseline
certification remain pre-Staging engineering tasks. Collection public-feed and
active-Listing freshness indexes remain performance-review candidates rather
than approved migrations. `user_preferences.preferred_trade_store_id` now
remains only as a legacy authenticated trade-default preference pending final
Listing-creation-phase reconciliation.

## Frontend phase

Next primary phase: `apps/web`.

### Public identity navigation convention

On every public frontend surface, a visible collector/user identity with a
known safe user ID links to `/users/[userId]`. This includes display names,
usernames, collection and Wishlist owners, sellers, collectors, and other
public user attribution across discovery, marketplace, reputation, offer, and
transaction views. Link the identity itself without creating nested links or
linking incidental prose. Store/LGS identities are a separate concept: they
must never link to a user route and will link to `/stores/[storeId]` once that
public route exists. Private or internal identities remain unlinked when public
navigation would be inappropriate.

`/users/[userId]` is now the canonical server-rendered public collector route.
Its URL-driven Overview, Collections, Available, and Wants views expose only
bounded public resources: public Collections, exact-owner active user Listings
backed by available inventory, and active public Wishlists with active wanted
cards. A profile is temporarily discoverable only for an active user who owns
at least one such public resource; unknown, inactive, and otherwise ineligible
users share the same public not-found response. Eligible preferred stores use
the existing active/verified/trade-mediation policy and remain informational.

`PublicUserLink` is the shared identity treatment. Its resting underline and
brand color must make navigation apparent without hover, with stronger hover
feedback and the established blue/cyan keyboard focus ring while inheriting
surrounding typography. Collector identities route to `/users/[userId]`;
Store/LGS identities remain separate and will route to `/stores/[storeId]` in
the Store-profile phase. Public activity and transaction history are
intentionally excluded. Future work may add Public/Limited/Private profile
controls and username-friendly URLs. Resource visibility continues to be
authoritative until explicit profile privacy exists.

### Step 4A authenticated account shell and My Profile

`/account` now redirects to `/account/profile`, which is the first authenticated
DeckDeal account shell page. Both routes require a valid Clerk session.
Signed-out users redirect to sign-in with a return URL; authenticated but
unmapped users redirect to `/onboarding`; mapped inactive/disabled users
receive a safe account-unavailable state; only mapped active onboarded users
reach the DeckDeal account UI.

`GET /api/me/profile` and `PATCH /api/me/profile` are the first self-scoped
DeckDeal profile endpoints. The verified
`AuthenticatedPrincipal.deckdealUserId` is the only identity authority. No
path, query, or request-body user ID is accepted for self-profile authority,
and Step 3B's authenticated principal boundary is unchanged.

Username remains read-only in Step 4A. Display name is editable with minimal
shared validation and continues to flow through existing public collector read
models. `user_profiles.preferred_store_id` is now the canonical DeckDeal
preferred LGS / public-profile preference: it is nullable, user-selected,
editable from My Profile, safe for public display only while the chosen Store
is currently active/verified/trade-mediation-enabled, and informational only.
It does not select a transaction mediator and does not mutate existing
Listings, Wishlists, or transactions.

`user_preferences.preferred_trade_store_id` remains separate legacy
functionality. It is still the current Listing/Wishlist trade-default fallback
when those creation flows omit a preferred Store. Step 4A does not surface it
as a second My Profile field, does not synchronize it with
`user_profiles.preferred_store_id`, and does not remove it. Final resolution is
still deferred to the Listing-creation phase.

Authenticated profile reads expose `public_profile_available` using the same
existing public-discoverability rule as `/users/[userId]`: an active user must
already have at least one genuine public resource (a public Collection, an
active user Listing, or a public active Wishlist). `/account/profile` may be
valid even while `/users/[userId]` still returns public not-found.

The Step 4A account shell intentionally exposes only Profile. Later
authenticated destinations remain planned at `/account/inventory`,
`/account/collections`, `/account/listings`, `/account/wishlists`, and
`/account/offers`, but the UI must not expose dead links before those pages are
implemented.

### Step 4B My Inventory

`/account/inventory` is the authenticated owner-private Inventory management
surface. Its `/api/me/inventory` backend reads and writes are self-scoped only
by `AuthenticatedPrincipal.deckdealUserId`; caller-supplied user or Store owner
identifiers are rejected, and ordinary users cannot create Store Inventory.
The private model may expose supported ownership metadata such as notes and
acquisition details, while public Discovery, Card, Collection, User, and
Listing projections remain unchanged and exclude those fields.

Manual registration preserves the three-layer card model: the user searches a
canonical card, selects the exact physical printing/version and supported
finish, then records supported physical-copy details. New rows belong to the
authenticated user and start `available`. That status is operational only and
does not express sale or trade intent; only an active Listing does so.

Owners may edit only the existing safe physical/private fields. Owner, Store,
printing, historical provenance, transaction, and custody identity remain
immutable. Removal preserves lifecycle history by setting eligible current
Inventory to `removed` and clearing collection placement; open Listings and
protected lifecycle states continue to block removal. Collection management
remains Step 4C, and user-facing bulk import remains Step 4D.

#### Step 4B.1 card-centric Inventory experience

My Inventory is a full-width, card-first browsing surface rather than a
permanent CRUD sidebar. Physical card artwork keeps the `63 / 88` card ratio,
and tiles prioritize card name, exact printing, physical condition/finish, and
a quiet Collection location. Missing acquisition metadata and absent Listings
are omitted. `available` remains an operational Inventory status and never
communicates marketplace intent; only a genuine active Listing receives a
restrained Listed indicator.

One reusable Add-to-Collection dialog serves My Inventory, the universal Card
page, and public Catalog/browse card tiles. Inventory launches at Catalog
search; exact Card routes preserve their selected printing; canonical search
tiles require an explicit printing choice. The dialog registers supported
physical-copy data and optionally assigns an existing Collection without
leaving the browsing context. Optional private acquisition metadata remains
progressively disclosed and owner-private.

Collections remain DeckDeal's flexible organizational model and may represent
binders, storage boxes, themed groups, showcases, or a physical deck's
organization. A Collection named after a deck does not become a decklist or
persistent deck assignment. `Unsorted` is only the frontend view of
`collection_id = null`, never a database Collection. True Deck entities and
copy assignment remain future work. Multi-select and Collection CRUD remain
Step 4C; bulk import remains Step 4D.

Public collector profile tabs have distinct information architecture.
Overview is a bounded snapshot of identity, counts, Collection highlights,
active Listings, and public Wants; Collections is the dedicated bounded public
Collection browsing view. Neither surface changes Collection visibility or
exposes owner-private Inventory metadata.

On every USER-owned public Collection surface, marketplace intent is derived
only from the qualifying active Listing attached to the exact rendered
Inventory item. The shared presentation is `TRADE`, `FOR SALE`, or
`TRADE + SALE`; unlisted cards receive no intent. These semantic pills are
non-interactive today but are intended to become exact-Listing entry points for
future trade or purchase interactions.

Nested and detail DeckDeal screens provide a restrained in-product Back
affordance with a safe same-origin history target and deterministic fallback.
Inside a multi-step dialog, Back returns to the previous workflow step while
Close exits the workflow; neither substitutes for the other.

`/stores/[storeId]` is the canonical server-rendered public LGS route. A Store
is eligible when it is active, verified, and trade-mediation enabled; it remains
reachable with zero Listings or zero available inventory. Unknown and
ineligible Stores share the same public not-found behavior. Public Store
identity exposes only the existing safe name/slug/description/logo and
city/state-region/country fields. `PublicStoreLink` routes Store identities to
`/stores/[storeId]`; collectors continue to route only to `/users/[userId]`.

The Store profile has URL-driven Overview, Available, and Inventory views.
Available contains exact-owner active Store Listings backed by available
inventory and accepting trade or cash. Inventory follows the neutral public
Store-inventory policy and may contain cards that are not listed; its cards do
not acquire sale/trade semantics merely by being present. Both full views are
bounded and paginated, and overview previews are capped at ten.

Stores currently own Inventory, not Collections. Fixture import manifests are
not Store Collection rows and must not be presented as fake collections.
Explicit merchandising groups such as New Arrivals, Commander Singles, Staff
Picks, and trade-ins remain future domain work. Hours, managed public contacts,
maps, photos, social links, events, following, reputation, ratings, reporting,
public staff roles, Store search, and Marketplace filters also remain future
Store-profile work. Organic ranking remains future Discovery work; Backoffice
Featured placement and explicitly labeled Sponsored placement remain separate,
future concepts.

Start by inspecting the current web workspace and shared UI/design packages. Build against the existing backend contracts rather than redesigning working backend behavior.

Main frontend domains:

- catalog/search;
- inventory/collections;
- listings;
- Wishlists;
- Interests;
- Offers;
- transaction/handoff states;
- store-mediated workflow.

## Environments

Use: **Local -> Staging -> Production**.

Local:

- developer machines;
- local/Docker PostgreSQL;
- test/disposable data.

Staging:

- internet-accessible pre-production;
- separate DB, storage, auth config, secrets;
- external testers allowed;
- sandbox payment credentials;
- production-like deployment.

Production:

- real users/data;
- production DB/storage/auth;
- live payment credentials only after sandbox/E2E completion.

Production should promote the exact commit/version already tested in Staging.
