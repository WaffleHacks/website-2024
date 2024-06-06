type Tiers = {
	tier: string;
	sponsors: Array<{
		name: string;
		image: string;
		link?: string;
	}>;
};

type ReadonlySponsors = {
	tiers: Tiers[];
};

interface Slide {
	image: string;
	prizes: {
		images: [string, ...string[]];
	};
	description: string | string[];
}

type Tracks = {
	title: string;
	description: string;
	prize: string;
	trackImage: string;
	prizeImages: string[];
};

type ReadonlyTracks = ReadonlyArray<Tracks>;

interface AccordionTextProps {
	title: string;
	description: string | string[];
	// index: number;
	// expandedIndex: number | null;
	// setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

interface AccordionProps {
	data: AccordionTextProps[];
}

interface FooterProps {
	top: {
		left: {
			image: string;
			icons: Array<{
				icon: JSX.Element;
				href: string;
			}>;
		};
		right: {
			sponsor: string;
			link: string;
		};
	};
	bottom: {
		left: {
			name: string;
			ein: string;
		};
		right: {
			links: {
				href: string;
				text: string;
			}[];
		};
	};
}
