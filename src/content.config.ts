import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";
import { githubLabLoader } from "./lib/github-lab-loader";

const fieldNotes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/field-notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  loader: githubLabLoader(["xrutayisire/react-js-cron"]),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(["maintained", "archived"]),
    lastUpdated: z.string().date(),
    topics: z.array(z.string()),
    url: z.string().url(),
    stars: z.number(),
  }),
});

export const collections = { "field-notes": fieldNotes, lab };
