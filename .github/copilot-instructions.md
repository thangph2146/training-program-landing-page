# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js 14 project using the `/app` directory structure, bootstrapped with `create-next-app`.
- The main entry point is `app/page.tsx`. Global layout and styles are in `app/layout.tsx` and `app/globals.css`.
- UI components are organized under `components/ui/` and section-level components under `components/sections/`.
- Utility functions are in `lib/utils.ts`.

## Key Patterns & Conventions
- All React components use named exports. **Always import with curly braces** (e.g., `import { Button } from "@/components/ui/button"`).
- Component variants and styles are managed with `class-variance-authority` (see `button.tsx`).
- The project uses [Radix UI](https://www.radix-ui.com/) primitives (e.g., `Slot` from `@radix-ui/react-slot`).
- Framer Motion is used for animation in some UI components (e.g., `hero-highlight.tsx`).
- Use the `cn` utility from `lib/utils.ts` for className composition.
- Assets (SVG, PNG, etc.) are stored in `public/` and subfolders.

## Developer Workflows
- **Development:** Use `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`) to start the local server at `http://localhost:3000`.
- **Hot reload** is enabled for all files in `app/` and `components/`.
- **No custom test or build scripts** are defined beyond Next.js defaults.
- **Linting:** Project uses ESLint with config in `eslint.config.mjs`.
- **TypeScript:** Strict typing is enforced via `tsconfig.json`.

## Integration & Data Flow
- No backend or API routes are present; this is a static landing page.
- All data and content are managed via React props and static files.
- No global state management (Redux, Zustand, etc.) is used.

## Common Pitfalls
- Import errors: Always use named imports for components (never default imports).
- If you see `Element type is invalid...`, check for incorrect imports or missing exports.
- When adding new UI components, follow the structure and style patterns in `components/ui/`.

## Example Imports
```tsx
import { Button } from "@/components/ui/button"
import { HeroHighlight } from "@/components/ui/hero-highlight"
```

## References
- Main entry: `app/page.tsx`
- UI pattern: `components/ui/button.tsx`, `components/ui/hero-highlight.tsx`
- Utility: `lib/utils.ts`
- Styles: `app/globals.css`

---
For more, see the project [README.md](../README.md).
