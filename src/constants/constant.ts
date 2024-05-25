import type { LegalLinksProps } from "@/types";

export const LegalLinks: LegalLinksProps = [
	{
		href: `/accessibility`,
		text: `Accessibility`,
	},
	{
		href: `/terms`,
		text: `Terms of Service`,
	},
	{
		href: `/privacy`,
		text: `Privacy Policy`,
	},
	{
		href: `/rules`,
		text: `Rules`,
	},
	{
		href: `https://the.hackfoundation.org/`,
		text: `The Hack Foundation`,
	},
	{
		href: `https://the.hackfoundation.org/`,
		text: `Non-profit EIN: 81-2908499`,
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
	"Nona",
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

export const team_members_png = createFilePath("team");
export const waffle_png = createFilePath("waffles");
