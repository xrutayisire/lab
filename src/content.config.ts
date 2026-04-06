import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";
const fieldNotes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/field-notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    banner: z
      .object({
        text: z.string(),
        linkText: z.string().optional(),
        linkUrl: z.string().url().optional(),
      })
      .optional(),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lab" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    github: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { "field-notes": fieldNotes, lab };
