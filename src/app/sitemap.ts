import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://wafflehacks.org",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://wafflehacks.org/accessibility",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: "https://wafflehacks.org/privacy",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: "https://wafflehacks.org/terms",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
	];
}
