import React from 'react'

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
}

const CalendarDescription = ({type, title, description, time, link}: CalendarDescriptionProps) => {
    const colors = {
        [CalendarDescriptionType.CEREMONY]: 'bg-yellow-600',
        [CalendarDescriptionType.TECHNICAL]: 'bg-blue-600',
        [CalendarDescriptionType.CAREER]: 'bg-green-600',
        [CalendarDescriptionType.COMPETITION]: 'bg-red-600',
        [CalendarDescriptionType.PANEL]: 'bg-purple-600',
        [CalendarDescriptionType.OTHER]: 'bg-gray-600',
    }
    const smallDescriptions = {
        [CalendarDescriptionType.CEREMONY]: 'Ceremony',
        [CalendarDescriptionType.TECHNICAL]: 'Technical Workshop',
        [CalendarDescriptionType.CAREER]: 'Career Workshop',
        [CalendarDescriptionType.COMPETITION]: 'Competition',
        [CalendarDescriptionType.PANEL]: 'Panel',
        [CalendarDescriptionType.OTHER]: 'Other',
    }
  return (
    <div>
        <div className='flex'>
            {/* dot of color */}
            <div className={`h-4 w-4 rounded-full ${colors[type]}`}></div>
            {/* small description */}
            <span className='text-sm'>{smallDescriptions[type]}</span>
        </div>
    </div>
  )
}

export default CalendarDescription