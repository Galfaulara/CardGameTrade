# DeckDeal API Authorization Matrix

This is the authoritative authenticated route inventory through Step 4A. Routes are relative to `/api`. The API is default-protected by `DeckDealAuthorizationGuard`; only routes marked `@Public()` bypass it. Most protected domain routes require a valid Clerk session, a mapped active DeckDeal user, and `user_profiles.status = active`. The narrow exception is authenticated onboarding/account-state discovery: routes with `AllowUnmappedDeckDealUser` authenticate Clerk normally but allow a valid unmapped principal to reach the controller so onboarding can complete. Legacy actor parameters are compatibility-only and must equal `AuthenticatedPrincipal.deckdealUserId`. The new `/me/profile` routes are self-scoped and take no caller-supplied actor ID at all.

Denial conventions: missing/invalid authentication is `401`; authenticated but unmapped/inactive or a mismatched legacy actor ID is `403` unless a route explicitly allows unmapped access; private resource ownership failures use generic `404` where the service already scopes lookup by actor. Authorization runs before controller/service mutation.

## Public and authentication routes

| Method | Route | Classification | Actor / relationship | Denial and enforcement |
|---|---|---|---|---|
| GET | `/health` | SYSTEM/INTERNAL public health | None; no private data | Public marker; health only |
| GET | `/auth/me` | AUTHENTICATED_IDENTITY_READ | Valid Clerk identity; mapping may be absent/inactive so clients can discover account state | Not public. Global authorization guard authenticates and its narrow `AllowUnmappedDeckDealUser` metadata skips only active/mapped enforcement; invalid token is `401` |
| GET | `/onboarding/username-availability` | AUTHENTICATED_ONBOARDING_READ | Valid Clerk identity with no DeckDeal mapping checks username syntax/reserved/taken state | Not public. Same authenticated guard plus `AllowUnmappedDeckDealUser`; anonymous `401`, mapped users cannot use it to create replacements, final uniqueness remains DB-enforced |
| POST | `/onboarding/complete` | AUTHENTICATED_ONBOARDING_WRITE | Valid Clerk identity with no DeckDeal mapping creates exactly one ordinary DeckDeal profile bound to that verified Clerk subject | Not public. Same authenticated guard plus `AllowUnmappedDeckDealUser`; service ignores caller-supplied actor IDs, revalidates username/reserved rules, creates the profile and Clerk binding atomically, and relies on DB uniqueness as final authority |
| GET | `/catalog/games` | PUBLIC_READ | Anonymous catalog | Public marker; bounded public service model |
| GET | `/catalog/games/:gameId/sets` | PUBLIC_READ | Anonymous catalog | Public marker; ordinary validation/not-found |
| GET | `/catalog/games/:gameId/cards` | PUBLIC_READ | Anonymous legacy catalog search | Public marker |
| GET | `/catalog/games/:gameId/search` | PUBLIC_READ | Anonymous canonical search | Public marker; bounded pagination |
| GET | `/catalog/cards/:canonicalCardId` | PUBLIC_READ | Anonymous card detail | Public marker; safe public model |
| GET | `/catalog/cards/:canonicalCardId/listings` | PUBLIC_READ | Anonymous active marketplace listings | Public marker; exact-owner/available predicates in catalog service |
| GET | `/catalog/cards/:canonicalCardId/printings` | PUBLIC_READ | Anonymous printings | Public marker |
| GET | `/catalog/printings/:printingId/finishes` | PUBLIC_READ | Anonymous finishes | Public marker |
| GET | `/stores/trade-mediators` | PUBLIC_READ | Anonymous eligible mediation stores | Public marker; service eligibility predicates |
| GET | `/listings` | PUBLIC_READ | Anonymous active Listings | Method public marker; public projection in Listings service |
| GET | `/listings/:listingId` | PUBLIC_READ | Anonymous public Listing | Method public marker; Listing service public projection |
| GET | `/wishlists/public/items` | PUBLIC_READ | Anonymous public active Wishlist items only | Method public marker; visibility/status predicates in Wishlist service |

All `/discovery` routes are purpose-built anonymous public read models and are class-marked public:

