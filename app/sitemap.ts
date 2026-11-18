import type { MetadataRoute } from "next";
import { articles, services, site } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const paths=["","/about","/services","/bridal-studio","/experts","/gallery","/journal","/contact",...services.map(s=>`/services/${s.slug}`),...articles.map(a=>`/journal/${a.slug}`)];return paths.map(path=>({url:`${site.url}${path}`,lastModified:new Date("2026-06-12"),changeFrequency:path.startsWith("/journal/")?"monthly":"weekly",priority:path===""?1:path.startsWith("/services/")?.7:.8}))}
