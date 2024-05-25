"use client";
import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					50: "#fddc79",
					100: "#fddc79",
					200: "#fddc79",
					300: "#f2994a",
					400: "#f2994a",
					500: "#f2994a",
					600: "#3c2415",
					700: "#3c2415",
					800: "#3c2415",
					900: "#3c2415",
				},
				neutral: {
					50: "#eaf9ff",
					100: "#eaf9ff",
					200: "#eaf9ff",
					300: "#2d9cdb",
					400: "#2d9cdb",
					500: "#2d9cdb",
					600: "#135cbd",
					700: "#135cbd",
					800: "#135cbd",
					900: "#135cbd",
				},
				danger: {
					50: "#ed6b65",
					100: "#ed6b65",
					200: "#ed6b65",
					300: "#920813",
					400: "#920813",
					500: "#920813",
					600: "#b73f48",
					700: "#b73f48",
					800: "#b73f48",
					900: "#b73f48",
				},
				warning: {
					50: "#fddc79",
					100: "#fddc79",
					200: "#fddc79",
					300: "#f2994a",
					400: "#f2994a",
					500: "#f2994a",
					600: "#3c2415",
					700: "#3c2415",
					800: "#3c2415",
					900: "#3c2415",
				},
				success: {
					50: "#e5eaa7",
					100: "#e5eaa7",
					200: "#e5eaa7",
					300: "#3a7c13",
					400: "#3a7c13",
					500: "#3a7c13",
					600: "#5c913b",
					700: "#5c913b",
					800: "#5c913b",
					900: "#5c913b",
				},
				background: {
					body: "#E6D8B5",
					surface: "#D9C193",
					popup: "#CCAF71",
					level1: "#BF9D4F",
					level2: "#B18B2D",
					level3: "#A37A0B",
					tooltip: "#966C00",
					backdrop: "#FFFFFF99",
				},
			},
		},
	},
});

export const tailwind_theme = {
	colors: {
		primary: {
			DEFAULT: "bg-primary",
			light: "bg-primary-light",
			dark: "bg-primary-dark",
			contrastText: "text-primary-contrast",
		},
		secondary: {
			DEFAULT: "bg-secondary",
			light: "bg-secondary-light",
			dark: "bg-secondary-dark",
			contrastText: "text-secondary-contrast",
		},
		error: {
			DEFAULT: "bg-error",
			light: "bg-error-light",
			dark: "bg-error-dark",
			contrastText: "text-error-contrast",
		},
		warning: {
			DEFAULT: "bg-warning",
			light: "bg-warning-light",
			dark: "bg-warning-dark",
			contrastText: "text-warning-contrast",
		},
		success: {
			DEFAULT: "bg-success",
			light: "bg-success-light",
			dark: "bg-success-dark",
			contrastText: "text-success-contrast",
		},
		background: {
			DEFAULT: "bg-background",
			paper: "bg-paper",
		},
	},
};