| Method | Route | Classification | Public relationship / service boundary |
|---|---|---|---|
| GET | `/discovery/feed/collections` | PUBLIC_READ | Public collections of active users; bounded safe previews |
| GET | `/discovery/feed/stores` | PUBLIC_READ | Eligible public Stores; bounded safe previews |
| GET | `/discovery/feed/listings` | PUBLIC_READ | Active exact-owner Listings backed by available inventory |
| GET | `/discovery/users/:userId` | PUBLIC_READ | Publicly eligible active user profile only |
| GET | `/discovery/users/:userId/collections` | PUBLIC_READ | Public collections only |
| GET | `/discovery/users/:userId/listings` | PUBLIC_READ | Active public user Listings only |
| GET | `/discovery/users/:userId/wishlists` | PUBLIC_READ | Public active Wishlists only |
| GET | `/discovery/collections` | PUBLIC_READ | Public collection list model |
| GET | `/discovery/collections/:collectionId` | PUBLIC_READ | Public collection detail; available inventory projection |
| GET | `/discovery/stores` | PUBLIC_READ | Eligible Store list model |
| GET | `/discovery/stores/:storeId/inventory` | PUBLIC_READ | Eligible Store's safe available inventory model |
| GET | `/discovery/stores/:storeId/listings` | PUBLIC_READ | Eligible Store's active exact-owner Listings |
| GET | `/discovery/stores/:storeId` | PUBLIC_READ | Eligible public Store profile |

## Authenticated user routes

`Actor` below is the active mapped DeckDeal user from the verified principal. `:userId`/`:ownerUserId` is a legacy route claim, never authority.

| Method | Route | Classification | Resource and allowed relationship | Service authorization location |
|---|---|---|---|---|
| GET | `/me/profile` | AUTHENTICATED_USER_READ | Actor reads the authenticated DeckDeal profile shell data only | Self-scoped by guarded `AuthenticatedPrincipal.deckdealUserId`; service computes `public_profile_available` with the same public-discoverability rule as `/discovery/users/:userId` |
| PATCH | `/me/profile` | AUTHENTICATED_USER_WRITE | Actor edits own DeckDeal display name and canonical preferred LGS only | Self-scoped by guarded principal; DTO is strict, rejects actor/security fields and username edits, validates eligible Store IDs, and never mutates `user_preferences.preferred_trade_store_id` or Listing/Wishlist/Transaction store authority |
| GET | `/me/profile/store-options` | AUTHENTICATED_USER_READ | Actor searches bounded eligible public LGS identities for My Profile | Self-scoped authenticated read; service returns only active, verified, trade-mediation-enabled Store identities with bounded search results and no private Store fields |
| GET | `/inventory/users/:userId/items` | AUTHENTICATED_USER_READ | Actor's private Inventory | `owner_user_id = actor` in Inventory service |
| POST | `/inventory/users/:userId/items` | AUTHENTICATED_USER_WRITE | Create Inventory for actor | Service assigns `owner_user_id = actor`; validates collection owner |
| GET | `/inventory/users/:userId/collections` | AUTHENTICATED_USER_READ | Actor's private/all Collections | `collections.user_id = actor` |
| POST | `/inventory/users/:userId/collections` | AUTHENTICATED_USER_WRITE | Create Collection for actor | Service assigns `user_id = actor` |
| PATCH | `/inventory/users/:userId/items/:itemId/collection` | AUTHENTICATED_USER_WRITE | Actor-owned Inventory and actor-owned Collection | Owner predicates in Inventory service |
| PATCH | `/inventory/users/:userId/items/:itemId` | AUTHENTICATED_USER_WRITE | Actor-owned mutable Inventory | Owner predicate; generic `404` |
| POST | `/inventory/users/:userId/items/:itemId/photos` | AUTHENTICATED_USER_WRITE | Actor-owned mutable Inventory | Ownership before storage/database mutation; cleanup on DB failure |
| POST | `/listings/users/:userId` | AUTHENTICATED_USER_WRITE | Actor creates User Listing for actor-owned Inventory | Seller and inventory-owner predicates; service assigns seller actor |
| PATCH | `/listings/users/:userId/:listingId` | AUTHENTICATED_USER_WRITE | Actor manages own User Listing | `seller_user_id = actor`, store seller excluded |
| PATCH | `/listings/users/:userId/:listingId/status` | AUTHENTICATED_USER_WRITE | Actor changes own User Listing state | Same scoped lookup plus existing state rules |
| GET | `/preferences/users/:userId/trade-store` | AUTHENTICATED_USER_READ | Actor's private preference | `user_preferences.user_id = actor` |
| PATCH | `/preferences/users/:userId/trade-store` | AUTHENTICATED_USER_WRITE | Actor changes own preference | Actor-scoped upsert; Store ID is a preference, not authority |
| GET | `/transactions/users/:userId` | AUTHENTICATED_USER_READ | Transactions where actor is seller/counterparty | Participant predicate in Transactions service |
| GET | `/transactions/:transactionId/users/:userId` | AUTHENTICATED_USER_READ | One transaction where actor is participant | ID + participant predicate; generic `404` |

