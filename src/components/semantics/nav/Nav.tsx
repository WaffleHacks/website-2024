'use client';

import { CustomPicture as Picture, ScavContext } from '@/components';
import Switch from '@mui/material/Switch';
import { Tooltip } from '@nextui-org/tooltip';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useRef, useState } from 'react';

import { DraggableCore, type DraggableData, type DraggableEvent } from 'react-draggable';
import AppleDialog from '@/app/(main)/_components/AppleDialog';
import { cn } from '@/lib';
import { ScrollIntoCenterView } from '@/utils';
import { useRouter, usePathname } from 'next/navigation';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export const NavBar = React.memo(() => {
	const Links: ReadonlyArray<{
		href: string;
		text: string;
	}> = [
		{ href: "#about", text: "About" },
		{ href: "#calendar", text: "Schedule" },
		{ href: "#tracks-and-awards", text: "Tracks & Prizes" },
		{ href: "#meet-the-team", text: "Team" },
		{ href: "#sponsors", text: "Sponsors" },
		{ href: "#faqs", text: "FAQs" },
	];

	const [mobileDown, setMobileDown] = useState(false);

	const label = { inputProps: { 'aria-label': 'Scav switch' } };

	const { scavState, setScavState, archer, shards } = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [appleImg, setAppleImg] = useState('apple1');
	const [appleX, setAppleX] = useState<number>(-100);
	const [appleY, setAppleY] = useState<number>(0);
	const walkInterval = useRef<NodeJS.Timeout | null>();
	const fallInterval = useRef<NodeJS.Timeout | null>();
	const fallSpeed = useRef(1);
	const [appleGone, setAppleGone] = useState(false);
	const [appleTalking, setAppleTalking] = useState(false);
	const appleHasTalked = useRef(false);

	function setScav(e: React.ChangeEvent<HTMLInputElement>) {
		setScavState(e.target.checked);
		if (e.target.checked) document.body.classList.add('scav');
		else document.body.classList.remove('scav');
	}

	function appleInterval() {
		if (archer.headshot && !appleHasTalked.current) {
			clearInterval(walkInterval.current as NodeJS.Timeout);
			walkInterval.current = null;
			return;
		}
		const files = ['apple1', 'apple2', 'apple3', 'apple2'];

		setAppleX((x) => {
			let nextX = x + 1;
			let next_ind = Math.floor(nextX / 4) % 4;
			if (next_ind < 0) next_ind = (4 - next_ind + 4) % 4;
			const file = files[next_ind];
			if (file == undefined) {
				console.log('undefined', file, next_ind);
			}
			setAppleImg(files[next_ind] as string);
			if (nextX > window.innerWidth) nextX = -100;
			return nextX;
		});
	}

	useIsomorphicLayoutEffect(() => {
		if (walkInterval.current) {
			clearInterval(walkInterval.current);
			walkInterval.current = null;
		}
		if (scavState) {
			walkInterval.current = setInterval(appleInterval, 25);
		} else {
			setAppleY(0);
			clearInterval(fallInterval.current as NodeJS.Timeout);
		}
		return () => clearInterval(walkInterval.current as NodeJS.Timeout);
	}, [scavState]);

	function appleDrag(e: DraggableEvent, pos: DraggableData) {
		clearInterval(walkInterval.current as NodeJS.Timeout);
		walkInterval.current = null;

		const ap = apple.current;
		if (!ap) return;
		const navRect = document.querySelector('nav')?.getBoundingClientRect();
		if (!navRect) return;
		const apRect = ap.getBoundingClientRect();

		const headspot1 = archer.headspot1;
		const headspot2 = archer.headspot2;

		let h1: [number, number, number, number] = [-1000, -1000, -1000, -1000];
		let h2: [number, number, number, number] = [-1000, -1000, -1000, -1000];

		if (headspot1?.current) {
			h1 = [
				headspot1.current.getBoundingClientRect().left,
				headspot1.current.getBoundingClientRect().right,
				headspot1.current.getBoundingClientRect().top,
				headspot1.current.getBoundingClientRect().bottom,
			];
		}
		if (headspot2?.current) {
			h2 = [
				headspot2.current.getBoundingClientRect().left,
				headspot2.current.getBoundingClientRect().right,
				headspot2.current.getBoundingClientRect().top,
				headspot2.current.getBoundingClientRect().bottom,
			];
		}

		const mouseX = pos.x - (pos.lastX - apRect.right);
		const mouseY = pos.y - (pos.lastY - apRect.bottom);

		const mx = (e as any).clientX;
		const my = (e as any).clientY;

		if (mx > h1[0] && mx < h1[1] && my > h1[2] && my < h1[3]) {
			setAppleY(navRect.bottom - h1[3] - apRect.height / 8);
			setAppleX(window.innerWidth - (h1[0] + h1[1]) / 2 - (3 * apRect.width) / 5);
			archer.activeHeadSpot.current = 1;
		} else if (mx > h2[0] && mx < h2[1] && my > h2[2] && my < h2[3]) {
			setAppleY(navRect.bottom - h2[3] - apRect.height / 8);
			setAppleX(window.innerWidth - (h2[0] + h2[1]) / 2 - (3 * apRect.width) / 5);
			archer.activeHeadSpot.current = 2;
		} else {
			setAppleY(navRect.bottom - mouseY);
			setAppleX(window.innerWidth - mouseX);
			archer.activeHeadSpot.current = -1;
		}

		setAppleImg('applesit');
	}
	function appleDragStop() {
		const ap = apple.current;
		if (!ap) return;
		const appleRect = ap.getBoundingClientRect();
		const navRect = document.querySelector('nav')?.getBoundingClientRect();
		if (!navRect) return;
		if (appleRect.bottom <= navRect.bottom) {
			ap.style.bottom = '0';
			ap.style.top = 'unset';
			setAppleY(0);
			if (!appleHasTalked.current && archer.headshot) {
				setAppleTalking(true);
			} else if (!walkInterval.current) {
				walkInterval.current = setInterval(appleInterval, 25);
			}
		} else if (archer.headshot && !fallInterval.current) {
			fallSpeed.current = 1;
			fallInterval.current = setInterval(appleFall, 25);
		}
	}

	function appleFall() {
		if (!apple.current) return;
		if (!archer.headshot) return;
		if (!archer.landing1?.current || !archer.landing2?.current) return;

		const landing1 = archer.landing1.current.getBoundingClientRect();
		const landing2 = archer.landing2.current.getBoundingClientRect();
		const ap = apple.current.getBoundingClientRect();

		const l1_mid = landing1.top + landing1.height / 2;
		const l2_mid = landing2.top + landing2.height / 2;

		const ap_mid_x = ap.left + ap.width / 2;

		let fall = true;

		if (
			(ap_mid_x > landing1.left &&
				ap_mid_x < landing1.right &&
				ap.bottom >= l1_mid &&
				ap.bottom < landing1.bottom) ||
			(ap_mid_x > landing2.left &&
				ap_mid_x < landing2.right &&
				ap.bottom >= l2_mid &&
				ap.bottom < landing2.bottom)
		) {
			fall = false;
		}
		if (ap.top > window.innerHeight) {
			fall = false;
			setAppleGone(true);
		}

		if (fall) {
			setAppleY((y) => y - fallSpeed.current);
			fallSpeed.current += 0.5;
		} else {
			clearInterval(fallInterval.current as NodeJS.Timeout);
			fallInterval.current = null;
		}
	}

	useIsomorphicLayoutEffect(() => {
		if (!scavState)
			return () => {
				clearInterval(fallInterval.current as NodeJS.Timeout);
				fallInterval.current = null;
			};

		if (archer.headshot && !fallInterval.current) {
			// check if apple should fall
			const ap = apple.current;
			if (!ap) return;
			const appleRect = ap.getBoundingClientRect();
			const navRect = document.querySelector('nav')?.getBoundingClientRect();
			if (!navRect) return;
			if (appleRect.bottom > navRect.bottom) {
				fallSpeed.current = 1;
				fallInterval.current = setInterval(appleFall, 25);
			}
		}
	}, [scavState, archer.headshot]);

	function appyFinishTalking() {
		setAppleTalking(false);
		shards.setShards([...shards.shards, 2]);
		appleHasTalked.current = true;
		if (!walkInterval.current) {
			walkInterval.current = setInterval(appleInterval, 25);
		}
	}

	useIsomorphicLayoutEffect(() => {
		const body = document.querySelector('body') as HTMLBodyElement;
		if (mobileDown)  body.classList.add('overflow-y-hidden')
		
		return () => {
			body.classList.remove('overflow-y-hidden');
		}
	},[mobileDown])

	const 
		router = useRouter(),
		pathname: string = usePathname(),
		isTeam: boolean = pathname.includes('/team'),
		isLegal: boolean = pathname.includes('/legal'),
		is404: boolean = !isTeam && !isLegal && pathname !== '/';

	return (
		<>
			{/* mobile dropdown menu */}
			<div
				style={{ height: mobileDown ? '100vh' : '0' }}
				className={`
					mobile-nav-slide fixed z-40 top-[100px]
					left-0 w-full shadow-lg overflow-hidden
					nav-links:hidden text-[#3C2415] backdrop-blur-lg
				`}
			>
				<ul>
					{Links.map((link, index) => (
						<li
							key={index}
							className={`
							text-center py-4
							hover:bg-[#f5f5f5]
						`}
						>
							<Link
								href={link.href}
								onClick={(e) => {
									e.preventDefault();
									setMobileDown(false);
									if (isTeam || is404 || isLegal) {
										router.push(`/${link.href}`);
									} else {
										ScrollIntoCenterView(link.href);
									} 
								}}
								className={`
									text-semibold text-lg
								`}
							>
								<p>{link.text}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
			{/* main navbar */}
			<nav
				className={cn(
					'',
					`navbar fixed top-0 z-50
					w-full flex flex-row justify-between h-[100px] p-4
					shadow-lg font-semibold items-center
					px-4`
				)}
			>
				<div className="flex items-center justify-between p-5 w-full max-w-screen-2xl mx-auto">
					<div className="flex gap-8 justify-center items-center">
						<Picture
							className={`
							`}
							onClick={() => router.push('/')}
						>
							<Image
								src={`/assets/svgs/header.webp`}
								alt={``}
								height={80}
								width={80}
								className={`
									cursor-pointer
									object-cover object-center
								`}
							/>
						</Picture>
						<ul
							className={`
								hidden nav-links:flex flex-wrap
							`}
						>
							{Links.map((link, index) => (
								<li key={index} className="ml-0 nav-links:ml-4">
									<Link
										href={link.href}
										onClick={(e) => {
											e.preventDefault();
											if (isTeam || is404 || isLegal) {
												router.push(`/${link.href}`);
											} else {
												ScrollIntoCenterView(link.href);
												} 
										}}
									>
										<span className="hover:font-bold">
											{link.text}
										</span>
									</Link>
								</li>
							))}
							<li className="ml-0 nav-links:ml-4">
								<a href="https://apply.wafflehacks.org/" className="font-[400]  hover:font-bold" target="_blank">
									Apply
								</a>
							</li>
						</ul>
					</div>

					{/* Scavenger hunt toggle */}
					<form className="ml-auto nav-links:flex justify-end items-center hidden">
						<Tooltip
							placement="bottom"
							content="Toggle Scavenger Hunt Mode"
							color="primary"
							offset={-5}
						>
							<Switch
								{...label}
								onChange={setScav}
								value={scavState}
								sx={{
									'& .MuiSwitch-switchBase.Mui-checked': {
										color: '#3C2415',
										'&:hover': {
											backgroundColor: 'rgba(60,36,21,0.08)',
										},
									},
									'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
										backgroundColor: '#3C2415',
									},
								}}
								disabled={true}
							/>
						</Tooltip>
					</form>

					{/* Mobile menu toggle */}
					<button
						className={`nav-links:hidden w-12 h-12 relative p-4`}
						onClick={() => setMobileDown(!mobileDown)}
						aria-label="Mobile Menu Toggle"
					>
						<div
							className="absolute bg-black w-full h-[3px] transition-all duration-300"
							style={{
								top: mobileDown ? 'calc(50% - 1.5px)' : '33%',
								transform: mobileDown ? 'rotate(45deg)' : '',
							}}
						></div>
						<div
							className="absolute bg-black w-full h-[3px] transition-all duration-300"
							style={{
								bottom: mobileDown ? 'calc(50% - 1.5px)' : '33%',
								transform: mobileDown ? 'rotate(-45deg)' : '',
							}}
						></div>
					</button>

					{scavState && !appleGone && (
						<DraggableCore onDrag={appleDrag} onStop={appleDragStop}>
							<img
								ref={apple}
								src={`/assets/svgs/nav/${appleImg}.svg`}
								alt="apple"
								className="no-drag"
								style={{
									position: 'absolute',
									bottom: `${appleY}px`,
									width: '4rem',
									right: `${appleX}px`,
								}}
							/>
						</DraggableCore>
					)}

					{scavState && appleTalking && (
						<AppleDialog
							whenDone={appyFinishTalking}
							className="absolute top-[100%] bg-white rounded-lg shadow-lg p-4 max-w-[16rem]"
							style={{ right: appleX + 80 + 'px', top: `calc(100% - 30px)` }}
						/>
					)}
				</div>

				{
					scavState && <>
					<div 
						className="bg-slate-400/75 backdrop-blur-sm p-4 absolute top-[120%] flex flex-col gap-4 rounded-r-xl"
						style={{
							left: shards.shards.length > 0 ? 0 : -200,
							transition: "left 0.5s ease-in-out"
						}}
					>
						<span className="text-xl font-bold">Inventory</span>
						{
							shards.shards.map(s => (
								<img className="w-16" src={`/assets/svgs/scav/shard${s}.svg`} alt="" />
							))
						}
					</div>
					</>
				}
			</nav>
		</>
	);
});
