# xrutayisire.dev

Personal branding site — blog ("Field Notes") + open-source showcase ("Lab").
Astro 6, Tailwind CSS v4, static output, dark terminal-inspired aesthetic.

## Stack

- **Framework**: Astro 6 (static output)
- **Styling**: Tailwind v4 — design tokens live in `src/styles/global.css` `@theme` block
- **Fonts**: Inter (sans) + JetBrains Mono (mono), self-hosted via `@fontsource`
- **Content**: Markdown in `src/content/field-notes/` (Astro Content Collections)
- **Lab**: GitHub repos fetched at build time via `src/lib/github-lab-loader.ts`
- **Tests**: Playwright E2E against the built site
- **Deploy**: GitHub Actions → Cloudflare Pages (PR previews + daily cron for lab)

## Commands

```sh
npm run build        # production build
npm run check        # TypeScript / Astro type checking
npm run lint         # oxlint
npm run format       # oxfmt (write)
npm run format:check # oxfmt (dry-run, CI-friendly)
npm run test         # Playwright E2E tests (requires build first)
npm run dev          # local dev server
npm run test:install # install Playwright browsers (first-time setup)
```

## Verify before finishing work

Always run this sequence — all must pass:

```sh
npm run lint && npm run format:check && npm run build && npm run check && npm run test
```

## Rules

- No `// TODO`, `any`, `eslint-disable`, or skipped checks
- No raw hex values or arbitrary Tailwind values — use `@theme` tokens only
- Semantic HTML: proper heading hierarchy, landmark regions, alt text
- Test the built site with Playwright, not unit tests of static components
- If the same issue persists after 2-3 attempts, stop and analyze root cause
- After UI changes, visually verify the result using the Playwright MCP browser
