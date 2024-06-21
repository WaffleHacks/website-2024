'use client';
import { Picture, ScavContext } from '@/components';
import { Button } from '@nextui-org/button';
import { useQueryState } from 'nuqs';
import type React from 'react';
import { Suspense, useContext, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import CalendarDescription from './CalendarDescription';
import { CalendarDescriptionType as CDT } from './CalendarDescription';

interface EventStructure {
	title: string;
	description: string;
	time: string;
	link: string;
	type: CDT;
}

interface EventList {
	Ceremonies: (EventStructure | null)[];
	Workshops: (EventStructure | null)[];
	Panels: (EventStructure | null)[];
	'Other / Fun': (EventStructure | null)[];
}

const calendarButton: string =
	'flex items-center justify-center rounded-lg bg-white w-10 h-10 text-black';

export const CalendarPanel = () => {
	const [eventIndex, setEventIndex] = useQueryState('day', {
		parse: Number,
		defaultValue: 0,
		clearOnDefault: true,
	});
	const eventOrder: string[] = ['Wednesday, June 19th', 'Thursday, June 20th', 'Friday, June 21st', 'Saturday, June 22nd', 'Sunday, June 23rd'];
	const events: EventList[] = [
		{
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
				{
					title: 'Intro to Cloud Computing',
					description: 'Welcome to WaffleHacks 2023!',
					time: '11:00 PM - 12:00 AM',
					link: 'https://meet.google.com/kcv-ypvk-kmb',
					type: CDT.TECHNICAL,
				},
				
			],
			Panels: [
				null, null, null, null, null, null, null, {
					title: 'Hackathon Strategy w/ Audrey Chen',
					description: 'Welcome to WaffleHacks 2023!',
					time: '5:30 PM - 6:30 PM',
					link: '',
					type: CDT.CAREER,
				}, null, null, null, null, null, null
			],
			'Other / Fun': [
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
		{
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
			Panels: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
			'Other / Fun': [
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
		{
			Ceremonies: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				{
					title: 'Opening Ceremony',
					description: 'Welcome to WaffleHacks 2024!',
					time: '5:00 PM - 6:00 PM',
					link: '',
					type: CDT.CEREMONY,
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
				{
					title: 'Intro to UI/UX with Figma',
					description: 'Welcome to WaffleHacks 2023!',
					time: '7:00 PM - 8:30 PM',
					link: 'https://meet.google.com/mrj-zcfz-vob',
					type: CDT.TECHNICAL,
				},
				{
					title: 'Intro to Web Development',
					description: 'Welcome to WaffleHacks 2023!',
					time: '8:30 PM - 10:00 PM',
					link: 'https://meet.google.com/vsv-jswx-ofa',
					type: CDT.TECHNICAL,
				},
				{
					title: 'Start Up Workshop',
					description: '',
					time: '10:00 PM - 11:30 PM',
					link: 'https://meet.google.com/uiv-mgzx-rns',
					type: CDT.CAREER,
				},
				null,
			],
			Panels: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
			'Other / Fun': [
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
		{
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
				{
					title: 'Performance Estimation w/ Greg Zborovsky',
					description: '',
					time: '2:00 PM - 3:00 PM',
					link: 'meet.google.com/hdj-gabf-fxs ',
					type: CDT.TECHNICAL,
				},
				null,
				{
					title: 'Intro to Mobile Development w/ Mike Odnis',
					description: '',
					time: '4:00 PM - 5:00 PM',
					link: 'https://meet.google.com/kdv-zwga-nkk',
					type: CDT.TECHNICAL,
				},
				{
					title: 'Intermediate Application Development with Google Cloud w/ Mike Odnis',
					description: '',
					time: '5:00 PM - 6:00 PM',
					link: 'https://meet.google.com/rjc-yfmk-mex',
					type: CDT.TECHNICAL,
				},
				null,
				null,
				null,
				null,
				null,
				null,
			],
			Panels: [
				{
					title: 'Resume Workshop w/ Kevin Liao',
					description: '',
					time: '10:00 AM - 11:00 AM',
					link: 'https://meet.google.com/hgt-hfsm-foa',
					type: CDT.CAREER,
				},
				null,
				{
					title: 'Breaking into Alternative CS Careers',
					description: '',
					time: '12:00 PM - 1:00 PM',
					link: 'https://meet.google.com/xwa-cced-gkp',
					type: CDT.CAREER,
				},
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
			'Other / Fun': [
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
		{
			Ceremonies: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				{
					title: 'Closing Ceremony',
					description: 'Thank you for attending WaffleHacks 2023!',
					time: '5:00 PM',
					link: '',
					type: CDT.CEREMONY,
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
			Panels: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
			'Other / Fun': [
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
	];

	const calendar_box = useRef<HTMLDivElement>(null);
	const [descPos, setDescPos] = useState({ x: -1, y: -1 });
	const [descDetails, setDescDetails] = useState<EventStructure | null>(null);
	const [openNum, setOpenNum] = useState(-1);

	const [waf1Done, setWaf1Done] = useState(false);

	const ctx = useContext(ScavContext);

	function setDesc(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, event: EventStructure) {
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
			if (section['Other / Fun'][i]) items.push(section['Other / Fun'][i]);
		}
		return items;
	}

	function waf1Finish() {
		setWaf1Done(true);

		setTimeout(() => ctx.waffle.setHidingSpot(ctx.waffle.hidingSpot + 1), 500);
	}

	return (
		<>
			<div
				className={`
				w-full px-10
			`}
			>
				<h2
					className={`
					text-4xl font-semibold text-center sm:text-left max-w-screen-2xl flex items-center sm:justify-between justify-center mx-auto mb-4 mt-4
					`}
				>
					Calendar
				</h2>
			</div>
			<article className="max-w-screen-2xl mx-auto w-full">
				<div
					ref={calendar_box}
					className="font-mplus p-2 relative text-[#3C2415] w-full"
					onClick={() => setDescPos({ x: -1, y: -1 })}
				>
					{ctx.scavState && ctx.waffle.hidingSpot == 0 && (
						<button
							id="waf1"
							className={'absolute top-0' + (waf1Done ? ' finished' : '')}
							onClick={waf1Finish}
						>
							<img src="/assets/svgs/scav/wawa.svg" alt="" className="w-16" />
						</button>
					)}
					<div className="sm:py-6 sm:px-8 bg-[#f0f0f0] rounded-xl flex flex-col backdrop-filter backdrop-blur-xl text-black w-full">
						{/* header with day and buttons */}
						<div className="flex flex-col p-4 gap-2 sm:gap-0 items-center sm:grid sm:grid-cols-2 md:grid-cols-3">
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
									aria-label="Previous"
								>
									<FaArrowLeft size={20} />
								</Button>
								<Button
									className={calendarButton}
									onClick={() => {
										setEventIndex(Math.min(eventOrder.length - 1, eventIndex + 1));
									}}
									aria-label="Next"
								>
									<FaArrowRight size={20} />
								</Button>
							</div>
						</div>

						{/* large screen calendar grid */}
						{/* {825} */}
						<div className="calendar-grid w-full mt-4 hidden calendar:grid">
							<span />
							{[
								'10 AM',
								'11 AM',
								'12 PM',
								'1 PM',
								'2 PM',
								'3 PM',
								'4 PM',
								'5 PM',
								'6 PM',
								'7 PM',
								'8 PM',
								'9 PM',
								'10 PM',
								'11 PM',
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
							{(events[eventIndex] as EventList).Ceremonies.map(
								(event: EventStructure | null, index: number) => {
									return (
										<div
											key={index}
											className={
												'calendar-grid-cell text-center' + (event ? ' calendar-ceremony event' : '')
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
								}
							)}

							<span className="calendar-title-cell text-xl text-[#3C2415] font-bold">
								Workshops
							</span>
							{(events[eventIndex] as EventList).Workshops.map(
								(event: EventStructure | null, index: number) => {
									return (
										<div
											key={index}
											className={
												'calendar-grid-cell text-center' +
												(event ? ` calendar-${event.type} event` : '')
											}
										>
											{event && (
												<button
													onClick={(e) => setDesc(e, event as EventStructure)}
													aria-label={event.title}
												>
													<img src="/assets/svgs/calendar/wrench.svg" alt="" />
												</button>
											)}
										</div>
									);
								}
							)}

							<span
								className={`
							calendar-title-cell text-xl text-[#3C2415]
							font-bold
						`}
							>
								Panels
							</span>
							{(events[eventIndex] as EventList)['Panels'].map((event: any, index: number) => {
								return (
									<div
										key={index}
										className={
											'calendar-grid-cell text-center' +
											(event ? ` calendar-${event.type} event` : '')
										}
									>
										{event && (
											<button
												onClick={(e) => setDesc(e, event as EventStructure)}
												aria-label={event.title}
											>
												<img src="/assets/svgs/calendar/panel.svg" alt="" />
											</button>
										)}
									</div>
								);
							})}

							<span className="calendar-title-cell text-xl text-[#3C2415] font-bold">
								Other / Fun
							</span>
							{(events[eventIndex] as EventList)['Other / Fun'].map((event: any, index: number) => {
								return (
									<Picture
										key={index}
										className={'calendar-grid-cell text-center' + (event ? ' calendar-other' : '')}
									>
										{event ? <img src="/assets/svgs/calendar/other.svg" /> : ''}
									</Picture>
								);
							})}
						</div>

						{/* small screen calendar list*/}
						<div className="flex flex-col mt-4 calendar:hidden max-w-screen-2xl p-4">
							{collapseDay(events[eventIndex] as EventList).map((event: any, index: number) => {
								return (
									<button
										key={index}
										onClick={(e) => setOpenNum((n) => (index == n ? -1 : index))}
										className={
											'calendar-list-cell text-center text-black bg-white/75 hover:bg-white transition-colors duration-300 rounded-lg p-4 mb-3' +
											(event ? ' event' : '')
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
							})}
						</div>
					</div>
					<CalendarDescription
						type={descDetails?.type || CDT.OTHER}
						title={descDetails?.title || ''}
						description={descDetails?.description || ''}
						time={descDetails?.time || ''}
						link={descDetails?.link || ''}
						show={descPos.x !== -1 && descPos.y !== -1}
						position={descPos}
					/>
				</div>
			</article>
		</>
	);
};
