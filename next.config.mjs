import * as pwa from "@ducanh2912/next-pwa";
import million from "million/compiler";

const withPwa = pwa.default({
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	dest: "public",
	fallbacks: {
		document: "src/app/offline",
	},
	workboxOptions: {
		disableDevLogs: true,
	},
});

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */

const config = {
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: true
};

export default million.next(withPwa(config), { auto: { rsc: true } });
