"use client";

import { cn } from "@/lib";
import type React from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
	h: HeadingElement;
	title: string;
	subtitle?: string;
	className?: string;
	subClassName?: string;
}

export const Title: React.FC<Readonly<TitleProps>> = ({
	h: Component = "h1",
	title,
	subtitle,
	className,
	subClassName,
}) => {
	return (
		<Component
			className={cn("", className)}
			style={{
				fontSize: `${"clamp(1.5rem, 5vw, 2.5rem)"}`,
				lineHeight: "1.2",
			}}
		>
			{title}
			{subtitle && <span className={cn(``, subClassName)}>{subtitle}</span>}
		</Component>
	);
};
