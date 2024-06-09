import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const teamMembers = [
		{ name: 'jendy' },
		{ name: 'amara' },
		{ name: 'pranav' },
		{ name: 'jasmine' },
		{ name: 'samihah' },
		{ name: 'sammi' },
		{ name: 'arthi' },
		{ name: 'tammy' },
		{ name: 'nisarg' },
		{ name: 'ethan' },
		{ name: 'laaveshwaran' },
		{ name: 'mike' },
		{ name: 'alex' },
		{ name: 'bisman' },
		{ name: 'kevin' },
	];

	const teamMemberRoutes = teamMembers.map((member) => ({
		url: `https://wafflehacks.org/team/${member.name}`,
		lastModified: new Date(),
		changeFrequency: 'yearly' as const,
		priority: 0.8,
	}));

	return [
		{
			url: `https://wafflehacks.org`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `https://wafflehacks.org/legal/accessibility`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `https://wafflehacks.org/legal/privacy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `https://wafflehacks.org/legal/terms`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `https://wafflehacks.org/legal/rules`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		...teamMemberRoutes,
	];
}
