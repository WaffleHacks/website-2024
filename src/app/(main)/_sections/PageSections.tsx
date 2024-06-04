"use client";
import { heading_style } from "@/components";
import { cn } from "@/lib";
import { Slugify } from "@/utils";
import React from "react";
import {
	AboutPanel,
	ApplyPanel,
	CalendarPanel,
	FaqPanel,
	SponsorsPanel,
	TeamPanel,
	TracksPanel,
} from ".";

export const PageSections = () => {
	const sections: { [key: string]: string } = {
		about: "About",
		calendar: "Calendar",
		tracks: "Tracks and Awards",
		team: "Meet the Team",
		sponsors: "Sponsors",
		faqs: "FAQs",
		apply: "Apply",
	};
	return (
		<>
			{Object.entries(sections).map(([key, value]) => {
				const Sections = {
					about: AboutPanel,
					calendar: CalendarPanel,
					tracks: TracksPanel,
					team: TeamPanel,
					sponsors: SponsorsPanel,
					faqs: FaqPanel,
					apply: ApplyPanel,
				}[key];

				return (
					<section
						id={Slugify(value.toLowerCase())}
						key={Slugify(value.toLowerCase())}
						className="flex items-center justify-center flex-col w-full"
					>
						{value !== "About" && value !== "Apply" && (
							<h2
								className={cn(heading_style, `mx-8 sr-only`)}
								aria-label={`Section: ${value}`}
							>
								{value}
							</h2>
						)}
						{Sections && <Sections />}
					</section>
				);
			})}
		</>
	);
};
