# DeckDeal Agent Instructions

## Scope
DeckDeal is a store-mediated TCG marketplace, initially focused on Magic: The Gathering.

## Repository
- Turborepo-style monorepo.
- Package manager: npm workspaces. Do not use pnpm or yarn unless the repository is intentionally migrated.
- Apps: `apps/api` (NestJS), `apps/web` (Next.js), `apps/admin` (Next.js), `apps/mobile` (Expo/React Native), `apps/docs` (Next.js).
- Packages include `@repo/db`, `@repo/domain`, `@repo/validation`, `@repo/ui`, `@repo/ui-tokens`, `@repo/types`, plus shared ESLint/TypeScript config.

## Mandatory rules
1. Inspect existing code before changing it.
2. Prefer minimal coherent changes over rewrites.
3. Do not invent routes, schemas, fields, enums, or business rules; verify source first.
4. `inventory_items` is the ownership truth for actual registered physical cards.
5. Formal card offers must reference registered inventory.
6. Interests are soft signals only; they do not reserve inventory or create transactions.
7. Never rewrite historical ownership to transfer a card.
8. Payment and LGS custody are separate concerns.
9. Payment is deferred until the core frontend is complete enough for an end-to-end vertical slice.
10. Before public Staging, bind actions to authenticated identity; do not rely on a path `userId` alone.
11. Never commit secrets or expose private/payment data.

## Ownership invariants
Card identity layers:
1. `canonical_cards` = gameplay identity.
2. `card_printings` = exact printed version.
3. `inventory_items` = actual ownership instance.

On successful LGS release:
- source inventory becomes `removed`;
- source collection is cleared;
- a new recipient inventory row is created as `available`;
- `transaction_items.result_inventory_item_id` links source to recipient ownership;
- physical card characteristics carry forward;
- prior-owner private metadata (collection, acquisition price, notes, inventory photos) does not.

Result inventory is ordinary current inventory and may enter later marketplace lifecycles.

## Marketplace rules
- Pending offers do not reserve inventory.
- Valid acceptance moves participating inventory to `in_trade`.
- Current non-payment acceptance is user-to-user and store-mediated.
- Custody: `awaiting_delivery_to_store` -> `in_store` -> `verified_by_store` -> `released_to_recipient`.
- Handoff: `awaiting_items` -> `partially_received` -> `all_items_received` -> `validated` -> `completed`.
- Release is only permitted after the entire handoff is validated.

## Interest rules
Supported types: `buy`, `trade`, `buy_or_trade`, `watch`.
`watch` is valid but cannot convert into a formal Offer.

Listing conversion:
- Interest creator becomes Listing Offer creator.

Wishlist conversion:
- Wishlist owner creates the Interest.
- Target card owner creates the Wishlist Offer from that Interest.
- The resulting Wishlist Offer must include the exact inventory item targeted by the Interest.

Converted Interests remain historical with their conversion link and cannot be reused.

## Current phase
Core non-payment backend lifecycles are complete and regression-tested.

Next:
- inspect and build `apps/web`;
- integrate against the existing backend;
- do not redesign backend behavior without evidence;
- implement payment after the core frontend as a full frontend/backend/provider vertical slice.

## Verification
Use npm workspace commands from the repo root.

When `@repo/validation` changes:
```powershell
npm run build --workspace=@repo/validation
npm run check-types --workspace=@repo/validation
npm run check-types --workspace=api
npm run build --workspace=api
```

For other workspaces, inspect their `package.json` and use existing scripts.

## Environments
Use: Local -> Staging -> Production.
Never share Production DB, storage, secrets, auth config, or live payment credentials with Staging.

Read `docs/PROJECT_CONTEXT.md` and `docs/DEVELOPMENT_WORKFLOW.md` before broad architectural changes.
