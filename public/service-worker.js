if (!self.define) {
	let e,
		s = {};
	const a = (a, i) => (
		(a = new URL(a + ".js", i).href),
		s[a] ||
			new Promise((s) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = a), (e.onload = s), document.head.appendChild(e);
				} else (e = a), importScripts(a), s();
			}).then(() => {
				const e = s[a];
				if (!e) throw new Error(`Module ${a} didn’t register its module`);
				return e;
			})
	);
	self.define = (i, n) => {
		const c =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (s[c]) return;
		const r = {};
		const t = (e) => a(e, c),
			o = { module: { uri: c }, exports: r, require: t };
		s[c] = Promise.all(i.map((e) => o[e] || t(e))).then((e) => (n(...e), r));
	};
}
define(["./workbox-f1770938"], (e) => {
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: "/_next/static/RYmeLYAKTkvJcuSc5D42s/_buildManifest.js",
					revision: "26ea649255e8fe225a1ba5c15d0c87bb",
				},
				{
					url: "/_next/static/RYmeLYAKTkvJcuSc5D42s/_ssgManifest.js",
					revision: "b6652df95db52feb4daf4eca35380933",
				},
				{
					url: "/_next/static/chunks/280.b2e1ff7faaeacd4f.js",
					revision: "b2e1ff7faaeacd4f",
				},
				{
					url: "/_next/static/chunks/351-b8b165b0d9dc190f.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/485-b2e319a5b1e97af0.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/6-be4c39a61af959fa.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/655-29001b10d92a986b.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/788-cf4e0e85a47987cb.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/943-b0690711af57cf3c.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(legal)/accessibility/page-4196601fad7ba593.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(legal)/layout-46493e1dc61639d8.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(legal)/privacy/page-c930b6d7ef319e86.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(legal)/rules/page-b11d24986745c65b.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(legal)/terms/page-41313acf747ce440.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(main)/layout-f7ec005e58d5ce37.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/(main)/page-fe3cdc83866927bb.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/_not-found/page-e52fb4ea05eed016.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/error-15015ce5d811f27c.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/layout-39a5da245ad3b26b.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/app/not-found-7a598e5dc5fa12f1.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/bea350fa-b037b447460d0138.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/fd9d1056-057b649c23450ca5.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/framework-f66176bb897dc684.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/main-1bd65287c1c87643.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/main-app-347b00c1cfb0e6c0.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/pages/_app-8f0328856bbf3ecc.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/pages/_error-7df607c53a55b740.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
					revision: "79330112775102f91e1010318bae2bd3",
				},
				{
					url: "/_next/static/chunks/webpack-a82a6518fb108182.js",
					revision: "RYmeLYAKTkvJcuSc5D42s",
				},
				{
					url: "/_next/static/css/1c6fd4fc88c19719.css",
					revision: "1c6fd4fc88c19719",
				},
				{
					url: "/_next/static/css/884ac7f98dc778cb.css",
					revision: "884ac7f98dc778cb",
				},
				{
					url: "/_next/static/css/bc8831281eb208c3.css",
					revision: "bc8831281eb208c3",
				},
				{
					url: "/_next/static/css/ef46db3751d8e999.css",
					revision: "ef46db3751d8e999",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-Black.ttf",
					revision: "988787f5e9f48e6a950ac797c9cb5f28",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-Bold.ttf",
					revision: "d4599c8dc8ba3353fd83af468838f1f8",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-ExtraBold.ttf",
					revision: "fc7e42ded9e4dd88949f2d9be3919306",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-Light.ttf",
					revision: "9c62a03e973fc7c73bfb935296a2b693",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-Medium.ttf",
					revision: "428413a2d843a18cc400656f1b0c364f",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-Regular.ttf",
					revision: "686088cf66e883b2d4c2e8c9cde6d32f",
				},
				{
					url: "/assets/fonts/MPLUSRounded1c-Thin.ttf",
					revision: "ee0aa6a3dca41ea3f717cb1b3481f417",
				},
				{
					url: "/assets/fonts/OFL.txt",
					revision: "f63c7614e3d3c61afd6176cfe0e0ba89",
				},
				{
					url: "/assets/images/Screen-shot-narrow.png",
					revision: "82bcc5582de172e1621b5f621794ce29",
				},
				{
					url: "/assets/images/Screen-shot-wide.png",
					revision: "e65a7d24b73235ecd801cf1becad8e58",
				},
				{
					url: "/assets/images/landing-size.png",
					revision: "58652a5a4e3156f261960b629887a154",
				},
				{
					url: "/assets/images/logo.png",
					revision: "2735caeb11e425ae1441bef948952de6",
				},
				{
					url: "/assets/images/olympics_placeholder.png",
					revision: "c66483e3abf40ef3f422f579d975bcd3",
				},
				{
					url: "/assets/images/sponsors/balsamiq-logo.png",
					revision: "e5af483d2a7cc5e3e7a4ad816c9c1bfc",
				},
				{
					url: "/assets/images/sponsors/incogni.png",
					revision: "3d7944f9e0b50504267201fa12058c93",
				},
				{
					url: "/assets/images/sponsors/nordpass.png",
					revision: "ed2300aecbf0843700adbda2b9ddd546",
				},
				{
					url: "/assets/images/team/alex.png",
					revision: "c996fd2f53162f8c2c57f458ddc8ea15",
				},
				{
					url: "/assets/images/team/amara.png",
					revision: "452f0027c0d1d63a0a681d577169a0c6",
				},
				{
					url: "/assets/images/team/arti.png",
					revision: "746e54cc138b08e50c6c0baf3c15ec89",
				},
				{
					url: "/assets/images/team/ethan.png",
					revision: "c8c9731315a8c65a843f9902f06d4ade",
				},
				{
					url: "/assets/images/team/jasmine.png",
					revision: "7e4a3931a803f0e4f55051ca436915e6",
				},
				{
					url: "/assets/images/team/jendy.png",
					revision: "04e8647a44b318951b9291a1358dbf18",
				},
				{
					url: "/assets/images/team/laveesh.png",
					revision: "e8a9294f44b3f4dbdfe66cb5eb9ea2ec",
				},
				{
					url: "/assets/images/team/mike.png",
					revision: "8e023cbfe55633e7a20b8246ed5945c4",
				},
				{
					url: "/assets/images/team/nisarg.png",
					revision: "c6a5662cd913ca99079d0fe1a97e2ea6",
				},
				{
					url: "/assets/images/team/nona.png",
					revision: "5019da00b7c9f0bc2201126c21a7eef0",
				},
				{
					url: "/assets/images/team/pranav.png",
					revision: "1b0c08c4ec2be9ba66e08d22a1b044df",
				},
				{
					url: "/assets/images/team/samihah.png",
					revision: "34316151d5e437ee81fd3612b656b332",
				},
				{
					url: "/assets/images/team/sammi.png",
					revision: "2c22ac294be339ad6219bf599461abb6",
				},
				{
					url: "/assets/images/team/tammy.png",
					revision: "9241f0971a8bf806e85fce7f7d0f9aa9",
				},
				{
					url: "/assets/images/waffles/alex.png",
					revision: "4886ce1ae22e04686ab04fd14f3563e1",
				},
				{
					url: "/assets/images/waffles/amara.png",
					revision: "1e8d76274b8a455a2b711e15e6e1de33",
				},
				{
					url: "/assets/images/waffles/arthi.png",
					revision: "c866ba8890be9362efaba982ee7c25b2",
				},
				{
					url: "/assets/images/waffles/ethan.png",
					revision: "4ae7b05a2bf603d725fcbc3e6a425a76",
				},
				{
					url: "/assets/images/waffles/jasmine.png",
					revision: "b798b22f972459d3c29d4b85f4570761",
				},
				{
					url: "/assets/images/waffles/jendy.png",
					revision: "9f734af71e7179df316895da76a2bdda",
				},
				{
					url: "/assets/images/waffles/laavesh.png",
					revision: "ffdc364c34b3f628c3ffd795ceb51e57",
				},
				{
					url: "/assets/images/waffles/mike.png",
					revision: "72e5de23ecd838b14c5eb1b44018ce17",
				},
				{
					url: "/assets/images/waffles/nisarg.png",
					revision: "dd1ae9ddcd6a1076342a6cdb6cb26d9c",
				},
				{
					url: "/assets/images/waffles/pranav.png",
					revision: "4f6b822dd5412cddb45665a7405978b6",
				},
				{
					url: "/assets/images/waffles/samihah.png",
					revision: "638011a2303864af259b5916e0573451",
				},
				{
					url: "/assets/images/waffles/sammi.png",
					revision: "777db6a1b3b410e70cbff2d59989d7be",
				},
				{
					url: "/assets/images/waffles/tammy.png",
					revision: "30210d1fd9d2a24bf972f932030f26f0",
				},
				{
					url: "/assets/svgs/calendar/curtains.svg",
					revision: "3ff6c4695e5850ee653dd13dce74a528",
				},
				{
					url: "/assets/svgs/calendar/other.svg",
					revision: "3b159f6e61c30a633b92f8fbb12b30fa",
				},
				{
					url: "/assets/svgs/calendar/panel.svg",
					revision: "94c93626b49603375a2f0b791f430459",
				},
				{
					url: "/assets/svgs/calendar/wrench.svg",
					revision: "548efc698ee3fd2044a34c4fadecbc47",
				},
				{
					url: "/assets/svgs/dom/404.svg",
					revision: "718476ca82428ec12a516993c2f25b95",
				},
				{
					url: "/assets/svgs/header.svg",
					revision: "f4f330a7f6322621a79166b681953813",
				},
				{
					url: "/assets/svgs/landing/archer.svg",
					revision: "7794ea73d01906a76f27bdbac0613107",
				},
				{
					url: "/assets/svgs/landing/archer_pf.svg",
					revision: "8ff550bc7dde365c2a2601382c617ec4",
				},
				{
					url: "/assets/svgs/landing/biker.svg",
					revision: "0d500748371eb67a0db2de72c644b434",
				},
				{
					url: "/assets/svgs/landing/fencer.svg",
					revision: "41071e387d22084f60c81fe9d15eef60",
				},
				{
					url: "/assets/svgs/landing/fencer_pf.svg",
					revision: "fa35e31d04550724b47ee455c85ded36",
				},
				{
					url: "/assets/svgs/landing/red_pf.svg",
					revision: "0aa4cd6b688fa923a2d42fabb7195382",
				},
				{
					url: "/assets/svgs/landing/road.svg",
					revision: "c4e1f70519f05717903d115bf35aa4a6",
				},
				{
					url: "/assets/svgs/landing/tennis.svg",
					revision: "47f31e520578825e53967be6f79573e1",
				},
				{
					url: "/assets/svgs/landing/tennis_pf.svg",
					revision: "636cc9a766666df633cbdc9d734e6bf1",
				},
				{
					url: "/assets/svgs/landing/wh_logo.svg",
					revision: "6983c92455f0180636be4cac38c7eaee",
				},
				{
					url: "/assets/svgs/landing/wheel.svg",
					revision: "a1171638664cbba055892fb9bfaf663e",
				},
				{
					url: "/assets/svgs/logo.svg",
					revision: "30da42648a72602ec5f18c7e707cbe9b",
				},
				{
					url: "/assets/svgs/sponsors/NordVPN.svg",
					revision: "a615b581d8ef4953cb4cf2740eb859c7",
				},
				{
					url: "/assets/svgs/sponsors/genxyz.svg",
					revision: "712b2627efacfbe1561ef10d704be1e1",
				},
				{
					url: "/assets/svgs/sponsors/tier/bronze.svg",
					revision: "5ca3baed4fcf0edac48b0e74cea8154f",
				},
				{
					url: "/assets/svgs/sponsors/tier/gold.svg",
					revision: "23740f4b4bd0c6ad0ada9eefcbe2692d",
				},
				{
					url: "/assets/svgs/sponsors/tier/platinum.svg",
					revision: "504d8d5b3c87469c923105676885246e",
				},
				{
					url: "/assets/svgs/sponsors/tier/silver.svg",
					revision: "2771f549b00a53cc234540ba0411323e",
				},
				{
					url: "/assets/svgs/sponsors/wolfram.svg",
					revision: "e34afe44f377fd747ee12ca2979e051b",
				},
				{
					url: "/pwa/android/android-icon-144x144.png",
					revision: "3401276fb580a64c2368085d2d695dc6",
				},
				{
					url: "/pwa/android/android-icon-192x192.png",
					revision: "90efcceb2db8588951414165e00d210b",
				},
				{
					url: "/pwa/android/android-icon-36x36.png",
					revision: "fbb3f16abeac33b276b4f78b49baaf4c",
				},
				{
					url: "/pwa/android/android-icon-48x48.png",
					revision: "bbf3361c8d51a6856b96972137fbf870",
				},
				{
					url: "/pwa/android/android-icon-72x72.png",
					revision: "36331aa414a505e83626c9af01a2774c",
				},
				{
					url: "/pwa/android/android-icon-96x96.png",
					revision: "393d8024e62b83c471e17f206513eea7",
				},
				{
					url: "/pwa/browserconfig.xml",
					revision: "653d077300a12f09a69caeea7a8947f8",
				},
				{
					url: "/pwa/desktop/ms-icon-144x144.png",
					revision: "3401276fb580a64c2368085d2d695dc6",
				},
				{
					url: "/pwa/desktop/ms-icon-150x150.png",
					revision: "0ff9300a66516c1946c82f9146a0c33d",
				},
				{
					url: "/pwa/desktop/ms-icon-310x310.png",
					revision: "56b9fc660d34eb369d98b0ccc9fcbd1b",
				},
				{
					url: "/pwa/desktop/ms-icon-70x70.png",
					revision: "88e18c78db772e5c8dd97c86f44cff64",
				},
				{
					url: "/pwa/favicons/favicon-16x16.png",
					revision: "bf31ed7c073230c08c166acfd438e463",
				},
				{
					url: "/pwa/favicons/favicon-32x32.png",
					revision: "68ddc62731e2b7b942b8f150e54cd460",
				},
				{
					url: "/pwa/favicons/favicon-96x96.png",
					revision: "393d8024e62b83c471e17f206513eea7",
				},
				{
					url: "/pwa/ios/apple-icon-114x114.png",
					revision: "707ae8f98b5b09caa1e8c68671cdb543",
				},
				{
					url: "/pwa/ios/apple-icon-120x120.png",
					revision: "fb872f6023723aa34980e479e91c473e",
				},
				{
					url: "/pwa/ios/apple-icon-144x144.png",
					revision: "3401276fb580a64c2368085d2d695dc6",
				},
				{
					url: "/pwa/ios/apple-icon-152x152.png",
					revision: "8ff2a209eaf205a4fe03192c7f0387d3",
				},
				{
					url: "/pwa/ios/apple-icon-180x180.png",
					revision: "6eb07b3f0638215b6a73d0400c5ba578",
				},
				{
					url: "/pwa/ios/apple-icon-57x57.png",
					revision: "3b434ba41facd41247f80dbf76c7283c",
				},
				{
					url: "/pwa/ios/apple-icon-60x60.png",
					revision: "6fd2d403c32be5df37d507478050cf86",
				},
				{
					url: "/pwa/ios/apple-icon-72x72.png",
					revision: "36331aa414a505e83626c9af01a2774c",
				},
				{
					url: "/pwa/ios/apple-icon-76x76.png",
					revision: "f49b1f51554048c917c158cd38096c0d",
				},
				{
					url: "/pwa/ios/apple-icon-precomposed.png",
					revision: "581c4c6a403f0cb1bab3d373254559e4",
				},
				{
					url: "/pwa/ios/apple-icon.png",
					revision: "581c4c6a403f0cb1bab3d373254559e4",
				},
				{
					url: "/swe-worker-5c72df51bb1f6ee0.js",
					revision: "5a47d90db13bb1309b25bdf7b363570e",
				},
			],
			{ ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			"/",
			new e.NetworkFirst({
				cacheName: "start-url",
				plugins: [
					{
						cacheWillUpdate: async ({ response: e }) =>
							e && "opaqueredirect" === e.type
								? new Response(e.body, {
										status: 200,
										statusText: "OK",
										headers: e.headers,
									})
								: e,
					},
				],
			}),
			"GET",
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: "google-fonts-webfonts",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: "google-fonts-stylesheets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-font-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-image-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\/_next\/static.+\.js$/i,
			new e.CacheFirst({
				cacheName: "next-static-js-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-image",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: "static-audio-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:mp4|webm)$/i,
			new e.CacheFirst({
				cacheName: "static-video-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-js-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-style-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-data",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: "static-data-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ sameOrigin: e, url: { pathname: s } }) =>
				!(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
			new e.NetworkFirst({
				cacheName: "apis",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ request: e, url: { pathname: s }, sameOrigin: a }) =>
				"1" === e.headers.get("RSC") &&
				"1" === e.headers.get("Next-Router-Prefetch") &&
				a &&
				!s.startsWith("/api/"),
			new e.NetworkFirst({
				cacheName: "pages-rsc-prefetch",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ request: e, url: { pathname: s }, sameOrigin: a }) =>
				"1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
			new e.NetworkFirst({
				cacheName: "pages-rsc",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
			new e.NetworkFirst({
				cacheName: "pages",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ sameOrigin: e }) => !e,
			new e.NetworkFirst({
				cacheName: "cross-origin",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			"GET",
		),
		(self.__WB_DISABLE_DEV_LOGS = !0);
});
