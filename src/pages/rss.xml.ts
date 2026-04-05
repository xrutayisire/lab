import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const fieldNotes = (await getCollection("field-notes"))
    .filter((post) => !post.data.draft)
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/field-notes/${post.id}/`,
    }));

  const labCaseStudies = (await getCollection("lab"))
    .filter((post) => !post.data.draft)
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/lab/${post.id}/`,
    }));

  const items = [...fieldNotes, ...labCaseStudies].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  return rss({
    title: "Xavier Rutayisire",
    description: "Field notes and open-source case studies from a staff engineer",
    site: context.site!,
    items,
  });
}
