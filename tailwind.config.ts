import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/styles/**/*.{css,scss,sass,less,stylus}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					DEFAULT: "#f2994a",
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
	plugins: [],
};

export default config;
