"use client";
import React, { useState } from "react";
import CalendarDescription from "./CalendarDescription";
import { CalendarDescriptionType as CDT } from "./CalendarDescription";

interface EventStructure {
	title: string;
	description: string;
	time: string;
	link: string;
	type: string;
}

interface EventList {
	[key: string]: (EventStructure | null)[];
}

export const CalendarPanel = () => {
	const [eventIndex, setEventIndex] = useState(0);
	const eventOrder: string[] = [
		"Friday, June 21st",
		"Saturday, June 22nd",
		"Sunday, June 23rd",
	];
	const events: { [key: string]: EventList } = {
		"Friday, June 21st": {
			Ceremonies: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				{
					title: "Opening Ceremony",
					description: "Welcome to WaffleHacks 2023!",
					time: "5:00 PM",
					link: "",
					type: "ceremony",
				},
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Workshops: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Panels: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			"Other / Fun": [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
		},
		"Saturday, June 22nd": {
			Ceremonies: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Workshops: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Panels: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			"Other / Fun": [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
		},
		"Sunday, June 23rd": {
			Ceremonies: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				{
					title: "Closing Ceremony",
					description: "Thank you for attending WaffleHacks 2023!",
					time: "5:00 PM",
					link: "",
					type: "ceremony",
				},
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Workshops: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Panels: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
			"Other / Fun": [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
		},
	};

	return (
		<div className="font-mplus p-8" id="calendar">
			<div className="py-6 px-8 bg-gray-800 rounded-xl flex flex-col">
				<div className="grid grid-cols-3">
					<span />
					<span className="text-2xl font-bold text-white text-center">
						{eventOrder[eventIndex]}
					</span>
					<div className="text-2xl font-bold text-white text-center flex justify-end gap-4">
						<button
							className="flex items-center justify-center rounded-lg bg-yellow-500 w-10 h-10"
							onClick={() => {
								setEventIndex(Math.max(0, eventIndex - 1));
							}}
						>
							&lt;
						</button>
						<button
							className="flex items-center justify-center rounded-lg bg-yellow-500 w-10 h-10"
							onClick={() => {
								setEventIndex(Math.min(eventOrder.length - 1, eventIndex + 1));
							}}
						>
							&gt;
						</button>
					</div>
				</div>

				<div className="calendar-grid w-full mt-4">
					<span />
					{[
						"10 AM",
						"11 AM",
						"12 PM",
						"1 PM",
						"2 PM",
						"3 PM",
						"4 PM",
						"5 PM",
						"6 PM",
						"7 PM",
						"8 PM",
						"9 PM",
						"10 PM",
						"11 PM",
					].map((time, index) => {
						return (
							<div
								key={index}
								className="calendar-title-cell text-white text-center font-bold"
							>
								{time}
							</div>
						);
					})}
					<span className="calendar-title-cell text-xl text-white font-bold">
						Ceremonies
					</span>
					{events[eventOrder[eventIndex]]["Ceremonies"].map((event, index) => {
						return (
							<div
								key={index}
								className={
									"calendar-grid-cell text-center" +
									(event ? " calendar-ceremony event" : "")
								}
							>
								{event ? <img src="/assets/svgs/calendar/curtains.svg" /> : ""}
							</div>
						);
					})}

					<span className="calendar-title-cell text-xl text-white font-bold">
						Workshops
					</span>
					{events[eventOrder[eventIndex]]["Workshops"].map((event, index) => {
						return (
							<div
								key={index}
								className={
									"calendar-grid-cell text-center" +
									(event ? " calendar-workshop" : "")
								}
							>
								{event ? <img src="/assets/svgs/calendar/wrench.svg" /> : ""}
							</div>
						);
					})}

					<span className="calendar-title-cell text-xl text-white font-bold">
						Panels
					</span>
					{events[eventOrder[eventIndex]]["Panels"].map((event, index) => {
						return (
							<div
								key={index}
								className={
									"calendar-grid-cell text-center" +
									(event ? " calendar-panel" : "")
								}
							>
								{event ? <img src="/assets/svgs/calendar/panel.svg" /> : ""}
							</div>
						);
					})}

					<span className="calendar-title-cell text-xl text-white font-bold">
						Other / Fun
					</span>
					{events[eventOrder[eventIndex]]["Other / Fun"].map((event, index) => {
						return (
							<div
								key={index}
								className={
									"calendar-grid-cell text-center" +
									(event ? " calendar-other" : "")
								}
							>
								{event ? <img src="/assets/svgs/calendar/other.svg" /> : ""}
							</div>
						);
					})}
				</div>
			</div>
			<CalendarDescription
				type={CDT.CEREMONY}
				title="Opening Ceremony"
				description="Welcome to WaffleHacks 2023!"
				time="5:00 PM"
				link=""
			/>
		</div>
	);
};
