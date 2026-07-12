import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/seo";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/program", priority: 0.8 },
  { path: "/gallery", priority: 0.8 },
  { path: "/registration", priority: 0.8 },
  { path: "/faq", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
