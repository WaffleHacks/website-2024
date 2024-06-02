"use client";
import { Picture } from "@/components";
import { Button } from "@nextui-org/button";
import type React from "react";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
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
	Ceremonies: (EventStructure | unknown)[];
	Workshops: (EventStructure | unknown)[];
	Panels: (EventStructure | unknown)[];
	"Other / Fun": (EventStructure | unknown)[];
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
	const events: EventList[] = [
		{
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
		{
			Ceremonies: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			Workshops: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			Panels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			"Other / Fun": ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		},
		{
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
			Workshops: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			Panels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			"Other / Fun": ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		},
	];

	const calendar_box = useRef<HTMLDivElement>(null);
	const [descPos, setDescPos] = useState({ x: -1, y: -1 });
	const [descDetails, setDescDetails] = useState<EventStructure | null>(null);
	const [openNum, setOpenNum] = useState(-1);

	function setDesc(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		event: EventStructure,
	) {
		if (!calendar_box.current) return;

		const rect = calendar_box.current.getBoundingClientRect();
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

	function collapseDay(section: EventList) {
		const items = [];
		for (let i = 0; i < section.Ceremonies.length; i++) {
			if (section.Ceremonies[i]) items.push(section.Ceremonies[i]);
			if (section.Workshops[i]) items.push(section.Workshops[i]);
			if (section.Panels[i]) items.push(section.Panels[i]);
			if (section["Other / Fun"][i]) items.push(section["Other / Fun"][i]);
		}
		return items;
	}

	return (
		<div
			ref={calendar_box}
			className="font-mplus p-8 relative text-[#3C2415]"
			onClick={() => setDescPos({ x: -1, y: -1 })}
		>
			<div
				className={`
					py-6 px-8 bg-[#bb8653]/80
					rounded-xl flex flex-col
					backdrop-filter backdrop-blur-xl
					text-[#3C2415]
				`}
			>
				{/* header with day and buttons */}
				<div className="flex flex-col gap-2 sm:gap-0 items-center sm:grid sm:grid-cols-2 md:grid-cols-3">
					<span className="hidden md:inline-block" />
					<span className="text-2xl font-bold text-[#3C2415] text-center">
						{eventOrder[eventIndex]}
					</span>
					<div className="text-2xl font-bold text-[#3C2415] text-center flex justify-end gap-4">
						<Button
							className={calendarButton}
							onClick={() => {
								setEventIndex(Math.max(0, eventIndex - 1));
							}}
							arial-label="Previous Day"
						>
							<FaArrowLeft size={20} />
						</Button>
						<Button
							className={calendarButton}
							onClick={() => {
								setEventIndex(Math.min(eventOrder.length - 1, eventIndex + 1));
							}}
							arial-label="Next Day"
						>
							<FaArrowRight size={20} />
						</Button>
					</div>
				</div>

				{/* large screen calendar grid */}
				<div className="calendar-grid w-full mt-4 hidden md:grid">
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
								className="calendar-title-cell text-[#3C2415] text-center font-bold"
							>
								{time}
							</div>
						);
					})}
					<span className="calendar-title-cell text-xl text-[#3C2415] font-bold">
						Ceremonies
					</span>
					{(events[eventIndex] as EventList)["Ceremonies"].map(
						(event: any, index: React.Key | null | undefined) => {
							return (
								<div
									key={index}
									className={
										"calendar-grid-cell text-center" +
										(event ? " calendar-ceremony event" : "")
									}
								>
									{event && (
										<button
											onClick={(e) => setDesc(e, event as EventStructure)}
											aria-label={event.title}
										>
											<img src="/assets/svgs/calendar/curtains.svg" alt="" />
										</button>
									)}
								</div>
							);
						},
					)}

					<span className="calendar-title-cell text-xl text-[#3C2415] font-bold">
						Workshops
					</span>
					{(events[eventIndex] as EventList)["Workshops"].map(
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
							calendar-title-cell text-xl text-[#3C2415]
							font-bold
						`}
					>
						Panels
					</span>
					{(events[eventIndex] as EventList)["Panels"].map(
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

					<span className="calendar-title-cell text-xl text-[#3C2415] font-bold">
						Other / Fun
					</span>
					{(events[eventIndex] as EventList)["Other / Fun"].map(
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

				{/* small screen calendar list*/}
				<div className="flex flex-col mt-4 md:hidden">
					{collapseDay(events[eventIndex] as EventList).map(
						(event: any, index: number) => {
							return (
								<button
									key={index}
									onClick={(e) => setOpenNum((n) => (index == n ? -1 : index))}
									className={
										"calendar-list-cell text-center text-black bg-white/75 hover:bg-white transition-colors duration-300 rounded-lg p-4" +
										(event ? " event" : "")
									}
								>
									<h2 className="text-xl font-bold">{event.title}</h2>

									{index == openNum && (
										<div className="text-left">
											<p>{event.description}</p>
											<p className="mt-2">Time: {event.time}</p>
											{event.link && <a href={event.link}>Link Here</a>}
										</div>
									)}
								</button>
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
