import { z } from "zod";

export const TeamMember = z.object({
	top: z.object({
		photo: z.object({
			src: z.string(),
			height: z.number(),
			width: z.number(),
		}),
		name: z.string(),
		waffle_team: z.enum(["maker", "eater"]),
		member_since: z.number(),
		position: z.string(),
	}),
	middle: z.object({
		looking_forward: z.string(),
		favorite_waffle: z.record(z.string(), z.string()),
	}),
	bottom: z.object({
		education: z.object({
			school: z.union([
				z.object({
					name: z.string(),
					subtext: z.string(),
				}),
				z.object({
					name: z.string(),
				}),
			]),
			class: z.number(),
			major: z.string(),
		}),
		favorite_olympic_sport: z.string(),
	}),
});

export const Team = z.record(
	z.union([
		z.literal("operations"),
		z.literal("design"),
		z.literal("technology"),
	]),
	z.object({
		members: z.array(TeamMember),
		color: z.string(),
	}),
);

export const ReadonlyTeam = Team.readonly();
