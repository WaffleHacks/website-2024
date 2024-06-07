if (!self.define) {
	let e,
		s = {};
	const a = (a, i) => (
		(a = new URL(a + '.js', i).href),
		s[a] ||
			new Promise((s) => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = a), (e.onload = s), document.head.appendChild(e);
				} else (e = a), importScripts(a), s();
			}).then(() => {
				let e = s[a];
				if (!e) throw new Error(`Module ${a} didn’t register its module`);
				return e;
			})
	);
	self.define = (i, c) => {
		const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
		if (s[n]) return;
		let r = {};
		const d = (e) => a(e, n),
			t = { module: { uri: n }, exports: r, require: d };
		s[n] = Promise.all(i.map((e) => t[e] || d(e))).then((e) => (c(...e), r));
	};
}
define(['./workbox-f1770938'], function (e) {
	'use strict';
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/static/DdxcTiHN_XIcZk-Mec1vK/_buildManifest.js',
					revision: 'fb30a72c8a2e9e1316619b3b489001eb',
				},
				{
					url: '/_next/static/DdxcTiHN_XIcZk-Mec1vK/_ssgManifest.js',
					revision: 'b6652df95db52feb4daf4eca35380933',
				},
				{ url: '/_next/static/chunks/109-e5234b0176d62c79.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/150-de8fe0db4ae5b665.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/190-a49787840e62135b.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/343-d569935af3903e24.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/426-14eb2c39485061a5.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/491-13e7df96d0aed9d4.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/510-4b308fee5e142b2f.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{
					url: '/_next/static/chunks/53c13509-983893d6efbb9ba4.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{ url: '/_next/static/chunks/662-1c23078456164811.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/700-7ecf3711861afaf5.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/772-ece4893c899757ac.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/777-0316df8c5647d9d8.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{ url: '/_next/static/chunks/861-39951dcf81e1a9f2.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{
					url: '/_next/static/chunks/8e1d74a4-2ec892a9ec303fe6.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{ url: '/_next/static/chunks/974-c4571dd7affe37c2.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{
					url: '/_next/static/chunks/app/_not-found/page-e668659532c30d3b.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/error-20e9cc5908de11c6.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/layout-03096e84fb21a3c4.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/(layout)/accessibility/page-b371a240aab0998a.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/(layout)/layout-b773d5078e642141.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/(layout)/privacy/page-a2a55777b17cd02c.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/(layout)/rules/page-a2d0fa0023f43c4c.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/(layout)/terms/page-873d291a75d24b64.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/layout-c2250a24be31a513.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/legal/page-59419b306d3ae4e1.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/not-found-d0f05783d1f47162.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/page-75395601800004c9.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/team/%5Bname%5D/layout-c06def4f37f633c9.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/team/%5Bname%5D/page-27a5f43f726a9c3d.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/team/layout-3a6ee002ef63d14e.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/app/team/page-dd041ecbbf6e504f.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/fd9d1056-858637d525bb3ac1.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/framework-00a8ba1a63cfdc9e.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{ url: '/_next/static/chunks/main-2bca67155900e45d.js', revision: 'DdxcTiHN_XIcZk-Mec1vK' },
				{
					url: '/_next/static/chunks/main-app-a1653e95debfb1be.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/pages/_app-b4b287fa072538fb.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/pages/_error-19c90fb563b4be57.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{
					url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
					revision: '79330112775102f91e1010318bae2bd3',
				},
				{
					url: '/_next/static/chunks/webpack-5016e1789d4f5fd4.js',
					revision: 'DdxcTiHN_XIcZk-Mec1vK',
				},
				{ url: '/_next/static/css/6a7ae5efa25eeae0.css', revision: '6a7ae5efa25eeae0' },
				{ url: '/_next/static/css/c2c1bb15cacc237a.css', revision: 'c2c1bb15cacc237a' },
				{ url: '/_next/static/css/e6458d8bbd8421ad.css', revision: 'e6458d8bbd8421ad' },
				{
					url: '/assets/fonts/MPLUSRounded1c-Black.ttf',
					revision: '988787f5e9f48e6a950ac797c9cb5f28',
				},
				{
					url: '/assets/fonts/MPLUSRounded1c-Bold.ttf',
					revision: 'd4599c8dc8ba3353fd83af468838f1f8',
				},
				{
					url: '/assets/fonts/MPLUSRounded1c-ExtraBold.ttf',
					revision: 'fc7e42ded9e4dd88949f2d9be3919306',
				},
				{
					url: '/assets/fonts/MPLUSRounded1c-Light.ttf',
					revision: '9c62a03e973fc7c73bfb935296a2b693',
				},
				{
					url: '/assets/fonts/MPLUSRounded1c-Medium.ttf',
					revision: '428413a2d843a18cc400656f1b0c364f',
				},
				{
					url: '/assets/fonts/MPLUSRounded1c-Regular.ttf',
					revision: '686088cf66e883b2d4c2e8c9cde6d32f',
				},
				{
					url: '/assets/fonts/MPLUSRounded1c-Thin.ttf',
					revision: 'ee0aa6a3dca41ea3f717cb1b3481f417',
				},
				{ url: '/assets/fonts/OFL.txt', revision: 'f63c7614e3d3c61afd6176cfe0e0ba89' },
				{ url: '/assets/fonts/about.webp', revision: '2823d4f8de2ede4138e1259e677454f9' },
				{
					url: '/assets/images/Screen-shot-narrow.png',
					revision: '82bcc5582de172e1621b5f621794ce29',
				},
				{
					url: '/assets/images/Screen-shot-narrow.webp',
					revision: '449e6ada70b6112931cf75195c150f1a',
				},
				{
					url: '/assets/images/Screen-shot-wide.png',
					revision: 'e65a7d24b73235ecd801cf1becad8e58',
				},
				{
					url: '/assets/images/Screen-shot-wide.webp',
					revision: '36806089dc366af5d4f42d9f311bed78',
				},
				{ url: '/assets/images/about.png', revision: 'ebae7bfab2435b7514af4cc320b154c4' },
				{ url: '/assets/images/about.svg', revision: '1a5d0ab63df1c86baebaeb2747b4e287' },
				{ url: '/assets/images/about.webp', revision: '6a8f450b7192b3463fdc23ddf547e677' },
				{ url: '/assets/images/burger.svg', revision: '3b4306eddaa96ae64d62caa12a46005e' },
				{ url: '/assets/images/landing-size.png', revision: '58652a5a4e3156f261960b629887a154' },
				{ url: '/assets/images/landing-size.webp', revision: '39084a582ada864a7461b24498e269a2' },
				{ url: '/assets/images/logo.png', revision: '2735caeb11e425ae1441bef948952de6' },
				{ url: '/assets/images/logo.webp', revision: 'ed3866b918f8475b2804f4ea294b4033' },
				{ url: '/assets/images/medal.png', revision: '67c35bc446e43ce71dd87d3870877b4f' },
				{ url: '/assets/images/medal.webp', revision: '57c4f99a2a11c21e7799c2f67452d91b' },
				{
					url: '/assets/images/olympics_placeholder.png',
					revision: 'c66483e3abf40ef3f422f579d975bcd3',
				},
				{
					url: '/assets/images/olympics_placeholder.webp',
					revision: '9bf0c57ab7fc559bb7596cd0adf697ff',
				},
				{
					url: '/assets/images/sponsors/balsamiq-logo.png',
					revision: 'e5af483d2a7cc5e3e7a4ad816c9c1bfc',
				},
				{
					url: '/assets/images/sponsors/balsamiq-logo.webp',
					revision: '3858a52e22fdeb0e4b166ee0be7ded27',
				},
				{
					url: '/assets/images/sponsors/incogni.png',
					revision: '3d7944f9e0b50504267201fa12058c93',
				},
				{
					url: '/assets/images/sponsors/incogni.webp',
					revision: '71a1e16cad23449cfcf9292e9710462f',
				},
				{
					url: '/assets/images/sponsors/nordpass.png',
					revision: 'ed2300aecbf0843700adbda2b9ddd546',
				},
				{
					url: '/assets/images/sponsors/nordpass.webp',
					revision: '2ca07e2e9de635bf0082cfb65866b097',
				},
				{ url: '/assets/images/team/alex.png', revision: 'c996fd2f53162f8c2c57f458ddc8ea15' },
				{ url: '/assets/images/team/alex.webp', revision: 'b5368da0c3a6918ec3d124e8321b4eaa' },
				{ url: '/assets/images/team/amara.png', revision: '452f0027c0d1d63a0a681d577169a0c6' },
				{ url: '/assets/images/team/amara.webp', revision: 'b8549dc1566fb62e29ad4a014736be66' },
				{ url: '/assets/images/team/arthi.png', revision: '746e54cc138b08e50c6c0baf3c15ec89' },
				{ url: '/assets/images/team/arthi.webp', revision: 'bb10b7a3613151627a1efa85e67a19ff' },
				{ url: '/assets/images/team/bisman.png', revision: '1c74053a65007f374bdee8f0e090c4e4' },
				{ url: '/assets/images/team/bisman.webp', revision: '6d1fbe80a9d94002a5c70d898086eb8c' },
				{ url: '/assets/images/team/ethan.png', revision: 'c8c9731315a8c65a843f9902f06d4ade' },
				{ url: '/assets/images/team/ethan.webp', revision: '6f128f4492666a11824968a054f10139' },
				{ url: '/assets/images/team/jasmine.png', revision: '7e4a3931a803f0e4f55051ca436915e6' },
				{ url: '/assets/images/team/jasmine.webp', revision: 'a7f2895f96c75d8da94fe6fc1062eacb' },
				{ url: '/assets/images/team/jendy.png', revision: '04e8647a44b318951b9291a1358dbf18' },
				{ url: '/assets/images/team/jendy.webp', revision: '7595e9cbb772b1415d41a6a5f5e2cfa2' },
				{ url: '/assets/images/team/kevin.png', revision: 'd9f1d659f29dafcb36a2d06649ff8c54' },
				{ url: '/assets/images/team/kevin.webp', revision: '85fc2e8da4ecd1677b45380d4acebae6' },
				{
					url: '/assets/images/team/laaveshwaran.png',
					revision: 'e8a9294f44b3f4dbdfe66cb5eb9ea2ec',
				},
				{
					url: '/assets/images/team/laaveshwaran.webp',
					revision: '02df427bb5b398a2ea7175c824b5d1a3',
				},
				{ url: '/assets/images/team/mike.png', revision: '8e023cbfe55633e7a20b8246ed5945c4' },
				{ url: '/assets/images/team/mike.webp', revision: '640c62459170d84293d216fa52abd8bd' },
				{ url: '/assets/images/team/nisarg.png', revision: 'c6a5662cd913ca99079d0fe1a97e2ea6' },
				{ url: '/assets/images/team/nisarg.webp', revision: '1f5e2acec5592bf231dfda20eca2ab9c' },
				{ url: '/assets/images/team/panel/alex.png', revision: 'b183776846440f14e3f282b6016162d7' },
				{
					url: '/assets/images/team/panel/alex.webp',
					revision: '2426bc3098c5426907d6c7af3b6806b0',
				},
				{
					url: '/assets/images/team/panel/amara.png',
					revision: 'e7b6cc6d2ad8eb50ea6d4756e2183dcc',
				},
				{
					url: '/assets/images/team/panel/amara.webp',
					revision: '0000c5eacee18a3a5370426fe43a0dd3',
				},
				{
					url: '/assets/images/team/panel/arthi.png',
					revision: '0fe93415e9c38e0cde7fb9121e4cd783',
				},
				{
					url: '/assets/images/team/panel/arthi.webp',
					revision: '0c1b6e606cae03c4176aef10b35edfe9',
				},
				{
					url: '/assets/images/team/panel/bisman.png',
					revision: '050d7f2ff6845faf90a2853a9defd659',
				},
				{
					url: '/assets/images/team/panel/bisman.webp',
					revision: '9a6db2c8add6cb851cdf8cff0bb84c5a',
				},
				{
					url: '/assets/images/team/panel/ethan.png',
					revision: '23992f1dd0380d0375a4c1008ee5f9ff',
				},
				{
					url: '/assets/images/team/panel/ethan.webp',
					revision: '938436b7245d5e1ff03c0544ea2110ce',
				},
				{
					url: '/assets/images/team/panel/jasmine.png',
					revision: 'e04da7b9239ad6c0512ac1003d09bd91',
				},
				{
					url: '/assets/images/team/panel/jasmine.webp',
					revision: '390198294c27b76c2a53f8b3c9bc394e',
				},
				{
					url: '/assets/images/team/panel/jendy.png',
					revision: 'f8a0d419a03138db67f7355ccc1332a0',
				},
				{
					url: '/assets/images/team/panel/jendy.webp',
					revision: 'ba1ead8c1d8118f9507a285aee860ba0',
				},
				{
					url: '/assets/images/team/panel/kevin.png',
					revision: '8dc57ad7132a7c58aecaf9831ff88c49',
				},
				{
					url: '/assets/images/team/panel/kevin.webp',
					revision: '8df96fa5550f98604f9b557afe9cd896',
				},
				{
					url: '/assets/images/team/panel/laaveshwaran.png',
					revision: '2c8df641531ec7c2aec7a9a0a23228cf',
				},
				{
					url: '/assets/images/team/panel/laaveshwaran.webp',
					revision: 'e370070598c63b71785598931919b6e2',
				},
				{ url: '/assets/images/team/panel/mike.png', revision: '92d597e2b4d545c9a91a8365b89f8d9c' },
				{
					url: '/assets/images/team/panel/mike.webp',
					revision: 'aae455d4e92eae7929919ad316e8b29b',
				},
				{
					url: '/assets/images/team/panel/nisarg.png',
					revision: '63753b0f1ef3ea5df7bf15d171d5ec4c',
				},
				{
					url: '/assets/images/team/panel/nisarg.webp',
					revision: '4b3488cf5e4ba007822ad8a88c5c88e2',
				},
				{
					url: '/assets/images/team/panel/pranav.png',
					revision: '4affd1b12788cd77eccf8f4093125532',
				},
				{
					url: '/assets/images/team/panel/pranav.webp',
					revision: 'a79067c40db1bac10e481175c20a7ed2',
				},
				{
					url: '/assets/images/team/panel/samihah.png',
					revision: 'a0d7a24bb7b74ce9a1a6880e9bffa2ff',
				},
				{
					url: '/assets/images/team/panel/samihah.webp',
					revision: '272d85470f39b8f5f9006edcf7e2c2f8',
				},
				{
					url: '/assets/images/team/panel/sammi.png',
					revision: '29ab0b5210ea06faa302870f77dde984',
				},
				{
					url: '/assets/images/team/panel/sammi.webp',
					revision: '8b4c68179cd91d26d00e04758597de21',
				},
				{
					url: '/assets/images/team/panel/tammy.png',
					revision: 'd5c9c1541d350f0a6cddf38a4c8951da',
				},
				{
					url: '/assets/images/team/panel/tammy.webp',
					revision: '9e32308326161b31d7049787e97c2e62',
				},
				{ url: '/assets/images/team/pranav.png', revision: '1b0c08c4ec2be9ba66e08d22a1b044df' },
				{ url: '/assets/images/team/pranav.webp', revision: '6b2f4821f0b56b016c496cc37693b1c1' },
				{ url: '/assets/images/team/samihah.png', revision: '34316151d5e437ee81fd3612b656b332' },
				{ url: '/assets/images/team/samihah.webp', revision: 'e15aab6641acddbd45b4785cc98840aa' },
				{ url: '/assets/images/team/sammi.png', revision: '2c22ac294be339ad6219bf599461abb6' },
				{ url: '/assets/images/team/sammi.webp', revision: '229c733faf607db2fb2c07ff6a1d1d15' },
				{ url: '/assets/images/team/tammy.png', revision: '9241f0971a8bf806e85fce7f7d0f9aa9' },
				{ url: '/assets/images/team/tammy.webp', revision: '1f597c6e854e47c96ad53ad76b27d146' },
				{ url: '/assets/images/tracks/ai.png', revision: 'ad6ae046a4870ff128d48ae6a532ad3b' },
				{ url: '/assets/images/tracks/ai.webp', revision: 'fd74c3507626b868f3ce0ac604f25969' },
				{
					url: '/assets/images/tracks/community.png',
					revision: '763b1a92dbb59dd84d0c88e3ab1db0ec',
				},
				{
					url: '/assets/images/tracks/community.webp',
					revision: '16655a51c1b33b481898ef0152c7b283',
				},
				{ url: '/assets/images/tracks/data.png', revision: '627a2effac5217adab3f54bba46e2619' },
				{ url: '/assets/images/tracks/data.webp', revision: 'b79b43f23196f60535ddbde5aff7cdce' },
				{ url: '/assets/images/tracks/dei.png', revision: '71914329e21d05ac85b3a353dc51d000' },
				{ url: '/assets/images/tracks/dei.webp', revision: '6c0aca7d3d89144b11d433388830ad6b' },
				{ url: '/assets/images/tracks/first.png', revision: '31a34b3596d3b1b1399852dbc743da76' },
				{ url: '/assets/images/tracks/first.webp', revision: 'c93d542a0501c53d56d453bc00079262' },
				{ url: '/assets/images/tracks/food.png', revision: '34957b05d2d5b1ca9f8f56a209c381df' },
				{ url: '/assets/images/tracks/food.webp', revision: '85031f99e9ca6e6e9f874754fc963c66' },
				{ url: '/assets/images/tracks/tbd.svg', revision: '1558377561d6ee4b459fa367fb5d284d' },
				{ url: '/assets/images/tracks/uiux.png', revision: 'c852df7c826471438224d2e4289df244' },
				{ url: '/assets/images/tracks/uiux.webp', revision: '9f2f874f98e3f3208bf7124f7d041240' },
				{ url: '/assets/images/tracks/wellness.png', revision: '95d5b7447a3377dfbcbb8fe3e30f3460' },
				{
					url: '/assets/images/tracks/wellness.webp',
					revision: '4d22b61ea23c0247641d55f9d339782e',
				},
				{ url: '/assets/images/tracks/wolfram.png', revision: '2e045d84b0c714c695613549eb8cfb1a' },
				{ url: '/assets/images/tracks/wolfram.webp', revision: 'ee50f8b1d7fe01ad4294738f11e4f3d9' },
				{ url: '/assets/images/waffles/alex.png', revision: '4886ce1ae22e04686ab04fd14f3563e1' },
				{ url: '/assets/images/waffles/alex.webp', revision: '83019dab2e727a88544b2e171ec4a8ff' },
				{ url: '/assets/images/waffles/amara.png', revision: '1e8d76274b8a455a2b711e15e6e1de33' },
				{ url: '/assets/images/waffles/amara.webp', revision: 'b20cd03b8deeab2ef6eceb86d1cad284' },
				{ url: '/assets/images/waffles/arthi.png', revision: 'c866ba8890be9362efaba982ee7c25b2' },
				{ url: '/assets/images/waffles/arthi.webp', revision: '4cde688682637caf27002f662b3f6ef6' },
				{ url: '/assets/images/waffles/bisman.png', revision: '194952a08a8c8a708b28bc3e5f35eaf5' },
				{ url: '/assets/images/waffles/bisman.webp', revision: '4a901558af0e91241a471eeb8a766659' },
				{ url: '/assets/images/waffles/ethan.png', revision: '4ae7b05a2bf603d725fcbc3e6a425a76' },
				{ url: '/assets/images/waffles/ethan.webp', revision: '5af69165ff853e08dd02721c1c322b20' },
				{ url: '/assets/images/waffles/jasmine.png', revision: 'b798b22f972459d3c29d4b85f4570761' },
				{
					url: '/assets/images/waffles/jasmine.webp',
					revision: '1c3bf4d7920c3488d527db8d89ef24f0',
				},
				{ url: '/assets/images/waffles/jendy.png', revision: '9f734af71e7179df316895da76a2bdda' },
				{ url: '/assets/images/waffles/jendy.webp', revision: '7ebb883b86f93258767807a90a20dc72' },
				{ url: '/assets/images/waffles/kevin.png', revision: '2d259c39ed93e12f3f5366e6b2b769c5' },
				{ url: '/assets/images/waffles/kevin.webp', revision: '86b3d07058b83364db3daa70ff824204' },
				{
					url: '/assets/images/waffles/laaveshwaran.png',
					revision: 'ffdc364c34b3f628c3ffd795ceb51e57',
				},
				{
					url: '/assets/images/waffles/laaveshwaran.webp',
					revision: '506dca3795904a7e159d6245fde6d9ad',
				},
				{ url: '/assets/images/waffles/mike.png', revision: '72e5de23ecd838b14c5eb1b44018ce17' },
				{ url: '/assets/images/waffles/mike.webp', revision: '903da8ccad029a9eb995e408bb85d834' },
				{ url: '/assets/images/waffles/nisarg.png', revision: 'dd1ae9ddcd6a1076342a6cdb6cb26d9c' },
				{ url: '/assets/images/waffles/nisarg.webp', revision: 'aae61222dc046728a4ed23977373de42' },
				{ url: '/assets/images/waffles/pranav.png', revision: '4f6b822dd5412cddb45665a7405978b6' },
				{ url: '/assets/images/waffles/pranav.webp', revision: '97279308e662b72322447abd2e462b04' },
				{ url: '/assets/images/waffles/samihah.png', revision: '638011a2303864af259b5916e0573451' },
				{
					url: '/assets/images/waffles/samihah.webp',
					revision: '0ee71a1d61100be69993eaafe848890c',
				},
				{ url: '/assets/images/waffles/sammi.png', revision: '777db6a1b3b410e70cbff2d59989d7be' },
				{ url: '/assets/images/waffles/sammi.webp', revision: '8172f184e16858ad624c663937852c97' },
				{ url: '/assets/images/waffles/tammy.png', revision: '30210d1fd9d2a24bf972f932030f26f0' },
				{ url: '/assets/images/waffles/tammy.webp', revision: '6eee2049c8bc9310dee2308e4da221ae' },
				{ url: '/assets/svgs/about.svg', revision: '0250150a82253db5382100ce3c8a1a05' },
				{ url: '/assets/svgs/calendar/curtains.svg', revision: '3ff6c4695e5850ee653dd13dce74a528' },
				{ url: '/assets/svgs/calendar/other.svg', revision: '3b159f6e61c30a633b92f8fbb12b30fa' },
				{ url: '/assets/svgs/calendar/panel.svg', revision: '94c93626b49603375a2f0b791f430459' },
				{ url: '/assets/svgs/calendar/wrench.svg', revision: '548efc698ee3fd2044a34c4fadecbc47' },
				{ url: '/assets/svgs/dom/404.svg', revision: '8c0e1821f8332b01b41aea18b485da27' },
				{ url: '/assets/svgs/header.png', revision: '6de8623467542b846b8df12cc83832a9' },
				{ url: '/assets/svgs/header.svg', revision: 'f4f330a7f6322621a79166b681953813' },
				{ url: '/assets/svgs/header.webp', revision: '2296798cdc34cce6a76603fb11ca9626' },
				{ url: '/assets/svgs/landing/archer.svg', revision: '7794ea73d01906a76f27bdbac0613107' },
				{
					url: '/assets/svgs/landing/archer_arrow.svg',
					revision: 'd3cba62eeeacc7b288e158f808eb0305',
				},
				{
					url: '/assets/svgs/landing/archer_bow.svg',
					revision: '3fadeb9e65a2a5e9ef5bccc51b039b7a',
				},
				{
					url: '/assets/svgs/landing/archer_lower.svg',
					revision: 'e8aa1c941dbb2cd482a393ab58499c17',
				},
				{ url: '/assets/svgs/landing/archer_pf.svg', revision: '8ff550bc7dde365c2a2601382c617ec4' },
				{
					url: '/assets/svgs/landing/archer_upper.svg',
					revision: 'aff3cd6e8fc5442e50adff84727c03dc',
				},
				{ url: '/assets/svgs/landing/biker.svg', revision: '0d500748371eb67a0db2de72c644b434' },
				{ url: '/assets/svgs/landing/fencer.svg', revision: '41071e387d22084f60c81fe9d15eef60' },
				{
					url: '/assets/svgs/landing/fencer_body.svg',
					revision: '6c980eac67eb6b4df8fda83c92eb016b',
				},
				{ url: '/assets/svgs/landing/fencer_pf.svg', revision: '9eb6b7d336cc6d9b7aeab4e4b3baa290' },
				{
					url: '/assets/svgs/landing/fencer_sword.svg',
					revision: 'ed23df216cfaed3ad04e53491e0fdbf3',
				},
				{ url: '/assets/svgs/landing/red_pf.svg', revision: '0aa4cd6b688fa923a2d42fabb7195382' },
				{ url: '/assets/svgs/landing/road.svg', revision: '564ce8fb0f0faf51c09b2008e2af334c' },
				{
					url: '/assets/svgs/landing/scav/bike_flag.svg',
					revision: '4ca80b623a1849639c3c5943163ba6be',
				},
				{ url: '/assets/svgs/landing/scav/blob.svg', revision: '0317e4281f6fd75eecb8ab88e4fdb4c5' },
				{
					url: '/assets/svgs/landing/scav/carrakatu.svg',
					revision: '93d30db61ffe275dc9e677dc310ef555',
				},
				{
					url: '/assets/svgs/landing/scav/stand_bar.svg',
					revision: '3ce5a2961301ed99c7f916c072155beb',
				},
				{
					url: '/assets/svgs/landing/scav/stand_bkg.svg',
					revision: 'a2dc6c86bda18fe7266baa446c66a295',
				},
				{
					url: '/assets/svgs/landing/scav/stand_sign.svg',
					revision: 'b12f3e3b02ef47e5da203d496f196c8b',
				},
				{
					url: '/assets/svgs/landing/scav/wh_cut.svg',
					revision: '68dea9bf5393d538ed4b9c417e9e6666',
				},
				{
					url: '/assets/svgs/landing/scav/wh_cut_shadow.svg',
					revision: 'f3453c4098635b543334744e43df80f9',
				},
				{
					url: '/assets/svgs/landing/scav/wh_inner.svg',
					revision: 'bde433051c1f8d720ef0965a1fc02cc5',
				},
				{ url: '/assets/svgs/landing/tennis.svg', revision: '47f31e520578825e53967be6f79573e1' },
				{ url: '/assets/svgs/landing/tennis_pf.svg', revision: '63c4f50bcd6ab2ebc29ae05dcfe18422' },
				{ url: '/assets/svgs/landing/wh_logo.svg', revision: '6983c92455f0180636be4cac38c7eaee' },
				{ url: '/assets/svgs/landing/wheel.svg', revision: '09988ec588a393199db9169de50c3d97' },
				{ url: '/assets/svgs/line-shadow.svg', revision: 'ae35721bb479a947b40b642c07d3e415' },
				{ url: '/assets/svgs/line.svg', revision: '308153f8d15c7b229364574229f806c5' },
				{ url: '/assets/svgs/logo-small.svg', revision: '63447b5189541be3a156a866710b4452' },
				{ url: '/assets/svgs/logo-year.svg', revision: '8b9f30e606bccf0bcee9e7bcd2cbafb5' },
				{ url: '/assets/svgs/logo.svg', revision: '6e887c86521dbfea2b5efcdb53116071' },
				{ url: '/assets/svgs/nav/apple1.svg', revision: '40d6fc81ab14ac7c5a4e12d9ab8f5ed7' },
				{ url: '/assets/svgs/nav/apple2.svg', revision: '3f149f86332900195419bcaa8dd8221b' },
				{ url: '/assets/svgs/nav/apple3.svg', revision: 'd7b3f8c142fedf42c5d635d5edf412f1' },
				{ url: '/assets/svgs/nav/applesit.svg', revision: 'ecba79c54e268f5327fb83f46a91f622' },
				{ url: '/assets/svgs/sponsors/NordVPN.svg', revision: 'a615b581d8ef4953cb4cf2740eb859c7' },
				{ url: '/assets/svgs/sponsors/genxyz.svg', revision: '3b9c0fecb4bcd61c9d77cc5f2977f5e0' },
				{
					url: '/assets/svgs/sponsors/tier/bronze.svg',
					revision: '5ca3baed4fcf0edac48b0e74cea8154f',
				},
				{
					url: '/assets/svgs/sponsors/tier/gold.svg',
					revision: '23740f4b4bd0c6ad0ada9eefcbe2692d',
				},
				{
					url: '/assets/svgs/sponsors/tier/platinum.svg',
					revision: '504d8d5b3c87469c923105676885246e',
				},
				{
					url: '/assets/svgs/sponsors/tier/silver.svg',
					revision: '2771f549b00a53cc234540ba0411323e',
				},
				{
					url: '/assets/svgs/sponsors/tier/strip/bronze.svg',
					revision: 'f652da1948101179da67e969a0ced0e1',
				},
				{
					url: '/assets/svgs/sponsors/tier/strip/gold.svg',
					revision: '48acc56beda504d3c108a96fb7db2661',
				},
				{
					url: '/assets/svgs/sponsors/tier/strip/platinum.svg',
					revision: '7ebbf3d59e62deed2552dbcf84344206',
				},
				{
					url: '/assets/svgs/sponsors/tier/strip/silver.svg',
					revision: 'e19c0e0c49b95aa24aaa0078e3876215',
				},
				{ url: '/assets/svgs/sponsors/wolfram.svg', revision: 'e34afe44f377fd747ee12ca2979e051b' },
				{ url: '/assets/svgs/team/alex.svg', revision: 'b59652e1593f50af245c9923e7ab7035' },
				{ url: '/assets/svgs/team/amara.svg', revision: '19c34205518ef8199a30f8341b996f88' },
				{ url: '/assets/svgs/team/arthi.svg', revision: 'd5b603ee89f15c0475e114e9f9e92a67' },
				{ url: '/assets/svgs/team/bisman.svg', revision: '4e732350790abd0a6be93bd44a9b0b9d' },
				{ url: '/assets/svgs/team/cards/alex.svg', revision: '6b8c050fa1fde0e97aa9a3db2df6b213' },
				{ url: '/assets/svgs/team/cards/amara.svg', revision: '78b31bbdb81353fc99728a1dbb6aa216' },
				{ url: '/assets/svgs/team/cards/arthi.svg', revision: '9e7f4be0058c9ab4c660b676952171c9' },
				{ url: '/assets/svgs/team/cards/bisman.svg', revision: 'f0802a6d0ce3af7bfe04e5c9cb361d81' },
				{ url: '/assets/svgs/team/cards/ethan.svg', revision: '1af2fce1e94d53bef706f0ac963121d5' },
				{
					url: '/assets/svgs/team/cards/jasmine.svg',
					revision: 'a7f4d0d8f1a7d21f1d7f93a2c2e47f78',
				},
				{ url: '/assets/svgs/team/cards/jendy.svg', revision: 'a2bd719721d4bc93ff6a10d66d57db2d' },
				{ url: '/assets/svgs/team/cards/kevin.svg', revision: '34334fc095011b65aa87c13ec76590b3' },
				{
					url: '/assets/svgs/team/cards/laaveshwaran.svg',
					revision: '563f0f4cd3704eb290305c77b2cdebd3',
				},
				{ url: '/assets/svgs/team/cards/mike.svg', revision: '494b9d24e575ec96f374b0bb9bb474ef' },
				{ url: '/assets/svgs/team/cards/nisarg.svg', revision: '680b524510edf7e25cb521602b6aa644' },
				{ url: '/assets/svgs/team/cards/pranav.svg', revision: '7b9285ffbc1bc1dbfbf51ea0dce5f5ae' },
				{
					url: '/assets/svgs/team/cards/samihah.svg',
					revision: '3d24eb07535cbed7c192b3fd746772ba',
				},
				{ url: '/assets/svgs/team/cards/sammi.svg', revision: '6e234db9f5f3d0067ebdda11744d1bd9' },
				{ url: '/assets/svgs/team/cards/tammy.svg', revision: 'abc517eeb6b78d52db88594e77d9fd0d' },
				{ url: '/assets/svgs/team/ethan.svg', revision: '5a3ecae6c56f8b84837a4d07f1a9a648' },
				{ url: '/assets/svgs/team/jasmine.svg', revision: 'bbc1f3384ea33ab85c286a23284d04c5' },
				{ url: '/assets/svgs/team/jendy.svg', revision: '32dc1dbb85e05bbe53fbda2e2a0408c6' },
				{ url: '/assets/svgs/team/kevin.svg', revision: '947f84049a63ae610f4e7c44901ae343' },
				{ url: '/assets/svgs/team/laaveshwaran.svg', revision: '5a3ecae6c56f8b84837a4d07f1a9a648' },
				{ url: '/assets/svgs/team/mike.svg', revision: '30df083e91ed654b0632f2a9cde1d969' },
				{ url: '/assets/svgs/team/nisarg.svg', revision: '5967d5b7e4d3df7fcb58aa31072f64e8' },
				{ url: '/assets/svgs/team/pranav.svg', revision: '19c34205518ef8199a30f8341b996f88' },
				{ url: '/assets/svgs/team/samihah.svg', revision: 'b5c3c4dac28072a090413a5a0f7b0efe' },
				{ url: '/assets/svgs/team/sammi.svg', revision: '552deeb27786d328439c1b4bd4c1c37f' },
				{ url: '/assets/svgs/team/tammy.svg', revision: '5a3ecae6c56f8b84837a4d07f1a9a648' },
				{
					url: '/pwa/android/android-icon-144x144.png',
					revision: '3401276fb580a64c2368085d2d695dc6',
				},
				{
					url: '/pwa/android/android-icon-192x192.png',
					revision: '90efcceb2db8588951414165e00d210b',
				},
				{
					url: '/pwa/android/android-icon-36x36.png',
					revision: 'fbb3f16abeac33b276b4f78b49baaf4c',
				},
				{
					url: '/pwa/android/android-icon-48x48.png',
					revision: 'bbf3361c8d51a6856b96972137fbf870',
				},
				{
					url: '/pwa/android/android-icon-72x72.png',
					revision: '36331aa414a505e83626c9af01a2774c',
				},
				{
					url: '/pwa/android/android-icon-96x96.png',
					revision: '393d8024e62b83c471e17f206513eea7',
				},
				{ url: '/pwa/browserconfig.xml', revision: '653d077300a12f09a69caeea7a8947f8' },
				{ url: '/pwa/desktop/ms-icon-144x144.png', revision: '3401276fb580a64c2368085d2d695dc6' },
				{ url: '/pwa/desktop/ms-icon-150x150.png', revision: '0ff9300a66516c1946c82f9146a0c33d' },
				{ url: '/pwa/desktop/ms-icon-310x310.png', revision: '56b9fc660d34eb369d98b0ccc9fcbd1b' },
				{ url: '/pwa/desktop/ms-icon-70x70.png', revision: '88e18c78db772e5c8dd97c86f44cff64' },
				{ url: '/pwa/favicons/favicon-16x16.png', revision: 'bf31ed7c073230c08c166acfd438e463' },
				{ url: '/pwa/favicons/favicon-32x32.png', revision: '68ddc62731e2b7b942b8f150e54cd460' },
				{ url: '/pwa/favicons/favicon-96x96.png', revision: '393d8024e62b83c471e17f206513eea7' },
				{ url: '/pwa/ios/apple-icon-114x114.png', revision: '707ae8f98b5b09caa1e8c68671cdb543' },
				{ url: '/pwa/ios/apple-icon-120x120.png', revision: 'fb872f6023723aa34980e479e91c473e' },
				{ url: '/pwa/ios/apple-icon-144x144.png', revision: '3401276fb580a64c2368085d2d695dc6' },
				{ url: '/pwa/ios/apple-icon-152x152.png', revision: '8ff2a209eaf205a4fe03192c7f0387d3' },
				{ url: '/pwa/ios/apple-icon-180x180.png', revision: '6eb07b3f0638215b6a73d0400c5ba578' },
				{ url: '/pwa/ios/apple-icon-57x57.png', revision: '3b434ba41facd41247f80dbf76c7283c' },
				{ url: '/pwa/ios/apple-icon-60x60.png', revision: '6fd2d403c32be5df37d507478050cf86' },
				{ url: '/pwa/ios/apple-icon-72x72.png', revision: '36331aa414a505e83626c9af01a2774c' },
				{ url: '/pwa/ios/apple-icon-76x76.png', revision: 'f49b1f51554048c917c158cd38096c0d' },
				{
					url: '/pwa/ios/apple-icon-precomposed.png',
					revision: '581c4c6a403f0cb1bab3d373254559e4',
				},
				{ url: '/pwa/ios/apple-icon.png', revision: '581c4c6a403f0cb1bab3d373254559e4' },
				{ url: '/swe-worker-5c72df51bb1f6ee0.js', revision: '5a47d90db13bb1309b25bdf7b363570e' },
			],
			{ ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({ response: e }) =>
							e && 'opaqueredirect' === e.type
								? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers })
								: e,
					},
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/static.+\.js$/i,
			new e.CacheFirst({
				cacheName: 'next-static-js-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp4|webm)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ sameOrigin: e, url: { pathname: s } }) =>
				!(!e || s.startsWith('/api/auth/callback') || !s.startsWith('/api/')),
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ request: e, url: { pathname: s }, sameOrigin: a }) =>
				'1' === e.headers.get('RSC') &&
				'1' === e.headers.get('Next-Router-Prefetch') &&
				a &&
				!s.startsWith('/api/'),
			new e.NetworkFirst({
				cacheName: 'pages-rsc-prefetch',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ request: e, url: { pathname: s }, sameOrigin: a }) =>
				'1' === e.headers.get('RSC') && a && !s.startsWith('/api/'),
			new e.NetworkFirst({
				cacheName: 'pages-rsc',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith('/api/'),
			new e.NetworkFirst({
				cacheName: 'pages',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ sameOrigin: e }) => !e,
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
			}),
			'GET'
		),
		(self.__WB_DISABLE_DEV_LOGS = !0);
});
