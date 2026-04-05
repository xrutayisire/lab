---
title: "From Code Editor to Agent Orchestrator"
date: 2026-04-05
summary: "From watching AI write code in my editor to running a team of AI coding agents."
tags: ["ai", "tooling"]
draft: false
---

For years, my workflow was simple: open an editor, write code, repeat. When AI coding tools showed up, I added them to that same workflow. It took me a while to realize that was the problem.

## Too close to the code

I started with [VS Code](https://code.visualstudio.com/). Then I moved to [Cursor](https://www.cursor.com/) for its AI features — tab completions, inline chat, the whole thing. It felt like a superpower at first.

But I noticed something. When I sat inside a code editor, I watched every line the AI wrote. I fixed small things. I tweaked. I stayed close. And because I stayed close, I never changed how I worked. The AI was helping me, but I was still doing one thing at a time.

## Trying to step back

I gave [Claude Code](https://claude.ai/download) a try — a terminal-based coding agent. No file tree. No tabs. Just a prompt and an agent that works on its own.

At first, it felt like I was too far from the code. I went back to Cursor for a while. But something kept pulling me back to Claude Code. Being farther from the code forced me to think differently. Instead of watching one agent work, I started to ask myself: what else can I work on right now?

I opened two terminals. Then three. Then four. Each one running Claude Code on a different task. It worked, but keeping track of everything was getting messy.

## Finding the right tools

That is when I found [Superset](https://superset.sh/) and [Conductor](https://www.conductor.build/). They do the same thing — run multiple AI coding agents in parallel, each in its own isolated workspace, with everything you need to track progress and review changes.

The only real difference is the interface. [Superset](https://superset.sh/) gives you Claude Code directly in the terminal. [Conductor](https://www.conductor.build/) wraps Claude Code in a visual interface. I tried both, I recommend both. Pick whichever feels more natural to you.

## What actually changed

The tools matter less than the mindset. In a traditional IDE, the code is at the center and AI helps you write it. In this setup, it is the opposite. AI does the work and I manage it — I decide what to build next, review what is done, and keep things moving.

The code is still there. I can read it, check the diff, dig in whenever I want. But it is not the main thing on my screen anymore.

What surprised me is how this pushed me to get better at things I did not expect. When the quality of the output drops because I am farther from the code, I cannot just jump in and fix it line by line. I have to improve my setup — better prompts, better instructions, better skills. The distance forces me to build systems that make the AI work well on its own.

I now run tasks across multiple repositories at the same time. I even handle some of my management work — daily tasks, reviews, planning — from the same place.

## If you are curious

This is what worked for me. It might not work for you, and that is fine. But if you want to try, I would recommend installing [Superset](https://superset.sh/) or [Conductor](https://www.conductor.build/). Start with two agents on two different tasks and see how it feels. If you like it, add more as long as you can keep up.

That is how it started for me.
