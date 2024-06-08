import React from 'react';

export enum CalendarDescriptionType {
	CEREMONY = 'ceremony',
	TECHNICAL = 'technical',
	CAREER = 'career',
	COMPETITION = 'competition',
	PANEL = 'panel',
	OTHER = 'other',
}

interface CalendarDescriptionProps {
	type: CalendarDescriptionType;
	title: string;
	description: string;
	time: string;
	link?: string;
	show: boolean;
	position: { x: number; y: number };
}

const CalendarDescription = ({
	type,
	title,
	description,
	time,
	link,
	show,
	position,
}: CalendarDescriptionProps) => {
	const colors = {
		[CalendarDescriptionType.CEREMONY]: 'bg-yellow-600',
		[CalendarDescriptionType.TECHNICAL]: 'bg-blue-600',
		[CalendarDescriptionType.CAREER]: 'bg-green-600',
		[CalendarDescriptionType.COMPETITION]: 'bg-red-600',
		[CalendarDescriptionType.PANEL]: 'bg-purple-600',
		[CalendarDescriptionType.OTHER]: 'bg-gray-600',
	};
	const smallDescriptions = {
		[CalendarDescriptionType.CEREMONY]: 'Ceremony',
		[CalendarDescriptionType.TECHNICAL]: 'Technical Workshop',
		[CalendarDescriptionType.CAREER]: 'Career Workshop',
		[CalendarDescriptionType.COMPETITION]: 'Competition',
		[CalendarDescriptionType.PANEL]: 'Panel',
		[CalendarDescriptionType.OTHER]: 'Other',
	};
	return (
		<div
			className={'calendar-desc-card' + (!show ? ' hidden' : '')}
			style={{ top: position.y, left: position.x }}
		>
			<div className="flex gap-2">
				{/* dot of color */}
				<div className={`h-4 w-4 rounded-full ${colors[type]}`}></div>
				{/* small description */}
				<span className="text-sm">{smallDescriptions[type]}</span>
			</div>
			<h2 className="font-bold text-xl mb-4">{title}</h2>
			<p className="text-base mb-4">{description}</p>

			<span>Time: {time}</span>

			<div className="mt-4">
				<a href={link} className="bg-[#2258A2] text-white px-4 py-2 rounded-lg">
					{link == '' ? 'Link Coming Soon' : 'Link'}
				</a>
			</div>
		</div>
	);
};

export default CalendarDescription;
