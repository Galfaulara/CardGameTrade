# DeckDeal Web

The public DeckDeal web experience is a Next.js App Router workspace in the
DeckDeal npm-workspaces monorepo.

Run commands from the repository root:

```powershell
npm run dev --workspace=web
npm run check-types --workspace=web
npm run lint --workspace=web
npm run build --workspace=web
```

The development server listens on [http://localhost:3000](http://localhost:3000).

Public routes live in `app/(public)` and share the public DeckDeal shell. A future
authenticated application area can use a separate route group and layout.

Shared generic primitives come from `@repo/ui`. Design values come from
`@repo/ui-tokens` and are exposed to web styles as semantic CSS custom properties.

Step 1 intentionally contains no authentication, payment, API integration, or
client-side query/state library.
