# Owner-side Share certification ? 2026-09-29

Result: PASS for implementation and automated certification. Physical iOS/Android share-sheet checks remain manual.

## Handoff and scope

Started from a clean main branch at signed commit 8d41dd3411c2234c8e3e761ef2ffddbfae9b5151, preserving c518f8217969f4962975a2d2b9c8109a3c596e52 and all earlier certified commits. Existing public Listing privacy, exact Listing routes, and public Share controls were retained. No push or deployment.

## Visibility

| Visibility | Exact public URL | Public discovery/profile enumeration | Share |
|---|---|---|---|
| Public | Accessible | Included | Enabled |
| Unlisted | Accessible | Excluded | Enabled |
| Private | Not found | Excluded | Disabled; owner confirmation can make Unlisted |

Both PostgreSQL CHECK constraints already accept all three values. No schema change or new migration.

## Owner Share matrix

| Entity | Management surface | Public target | Public behavior | Unlisted behavior | Private/ineligible behavior | Make shareable? | Implemented |
|---|---|---|---|---|---|---|---|
| Collection | Selected Collection in account Inventory | /collections/:id | Enabled | Enabled | Disabled | Confirm private ? unlisted | Yes |
| Wishlist | account Wants, selected Wishlist | /wishlists/:id | Enabled when active | Enabled when active | Disabled; archived/deleted remain unavailable | Confirm private ? unlisted when active | Yes |
| Profile | account Profile | /users/:id | Enabled when public profile exists | No Profile visibility domain | Disabled when public profile unavailable | No invented visibility toggle | Yes |
| Listing | account Listings | /listings/:id | Enabled only for server-eligible Listing | Not applicable | Disabled for ineligible rows; existing management list remains active trade Listings only | No; lifecycle remains authoritative | Yes |
| Inventory / available for trade | account Inventory card actions | Eligible Listing, otherwise shareable Collection | Safe public representation only | Collection fallback supported | Disabled with existing List for trade action where eligible | No Inventory visibility toggle | Yes |
| Store | Authorized Store workspace header | /stores/:id | Enabled when public Store resolves | Not applicable | Disabled when Store is not public | No | Yes |
| Card / exact Printing | Existing Card Details | /cards/:id; selected printing query | Existing public Share retained | Not applicable | No ownership URL | No | Preserved |

Messages, Notifications, private Offers, transactions, custody/handoffs, Card Activity, Friends management, and account settings do not acquire Share. The Store header shares the public Store identity; no workspace or handoff URL is shared. Decks remain unimplemented.

## Domain implementation

Collections use an authenticated PATCH /me/collections/:collectionId with validated visibility and an ownership predicate derived from the authenticated principal. The exact detail query admits public/unlisted Collections owned by an active user. Existing discovery/feed/profile queries remain public-only.

Wishlists are independent resources, so the previous aggregate Profile Wants destination cannot identify one list. Added /wishlists/:wishlistId and GET /discovery/wishlists/:wishlistId with a public projection: name, description, public owner identity, game, active desired cards, quantity wanted, language, finish, condition, and catalog metadata. Private notes and private marketplace relationships are not selected. Exact Wishlist reads require active Wishlist, active owner, and public/unlisted visibility. Existing Profile Wants aggregation remains public-only. The existing owner-authorized Wishlist PATCH is reused.

Profile availability remains derived from public content under existing policy; unlisted-only content does not publish a profile. Store Share verifies the existing public Store contract. Neither gains a new visibility domain.

Inventory remains private. Its authenticated response now supplies public_share_path from server queries: eligible exact Listing first, then an available item in an owned public/unlisted Collection, otherwise null. No inventory ID or account URL enters the share payload. Collection fallback shares the Collection context, not an individual owned copy. Listings use the existing shared publicListingWhere rule: active, cash/trade intent, available Inventory, eligible active seller, and verified mediation-enabled Store where applicable.

## Confirmation and mobile UX

