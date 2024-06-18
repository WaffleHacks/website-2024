'use client';

import { Article, CustomPicture as Picture, ScavContext, Slide } from '@/components';
import { cn } from '@/lib';
import { Button, Card } from '@nextui-org/react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useMediaQuery } from 'usehooks-ts';
import { TeamCard } from '../_components';
import { TeamMemberData, TeamMembers } from '../_components/Teams';
import React, { useContext, useEffect, useState } from 'react';
import InlineDialogSystem from '../_components/InlineDialogSystem';

export const TeamPanel = () => {
	const [currentIndex, setCurrentIndex] = useQueryState('team', {
		parse: Number,
		defaultValue: 0,
		clearOnDefault: true,
	});

	const isXLarge = useMediaQuery('(min-width: 1500px)');
	const isLarge = useMediaQuery('(min-width: 1200px)');
	const isMedium = useMediaQuery('(min-width: 890px)');
	const isSmall = useMediaQuery('(min-width: 640px)');
	const isMediumOrLarger = isMedium || isLarge || isXLarge;

	const PANEL_PATH = '/assets/images/team/panel/';

	const fileToName = (file: string) => file?.split('/').pop()?.replace('.webp', '');

	const handleNext = () => {
		let nextIndex = currentIndex + howMuchToShow;
		if (nextIndex >= TeamMembers.length) {
			nextIndex = TeamMembers.length - 1;
		}
		setCurrentIndex(nextIndex);
	};

	const handlePrev = () => {
		let prevIndex = currentIndex - howMuchToShow;
		if (prevIndex < 0) {
			prevIndex = 0;
		}
		setCurrentIndex(prevIndex);
	};

	const howMuchToShow = isXLarge ? 5 : isLarge ? 4 : isMedium ? 3 : isSmall ? 2 : 1;

	const ctx = useContext(ScavContext);
	const [showPopupCard, setShowPopupCard] = useState(false);
	const [popupX, setPopupX] = useState(-1);
	const [memberToShow, setMemberToShow] = useState<TeamMemberData | undefined>();
	const containerRect = React.useRef<HTMLDivElement>(null);
	const [dialogChild, setDialogChild] = useState(0);


	function setPopup(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number){
		if(!containerRect.current) return;

		if (TeamMembers[index] == memberToShow){
			setShowPopupCard(false);
			setMemberToShow(undefined);
			return;
		}

		let element = e.currentTarget;
		let rect = element.getBoundingClientRect();
		let contRect = containerRect.current.getBoundingClientRect();
		let midX = rect.left + rect.width / 2 - contRect.left;
		setPopupX(midX);
		setShowPopupCard(true);
		setMemberToShow(TeamMembers[index]);
	}

	useEffect(() => {
		setShowPopupCard(false);
	}, [howMuchToShow, currentIndex]);

	return (
		<>
			<Article className="mt-2 px-10 w-full mb-8 relative">
				<div  ref={containerRect} className='w-full h-full relative'>
				<h2
					className={`
							text-4xl font-semibold text-center sm:text-left max-w-screen-2xl flex items-center sm:justify-between justify-center mx-auto mb-4 mt-4
					`}
				>
					Meet the Team
				</h2>
				<div className="w-full">
					<div className="relative">
						<div className="flex space-x-4 flex-row items-center justify-center mx-auto gap-2">
							{TeamMembers.slice(currentIndex, currentIndex + howMuchToShow).map(
								(member, index) => (
									<Slide key={currentIndex + index} delay={(index + 1) * 0.1}>
										{
											!ctx.scavState ?
											<Link
												href={`/team/${fileToName(
													member.name.toLowerCase().split(' ')[0] as string
												)}`}
											>
												<Card className="relative overflow-hidden h-[210px] min-w-[210px] bg-[#f5f5f5] hover:bg-[#e0e0e0] transition-colors transition-duration-800 rounded-xl flex justify-center items-center shadow-lg border-none cursor-pointer">
													<Picture className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-xl overflow-hidden mix-blend-multiply">
														<img
															src={PANEL_PATH + member.photo_name + '.webp'}
															alt={member.name}
															className="object-cover mix-blend-multiply relative"
														/>
													</Picture>
												</Card>
											</Link>
											:
											<button onClick={e => setPopup(e, currentIndex + index)}>
												<Card className="relative overflow-hidden h-[210px] min-w-[210px] bg-[#f5f5f5] hover:bg-[#e0e0e0] transition-colors transition-duration-800 rounded-xl flex justify-center items-center shadow-lg border-none cursor-pointer">
													<Picture className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-xl overflow-hidden mix-blend-multiply">
														<img
															src={PANEL_PATH + member.photo_name + '.webp'}
															alt={member.name}
															className="object-cover mix-blend-multiply relative"
														/>
													</Picture>
												</Card>
											</button>
										}
										
									</Slide>
								)
							)}
						</div>
					</div>
				</div>
				<menu
					className={`
					max-w-screen-2xl rounded-lg
					flex items-center justify-between bg-gray-100/50 p-4 shadow-md mt-6 mx-auto 
					${isMediumOrLarger ? 'w-1/2' : 'w-full'}
				`}
				>
					{currentIndex > 0 && (
						<li className="flex">
							<Button
								onClick={handlePrev}
								className={cn('', 'mr-2 rounded-md')}
								color={`primary`}
								aria-label="Previous"
							>
								<FaArrowLeft size={20} color={`#f5f5f5`} />
							</Button>
						</li>
					)}
					<li className="text-lg font-semibold whitespace-nowrap overflow-hidden text-overflow-ellipsis hidden sm:flex">
						{currentIndex + 1} - {Math.min(currentIndex + howMuchToShow, TeamMembers.length)} of{' '}
						{TeamMembers.length}
					</li>
					{currentIndex < TeamMembers.length - howMuchToShow && (
						<li>
							<Button
								onClick={handleNext}
								className={cn('', 'ml-2 rounded-md')}
								color={`primary`}
								aria-label="Next"
							>
								<FaArrowRight size={20} color={`#f5f5f5`} />
							</Button>
						</li>
					)}
				</menu>
				{
					(ctx.scavState && showPopupCard) && 
					<div className='team-topcard absolute p-4 bottom-full' style={{
						transform: `translateX(-50%)`, 
						left: popupX,
						bottom: 'calc(100% - 10px)'
					}}>
						<div className='card-spike'>
							<div className='card-spike-inner'></div>
						</div>
						{
							(memberToShow?.photo_name == 'tammy' && ctx.waffle.hidingSpot >= 2) ?
							<InlineDialogSystem child={dialogChild} className='max-w-64'>
								<div>
									<span>Hello there. I guess you found me.</span>
									<br />
									<span>Can I get some me time now?</span>
									<br />
									<button className='bg-gray-300 px-2 py-px rounded-md' onClick={() => setDialogChild(1)}>Next</button>
								</div>
								<div>
									<span>No? What if I give you a random piece of paper I found?</span>
									<br />
									<button className='bg-gray-300 px-2 py-px rounded-md' onClick={() => {
										setDialogChild(2);
										ctx.shards.setShards([...ctx.shards.shards, 3]);
									}}>Well, sure</button>
								</div>
								<div className='w-64 aspect-[1] relative'>
									<div className='border-l-2 border-black h-[33%] absolute left-1/2 top-[10%]'></div>
									
									<img 
											src="/assets/svgs/landing/scav/tape.svg" 
											alt="" 
											className='w-[5.5rem] absolute left-1/2 top-[10px]' 
											style={{transform: 'translateX(-50%) rotate(42deg)'}}
									/>
									
									{
										!ctx.shards.shards.includes(4) &&
										<button
											className='w-24 absolute left-1/2' 
											style={{transform: 'translateX(-50%)'}}
											onClick={() => ctx.shards.setShards([...ctx.shards.shards, 4])}
										>
											<img 
												src="/assets/svgs/landing/scav/tape.svg" 
												alt="" 
											/>
										</button>
									}
									
									
									<div 
										className='bg-white shadow-lg flex flex-col gap-2 items-center text-xl p-4 border-2 border-gray-300 absolute left-1/2 top-[35%]'
										style={{transform: 'translateX(-50%)', width: 'calc(100% - 2rem)'}}
									>
										<span>Hacking</span>
										<span>In</span>
										<span>Progress</span>
										<img 
											className='absolute w-12 right-3 top-[23%]' 
											style={{transform: 'rotate(-32deg)'}}
											src="/assets/svgs/scav/wawa.svg" 
										alt="" />
									</div>
								</div>
							</InlineDialogSystem>
							
							:
							<TeamCard member={memberToShow as TeamMemberData} style={{
								height: '50vh'
							}} />
						}
						
					</div>
				}
				</div>
			</Article>
		</>
	);
};
