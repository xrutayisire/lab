---
title: "storytime"
date: 2026-06-15
summary: "A skill that turns a pull request into a readable story about what changed."
tags: ["ai", "code-review"]
github: "https://github.com/xrutayisire/storytime"
installCommand: "npx skills add xrutayisire/storytime --global"
draft: false
---

I built [storytime](https://github.com/xrutayisire/storytime) because AI is changing how pull requests feel to me. More code can appear at once, and the path through it is not always obvious from the file list. I wanted a way to see the shape of the change first.

What I often need first is not another list of files. I need the story: what happened, why it matters, what changed, and where the code is worth opening.

On GitHub, files are listed alphabetically. That is useful for a machine, but not always for a human. A change usually has a path: the problem, the idea, the important files, the risky parts, and the small details that only make sense once the big picture is clear. I wanted a skill that reads the pull request in that order.

The skill lives in [SKILL.md](https://github.com/xrutayisire/storytime/blob/main/skills/storytime/SKILL.md). It asks the agent to turn a PR, branch, or diff into a small interactive page. The page has three acts: the picture, the journey, and the review.

The part I like most is that the code is still there, but it does not lead. The story starts in plain words. Diagrams explain who talks to whom. The code appears behind small toggles when it helps. The review section does not give a verdict. It keeps a few questions open for the parts that still need my judgment.

One example is the [Excalidraw story](https://xrutayisire.github.io/storytime/examples/excalidraw-pr-11377/story.html). The PR is about battery use, but the story starts with a simple image: a canvas that keeps waking the browser even when nothing moves. That is easier to hold in my head than twelve changed files.

This is still an experiment. Some stories will be better than others, and the skill depends on the agent doing real reading instead of making a neat summary too fast. But it changed how I enter a review. I start with the shape of the change. Then I can decide where my attention is actually useful.
