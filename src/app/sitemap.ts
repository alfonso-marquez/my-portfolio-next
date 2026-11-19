import type { MetadataRoute } from "next";
import { photoProjects } from "@/lib/data";
import { siteUrl } from "@/lib/site";

// Served at /sitemap.xml so search engines find every page, including each photo project
export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ["", "/about", "/media", "/privacy"].map((path) => ({
        url: `${siteUrl}${path}`,
        priority: path === "" ? 1 : path === "/privacy" ? 0.2 : 0.8,
    }));
    const projects = photoProjects
        .filter((p) => !p.hidden)
        .map((p) => ({ url: `${siteUrl}/media/${p.slug}`, priority: 0.6 }));
    return [...pages, ...projects];
}
