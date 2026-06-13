# xrutayisire.dev

Personal branding site: blog ("Field Notes") plus open-source projects and
experiments ("Lab"). Astro 6, Tailwind CSS v4, static output, dark
terminal-inspired aesthetic.

## Stack

- **Framework**: Astro 6 (static output)
- **Styling**: Tailwind v4; design tokens live in `src/styles/global.css` `@theme`
  block
- **Fonts**: Inter (sans) and JetBrains Mono (mono), self-hosted via
  `@fontsource`
- **Content**: Markdown in `src/content/field-notes/` (Astro Content
  Collections)
- **Lab**: Markdown in `src/content/lab/` (Astro Content Collections)
- **Tests**: Playwright E2E against the built site
- **Deploy**: GitHub Actions to Cloudflare Pages (PR previews)

## Agent Skills

Repo-scoped skills live in `.agents/skills/`. This is the source of truth for
both Codex and Claude. Claude reads them through the `.claude/skills` symlink,
so update `.agents/skills/<skill>/SKILL.md` when changing a shared skill.

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

## Verify Before Finishing Work

Always run this sequence; all checks must pass:

```sh
npm run lint && npm run format:check && npm run build && npm run check && npm run test
```

## Commits

Follow [Conventional Commits 2.0](https://www.conventionalcommits.org/en/v2.0.0/).
Examples: `feat: add lab card tags`, `fix: correct OG meta for articles`,
`refactor: remove GitHub lab loader`.

## Rules

- No `// TODO`, `any`, `eslint-disable`, or skipped checks
- No raw hex values or arbitrary Tailwind values; use `@theme` tokens only
- Semantic HTML: proper heading hierarchy, landmark regions, alt text
- Test the built site with Playwright, not unit tests of static components
- If the same issue persists after 2-3 attempts, stop and analyze root cause
- After UI changes, visually verify the result using the Playwright MCP browser
