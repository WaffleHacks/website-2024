import { app } from "@/constants";
export const getApiUrl = (): string => {
	const environment = process.env.NODE_ENV;
	let apiUrl = "";

	environment === "development"
		? (apiUrl = `http://localhost:3000/`)
		: (apiUrl = `https://website-2024-nine.vercel.app/`);

	return apiUrl;
};
