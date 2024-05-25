type Sizes =
	| "0"
	| "px"
	| "0.5"
	| "1"
	| "1.5"
	| "2"
	| "2.5"
	| "3"
	| "3.5"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "14"
	| "16"
	| "20"
	| "24"
	| "28"
	| "32"
	| "36"
	| "40"
	| "44"
	| "48"
	| "52"
	| "56"
	| "60"
	| "64"
	| "72"
	| "80"
	| "96";

type Directory = "team" | "waffles";

type Index = number | string | React.Key;

interface AccordionTextProps {
	title: string;
	description: string | string[];
}

interface AccordionProps {
	data: AccordionTextProps[];
}

interface FooterProps {
	top: {
		left: {
			image: string;
			sponsor: string;
		};
		right: {
			icons: JSX.Element[];
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
