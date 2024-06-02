import { app } from "@/constants";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${app}`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${app}/legal/accessibility`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: `${app}/legal/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: `${app}/legal/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
	];
}
