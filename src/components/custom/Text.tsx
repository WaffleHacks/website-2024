"use client";

import { cn } from "@/lib";
import type React from "react";

interface TextProps {
	text?: string | string[];
	className?: string;
}

export const Text: React.FC<Readonly<TextProps>> = ({ text, className }) => {
	return (
		<>
			{Array.isArray(text) ? (
				() =>
					text.map((t, i: Index) => (
						<p className={cn("", className)} key={i}>
							{t}
						</p>
					))
			) : (
				<p className={cn("", className)}>{text}</p>
			)}
		</>
	);
};
