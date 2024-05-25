"use client";
import type { NextPage } from "next";
import {
	AboutPanel,
	CalendarPanel,
	FaqPanel,
	LandingPanel,
	SponsorsPanel,
	TeamPanel,
	TracksPanel,
} from "./_sections";
// const label = { inputProps: { "aria-label": "Switch demo" } };

const Home: NextPage = (): JSX.Element => {
	const sections: { [key: string]: string } = {
		about: "About",
		calendar: "Calendar",
		tracks: "Tracks & Awards",
		team: "Meet the Team",
		sponsors: "Sponsors",
		faqs: "FAQs",
		apply: "Apply Now",
	};

	return (
		<main className="flex flex-col w-screen">
			<LandingPanel />
			<AboutPanel />
			<CalendarPanel />
			<TracksPanel />
			<TeamPanel />
			<SponsorsPanel />
			<FaqPanel />
		</main>
	);
};
export default Home;

/**
 * 
	About
	Sponsors
	Important Dates of Bootcamp week + actual hackathon weekend
	FAQs
	Meet the team {okay if you don’t have it}
	To-Dos:
		Add confirmed sponsors to websites 
		Add a statement saying we’re explicitly not affiliated with the Olympics
	Ideas
		Add WaffleHacks Participant Badge (Olympian)
		https://hackthisfall.tech/swag
		Make a General WaffleHacks Website Design? 
		https://you.stonybrook.edu/333jren/web-ui/
 * 
*/
