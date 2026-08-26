# DeckDeal Development Workflow

## Working style
Use a small-team professional workflow:
- inspect first;
- make minimal coherent changes;
- preserve existing conventions;
- verify the affected workspace;
- test meaningful negative/atomicity behavior;
- avoid unnecessary enterprise ceremony.

## Package manager
This repo uses npm workspaces.

Use:
```powershell
npm run <script> --workspace=<workspace>
```

Do not substitute pnpm/yarn unless the repo is intentionally migrated.

## Known validation/API verification
When `@repo/validation` changes, run from repo root:

```powershell
npm run build --workspace=@repo/validation
npm run check-types --workspace=@repo/validation
npm run check-types --workspace=api
npm run build --workspace=api
```

For other workspaces, inspect `package.json` and use existing scripts.

## Backend regression method
Historical backend testing used:
- PowerShell `Invoke-RestMethod`;
- direct PostgreSQL assertions through the local Docker container;
- positive, negative, duplicate, terminal-state, and atomicity checks.

Do not repeat the entire historical suite after every change. For a regression:
1. reproduce narrowly;
2. fix the smallest responsible layer;
3. build/type-check affected workspaces;
4. run focused API/DB regression;
5. broaden only when the change crosses a major domain boundary.

## Source changes
For existing files:
- inspect current content first;
- preserve structure/conventions;
- avoid unrelated refactors.

For new files:
- give each one a clear responsibility;
- avoid duplicating logic already owned elsewhere.

## Database discipline
Production schema evolution must be migration-based.

Target:
1. change Prisma schema locally;
2. generate/review migration;
3. commit it;
4. apply to Staging;
5. test;
6. apply the same migration to Production.

Do not use `prisma db push` as the Production migration strategy.

## Git/release model
Keep branching simple:
- `main`: production-capable candidate;
- short-lived feature/fix branches;
- Pull Requests;
- CI required before merge.

Recommended:
- merge to `main` -> Staging;
- Production is explicit promotion of a tested commit/tag.

No Production-only last-minute changes.

## CI target
Evolve CI toward:
- lockfile install;
- shared package type checks/builds;
- Prisma validation/generation;
- API type check/build/tests;
- web type check/build/tests;
- lint;
- focused integration tests;
- deployment/artifact checks.

Automate the highest-value regressions, not every exploratory PowerShell script.

## Environment pipeline
**Local -> Staging -> Production**

### Local
Developer environment. Disposable/test data allowed.

### Staging
Externally accessible pre-production:
- isolated PostgreSQL;
- isolated storage;
- isolated auth config/secrets;
- sandbox payments;
- production-like topology;
- external/invite testers.

### Production
Real customers/data:
- live auth;
- production storage/database;
- backups;
- monitoring;
- live payment credentials only after certification.

Never point Staging to Production data or secrets.

## Pre-Staging gate
Before outside testers:
- frontend/API deploy successfully;
- migrations work against a clean Staging DB;
- auth works;
- path `userId` is not sole authorization;
- secrets are managed outside Git;
- CORS/origins are intentional;
- storage permissions are correct;
- public endpoint abuse/rate-limit risks are considered;
- errors do not leak stack traces/secrets;
- logs and health checks exist;
- seed/test-account strategy exists.

Payment may still be deferred/sandboxed, but UI must not pretend an unpaid action is paid.

## Staging QA
Verify:
- signup/login/logout;
- responsive layouts;
- inventory/collections;
- listings;
- Wishlists;
- Interests;
- Offers;
- transaction/handoff views;
- image upload;
- refresh/navigation;
- loading/empty/error states;
- access-control failures;
- stale/concurrent state behavior.

## Payment vertical slice
After core frontend:
`Frontend -> DeckDeal API -> provider sandbox -> webhook/confirmation -> DeckDeal state -> frontend final state`

Rules:
- browser success is not authoritative;
- webhook/event handling must be idempotent;
- payment and custody stay separate;
- test failed/cancelled/expired/refunded flows;
- test commission/split semantics;
- live keys are Production-only.

## Production release
Preferred pipeline:
`Local -> feature branch -> PR -> CI -> Staging -> QA -> release approval -> Production`

Deployment:
1. identify exact tested commit/tag;
2. confirm DB backup/recovery;
3. apply reviewed migration;
4. deploy API;
5. deploy Web;
6. health/smoke checks;
7. monitor logs/errors;
8. declare success or roll back.

## Production operations
Before broad launch:
- prefer managed PostgreSQL;
- automated backups;
- tested restore procedure;
- centralized logs;
- frontend/API error monitoring;
- health monitoring;
- payment webhook monitoring when enabled;
- controlled initial rollout.

## Current next step
Backend non-payment lifecycle testing is complete.

Next:
1. inspect `apps/web` and shared UI/design packages;
2. define frontend information architecture/app shell;
3. implement against existing API;
4. prepare Staging for outside testing;
5. implement payment afterward as an end-to-end vertical slice.
