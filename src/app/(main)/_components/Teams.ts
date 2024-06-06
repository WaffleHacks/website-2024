export interface TeamMemberData {
	name: string;
	waffle_team: string;
	member_since: number;
	position: string;
	circle_photo: string;
	panel_photo: string;
	looking_forward: string;
	favorite_waffle: string;
	education: {
		school: string;
		class: number;
		major: string;
		subtext?: string;
	};
	favorite_olympic_sport: string;
	color: string;
}

export const TeamMembers: TeamMemberData[] = [
	{
		name: "Jendy Ren",
		waffle_team: "maker",
		member_since: 4,
		position: "Director",
		circle_photo: "/assets/images/team/jendy.png",
		panel_photo: "/assets/images/team/panel/jendy.png",
		looking_forward: "Another year of waffle shenanigans",
		favorite_waffle: "Bunny waffle",
		education: {
			school: "Stony Brook University",
			class: 2024,
			major: "Computer Science: Human-Computer Interaction",
		},
		favorite_olympic_sport: "Golf",
		color: "#fddc79",
	},
	{
		name: "Amara Im",
		waffle_team: "maker",
		member_since: 3,
		position: "Organizer",
		circle_photo: "/assets/images/team/amara.png",
		panel_photo: "/assets/images/team/panel/amara.png",
		looking_forward: "The tetris tournament",
		favorite_waffle: "Kitty waffle",
		education: {
			school: "Stony Brook University",
			class: 2024,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Gymnastics",
		color: "#fddc79",
	},
	{
		name: "Pranav Patnaik",
		waffle_team: "maker",
		member_since: 1,
		position: "Organizer",
		circle_photo: "/assets/images/team/pranav.png",
		panel_photo: "/assets/images/team/panel/pranav.png",
		looking_forward:
			"I look forward to seeing each and every one of our participant’s hacks and projects! I can’t wait!",
		favorite_waffle: "Stroop waffle",
		education: {
			school: "John Fraser",
			class: 2024,
			major: "Computer Science",
			subtext: "Secondary School",
		},
		favorite_olympic_sport: "Boxing",
		color: "#fddc79",
	},
	{
		name: "Jasmine",
		waffle_team: "maker",
		member_since: 3,
		position: "Organizer",
		circle_photo: "/assets/images/team/jasmine.png",
		panel_photo: "/assets/images/team/panel/jasmine.png",
		looking_forward:
			"Looking forward to the workshops, panels, and interacting with participants and sponsors :D",
		favorite_waffle: "OG Waffle <3",
		education: {
			school: "University of Waterloo",
			class: 2025,
			major: "Computer Science",
			subtext: "currently on exchange at The Chinese University of Hong Kong",
		},
		favorite_olympic_sport: "Swimming",
		color: "#fddc79",
	},
	{
		name: "Samihah Tahsin",
		waffle_team: "eater",
		member_since: 3,
		position: "Organizer",
		circle_photo: "/assets/images/team/samihah.png",
		panel_photo: "/assets/images/team/panel/samihah.png",
		looking_forward:
			"Meeting the coolest people in tech and looking at all the innovative projects that participants create",
		favorite_waffle: "Garlic waffle",
		education: {
			school: "CUNY Macaulay / Queens",
			class: 2024,
			major: "Computer Science & Writing",
		},
		favorite_olympic_sport: "Fencing",
		color: "#9ddcf8",
	},
	{
		name: "Sammi Lin",
		waffle_team: "eater",
		member_since: 2,
		position: "Organizer",
		circle_photo: "/assets/images/team/sammi.png",
		panel_photo: "/assets/images/team/panel/sammi.png",
		looking_forward: "Seeing all the creative projects hackers come up with",
		favorite_waffle: "Sleepy waffle",
		education: {
			school: "Stony Brook University",
			class: 2024,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Track and Field",
		color: "#9ddcf8",
	},
	{
		name: "Arthi Krishna",
		waffle_team: "eater",
		member_since: 4,
		position: "Director",
		circle_photo: "/assets/images/team/arthi.png",
		panel_photo: "/assets/images/team/panel/arthi.png",
		looking_forward:
			"Designing new things for WaffleHacks and seeing the cool projects people come with during the hackathon",
		favorite_waffle: "Aura waffle",
		education: {
			school: "Columbia University",
			class: 2024,
			major: "Computer Science: Vision & Graphics",
		},
		favorite_olympic_sport: "Beach Volleyball",
		color: "#9ddcf8",
	},
	{
		name: "Tammy Li",
		waffle_team: "eater",
		member_since: 1,
		position: "Organizer",
		circle_photo: "/assets/images/team/tammy.png",
		panel_photo: "/assets/images/team/panel/tammy.png",
		looking_forward:
			"I am excited to see what unique and creative ideas the participants will come up with during the hackathon, and seeing how they work together",
		favorite_waffle: "Sleep-deprived waffle",
		education: {
			school: "Stony Brook University",
			class: 2026,
			major: "Environmental Design Planning and Policy",
		},
		favorite_olympic_sport: "Diving",
		color: "#9ddcf8",
	},
	{
		name: "Nisarg Takkar",
		waffle_team: "maker",
		member_since: 1,
		position: "Organizer",
		circle_photo: "/assets/images/team/nisarg.png",
		panel_photo: "/assets/images/team/panel/nisarg.png",
		looking_forward: "The hacker experience :D!",
		favorite_waffle: "Blueberry Cream cheese",
		education: {
			school: "Charusat University",
			class: 2024,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Badminton",
		color: "#fcb59a",
	},
	{
		name: "Ethan Horowitz",
		waffle_team: "maker",
		member_since: 3,
		position: "Organizer",
		circle_photo: "/assets/images/team/ethan.png",
		panel_photo: "/assets/images/team/panel/ethan.png",
		looking_forward: "The website scavenger hunt and tetris tournament :)",
		favorite_waffle: "Gluten free blueberry eggo",
		education: {
			school: "Duke University",
			class: 2025,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Diving",
		color: "#fcb59a",
	},
	{
		name: "Laaveshwaran Parthiban",
		waffle_team: "maker",
		member_since: 1,
		position: "Organizer",
		circle_photo: "/assets/images/team/laaveshwaran.png",
		panel_photo: "/assets/images/team/panel/laaveshwaran.png",
		looking_forward: "Creating techy-stuff to make the best wafflehacks yet!",
		favorite_waffle: "Triangle waffle",
		education: {
			school: "Anna University",
			class: 2025,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Diving",
		color: "#fcb59a",
	},
	{
		name: "Mike Odnis",
		waffle_team: "maker",
		member_since: 1,
		position: "Organizer",
		circle_photo: "/assets/images/team/mike.png",
		panel_photo: "/assets/images/team/panel/mike.png",
		looking_forward: "The development of our in-house tech platforms",
		favorite_waffle: "Combined mix waffle",
		education: {
			school: "Farmingdale State College",
			class: 2026,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Track and Field",
		color: "#fcb59a",
	},
	{
		name: "Alex Krantz",
		waffle_team: "maker",
		member_since: 4,
		position: "Director",
		circle_photo: "/assets/images/team/alex.png",
		panel_photo: "/assets/images/team/panel/alex.png",
		looking_forward: "Working with cool people and building cool things",
		favorite_waffle: "Kranz waffle",
		education: {
			school: "British Columbia Institute of Technology",
			class: 2025,
			major: "Computer Science",
		},
		favorite_olympic_sport: "Rowing",
		color: "#fcb59a",
	},
];
