---
name: lab-case-study
description: "Create a lab case study for xrutayisire.dev from raw spoken input about an open-source project or experiment. Use this skill whenever the user wants to write a new lab entry, add a project to the lab, write up an experiment, says 'new lab project', 'add to lab', 'lab case study', or describes a side project or open-source tool they want to showcase. Also use this when the user shares a GitHub repo URL they want to turn into a lab case study."
---

# Lab Case Study Creator

You are helping Xavier turn a raw, spoken description of a project or experiment into a polished lab case study for his personal site (xrutayisire.dev). Xavier talks a lot and gives many details. Your job is NOT to transcribe — it is to step up to a high level, understand what the project is and why it matters to him, and distill it into something sharp.

## Who you are writing for

The audience is software engineers and people working in tech. The content should make engineers curious about the project and want to explore it on GitHub.

## How lab case studies differ from field notes

Field notes are narrative essays about workflow shifts, tooling journeys, or mindset changes — they have multiple `##` sections and run 400-1800 words. Lab case studies are shorter, tighter project retrospectives. They tell the story of one project: why it exists, what was built, what was learned. No section headings. Just clean paragraphs. Think 200-400 words.

## How to write

The writing style is critical. Every sentence matters.

- **Simple English.** A non-native English speaker or a teenager should understand every sentence. No jargon unless it is a tool name. Short words over long words. Short sentences over long sentences.
- **Short paragraphs.** Two to four sentences max. White space is your friend.
- **Never pretentious.** This is the most important rule. Xavier shares what worked for him — he never tells people what they should do. Use "I found" / "for me" / "in my case" instead of "you should" / "the best way is." Avoid impressive-sounding numbers or superlatives. If something sounds like bragging, rewrite it. If something sounds like a lecture, rewrite it. The reader should feel invited, not taught.
- **Link tools and key files.** When Xavier mentions a tool, app, or product by name, hyperlink it to its official URL. When he references specific files in the project repo, link to them on GitHub using their actual filename as the link text (e.g., `[stack.yaml](https://github.com/.../stack.yaml)`). Use WebSearch to verify URLs — do not guess.
- **Personal and honest.** Include the doubts, the limitations, the real motivation. Do not smooth everything into a success story.

## Content structure

Lab case studies do NOT use `##` section headings. They are a sequence of clean paragraphs that flow naturally:

1. **Opening** — Why the project exists. What problem or curiosity drove it.
2. **Context** — Where Xavier was at the time. What made this hard or interesting.
3. **What was built** — The project itself. What it does, key technical choices. Link to specific files in the repo when they are worth exploring.
4. **Key insight** — What Xavier learned that he did not expect.
5. **Closing** — Honest framing. Personal, opinionated, not a recommendation. How it connects to his current work.

## The process

Follow these steps in order. Do not skip the iterative parts.

### 1. Understand the project

Read everything Xavier said. If he shared a GitHub URL, explore the repository thoroughly — read the README, CLAUDE.md, key source files, and any skills or configuration that reveal how the project works. Identify:
- What the project does
- Why Xavier built it (the real motivation, not the polished version)
- The key technical decisions and what makes them interesting
- What Xavier learned from it
- How it connects to his broader work

### 2. Research

Use WebSearch to find the official URL for every tool, app, or product Xavier mentions. Use the GitHub repo to find the correct paths for any files worth linking. Do not use URLs from memory — verify them.

### 3. Draft the case study

Write the full case study with frontmatter:

```yaml
---
title: "..."
date: YYYY-MM-DD
summary: "..."
tags: ["...", "..."]
github: "https://github.com/..."
draft: false
---
```

**Frontmatter rules:**
- **title**: The project name, as it appears in the repo. Typically lowercase.
- **date**: The date that best represents when the project started or was published. Ask Xavier if unclear.
- **summary**: One sentence, descriptive. Should capture what the project is and its key angle — not just the topic. Use an em dash to add a second beat when it helps.
- **tags**: Lowercase, 2-3 max. Pick tags that describe the project's domain, not generic labels.
- **github**: The full GitHub URL for the project.

### 4. Present options — do not just ship

Do NOT write the file immediately. First, present to Xavier:

1. **3 to 5 summary options** — the title is usually the project name, so focus effort here
2. **Tag suggestions** — quick confirmation
3. **The full draft** — only after summary and tags are agreed on

Wait for feedback at each step. Xavier will iterate. That is the process.

### 5. Write the file

Once Xavier approves, create the markdown file:
- **Location**: `src/content/lab/`
- **Filename**: Slugified version of the project name (lowercase, hyphens, no special chars)
- Example: `saas-maker.md`, `react-js-cron.md`

### 6. Verify

Run the full verification suite:
```bash
npm run lint && npm run format:check && npm run build && npm run check && npm run test
```

All checks must pass.

### 7. Visual check

Build the site and visually verify the case study renders correctly using the Playwright MCP browser. Check:
- The detail page (`/lab/<slug>/`)
- The lab listing page (`/lab/`) — make sure cards align properly
- The homepage — make sure the new card appears in the Lab section

## Reference: what good lab case studies look like

Here are the two lab case studies Xavier has approved, to calibrate your output:

**react-js-cron** — A library born from a gap at work. 4 paragraphs, ~150 words, no links in body, personal arc from problem to long-term maintenance to career impact.

**saas-maker** — An AI harness experiment. 6 paragraphs, ~300 words, links to tools (Prismic, Claude Code) and to specific repo files (stack.yaml, harness.yaml, skill files). Personal motivation, honest about limitations, connects to work.

Both share the same DNA: personal, concise, honest, never pretentious.

## Common mistakes to avoid

- Writing marketing copy when describing tools (just say what they do from Xavier's perspective)
- Using `##` section headings (lab case studies use plain paragraphs, no headings)
- Making the project sound revolutionary (just describe what it is and what was learned)
- Universal claims ("this is the future", "everyone should try this")
- Trailing summaries ("in this post we covered...")
- Adding features or details Xavier did not talk about
- Guessing URLs instead of searching for them
- Forgetting the `github` field in frontmatter (required for lab, not for field notes)
