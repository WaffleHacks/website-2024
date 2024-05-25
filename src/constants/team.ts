interface TeamMember {
	top: {
		photo: {
			src: string;
			height: number;
			width: number;
		};
		name: string;
		waffle_team: "maker" | "eater";
		member_since: number;
		position: string;
	};
	middle: {
		looking_forward: string;
		favorite_waffle: Record<string, string>;
	};
	bottom: {
		education: {
			school:
				| {
						name: string;
						subtext: string;
				  }
				| {
						name: string;
				  };
			class: number;
			major: string;
		};
		favorite_olympic_sport: string;
	};
}

type Team = Record<
	"operations" | "design" | "technology",
	{
		members: Array<TeamMember>;
		color: string;
	}
>;

type ReadonlyTeam = ReadonlyArray<Team>;

export const Team: ReadonlyTeam = [
	{
		operations: {
			members: [
				{
					top: {
						photo: {
							src: "/assets/images/team/jendy.png",
							height: 400,
							width: 400,
						},
						name: "Jendy Ren",
						waffle_team: "maker",
						member_since: 4,
						position: "Director",
					},
					middle: {
						looking_forward: "Another year of waffle shenanigans",
						favorite_waffle: {
							type: "Bunny waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Stony Brook University",
							},
							class: 2024,
							major: "Computer Science: Human-Computer Interaction",
						},
						favorite_olympic_sport: "Golf",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/amara.png",
							height: 400,
							width: 400,
						},
						name: "Amara Im",
						waffle_team: "maker",
						member_since: 3,
						position: "Organizer",
					},
					middle: {
						looking_forward: "The tetris tournament",
						favorite_waffle: {
							type: "Kitty waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Stony Brook University",
							},
							class: 2024,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Gymnastics",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/pranav.png",
							height: 400,
							width: 400,
						},
						name: "Pranav Patnaik",
						waffle_team: "maker",
						member_since: 1,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"I look forward to seeing each and every one of our participant’s hacks and projects! I can’t wait!",
						favorite_waffle: {
							type: "Stroop waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "John Fraser",
								subtext: "Secondary School",
							},
							class: 2024,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Boxing",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/jasmine.png",
							height: 400,
							width: 400,
						},
						name: "Jasmine",
						waffle_team: "maker",
						member_since: 3,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"Looking forward to the workshops, panels, and interacting with participants and sponsors :D",
						favorite_waffle: {
							type: "OG Waffle <3",
						},
					},
					bottom: {
						education: {
							school: {
								name: "University of Waterloo",
								subtext:
									"currently on exchange at The Chinese University of Hong Kong",
							},
							class: 2025,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Swimming",
					},
				},
			],
			color: "#9ddcf8",
		},
		design: {
			members: [
				{
					top: {
						photo: {
							src: "/assets/images/team/samihah.png",
							height: 400,
							width: 400,
						},
						name: "Samihah Tahsin",
						waffle_team: "eater",
						member_since: 3,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"Meeting the coolest people in tech and looking at all the innovative projects that participants create",
						favorite_waffle: {
							type: "Garlic waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "CUNY Macaulay / Queens",
							},
							class: 2024,
							major: "Computer Science & Writing",
						},
						favorite_olympic_sport: "Fencing",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/sammi.png",
							height: 400,
							width: 400,
						},
						name: "Sammi Lin",
						waffle_team: "eater",
						member_since: 2,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"Seeing all the creative projects hackers come up with",
						favorite_waffle: {
							type: "Sleepy waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Stony Brook University",
							},
							class: 2024,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Track and Field",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/arthi.png",
							height: 400,
							width: 400,
						},
						name: "Arthi Krishna",
						waffle_team: "eater",
						member_since: 4,
						position: "Director",
					},
					middle: {
						looking_forward:
							"Designing new things for WaffleHacks and seeing the cool projects people come with during the hackathon",
						favorite_waffle: {
							type: "Aura waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Columbia University",
							},
							class: 2024,
							major: "Computer Science: Vision & Graphics",
						},
						favorite_olympic_sport: "Beach Volleyball",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/tammy.png",
							height: 400,
							width: 400,
						},
						name: "Tammy Li",
						waffle_team: "eater",
						member_since: 1,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"I am excited to see what unique and creative ideas the participants will come up with during the hackathon, and seeing how they work together",
						favorite_waffle: {
							type: "Sleep-deprived waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Stony Brook University",
							},
							class: 2026,
							major: "Environmental Design Planning and Policy",
						},
						favorite_olympic_sport: "Diving",
					},
				},
			],
			color: "#fcb59a",
		},
		technology: {
			members: [
				{
					top: {
						photo: {
							src: "/assets/images/team/nisarg.png",
							height: 400,
							width: 400,
						},
						name: "Nisarg Takkar",
						waffle_team: "maker",
						member_since: 1,
						position: "Organizer",
					},
					middle: {
						looking_forward: "The hacker experience :D!",
						favorite_waffle: {
							type: "Blueberry Cream cheese",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Charusat University",
							},
							class: 2024,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Badminton",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/ethan.png",
							height: 400,
							width: 400,
						},
						name: "Ethan Horowitz",
						waffle_team: "maker",
						member_since: 3,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"The website scavenger hunt and tetris tournament :)",
						favorite_waffle: {
							type: "Gluten free blueberry eggo",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Duke University",
							},
							class: 2025,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Diving",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/laavesh.png",
							height: 400,
							width: 400,
						},
						name: "Laaveshwaran Parthiban",
						waffle_team: "maker",
						member_since: 1,
						position: "Organizer",
					},
					middle: {
						looking_forward:
							"Creating techy-stuff to make the best wafflehacks yet!",
						favorite_waffle: {
							type: "Triangle waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Anna University",
							},
							class: 2025,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Diving",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/mike.png",
							height: 400,
							width: 400,
						},
						name: "Mike Odnis",
						waffle_team: "maker",
						member_since: 1,
						position: "Organizer",
					},
					middle: {
						looking_forward: "The development of our in-house tech platforms",
						favorite_waffle: {
							type: "Combined mix waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "Farmingdale State College",
							},
							class: 2026,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Track and Field",
					},
				},
				{
					top: {
						photo: {
							src: "/assets/images/team/alex.png",
							height: 400,
							width: 400,
						},
						name: "Alex Krantz",
						waffle_team: "maker",
						member_since: 4,
						position: "Director",
					},
					middle: {
						looking_forward:
							"Working with cool people and building cool things",
						favorite_waffle: {
							type: "Kranz waffle",
						},
					},
					bottom: {
						education: {
							school: {
								name: "British Columbia Institute of Technology",
							},
							class: 2025,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Rowing",
					},
				},
			],
			color: "#fddc79",
		},
	},
];
