import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
	mode: "jit",
	darkMode: "class",
	content: [
		"./src/**/*.{ts,tsx,js,jsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: (_theme) => ({
				"waffle-amara": "url('/assets/images/waffles/amara.png')",
				"waffle-pranav": "url('/assets/images/waffles/pranav.png')",
				"waffle-jasmine": "url('/assets/images/waffles/jasmine.png')",
				"waffle-samihah": "url('/assets/images/waffles/samihah.png')",
				"waffle-sammi": "url('/assets/images/waffles/sammi.png')",
				"waffle-arthi": "url('/assets/images/waffles/arthi.png')",
				"waffle-tammy": "url('/assets/images/waffles/tammy.png')",
				"waffle-nisarg": "url('/assets/images/waffles/nisarg.png')",
				"waffle-ethan": "url('/assets/images/waffles/ethan.png')",
				"waffle-laaveshwaran": "url('/assets/images/waffles/laaveshwaran.png')",
				"waffle-mike": "url('/assets/images/waffles/mike.png')",
				"waffle-alex": "url('/assets/images/waffles/alex.png')",
				"waffle-jendy": "url('/assets/images/waffles/jendy.png')",
			}),
			backgroundColor: (_theme) => ({
				"waffle-color-amara": "#fddc79",
				"waffle-color-pranav": "#fddc79",
				"waffle-color-jasmine": "#fddc79",
				"waffle-color-jendy": "#fddc79",
				"waffle-color-samihah": "#9ddcf8",
				"waffle-color-sammi": "#9ddcf8",
				"waffle-color-arthi": "#9ddcf8",
				"waffle-color-tammy": "#9ddcf8",
				"waffle-color-nisarg": "#fcb59a",
				"waffle-color-ethan": "#fcb59a",
				"waffle-color-laaveshwaran": "#fcb59a",
				"waffle-color-mike": "#fcb59a",
				"waffle-color-alex": "#fcb59a",
			}),
			colors: {
				primary: {
					DEFAULT: "#bb8653",
					light: "#fddc79",
					dark: "#3c2415",
					contrastText: "#a47556",
				},
				secondary: {
					DEFAULT: "#2d9cdb",
					light: "#eaf9ff",
					dark: "#135cbd",
					contrastText: "#3c7ed6",
				},
				error: {
					DEFAULT: "#920813",
					light: "#ed6b65",
					dark: "#b73f48",
					contrastText: "#f1906b",
				},
				warning: {
					DEFAULT: "#f2994a",
					light: "#fddc79",
					dark: "#3c2415",
					contrastText: "#a47556",
				},
				success: {
					DEFAULT: "#3a7c13",
					light: "#e5eaa7",
					dark: "#5c913b",
					contrastText: "#bdd1a3",
				},
				background: {
					DEFAULT: "#ffffff",
					paper: "#fddc79",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		nextui(),
	],
} satisfies Config;
