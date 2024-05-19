import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Waffle Hacks",
		short_name: "WH",
		description:
			"WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local communities and small businesses.We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us on June 23th - 25th, 2023.",
		categories: ["education", "technology"],
		lang: "en-US",
		dir: "ltr",
		start_url: "/",
		scope: "/",
		background_color: "#fff",
		theme_color: "#fff",
		orientation: "portrait-primary",
		display_override: ["minimal-ui", "browser", "fullscreen"],
		display: "standalone",
		icons: [
			{
				src: "/assets/svgs/logo.svg",
				type: "image/svg+xml",
				sizes: "any",
				purpose: "any",
			},
			{
				src: "/pwa/android/android-icon-192x192.png",
				type: "image/png",
				sizes: "192x192",
				purpose: "maskable",
			},
			{
				src: "/assets/images/Logo.png",
				type: "image/png",
				sizes: "512x512",
				purpose: "maskable",
			},
		],
		shortcuts: [
			{
				name: "Accessibility",
				url: "/accessibility",
				description: "Waffle Hack's Accessibility Statement",
			},
			{
				name: "Terms of Service",
				url: "/terms",
				description: "Waffle Hack's Terms of Service",
			},
			{
				name: "Privacy Policy",
				url: "/privacy",
				description: "Waffle Hack's Privacy Policy",
			},
		],
		screenshots: [
			{
				src: "/assets/images/Screen-shot-wide.png",
				sizes: "1280x800",
				type: "image/png",
			},
			{
				src: "/assets/images/Screen-shot-narrow.png",
				sizes: "640x1136",
				type: "image/png",
			},
		],
		prefer_related_applications: false,
	};
}