One OwnerShareControls group reuses ShareButton and PageModal. Private state shows disabled Share and Make shareable?. Confirmation says: ?This will allow anyone with the link to view this.? The mutation requests unlisted, waits for a successful response confirming that value, updates visibility, and enables Share. It never invokes native Share automatically. Failed requests retain Private and show an error. Wishlist metadata controls refresh after this change to avoid retaining an obsolete Private form value.

Native navigator.share remains preferred; clipboard fallback announces Link copied. Disabled handlers emit no payload. Groups wrap, and Inventory action rows use automatic height.

Headless Chrome tested production control output/CSS in an isolated layout fixture at 320, 360, 375, 390, 412, and 430 px: no horizontal overflow, no button overlap, all 11 fixture buttons at least 44 ? 44 px. This is a focused layout test, not a full signed-in device session. No browser-testing framework was installed.

## PostgreSQL and authorization certification

All mutating tests used an explicit guarded URL for 127.0.0.1:5433/deckdeal_share_printing_test. The guard rejected other databases/hosts/ports and Supabase strings; current_database() was asserted. The clone was created with TEMPLATE from deckdeal_db, without source mutation.

Clone reconciliation inspected 55 validated constraints, 16 indexes, 14 non-null UUID game columns, and removed source defaults before resolving the already-physical multi-game migration. The three physically absent established migrations were applied to the clone. No migration was created.

Real API tests established:

- Private Collection/Wishlist exact reads: 404; unlisted/public reads: 200.
- Public profile list enumeration includes public fixtures and excludes private/unlisted fixtures before and after private ? unlisted.
- General Collection discovery and public Wishlist-item enumeration exclude private/unlisted fixtures.
- Signed-out mutations: 401; another user's mutations: 403/404 without visibility changes.
- Successful owner mutations return unlisted and immediately allow exact public reads.
- Inventory target priority: Listing ? shareable Collection ? null; no account URL or Inventory ID in target.
- Paused, closed, sold, traded, removed Listings: public 404; prior owner/history authorization remains functional.
- Public Listing serialized JSON excludes inventory_item_id, nested Inventory id, quantity/status, notes, and private relationships.
- Archived Wishlist and nonexistent exact Wishlist: 404.
- Unlisted-only Collection does not make its owner's Profile discoverable.

Exact-printing certification was rerun. In every row below, selected ID = submitted ID = persisted ID; canonical card, game, language, and valid finish were asserted.

| Case | Language | Finish | Selected = submitted = persisted |
|---|---|---|---|
| Balmor FDN 237 English | en | foil | `0918afe9-7e88-4001-8930-742c488d8b9c` |
| Balmor FDN 237 non-English | es | foil | `9b2a9df6-5015-4d10-a7c2-375db8ee11ed` |
| Balmor DMU 295 English showcase | en | foil | `f353ee0e-d9bc-48ef-94ec-20f9ea17ba24` |
| Balmor DMU 295 multilingual non-showcase | fr | foil | `81fbe884-888e-4cf8-b145-96401b275618` |
| Balmor DMU 336 foil-only | en | foil | `663a58d6-69c4-49e1-807f-277b9bdb9e3f` |
| Single-language card | en | foil | `0016d8a3-1398-4618-85f2-8748206f2d24` |
| Heavily reprinted Sol Ring | en | nonfoil | `0b140476-4f9b-40de-afad-a99f27e882fc` |

The Spanish FDN #237 row is explicitly non-representative: its family representative is 0918afe9-7e88-4001-8930-742c488d8b9c, while 9b2a9df6-5015-4d10-a7c2-375db8ee11ed persisted.

Two sellers using the same printing produced distinct certified URLs:

- /listings/e2ecbdb3-c354-480b-bd25-d6dc8351ce23
- /listings/ba0f009c-dda6-4b10-856d-ad2fca88359f

Production smoke separately resolved both exact Listings, then confirmed the formerly valid URL became notFound after pausing. Signed-out trade CTA still routes to sign-in.

## Test matrix

