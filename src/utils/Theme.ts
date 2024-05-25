import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#f2994a",
			light: "#fddc79",
			dark: "#3c2415",
			contrastText: "#a47556",
		},
		secondary: {
			main: "#2d9cdb",
			light: "#eaf9ff",
			dark: "#135cbd",
			contrastText: "#3c7ed6",
		},
		error: {
			main: "#920813",
			light: "#ed6b65",
			dark: "#b73f48",
			contrastText: "#f1906b",
		},
		warning: {
			main: "#f2994a",
			light: "#fddc79",
			dark: "#3c2415",
			contrastText: "#a47556",
		},
		success: {
			main: "#3a7c13",
			light: "#e5eaa7",
			dark: "#5c913b",
			contrastText: "#bdd1a3",
		},
		background: {
			default: "#ffffff",
			paper: "#fddc79",
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
