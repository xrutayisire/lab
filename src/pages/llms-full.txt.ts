import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const fieldNotes = (await getCollection("field-notes"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const labProjects = (await getCollection("lab"))
    .filter((project) => !project.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const lines: string[] = [
    "# Xavier Rutayisire",
    "",
    "> A staff engineer's notes on AI in production — full site content",
    "",
    "Personal site of Xavier Rutayisire — staff software engineer building products with AI at Prismic.",
    "This site contains field notes (blog posts about staff engineering and AI) and a lab (open-source projects and experiments).",
    "",
    "---",
    "",
    "## About",
    "",
    "I'm Xavier. I've been building software for ten years and I'm currently a staff engineer",
    "at Prismic, where I build products, lead a team, and use AI every day to do better work.",
    "",
    "I built this site to share what I learn along the way — what works, what doesn't,",
    "and the decisions behind it. Field notes are short posts about things I've tried or built.",
    "The lab is where I share open-source projects and experiments.",
    "",
    "Everything here comes from my actual work.",
    "",
    "---",
    "",
  ];

  if (fieldNotes.length > 0) {
    lines.push("## Field Notes", "");
    for (const post of fieldNotes) {
      lines.push(
        `### ${post.data.title}`,
        "",
        `**Date**: ${post.data.date.toISOString().split("T")[0]}`,
        `**Tags**: ${post.data.tags.join(", ")}`,
        `**URL**: ${new URL(`/field-notes/${post.id}/`, context.site)}`,
        "",
        post.data.summary,
        "",
        post.body ?? "",
        "",
        "---",
        "",
      );
    }
  }

  lines.push("## Lab", "");

  for (const project of labProjects) {
    lines.push(
      `### ${project.data.title}`,
      "",
      `**Date**: ${project.data.date.toISOString().split("T")[0]}`,
      `**Tags**: ${project.data.tags.join(", ")}`,
      `**URL**: ${new URL(`/lab/${project.id}/`, context.site)}`,
      `**Repository**: ${project.data.github}`,
      "",
      project.data.summary,
      "",
    );
    if (project.body) {
      lines.push(project.body, "");
    }
    lines.push("---", "");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
