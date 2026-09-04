import type { MetadataRoute } from "next";
import { focusAreas } from "@/app/about/focus-data";
import { siteUrl } from "@/app/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/program", priority: 0.8 },
    { path: "/gallery", priority: 0.8 },
    { path: "/registration", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ];

  const aboutRoutes = focusAreas.map((area) => ({
    path: `/about/${area.slug}`,
    priority: 0.65,
  }));

  return [...staticRoutes, ...aboutRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
