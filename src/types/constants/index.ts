import type { HTMLMotionProps } from "framer-motion";

export interface LegalLinks {
	href: string;
	text: string;
}

export interface LegalLinksProps extends Array<LegalLinks> {}
[];

type Semantics =
	| "article"
	| "aside"
	| "div"
	| "figure"
	| "footer"
	| "header"
	| "main"
	| "menu"
	| "nav"
	| "picture"
	| "section";

export interface SemanticProps<T extends Semantics>
	extends React.PropsWithChildren<React.HTMLProps<HTMLElement>> {
	ref?: React.Ref<HTMLElement>;
	framer?: boolean;
	element?: T;
	framerProps?: HTMLMotionProps<T>;
	attributes?: JSX.IntrinsicElements[T];
	key?: string | number;
	style?: React.CSSProperties;
	className?: string;
}
