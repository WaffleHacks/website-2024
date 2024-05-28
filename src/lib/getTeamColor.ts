import { Team } from "@/app/api/team/db";

export const getTeamColor = (name: string): string | undefined => {
	for (const department of Object.values(Team)) {
		for (const category of Object.values(department)) {
			for (const member of category.members) {
				if (member.top.name.toLowerCase() === name.toLowerCase()) {
					return category.color;
				}
			}
		}
	}
};
