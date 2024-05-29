// "use client";
import type { LegalLinksProps } from "@/types";

export const LegalLinks: LegalLinksProps = [
	{
		href: `/legal/accessibility`,
		text: `Accessibility`,
	},
	{
		href: `/legal/terms`,
		text: `Terms of Service`,
	},
	{
		href: `/legal/privacy`,
		text: `Privacy Policy`,
	},
	{
		href: `/legal/rules`,
		text: `Rules`,
	},
];

export const members: string[] = [
	"Alex",
	"Amara",
	"Arthi",
	"Ethan",
	"Jasmine",
	"Jendy",
	"Laaveshwaran",
	"Mike",
	"Nisarg",
	"Pranav",
	"Samihah",
	"Sammi",
	"Tammy",
];

function createFilePath<T extends Directory>(
	directory: T,
): Record<string, string> {
	return members.reduce(
		(acc, member) => {
			acc[member] = `/assets/images/${directory}/${member.toLowerCase()}.png`;
			return acc;
		},
		{} as Record<string, string>,
	);
}

function panelFilePath<T extends Directory>(
	directory: T,
): Record<string, string> {
	return members.reduce(
		(acc, member) => {
			acc[member] =
				`/assets/images/${directory}/panel/${member.toLowerCase()}.png`;
			return acc;
		},
		{} as Record<string, string>,
	);
}

export const team_members_png = createFilePath("team");
export const waffle_png = createFilePath("waffles");
export const team_members_panel_png = panelFilePath("team");
