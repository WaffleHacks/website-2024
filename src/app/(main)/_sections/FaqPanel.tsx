"use client";
import { useState } from "react";
import { Faq } from "../_components";

export const FaqPanel = () => {
	const [faqs, _] = useState([
		[
			"What is a hackathon?",
			`A hackathon is a 24-hour event where students come together to create and build something amazing. Hackathons are a great way to learn new skills and gain experience in a fast-paced environment. We are a community of students, hackers, and engineers who are passionate about building the future of technology.`,
		],
		[
			"Who can attend?",
			`We welcome all highschool and undergraduate students, regardless of gender, major, and school! Open to coders and designers of all skill levels. Coding experience is not required.`,
		],
		[
			"How many people per team?",
			`A team should consist of a minimum of 1 person to a max of 4. There will only be 4 prizes distributed per team. You are free to choose whoever is going to be on your team either prior or during the day of the event. You are also free to work on your own.`,
		],
		["When is the registration deadline?", `June 22nd, by 11:59 PM (EST)`],
		[
			"Do I have to submit a project to join?",
			`Nope! You are free to attend any of our workshops and events if you would so choose to.`,
		],
		[
			"What are the prize categories?",
			`We have prizes for each of the four tracks, as well as 6 more: Best Beginner Hack, Best UI/UX, Diversity &amp; Inclusion Hack, Best Use of AI, Best Use of Data, and Best Use of Wolfram! Check the __[devpost](https://wffl.link/devpost)__ for more details!`,
		],
		[
			"Any guidance for beginners?",
			`In addition to the technical workshops that we are hosting throughout WaffleHacks, there are many online resources if you want to learn about programming. These resources include but are not limited to:
          
* KhanAcademy
* W3Schools
* Codecademy`,
		],
		[
			"I have more questions!",
			`- If you have any questions or concerns, please feel free to email us at __[operations@wafflehacks.org](mailto:operations@wafflehacks.org)__
- If you have any questions or concerns during the event, you can always chat with us in person or in the Discord channel, and we will do our best to help you!`,
		],
	]);

	return (
		<div
			id="faqs"
			className="bg-white p-8 md:text-left flex justify-center font-mplus"
		>
			<div className="block w-full" style={{ maxWidth: "min(100vw, 80rem)" }}>
				{/* <p>For all your questions, here are some answers!</p>
            <h1 className="text-4xl md:text-5xl">FAQs</h1> */}
				<h1 className="text-4xl font-extrabold mb-4">FAQs</h1>

				<div className="flex flex-col md:flex-row gap-4 mt-4">
					<div className="flex flex-col w-full md:w-1/2 gap-4">
						{faqs.map(
							(faq, ind) =>
								ind < 4 && (
									<Faq
										key={"faq-" + ind}
										faq={faq[0] ?? ""}
										desc={faq[1] ?? ""}
									/>
								),
						)}
					</div>
					<div className="flex flex-col w-full md:w-1/2 gap-4">
						{faqs.map(
							(faq, ind) =>
								ind >= 4 && (
									<Faq
										key={"faq-" + ind}
										faq={faq[0] ?? ""}
										desc={faq[1] ?? ""}
									/>
								),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
