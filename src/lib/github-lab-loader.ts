import type { Loader } from "astro/loaders";

interface LabEntry {
  name: string;
  description: string;
  status: "maintained" | "archived";
  lastUpdated: string;
  topics: string[];
  readme: string;
  url: string;
  stars: number;
}

async function fetchRepo(slug: string, headers: Record<string, string>): Promise<LabEntry | null> {
  try {
    const repoRes = await fetch(`https://api.github.com/repos/${slug}`, { headers });
    if (!repoRes.ok) {
      console.warn(`[lab-loader] Could not fetch repo ${slug}: ${repoRes.status}`);
      return null;
    }
    const repo = await repoRes.json();

    let readme = "";
    const readmeRes = await fetch(`https://api.github.com/repos/${slug}/readme`, {
      headers: { ...headers, Accept: "application/vnd.github.raw+json" },
    });
    if (readmeRes.ok) {
      readme = await readmeRes.text();
    }

    return {
      name: repo.name,
      description: repo.description || "",
      status: repo.archived ? "archived" : "maintained",
      lastUpdated: repo.pushed_at?.split("T")[0] || "",
      topics: repo.topics || [],
      readme,
      url: repo.html_url,
      stars: repo.stargazers_count,
    };
  } catch (err) {
    console.warn(`[lab-loader] Error fetching ${slug}:`, err);
    return null;
  }
}

export function githubLabLoader(repos: string[]): Loader {
  return {
    name: "github-lab-loader",
    async load({ store, logger }) {
      const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
      const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
        "User-Agent": "xrutayisire-lab-loader",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      } else {
        logger.warn("No GITHUB_TOKEN set — using unauthenticated requests (60 req/hr limit)");
      }

      store.clear();

      const results = await Promise.all(
        repos.map((slug) => fetchRepo(slug, headers).then((entry) => ({ slug, entry }))),
      );

      for (const { slug, entry } of results) {
        if (!entry) {
          throw new Error(`[lab-loader] Failed to load ${slug} — aborting build`);
        }

        store.set({
          id: entry.name,
          data: {
            name: entry.name,
            description: entry.description,
            status: entry.status,
            lastUpdated: entry.lastUpdated,
            topics: entry.topics,
            url: entry.url,
            stars: entry.stars,
          },
          body: entry.readme,
        });

        logger.info(`Loaded ${slug}`);
      }
    },
  };
}
