"use client";
import { Button } from "@nextui-org/button";
import type React from "react";
export const ApplyPanel = () => {
	return (
		<Button
			className={`
			px-4 py-2
			text-white
			bg-primary-500
			hover:bg-primary-600
			rounded-md
			shadow-md
			transition-all
		`}
			onClick={() => {}}
		>
			Apply
		</Button>
	);
};
