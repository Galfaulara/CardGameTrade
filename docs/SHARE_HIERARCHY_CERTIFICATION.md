# Share hierarchy and Wishlist layout certification ? 2026-09-30

PASS for implementation and automated certification. Started from clean main at 3c95812fd3582bf9907054e73992243155c9c571. Prior certified commits were preserved. No push or deployment.

## Share hierarchy: before / after

| Surface | Before | After |
|---|---|---|
| My Listings | Share on every repeated management card | One Share trade list in the page heading; View/Cancel retained |
| Inventory: All cards | Share on individual cards | No card Share and no Share Inventory action |
| Inventory: named Collection | Collection Share plus repeated card Share | Only Collection header Share |
| Wishlist | Share/select/add controls competing in a shrinking row | One selected-Wishlist toolbar with two wrapping groups |
| Profile | Share below page heading | One Share profile in the page heading actions |
| Store workspace | One generic Share | One explicitly labeled Share store in the Store header |
| Individual public details | Share | Preserved |

## My Listings and public Trade List

The owner page shares /users/:userId?view=listings. It disables the action if the public query is unavailable or contains no eligible Listings. Repeated management cards retain their existing card/lifecycle actions and have no Share.

The public profile has a Trade list view backed by GET /listings/public/users/:userId, with existing bounded pagination and optional gameSlug filtering. It reuses publicListingWhere, getPublicListingSelect(), and mapPublicListing(). No independent eligibility or lifecycle rule was introduced.

The response contains only public Listing projections. It excludes Inventory IDs, private quantity/status, private notes, Offers, Interests, Messages, transactions, and custody. Tiles use Listing identity and navigate to /listings/:listingId; exact card/printing identity remains intact. The aggregate has no visibility toggle. Public read does not grant mutation access.

Existing profile views and their contracts remain intact. The new Trade List uses the existing public-profile availability policy. No public Inventory route exists.

## Inventory and Collections

Per-card Share is removed. Edit, Activity, and List for trade remain. All cards has no Share Inventory or optional aggregate action. Selecting a named Collection displays its existing header OwnerShareControls targeting /collections/:collectionId. Public/unlisted Share stays enabled. Private Share stays disabled with Make shareable?. No Collection mutation or visibility behavior changed.

The previous authenticated Inventory public_share_path field remains available to its domain callers; this UI no longer renders a Share action for individual items.

## Wishlist toolbar

The defect came from a full-width select and long button labels sharing a shrinking flex row beside the title. The selected title/description now occupy a dedicated header. A toolbar below contains:

- Visibility group: labeled 8rem select, Share, and Make shareable? when Private.
- Content group: + Add card (primary), Bulk add (secondary).

The groups share one wrapping toolbar. Buttons are content-sized, minimum 44px high, and use nowrap text. Desktop places the groups on one row where possible; tablet wraps them; phones stack groups, with two add-action columns or one column below 22rem. The content column can shrink safely with minmax(0, 1fr).

The duplicate Visibility field was removed from the metadata editor. Name/description editing remains below the toolbar and cannot overwrite visibility via a stale form value. Its save button retains normal height. The empty-state action is Add card. The sidebar remains navigation-only. + Create wishlist remains page-level, separate from selected-Wishlist actions.

## Wishlist visibility

Public: discoverable and Share enabled. Unlisted: exact-link accessible, absent from discovery, Share enabled. Private: public read denied, Share disabled, Make shareable? offered for active Wishlists.

The existing PageModal confirmation still says ?This will allow anyone with the link to view this.? Confirmation requests private ? unlisted through the existing owner-authorized mutation. Share enables after server success, not before; failure retains Private. No native share sheet opens automatically. No public transition occurs silently.

## Profile, Store, and detail Share

Profile uses one /users/:userId Share in AccountShell actions and preserves derived public availability. Store management uses one /stores/:storeId Share in its header and preserves public Store eligibility. No repeated-row Share was added.

Public Listing /listings/:listingId, Collection, Wishlist, Profile, Store, Card, and exact Printing Share remain. The shared ShareButton still prefers navigator.share and falls back to clipboard with Link copied. Container labels can remain visible on narrow screens.

## Browser layout and accessibility

Production component render output and production CSS/tokens were tested in an isolated Chrome fixture with authentication/network dependencies stubbed. Outbound HTTP(S) was blocked during fixture inspection. No browser test framework was installed. These checks are not a signed-in end-to-end device test.

| Surface/state | 320 | 360 | 375 | 390 | 412 | 430 | 768 / 1024 / 1440 |
|---|---|---|---|---|---|---|---|
| Wishlist Private | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Wishlist Unlisted | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Wishlist Public | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Named Collection | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| All Inventory | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| My Listings | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Profile | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Store | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