| Area | Result |
|---|---|
| New owner-share-visibility-db regression | PASS |
| New production-component handler tests: public/unlisted/private, pending/success/failure, disabled payload, native/clipboard | PASS |
| API public-listing-printing-db, authorization, Inventory, trade MVP, non-payment lifecycle, bulk inventory, collection listings, interest visibility | PASS |
| API catalog mobile QA, DFC, MDFC, Scryfall details, offer/transaction/store game filters, printing-change DB, Profile | PASS |
| Multi-game discovery and Inventory/Collection/Wishlist reads with local fixtures | PASS |
| Web share actions, Listing sharing, printing actionability, card presentation | PASS |
| Web active-game/catalog/discovery/inventory-wishlist isolation, mobile QA, hero/notification, owner Wants, profile banner | PASS |
| Production public pages: Collection, Wishlist, Profile/Wants, Listing, exact Printing, Store; private/stale notFound; trade sign-in | PASS |
| Validation typecheck/build | PASS |
| DB Prisma generate/typecheck/build | PASS |
| API typecheck/build | PASS |
| Web typecheck/lint/production build | PASS |
| git diff --check | PASS |

The older Profile test required its missing gameSlug fixture field to match the current creation contract; it now also certifies unlisted profile privacy. Discovery tests paginate within actual API limits.

## Cleanup and remaining checks

The certification API, Next server, and isolated Chrome were stopped. The disposable DB had zero clients before DROP; subsequent pg_database lookup returned only deckdeal_db. Test-only scripts, output, compiled test files, fixture copies, browser profile, and synthetic-credential Next output are removed. The pre-existing tracked tmp-step3c-audit.cjs was neither executed nor changed.

Supabase staging was not contacted; deckdeal_db was not mutated. No push/deployment. New commits must verify SSH signature status G; full hashes are reported in the final handoff.

Remaining manual checks: physical iOS Safari and Android Chrome native sheet/cancel behavior, clipboard permission/fallback behavior, and signed-in end-to-end touch/keyboard/screen-reader behavior. The earlier deferred unlisted decision is now implemented according to the corrected product requirement.

## Files changed

- `apps/api/package.json`
- `apps/api/src/discovery/discovery.controller.ts`
- `apps/api/src/discovery/discovery.service.ts`
- `apps/api/src/inventory/inventory.service.ts`
- `apps/api/src/inventory/me-collections.controller.ts`
- `apps/api/src/listings/listings.service.ts`
- `apps/api/test/owner-share-visibility-db-regression.ts`
- `apps/api/test/profile-regression.ts`
- `apps/web/app/(public)/account/inventory/collection-actions.tsx`
- `apps/web/app/(public)/account/inventory/inventory-manager.tsx`
- `apps/web/app/(public)/account/inventory/page.module.css`
- `apps/web/app/(public)/account/listings/listings-manager.tsx`
- `apps/web/app/(public)/account/profile/page.tsx`
- `apps/web/app/(public)/account/wants/wants-manager.tsx`
- `apps/web/app/(public)/store/[storeId]/page.tsx`
- `apps/web/app/(public)/wishlists/[wishlistId]/page.module.css`
- `apps/web/app/(public)/wishlists/[wishlistId]/page.tsx`
- `apps/web/app/api/me/collections/[collectionId]/route.ts`
- `apps/web/components/share-button/owner-share-controls.module.css`
- `apps/web/components/share-button/owner-share-controls.tsx`
- `apps/web/components/share-button/share-button.module.css`
- `apps/web/components/share-button/share-button.tsx`
- `apps/web/features/account/inventory-types.ts`
- `apps/web/features/account/listing-types.ts`
- `apps/web/features/marketplace/api.ts`
- `apps/web/package.json`
- `apps/web/test/owner-share-controls-regression.mjs`
- `apps/web/test/share-actions-regression.ts`
- `docs/OWNER_SHARE_CERTIFICATION.md`
- `packages/validation/src/schemas.ts`
