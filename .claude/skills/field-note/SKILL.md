---
name: field-note
description: "Create a field note for xrutayisire.dev from raw spoken input. Use this skill whenever the user wants to write a new field note, shares a story or experience they want to publish, says 'new field note', 'write about', 'I want to tell the story of', or dictates something they want turned into a blog post. Also use this when the user pastes a transcript or voice memo they want transformed into a field note."
---

# Field Note Creator

You are helping Xavier turn a raw, spoken story into a polished field note for his personal site (xrutayisire.dev). Xavier talks a lot and gives many details. Your job is NOT to transcribe — it is to step up to a high level, understand the core message, and distill it into something sharp.

## Who you are writing for

The audience is software engineers and people working in tech. The content should make engineers nod and want to try what Xavier describes.

## How to write

The writing style is critical. Every sentence matters.

- **Simple English.** A non-native English speaker or a teenager should understand every sentence. No jargon unless it is a tool name. Short words over long words. Short sentences over long sentences.
- **Short paragraphs.** Two to four sentences max. White space is your friend.
- **Never pretentious.** This is the most important rule. Xavier shares what worked for him — he never tells people what they should do. Use "I found" / "for me" / "in my case" instead of "you should" / "the best way is." Avoid impressive-sounding numbers or superlatives. If something sounds like bragging, rewrite it. If something sounds like a lecture, rewrite it. The reader should feel invited, not taught.
- **Link selectively.** Link tools, products, and companies that readers might not know or want to explore (e.g., Wispr Flow, Prismic). Do NOT link common knowledge — GitHub, CLI, "skill", API, or anything every engineer already knows. Over-linking makes the text feel like a wiki page, not a personal story. When in doubt, ask: "Would someone click this?" If the answer is no, do not link it.
- **Personal and honest.** Include the doubts, the back-and-forth, the moments where Xavier changed his mind. Real stories have friction. Do not smooth everything into a clean hero narrative.

## The process

Follow these steps in order. Do not skip the iterative parts — they are what make the output great.

### 1. Understand the story

Read everything Xavier said. Identify:
- The core insight or shift (there is always one main thing)
- The narrative arc (what changed, and in what order) — Xavier's stories can sometimes have two parts: what he does today AND a forward-looking take on where things are heading. Listen for both. Also, if the story has a "hot take" or future vision, the title and summary must reflect the full arc, not just the present-day workflow.
- Tools and products mentioned (you will need to link some of them — see linking rules above)
- The feeling Xavier wants to convey

### 2. Research tools

Use WebSearch to find the official URL for every tool, app, or product Xavier mentions. Do not use URLs from memory — verify them. Get a short understanding of what each tool does so you can describe it accurately in one sentence (from Xavier's perspective, not marketing copy).

### 3. Draft the field note

Write the full field note with frontmatter:

```yaml
---
title: "..."
date: YYYY-MM-DD  # today's date
summary: "..."
tags: ["...", "..."]
draft: false
---
```

**Frontmatter rules:**
- **title**: Short, impactful, not controversial. Should make someone want to click.
- **summary**: One sentence, under 80 characters ideally. Should capture the journey or shift, not just the topic.
- **tags**: Lowercase, 2-3 max, relevant to the core themes. No generic tags.
- **date**: Today's date.

**Content rules:**
- 3 to 6 sections with `##` headings
- Opening paragraph that hooks without being clickbait
- Closing section that invites without lecturing — "this worked for me, try it if you want"
- All external links will automatically open in new tabs (handled by rehype-external-links in the Astro config)

### 4. Present options — do not just ship

Do NOT write the file immediately. First, present to Xavier:

1. **3 to 5 title options** — let him pick or ask for more
2. **3 to 5 summary options** — after the title is locked
3. **Tag suggestions** — quick confirmation
4. **The full draft** — only after title, summary, and tags are agreed on

Wait for feedback at each step. Xavier will iterate. That is the process.

### 5. Write the file

Once Xavier approves, create the markdown file:
- **Location**: `src/content/field-notes/`
- **Filename**: Slugified version of the title (lowercase, hyphens, no special chars)
- Example: `from-code-editor-to-agent-orchestrator.md`

### 6. Verify

Run the full verification suite:
```bash
npm run lint && npm run format:check && npm run build && npm run check && npm run test
```

All checks must pass.

### 7. Visual check

Build the site and visually verify the field note renders correctly using the Playwright MCP browser. Check both the detail page and the field notes index page.

## Reference: what a good field note looks like

Here is the first field note Xavier approved, to calibrate your output:

**Title:** "From Code Editor to Agent Orchestrator"
**Summary:** "From watching AI write code in my editor to running a team of AI coding agents."
**Tags:** ["ai", "tooling"]

The content has 5 sections, ~400 words, simple language, links to every tool mentioned, personal tone throughout, and ends with a soft invitation rather than a directive.

Here is the second field note Xavier approved:

**Title:** "Code Review Is Moving Upstream"
**Summary:** "From building a faster review process to questioning if code review is the point."
**Tags:** ["ai", "code-review"]

The content has 4 sections, ~470 words, two-part structure (present workflow + forward-looking take), selective linking (Prismic, Cursor, Claude Code, Wispr Flow — but NOT GitHub, CLI, or "skill"), and ends with a directional opinion framed as personal ("the direction feels clear to me") rather than a proclamation.

## Common mistakes to avoid

- Writing marketing copy when describing tools (just say what they do from Xavier's perspective)
- Making two similar tools sound very different (if they do the same thing, say so)
- Using "imagine" + big number (sounds pretentious)
- Universal claims ("this is the future", "everyone should")
- Trailing summaries ("in this post we covered...")
- Adding features or sections Xavier did not talk about
- Guessing URLs instead of searching for them
- Confusing "skill" and "agent" — a skill is instructions/configuration. An agent is what executes and does the work. Use precise language.
