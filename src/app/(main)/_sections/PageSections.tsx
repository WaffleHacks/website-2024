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
		apply: "Apply Now",
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
						key={key}
						className={`flex flex-col items-center justify-center border border-red-500 max-w-screen-2xl`}
					>
						{value !== "About" && value !== "Apply Now" && (
							<h2
								className={cn(heading_style, ``)}
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
