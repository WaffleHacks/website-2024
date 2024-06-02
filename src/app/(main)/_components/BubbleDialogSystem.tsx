import type React from "react";
import type { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import SpeechBubble from "./SpeechBubble";

interface BubbleDialogSystemProps {
	children: ReactElement[];
	child?: number;
	className?: string;
	style?: React.CSSProperties;
}

const BubbleDialogSystem = ({
	children,
	child,
	className,
	style,
}: BubbleDialogSystemProps) => {
	if (!child) child = 0;

	return (
		<SpeechBubble className={twMerge("absolute", className)} style={style}>
			{children[child]}
		</SpeechBubble>
	);
};

export default BubbleDialogSystem;