### Interests and Listing Offers

| Method | Route | Classification | Allowed relationship | Service enforcement |
|---|---|---|---|---|
| POST | `/inventory-interests/inventory/:inventoryItemId/users/:userId` | AUTHENTICATED_USER_WRITE | Actor creates own Interest; cannot interest in own item | Interest creator derived from actor; Inventory/lifecycle checks |
| GET | `/inventory-interests/users/:userId/sent` | AUTHENTICATED_USER_READ | Actor's outgoing Interests | `interested_user_id = actor` |
| GET | `/inventory-interests/users/:userId/received` | AUTHENTICATED_USER_READ | Interests targeting actor-owned Inventory | Inventory owner predicate |
| PATCH | `/inventory-interests/:interestId/users/:userId` | AUTHENTICATED_USER_WRITE | Actor updates own valid active Interest | Creator/status predicates |
| PATCH | `/inventory-interests/:interestId/users/:userId/withdraw` | AUTHENTICATED_USER_WRITE | Actor withdraws own valid Interest | Creator/status predicates |
| PATCH | `/inventory-interests/:interestId/owners/:ownerUserId/dismiss` | AUTHENTICATED_USER_WRITE | Actor owning targeted Inventory dismisses | Inventory owner predicate |
| POST | `/offers/listings/:listingId/users/:userId` | AUTHENTICATED_USER_WRITE | Actor creates own Listing Offer | Offerer assigned actor; inventory ownership/business rules |
| POST | `/offers/listings/:listingId/users/:userId/from-interest/:interestId` | AUTHENTICATED_USER_WRITE | Actor converts own eligible Interest | Creator, provenance, and lifecycle predicates |
| GET | `/offers/users/:userId/sent` | AUTHENTICATED_USER_READ | Actor's outgoing Offers | `offerer_user_id = actor` |
| GET | `/offers/listings/:listingId/users/:userId/received` | AUTHENTICATED_USER_READ | Actor owns Listing and reads incoming Offers | `listing.seller_user_id = actor` |
| PATCH | `/offers/:offerId/users/:userId/withdraw` | AUTHENTICATED_USER_WRITE | Offer creator withdraws pending Offer | Offerer/status predicates |
| PATCH | `/offers/:offerId/users/:userId/reject` | AUTHENTICATED_USER_WRITE | Listing seller rejects pending Offer | Listing seller/status predicates |
| POST | `/offers/:offerId/users/:userId/accept` | AUTHENTICATED_USER_WRITE | Listing seller accepts valid Offer | Seller authorization plus certified acceptance transaction rules |

### Wishlists and Wishlist Offers

| Method | Route | Classification | Allowed relationship | Service enforcement |
|---|---|---|---|---|
| GET | `/wishlists/users/:userId` | AUTHENTICATED_USER_READ | Actor's all/private Wishlists | `wishlists.user_id = actor` |
| GET | `/wishlists/:wishlistId/users/:userId` | AUTHENTICATED_USER_READ | Actor-owned Wishlist detail | ID + owner predicate; generic `404` |
| POST | `/wishlists/users/:userId` | AUTHENTICATED_USER_WRITE | Actor creates own Wishlist | Service assigns actor owner |
| PATCH | `/wishlists/:wishlistId/users/:userId` | AUTHENTICATED_USER_WRITE | Actor updates own Wishlist/visibility | Owner predicate |
| POST | `/wishlists/:wishlistId/users/:userId/items` | AUTHENTICATED_USER_WRITE | Actor adds item to own Wishlist | Wishlist owner predicate |
| PATCH | `/wishlists/:wishlistId/items/:itemId/users/:userId` | AUTHENTICATED_USER_WRITE | Actor updates item in own Wishlist | Wishlist/item/owner predicates |
| POST | `/wishlists/items/:wishlistItemId/offers/users/:userId` | AUTHENTICATED_USER_WRITE | Actor owning matching physical Inventory creates Offer | Offerer and exact Inventory owner/business checks |
| POST | `/wishlists/items/:wishlistItemId/offers/users/:userId/from-interest/:interestId` | AUTHENTICATED_USER_WRITE | Target Inventory owner converts eligible Interest | Direction/provenance/ownership checks |
| GET | `/wishlists/offers/users/:userId/sent` | AUTHENTICATED_USER_READ | Actor's sent Wishlist Offers | `offerer_user_id = actor` |
| GET | `/wishlists/items/:wishlistItemId/offers/users/:userId/received` | AUTHENTICATED_USER_READ | Wishlist owner reads received Offers | Wishlist owner predicate |
| PATCH | `/wishlists/offers/:offerId/users/:userId/withdraw` | AUTHENTICATED_USER_WRITE | Offer creator withdraws pending Offer | Offerer/status predicate |
| POST | `/wishlists/offers/:offerId/users/:userId/accept` | AUTHENTICATED_USER_WRITE | Wishlist owner accepts valid Offer | Recipient authorization plus certified transaction validation |
| PATCH | `/wishlists/offers/:offerId/users/:userId/reject` | AUTHENTICATED_USER_WRITE | Wishlist owner rejects pending Offer | Recipient/status predicate |

