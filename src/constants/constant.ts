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

type Directory = "team" | "waffles";

export const members: string[] = [
	"Alex",
	"Amara",
	"Arti",
	"Ethan",
	"Jasmine",
	"Jendy",
	"Laveesh",
	"Mike",
	"Nisarg",
	"Nona",
	"Pranav",
	"Samihah",
	"Sammi",
	"Tammy",
];

function createFilePath<T extends Directory>(directory: T): string[] {
	return members.map((member) => {
		return `/assets/images/${directory}/${member.toLowerCase()}.png`;
	});
}

export const team_members_png: typeof members = createFilePath("team");
export const waffle_png: typeof members = createFilePath("waffles");
