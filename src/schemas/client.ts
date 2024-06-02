import { z } from "zod";

export const Slides = z.object({
	image: z.string(),
	prizes: z.object({
		images: z.array(z.string()),
	}),
	description: z.string(),
});

export const Tracks = z.record(
	z.union([z.number(), z.string()]),
	z.object({
		slides: z.array(Slides),
	}),
);

export const ReadonlyTracks = Tracks.readonly();

export const Sponsors = z.object({
	name: z.string(),
	image: z.string(),
	link: z.string().optional(),
});

export const Tiers = z.object({
	title: z.string(),
	sponsors: z.array(Sponsors),
});

export const ReadonlySponsors = z.object({
	tiers: z.array(Tiers),
});
