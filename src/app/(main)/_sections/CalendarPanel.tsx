"use client";
import React, { useRef, useState } from "react";
import CalendarDescription from "./CalendarDescription";
import { CalendarDescriptionType as CDT } from "./CalendarDescription";
import { Button } from "@nextui-org/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Picture } from "@/components";
import { button } from "@nextui-org/theme";

interface EventStructure {
	title: string;
	description: string;
	time: string;
	link: string;
	type: string;
}

interface EventList {
	[key: string]: (EventStructure | unknown)[];
}

const calendarButton: string =
	"flex items-center justify-center rounded-lg bg-yellow-500 w-10 h-10";

export const CalendarPanel = () => {
	const [eventIndex, setEventIndex] = useState<number>(0);
	const eventOrder: string[] = [
		"Friday, June 21st",
		"Saturday, June 22nd",
		"Sunday, June 23rd",
	];
	const events: { [key: string]: EventList } = {
		"Friday, June 21st": {
			Ceremonies: [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				{
					title: "Opening Ceremony",
					description: "Welcome to WaffleHacks 2023!",
					time: "5:00 PM - 6:00 PM",
					link: "",
					type: "ceremony",
				},
				"",
				"",
				"",
				"",
				"",
				"",
			],
			Workshops: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			Panels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			"Other / Fun": ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		},
		"Saturday, June 22nd": {
			Ceremonies: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			Workshops: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			Panels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			"Other / Fun": ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		},
		"Sunday, June 23rd": {
			Ceremonies: [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				{
					title: "Closing Ceremony",
					description: "Thank you for attending WaffleHacks 2023!",
					time: "5:00 PM",
					link: "",
					type: "ceremony",
				},
				"",
				"",
				"",
				"",
				"",
				"",
			],
			Workshops: [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
			],
			Panels: [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
			],
			"Other / Fun": [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
			],
		},
	};

	const calendar_box = useRef<HTMLDivElement>(null);
	const [descPos, setDescPos] = useState({ x: -1, y: -1 });
	const [descDetails, setDescDetails] = useState<EventStructure | null>(null);

	function setDesc(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, event: EventStructure) {
		if (!calendar_box.current) return;

		let rect = calendar_box.current.getBoundingClientRect();
		let x = e.clientX;
		let y = e.clientY;
		// get x and y relative to calendar bounds
		x -= rect.left;
		y -= rect.top;

		if (x + 300 > rect.x + rect.width) x = rect.x + rect.width - 300;

		setDescPos({ x, y });
		setDescDetails(event);
		e.stopPropagation();
	}

	return (
		<div ref={calendar_box} className="font-mplus p-8 relative" onClick={() => setDescPos({x: -1, y: -1})}>
			<div className="py-6 px-8 bg-gray-800 rounded-xl flex flex-col">
				<div className="grid grid-cols-3">
					<span />
					<span className="text-2xl font-bold text-white text-center">
						{eventOrder[eventIndex]}
					</span>
					<div className="text-2xl font-bold text-white text-center flex justify-end gap-4">
						<Button
							className={calendarButton}
							onClick={() => {
								setEventIndex(Math.max(0, eventIndex - 1));
							}}
						>
							<FaArrowLeft size={20} />
						</Button>
						<Button
							className={calendarButton}
							onClick={() => {
								setEventIndex(Math.min(eventOrder.length - 1, eventIndex + 1));
							}}
						>
							<FaArrowRight size={20} />
						</Button>
					</div>
				</div>

				<div className="calendar-grid w-full mt-4">
					<span />
					{[
						"10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM",
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
					{events[eventOrder[eventIndex]]["Ceremonies"].map((event: any, index: React.Key | null | undefined) => {
						return (
							<div
								key={index}
								className={
									"calendar-grid-cell text-center" +
									(event ? " calendar-ceremony event" : "")
								}
							>
								{
									event && 
									<button onClick={e => setDesc(e, event as EventStructure)}>
										<img src="/assets/svgs/calendar/curtains.svg" />
									</button>
									
								}
							</div>
						);
					})}

					<span className="calendar-title-cell text-xl text-white font-bold">
						Workshops
					</span>
					{events[eventOrder[eventIndex]]["Workshops"].map(
						(event: any, index: React.Key | null | undefined) => {
							return (
								<Picture
									key={index}
									className={
										"calendar-grid-cell text-center" +
										(event ? " calendar-workshop" : "")
									}
								>
									{event ? <img src="/assets/svgs/calendar/wrench.svg" /> : ""}
								</Picture>
							);
						},
					)}

					<span
						className={`
							calendar-title-cell text-xl text-white
							font-bold
						`}
					>
						Panels
					</span>
					{events[eventOrder[eventIndex]]["Panels"].map(
						(event: any, index: React.Key | null | undefined) => {
							return (
								<Picture
									key={index}
									className={
										"calendar-grid-cell text-center" +
										(event ? " calendar-panel" : "")
									}
								>
									{event ? <img src="/assets/svgs/calendar/panel.svg" /> : ""}
								</Picture>
							);
						},
					)}

					<span className="calendar-title-cell text-xl text-white font-bold">
						Other / Fun
					</span>
					{events[eventOrder[eventIndex]]["Other / Fun"].map(
						(event: any, index: React.Key | null | undefined) => {
							return (
								<Picture
									key={index}
									className={
										"calendar-grid-cell text-center" +
										(event ? " calendar-other" : "")
									}
								>
									{event ? <img src="/assets/svgs/calendar/other.svg" /> : ""}
								</Picture>
							);
						},
					)}
				</div>
			</div>
			<CalendarDescription
				type={CDT.CEREMONY}
				title={descDetails?.title || ""}
				description={descDetails?.description || ""}
				time={descDetails?.time || ""}
				link={descDetails?.link || ""}
				show={descPos.x !== -1 && descPos.y !== -1}
				position={descPos}
			/>
		</div>
	);
};
