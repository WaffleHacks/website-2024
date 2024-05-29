export const Faqs: ReadonlyArray<{
	section: string;
	items: AccordionTextProps[];
}> = [
	{
		section: "General",
		items: [
			{
				title: "What is a hackathon?",
				description:
					"A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, often including domain experts, collaborate intensively on software projects.",
			},
			{
				title: "What is the theme of this hackathon?",
				description:
					"The theme of this hackathon is 'Innovation in Technology'.",
			},
			{
				title: "How can I register for the hackathon?",
				description:
					"You can register for the hackathon by visiting the registration page on our website.",
			},
			{
				title: "What are the rules of the hackathon?",
				description:
					"The rules of the hackathon are available on the rules page on our website.",
			},
		],
	},
	{
		section: "Prizes",
		items: [
			{
				title: "What are the prizes for the hackathon?",
				description:
					"The prizes for the hackathon are available on the prizes page on our website.",
			},
			{
				title: "How can I sponsor the hackathon?",
				description:
					"You can sponsor the hackathon by visiting the sponsorship page on our website.",
			},
		],
	},
	{
		section: "Participation",
		items: [
			{
				title: "How can I volunteer for the hackathon?",
				description:
					"You can volunteer for the hackathon by visiting the volunteer page on our website.",
			},
			{
				title: "How can I contact the organizers of the hackathon?",
				description:
					"You can contact the organizers of the hackathon by visiting the contact page on our website.",
			},
		],
	},
];
