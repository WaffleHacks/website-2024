"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

interface NumberDisplayProps {
	className?: string;
	style?: React.CSSProperties;
}

export const NumberDisplay = ({ className, style }: NumberDisplayProps) => {
	const [daysLeft, setDaysLeft] = React.useState(0);
	const [hoursLeft, setHoursLeft] = React.useState(0);
	const [minutesLeft, setMinutesLeft] = React.useState(0);
	const [secondsLeft, setSecondsLeft] = React.useState(0);

	useIsomorphicLayoutEffect(() => {
		function showtime() {
			const subDate = Date.UTC(2024, 5, 23, 16, 0, 0);
			const now = Date.now();
			let subTimeLeft = Math.max(0, subDate - now);

			const daysLeft = Math.floor(subTimeLeft / (1000 * 60 * 60 * 24));
			subTimeLeft -= daysLeft * 24 * 60 * 60 * 1000;

			const hoursLeft = Math.floor(subTimeLeft / (1000 * 60 * 60));
			subTimeLeft -= hoursLeft * 60 * 60 * 1000;
			const minutesLeft = Math.floor(subTimeLeft / (1000 * 60));
			subTimeLeft -= minutesLeft * 60 * 1000;
			const secondsLeft = Math.floor(subTimeLeft / 1000);

			setDaysLeft(daysLeft);
			setHoursLeft(hoursLeft);
			setMinutesLeft(minutesLeft);
			setSecondsLeft(secondsLeft);
		}

		const interval = setInterval(() => {
			showtime();
		}, 1000);

		showtime();

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={twMerge("flex flex-row", className)} style={style}>
			<div className="pl-4">
				<span className="text-xl text-right text-wrap max-w-full sm:text-2xl">
					Countdown to the WaffleHacks Games
				</span>
				<div className="flex text-lg justify-end sm:text-2xl font-bold gap-2 items-center">
					<Clock number={daysLeft} text="Days" /> <span>:</span>
					<Clock number={hoursLeft} text="Hours" /> <span>:</span>
					<Clock number={minutesLeft} text="Minutes" /> <span>:</span>
					<Clock number={secondsLeft} text="Seconds" />
				</div>
			</div>
		</div>
	);
};

const Clock = ({ number, text }: { number: number; text: string }) => {
	let num_chars = number.toString();
	if (num_chars.length < 2) num_chars = "0" + num_chars;
	return (
		<header className="flex flex-col items-center relative">
			<div className="flex flex-row gap-2">
				<span className="numberdisplay-number text-lg sm:text-2xl font-extrabold bg-gray-200 rounded-lg py-2 sm:py-3 px-2 sm:px-3">
					{num_chars}
				</span>
			</div>
			<span className="text-base font-medium absolute top-[100%]">{text}</span>
		</header>
	);
};
