"use client";
import type { NextPage } from "next";
import AboutPanel from "./(main)/_sections/AboutPanel";
import Calendar from "./(main)/_sections/CalendarPanel";
import FaqPanel from "./(main)/_sections/FaqPanel";
import LandingPanel from "./(main)/_sections/LandingPanel";
import Sponsors from "./(main)/_sections/Sponsors";
import Tracks from "./(main)/_sections/TracksPanel";
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
			<Calendar />
			<Tracks />
			<FaqPanel />

			<Sponsors />
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