All 72 checks asserted document scrollWidth <= clientWidth, expected Share count (zero for All Inventory; one for each other container), control bounds, no overlaps, no clipped text, at least 44px control height, compact Visibility width, and no multiline Add/Bulk buttons. Screenshots at 375px and 1440px were reviewed. Controls retain native button/select semantics, accessible labels and visible focus styling. No hover is required for actions.

## Database/API/schema

Only the new read endpoint and public aggregate composition were added. Marketplace eligibility/lifecycle, Inventory privacy, Interest distinctions, exact printing persistence, and Collection/Wishlist visibility mutations remain unchanged. No schema change or migration was created.

Every database-backed test used an explicit guarded URL targeting 127.0.0.1:5433/deckdeal_share_printing_test, with current_database() asserted. The clone was created from deckdeal_db without mutating the source. Its established migration history was reconciled only after verifying 55 existing constraints, 16 indexes, game columns and source defaults, then applying the three physically missing established migrations.

Real tests verified seller isolation, game scope, bounded pagination, public DTO field exclusion, active membership, and exclusion after paused/closed/sold/traded/removed transitions. Owner-history and mutation authorization stayed intact. The seven exact-printing persistence cases passed again, including a non-representative language.

A production Next/API smoke test confirmed one Trade List Share, exact Listing hrefs, absence of fixture Inventory identity/private notes, immediate exclusion after pausing, and retained Share on the individual Listing detail.

## Test matrix

| Check | Result |
|---|---|
| Updated owner-share component handlers and placement/style contracts | PASS |
| New trade-list-sharing regression | PASS |
| Existing Web share-actions and public-listing-sharing | PASS |
| Web printing actionability, card presentation | PASS |
| Web active-game, catalog-game, discovery-game, inventory-wishlist-game | PASS |
| Web mobile QA, mobile hero/notification, owner Wants, public profile banner | PASS |
| API public-listing-printing DB (expanded for aggregate) | PASS |
| API owner-share-visibility DB (Collections/Wishlists/authorization) | PASS |
| API authenticated authorization, Inventory, lifecycle, trade MVP | PASS |
| API Collection listings, Interest visibility, Profile | PASS |
| API mobile QA and Offer/Transaction/Store game filters | PASS |
| Browser layouts: 72 state/width combinations | PASS |
| Production Trade List and stale-link smoke | PASS |
| Validation typecheck/build | PASS |
| DB Prisma generate/typecheck/build | PASS |
| API typecheck/build | PASS |
| Web typecheck/lint/production build | PASS |
| git diff --check | PASS |

## Cleanup, commits, and remaining checks

Certification API/Next processes and isolated Chrome were stopped. The disposable DB had zero clients before DROP; its absence was confirmed and deckdeal_db remained. Temporary fixtures, compiled test output, browser profile, screenshots and synthetic-credential Next build output were removed. The tracked tmp-step3c-audit.cjs was neither run nor changed.

No source database mutation, Supabase staging contact, push, or deployment. New commits are SSH-signed and verified G; hashes and final Git status are provided in the final handoff.

Physical iOS/Android native share sheets, cancellation, clipboard permissions, and signed-in screen-reader/touch behavior remain manual checks.

## Files changed

- `apps/api/src/listings/listings.controller.ts`
- `apps/api/src/listings/listings.service.ts`
- `apps/api/test/public-listing-printing-db-regression.ts`
- `apps/web/app/(public)/account/inventory/inventory-manager.tsx`
- `apps/web/app/(public)/account/listings/listings-manager.tsx`
- `apps/web/app/(public)/account/listings/page.tsx`
- `apps/web/app/(public)/account/profile/page.tsx`
- `apps/web/app/(public)/account/wants/page.module.css`
- `apps/web/app/(public)/account/wants/wants-manager.tsx`
- `apps/web/app/(public)/store/[storeId]/page.tsx`
- `apps/web/app/(public)/users/[userId]/page.module.css`
- `apps/web/app/(public)/users/[userId]/page.tsx`
- `apps/web/app/(public)/users/[userId]/public-trade-list.tsx`
- `apps/web/components/card-tile/card-tile.tsx`
- `apps/web/components/share-button/owner-share-controls.tsx`
- `apps/web/components/share-button/share-button.module.css`
- `apps/web/components/share-button/share-button.tsx`
- `apps/web/features/marketplace/api.ts`
- `apps/web/package.json`
- `apps/web/test/owner-share-controls-regression.mjs`
- `apps/web/test/trade-list-sharing-regression.ts`
- `docs/SHARE_HIERARCHY_CERTIFICATION.md`
