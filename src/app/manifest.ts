import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Waffle Hacks",
		short_name: "WH",
		description:
			"WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local communities and small businesses.We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us on June 21st - 23rd, 2024.",
		categories: ["education", "technology"],
		lang: "en-US",
		dir: "ltr",
		start_url: "/",
		scope: "/",
		theme_color: "#3c2415",
		background_color: "#fddc79",
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
			{
				src: "/pwa/android/android-icon-144x144.png",
				type: "image/png",
				sizes: "144x144",
				purpose: "any",
			},
			{
				src: "/pwa/android/android-icon-192x192.png",
				type: "image/png",
				sizes: "192x192",
				purpose: "any",
			},
			{
				src: "/pwa/android/android-icon-36x36.png",
				type: "image/png",
				sizes: "36x36",
				purpose: "any",
			},
			{
				src: "/pwa/android/android-icon-48x48.png",
				type: "image/png",
				sizes: "48x48",
				purpose: "any",
			},
			{
				src: "/pwa/android/android-icon-72x72.png",
				type: "image/png",
				sizes: "72x72",
				purpose: "any",
			},
			{
				src: "/pwa/android/android-icon-96x96.png",
				type: "image/png",
				sizes: "96x96",
				purpose: "any",
			},
			{
				src: "/pwa/desktop/ms-icon-144x144.png",
				type: "image/png",
				sizes: "144x144",
				purpose: "any",
			},
			{
				src: "/pwa/desktop/ms-icon-150x150.png",
				type: "image/png",
				sizes: "150x150",
				purpose: "any",
			},
			{
				src: "/pwa/desktop/ms-icon-310x310.png",
				type: "image/png",
				sizes: "310x310",
				purpose: "any",
			},
			{
				src: "/pwa/desktop/ms-icon-70x70.png",
				type: "image/png",
				sizes: "70x70",
				purpose: "any",
			},
			{
				src: "/pwa/favicons/favicon-16x16.png",
				type: "image/png",
				sizes: "16x16",
				purpose: "any",
			},
			{
				src: "/pwa/favicons/favicon-32x32.png",
				type: "image/png",
				sizes: "32x32",
				purpose: "any",
			},
			{
				src: "/pwa/favicons/favicon-96x96.png",
				type: "image/png",
				sizes: "96x96",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-114x114.png",
				type: "image/png",
				sizes: "114x114",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-120x120.png",
				type: "image/png",
				sizes: "120x120",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-144x144.png",
				type: "image/png",
				sizes: "144x144",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-152x152.png",
				type: "image/png",
				sizes: "152x152",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-180x180.png",
				type: "image/png",
				sizes: "180x180",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-57x57.png",
				type: "image/png",
				sizes: "57x57",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-60x60.png",
				type: "image/png",
				sizes: "60x60",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-72x72.png",
				type: "image/png",
				sizes: "72x72",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-76x76.png",
				type: "image/png",
				sizes: "76x76",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon-precomposed.png",
				type: "image/png",
				sizes: "any",
				purpose: "any",
			},
			{
				src: "/pwa/ios/apple-icon.png",
				type: "image/png",
				sizes: "any",
				purpose: "any",
			},
		],
		shortcuts: [
			{
				name: "Accessibility",
				url: "/legal/accessibility",
				description: "Waffle Hack's Accessibility Statement.",
			},
			{
				name: "Terms of Service",
				url: "/legal/terms",
				description: "Waffle Hack's Terms of Service.",
			},
			{
				name: "Privacy Policy",
				url: "/legal/privacy",
				description: "Waffle Hack's Privacy Policy.",
			},
			{
				name: "Rules",
				url: "/legal/rules",
				description: "Waffle Hack's Rules.",
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
