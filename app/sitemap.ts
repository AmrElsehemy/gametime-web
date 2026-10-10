import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://knowlly.games";
  return ["/", "/games", "/games/exactly-one", "/games/top-off", "/support", "/support/exactly-one", "/privacy", "/privacy/exactly-one"].map((path) => ({ url: `${origin}${path}`, changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.7 }));
}
