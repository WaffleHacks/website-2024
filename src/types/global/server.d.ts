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