## Store staff operations

| Method | Route | Classification | Store relationship | Denial and enforcement |
|---|---|---|---|---|
| GET | `/store-handoffs/:handoffId` | STORE_STAFF_READ | Actor must have active `store_staff` at handoff's `store_id` | Guard requires active user; service resolves handoff Store then active membership; nonstaff `403`, missing `404` |
| PATCH | `/store-handoffs/:handoffId/items/:transactionItemId/receive/users/:staffUserId` | STORE_STAFF_WRITE | Actor is active staff of mediation Store | Legacy staff ID bound by guard; transactional membership and custody predicates before mutation |
| PATCH | `/store-handoffs/:handoffId/items/:transactionItemId/verify/users/:staffUserId` | STORE_STAFF_WRITE | Same | Transactional membership plus existing receive/verify lifecycle |
| PATCH | `/store-handoffs/:handoffId/items/:transactionItemId/release/users/:staffUserId` | STORE_STAFF_WRITE | Same | Transactional membership plus full-handoff validation and certified ownership transfer |

Current `store_staff` has `role` and free-form `status`, but no finer permission model is implemented. Step 3B therefore uses the narrowest proven eligibility: an `active` membership at the exact mediation Store. There are no current Store Listing mutation routes; Store Listing service capabilities must not be exposed without this same membership chain.

Active Store staff membership grants the currently implemented operational Store authority. Role-level permission refinement remains future work.

## Step 3B/3C HTTP certification

`apps/api/test/authenticated-authorization-regression.ts` constructs a real Nest `TestingModule` from `AppModule`, overrides only `ClerkAuthService` and the unused external storage provider inside that module, and sends HTTP requests through the real global guard/controllers/services/Prisma pipeline. It certifies authenticated, unmapped, disabled, owner, other-user, actual Store-staff, body/path spoof, private-read, public-read, and denied-request atomicity behavior.

`apps/api/test/onboarding-regression.ts` uses that same real harness to certify authenticated-but-unmapped onboarding, reserved-name and syntax validation, case-insensitive username uniqueness, same-subject single-profile enforcement, `/auth/me` onboarding-state transition, absence of implicit email/name linking, and dependency-safe cleanup without touching Sanza/Gaal.

`apps/api/test/non-payment-lifecycle-regression.ts` performs a repeatable two-generation non-payment card trade using User1, User2, and the actual active DeckDeal Test LGS staff membership, then removes only marker-owned test records in dependency order.

## Boundary notes

- Public Discovery/Catalog projections remain the privacy boundary. Private management services are never made public because fields overlap with public models.
- Protected service methods accept DeckDeal user IDs, not Clerk subjects. Controller actor arguments are safe because the default guard authenticates, requires active mapping, and binds every legacy actor path value before invocation; services independently scope resource queries by owner/participant/store relationship.
- Current DTOs contain business resource references (`inventoryItemId`, `storeId`, `preferredStoreId`) but no actor ownership assignment fields such as `owner_user_id` or `seller_user_id`. Services assign actor ownership from the guarded actor argument. The Step 4A `/me/profile` DTO is stricter still: it has no actor or username mutation fields and accepts only self-profile edits.
- Step 4A introduces the first `/me/...` routes for authenticated Profile work. A future cleanup may extend that self-scoped pattern to more domains and remove legacy actor parameters entirely. That remains API ergonomics debt, not a Step 3B security dependency.
