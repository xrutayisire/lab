---
title: "saas-maker"
date: 2026-03-28
summary: "An opinionated SaaS scaffolder where the AI handles everything — from project setup to deployment — through a self-healing harness."
tags: ["ai", "harness"]
github: "https://github.com/xrutayisire/saas-maker"
draft: false
---

I wanted to understand how far I could push AI autonomy in a real development workflow. Not in theory — by building something end to end and seeing where things break.

At [Prismic](https://prismic.io/), the codebase is large, the team is big, and experimenting with how AI works in isolation is hard. So I started a side project. The idea was simple: build an opinionated SaaS scaffolder where [Claude Code](https://claude.ai/download) does everything. Not just write code, but set up the project, run the tests, fix what fails, deploy, and verify. The full loop, from scratch to production, in one session.

I picked a stack I liked — TanStack Start, Convex, Playwright, Cloudflare Workers — and defined it in [stack.yaml](https://github.com/xrutayisire/saas-maker/blob/main/src/stack.yaml) with the reasoning behind each choice. Then I focused on what interested me the most: [harness.yaml](https://github.com/xrutayisire/saas-maker/blob/main/src/harness.yaml). How do you structure things so the AI can work on its own without drifting?

What I ended up with is a set of skills that encode the procedures I would normally do by hand. A [/consistency-check](https://github.com/xrutayisire/saas-maker/blob/main/src/.claude/skills/consistency-check/SKILL.md) skill that runs build, lint, format, types, and tests in sequence — and retries from the start if something fails. A [/review](https://github.com/xrutayisire/saas-maker/blob/main/src/.claude/skills/review/SKILL.md) skill that checks spec coverage, code quality, and architecture. A [/preview](https://github.com/xrutayisire/saas-maker/blob/main/src/.claude/skills/preview/SKILL.md) skill that spins up isolated backends for testing. Each one loops until things pass or escalates when they don't.

The key insight for me was that the AI does not need better prompts. It needs better structure. Explicit rules, behavioral specs, codified procedures, and verification at every step. When I got that right, the output quality became consistent. When I got it wrong, no amount of prompt tweaking helped.

This project is personal and opinionated. I would not recommend anyone to use it as-is. But what I learned from it — how to structure AI work for autonomy, where the self-healing loop matters, what breaks when you remove human intervention — that is something I am already starting to apply at work.
