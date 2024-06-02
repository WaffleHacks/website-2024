import { app } from "@/constants";
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "Googlebot",
				allow: ["/"],
				disallow: ["/team", "/legal", "/api/"],
			},
			{
				userAgent: ["Applebot", "Bingbot"],
				allow: ["/"],
				disallow: ["/team", "/legal", "/api/"],
			},
		],
		sitemap: `${app}/sitemap.xml`,
	};
}
