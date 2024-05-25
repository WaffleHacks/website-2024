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
			school: string;
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
							src: "/assets/images/team/operations/operations-1.jpg",
							height: 400,
							width: 400,
						},
						name: "John Doe",
						waffle_team: "maker",
						member_since: 2021,
						position: "Director of Operations",
					},
					middle: {
						looking_forward: "I am looking forward to the hackathon",
						favorite_waffle: {
							type: "Belgian",
							toppings: "Strawberries and whipped cream",
						},
					},
					bottom: {
						education: {
							school: "Stony Brook University",
							class: 2023,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Basketball",
					},
				},
			],
			color: "blue",
		},
		design: {
			members: [
				{
					top: {
						photo: {
							src: "/assets/images/team/design/design-1.jpg",
							height: 400,
							width: 400,
						},
						name: "Jane Doe",
						waffle_team: "maker",
						member_since: 2021,
						position: "Director of Design",
					},
					middle: {
						looking_forward: "I am looking forward to the hackathon",
						favorite_waffle: {
							type: "Belgian",
							toppings: "Strawberries and whipped cream",
						},
					},
					bottom: {
						education: {
							school: "Stony Brook University",
							class: 2023,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Basketball",
					},
				},
			],
			color: "red",
		},
		technology: {
			members: [
				{
					top: {
						photo: {
							src: "/assets/images/team/technology/technology-1.jpg",
							height: 400,
							width: 400,
						},
						name: "John Smith",
						waffle_team: "maker",
						member_since: 2021,
						position: "Director of Technology",
					},
					middle: {
						looking_forward: "I am looking forward to the hackathon",
						favorite_waffle: {
							type: "Belgian",
							toppings: "Strawberries and whipped cream",
						},
					},
					bottom: {
						education: {
							school: "Stony Brook University",
							class: 2023,
							major: "Computer Science",
						},
						favorite_olympic_sport: "Basketball",
					},
				},
			],
			color: "green",
		},
	},
];
