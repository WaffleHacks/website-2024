'use client';
import { heading_style } from '@/components';
import { cn } from '@/lib';
import { Slugify } from '@/utils';
import React from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import {
	AboutPanel,
	ApplyPanel,
	CalendarPanel,
	FaqPanel,
	SponsorsPanel,
	TeamPanel,
	TracksPanel,
} from '.';

export const PageSections = () => {
	const sections: { [key: string]: string } = {
		about: 'About',
		calendar: 'Calendar',
		tracks: 'Tracks and Awards',
		team: 'Meet the Team',
		sponsors: 'Sponsors',
		faqs: 'FAQs',
		apply: 'Apply',
	};

	useIsomorphicLayoutEffect(() => {
		const pathname = window.location.href as string;
		const hash = pathname.split('#')[1]?.split('?')[0];
		if (hash) {
			const element = document.getElementById(hash) as HTMLElement;
			const elementRect = element?.getBoundingClientRect();
			const absoluteElementTop = elementRect?.top + window.scrollY;
			const middle =
				absoluteElementTop +
				Math.floor(elementRect?.height / 2) -
				Math.floor(window.innerHeight / 2);
			if (element) {
				window.scrollTo({
					top: middle,
					behavior: 'smooth',
				});
			}
		}
	});

	return (
		<>
			{Object.entries(sections).map(([key, value]) => {
				const Sections = {
					about: AboutPanel,
					calendar: CalendarPanel,
					tracks: TracksPanel,
					team: TeamPanel,
					sponsors: SponsorsPanel,
					faqs: FaqPanel,
					apply: ApplyPanel,
				}[key];

				return (
					<section
						id={Slugify(value.toLowerCase())}
						key={Slugify(value.toLowerCase())}
						className="flex items-center justify-center flex-col w-full"
					>
						{value !== 'About' && value !== 'Apply' && (
							<h2 className={cn(heading_style, `mx-8 sr-only`)} aria-label={`Section: ${value}`}>
								{value}
							</h2>
						)}
						{Sections && <Sections />}
					</section>
				);
			})}
		</>
	);
};
