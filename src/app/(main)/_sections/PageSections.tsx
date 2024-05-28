"use client";
import { Slugify } from "@/utils";
import React from "react";
import {
	AboutPanel,
	ApplyPanel,
	CalendarPanel,
	FaqPanel,
	LandingPanel,
	SponsorsPanel,
	TeamPanel,
	TracksPanel,
} from ".";

export const PageSections = () => {
	const sections: { [key: string]: string } = {
		landing: "Home",
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
					landing: LandingPanel,
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
						className={`flex items-center justify-center`}
					>
						{Sections && <Sections />}
					</section>
				);
			})}
		</>
	);
};
