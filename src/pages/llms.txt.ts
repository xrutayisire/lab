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
    "> A staff engineer's notes on AI in production",
    "",
    "Personal site of Xavier Rutayisire — staff software engineer building products with AI at Prismic.",
    "This site contains field notes (blog posts about staff engineering and AI) and a lab (open-source projects and experiments).",
    `For full site content in a single file, see [llms-full.txt](${new URL("/llms-full.txt", context.site)}).`,
    "",
    "## About",
    "",
    `- [About](${new URL("/about/", context.site)}): Background, experience, and current work`,
    "",
    "## Field Notes",
    "",
  ];

  if (fieldNotes.length > 0) {
    for (const post of fieldNotes) {
      lines.push(
        `- [${post.data.title}](${new URL(`/field-notes/${post.id}/`, context.site)}): ${post.data.summary}`,
      );
    }
  } else {
    lines.push("No field notes published yet.");
  }

  lines.push("", "## Lab", "");

  for (const project of labProjects) {
    lines.push(
      `- [${project.data.title}](${new URL(`/lab/${project.id}/`, context.site)}): ${project.data.summary}`,
    );
  }

  lines.push(
    "",
    "## Optional",
    "",
    "- [GitHub](https://github.com/xrutayisire): Source code and contributions",
    "- [LinkedIn](https://www.linkedin.com/in/xavierrutayisire/): Professional profile",
    "- [Twitter/X](https://x.com/XAVI3R__): Short-form updates",
    `- [RSS Feed](${new URL("/rss.xml", context.site)}): Subscribe to field notes`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
