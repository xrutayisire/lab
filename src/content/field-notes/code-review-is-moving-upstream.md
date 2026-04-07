---
title: "Code Review Is Moving Upstream"
date: 2026-04-08
summary: "From building a faster review process to questioning if code review is the point."
tags: ["ai", "code-review"]
draft: false
---

## Everyone already has AI reviews

At [Prismic](https://prismic.io), everyone has access to AI review tools. [Cursor](https://cursor.com/) can review a pull request. Generic analysis is one click away. When a colleague asks me for a review, they already have all of that. What they want is my actual take.

But a thorough review takes time. Not just reading the diff — digging into the code around it. Understanding what already exists, how the changes fit, what the author might have missed. Then writing each comment and placing it on the right line. I wanted to keep my perspective in the loop but stop doing all of that by hand.

## A skill that handles the rest

I built a [Claude Code](https://claude.com/product/claude-code) skill for this.

I open the pull request and talk through it using [Wispr Flow](https://wisprflow.ai/). I start from the top — what was the goal, what are the main files changed. Then I go file by file. When something catches my attention, I spend time on it. When a file looks fine, I move on. I just say what I think — questions, suggestions, things that feel off.

Then I hand those observations to the skill with the PR link. It fetches the full diff, gathers context from the codebase, runs its own analysis, and drafts review comments. Some come from what I said. Others the agent finds on its own — patterns I missed, edge cases, inconsistencies with the rest of the code. Each comment lands on the exact code line where the issue is.

I review what it proposes. If a comment is wrong, I adjust it. If the skill keeps making the same mistake, I improve the skill itself. When I'm happy, I give the go. The skill posts the review on GitHub through the CLI and submits it for me. I rarely spend more than fifteen minutes on a PR now.

## What I actually kept

The steering. The priorities. The judgment about what matters and what does not.

I never try to find the exact solution during a review — unless it is something I know for sure. I share my perspective, point in a direction, and the skill builds on that. It adds depth I would not have time for on my own. But the direction stays mine.

## Where I think this is going

Here is my take: the code is becoming the wrong thing to review.

As we delegate more coding to AI, the important decisions move earlier — to the planning phase, to the specification. If someone reviews the spec well, the developer working on it is already the first reviewer of their own code. Adding another person to review the implementation after that starts to feel like reviewing the reviewer.

I am not saying we can stop reviewing code tomorrow. Depending on the company, the team, the feature, the way people write specs — there are still parts where a human eye on the code matters. Getting from here to a world where spec review is enough takes many steps. We are not there yet.

But the direction feels clear to me. Review is moving upstream. And figuring out each step along the way is honestly one of the more interesting parts of working in software engineering right now.
