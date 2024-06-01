"use client";

import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { ScavContext } from "@/components";
import Image from "next/image";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import { Tooltip } from "@nextui-org/tooltip";

import {
	DraggableCore,
	type DraggableData,
	type DraggableEvent,
} from "react-draggable";

import { cn } from "@/lib";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";

export const NavBar = () => {
	const Links: ReadonlyArray<{
		href: string;
		text: string;
	}> = [
		{ href: "#about", text: "About" },
		{ href: "#tracks", text: "Tracks" },
		{ href: "#calendar", text: "Calendar" },
		{ href: "#sponsors", text: "Sponsors" },
		{ href: "#faqs", text: "FAQs" },
		{ href: "#apply", text: "Apply Now" },
	];

	const [mobileDown, setMobileDown] = useState(false);

	const label = { inputProps: { "aria-label": "Scav switch" } };

	let {scavState, setScavState, archer} = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [appleImg, setAppleImg] = useState("apple1");
	const [appleX, setAppleX] = useState<number>(-100);
	const [appleY, setAppleY] = useState<number>(0);
	const walkIinterval = useRef<NodeJS.Timeout>();
	const fallInterval = useRef<NodeJS.Timeout | null>();
	const fallSpeed = useRef(1);

	const [_scrollDirection, setScrollDirection] = useState("scroll-up");

	useIsomorphicLayoutEffect(() => {
		let lastScroll = 0;

		const handleScroll = () => {
			const currentScroll = window.scrollY;
			if (currentScroll <= 0) {
				setScrollDirection("scroll-up");
			} else if (currentScroll > lastScroll) {
				setScrollDirection("scroll-down");
			} else if (currentScroll < lastScroll) {
				setScrollDirection("scroll-up");
			}
			lastScroll = currentScroll;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function setScav(e: React.ChangeEvent<HTMLInputElement>) {
		setScavState(e.target.checked);
		if (e.target.checked) document.body.classList.add("scav");
		else document.body.classList.remove("scav");
	}

	function appleInterval() {
		if (archer.headshot) {
			clearInterval(walkIinterval.current);
			return;
		}
		const files = ["apple1", "apple2", "apple3", "apple2"];

		setAppleX((x) => {
			let nextX = x + 1;
			let next_ind = Math.floor(nextX / 4) % 4;
			if (next_ind < 0) next_ind = (4 - next_ind + 4) % 4;
			const file = files[next_ind];
			if (file == undefined) {
				console.log("undefined", file, next_ind);
			}
			setAppleImg(files[next_ind] as string);
			if (nextX > window.innerWidth) nextX = -100;
			return nextX;
		});
	}

	useIsomorphicLayoutEffect(() => {
		if (walkIinterval.current) {
			clearInterval(walkIinterval.current);
		}
		if (scavState) {
			walkIinterval.current = setInterval(appleInterval, 25);
		}
		else {
			setAppleY(0);
		}
		return () => clearInterval(walkIinterval.current);
	}, [scavState]);

	function appleDrag(e: DraggableEvent, pos: DraggableData) {
		clearInterval(walkIinterval.current);

		const ap = apple.current;
		if (!ap) return;
		const navRect = document.querySelector("nav")?.getBoundingClientRect();
		if (!navRect) return;
		const apRect = ap.getBoundingClientRect();

		let headspot1 = archer.headspot1;
		let headspot2 = archer.headspot2;

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

		if (mx > h1[0] && mx < h1[1] && my > h1[2] && my < h1[3]){
			setAppleY(navRect.bottom - h1[3] - apRect.height/8);
			setAppleX(window.innerWidth - ((h1[0] + h1[1]) / 2) - 3*apRect.width/5);
			archer.activeHeadSpot = 1;
		}
		else if (mx > h2[0] && mx < h2[1] && my > h2[2] && my < h2[3]){
			setAppleY(navRect.bottom - h2[3] - apRect.height/8);
			setAppleX(window.innerWidth - ((h2[0] + h2[1]) / 2) - 3*apRect.width/5);
			archer.activeHeadSpot = 2;
		}
		else {
			setAppleY(navRect.bottom - mouseY);
			setAppleX(window.innerWidth - mouseX);
			archer.activeHeadSpot = -1;
		}

		setAppleImg("applesit");
	}
	function appleDragStop(e: DraggableEvent) {
		const ap = apple.current;
		if (!ap) return;
		const appleRect = ap.getBoundingClientRect();
		const navRect = document.querySelector("nav")?.getBoundingClientRect();
		if (!navRect) return;
		if (appleRect.bottom <= navRect.bottom) {
			ap.style.bottom = "0";
			ap.style.top = "unset";
			setAppleY(0);
			walkIinterval.current = setInterval(appleInterval, 25);
		}
	}

	function appleFall() {
		if (!apple.current) return;
		if (!archer.headshot) return;
		if (!archer.landing1?.current || !archer.landing2?.current) return;

		const landing1 = archer.landing1.current.getBoundingClientRect();
		const landing2 = archer.landing2.current.getBoundingClientRect();
		const ap = apple.current.getBoundingClientRect();

		let l1_mid = landing1.top + landing1.height/2;
		let l2_mid = landing2.top + landing2.height/2;

		// fall to center of landing
		// check for head 1 (tennis, lower)
		if ((ap.left > landing1.left && ap.right < landing1.right && ap.bottom < l1_mid) || 
			(ap.left > landing2.left && ap.right < landing2.right && ap.bottom < l2_mid)) {
			setAppleY(y => y - fallSpeed.current);
			fallSpeed.current += 0.5;
		}
		else {
			clearInterval(fallInterval.current as NodeJS.Timeout);
			fallInterval.current = null;
		}

	}

	useEffect(() => {
		if (!scavState) return () => {
			clearInterval(fallInterval.current as NodeJS.Timeout);
			fallInterval.current = null;
		};

		if (archer.headshot && !fallInterval.current) {
			fallSpeed.current = 1;
			fallInterval.current = setInterval(appleFall, 25);
		}
	}, [scavState, archer.headshot]);

	

	return (
		<div>
			{/* mobile dropdown menu */}
			<div style={{height: mobileDown ? '21.25rem' : '0'}} className="mobile-nav-slide fixed z-40 top-[100px] left-0 w-full shadow-lg overflow-hidden sm:hidden">
				{Links.map((link, index) => (
					<div key={index} className="text-center py-4">
						<Link href={link.href} onClick={() => setMobileDown(false)}>
							<p>{link.text}</p>
						</Link>
					</div>
				))}
			</div>
			<nav
				className={cn(
					"",
					`navbar fixed top-0 z-50
					w-full flex flex-row justify-between h-[100px] p-4
					shadow-lg font-semibold items-center
					justify-center px-4`
				)}
			>
				<div
					className={`
						flex items-center justify-between 
						p-5 w-full max-w-screen-lg mx-auto
					`}
				>
					<div className="flex gap-8 justify-center items-center">
						<Link href='/'>
							<Image
								src={`/assets/svgs/header.png`}
								alt={``}
								height={80}
								width={80}
							/>
						</Link>
						{Links.map((link, index) => (
							<div key={index} className="hidden sm:flex">
								<Link href={link.href}>
									<p>{link.text}</p>
								</Link>
							</div>
						))}
					</div>
					{/* Scavenger hunt toggle */}
					<form className="sm:flex justify-end mr-8 items-center hidden">
						<Tooltip
							placement="bottom"
							content="Toggle Scavenger Hunt Mode"
							color="primary"
							offset={-5}
						>
							<Switch {...label} onChange={setScav} value={scavState} />
						</Tooltip>
					</form>

					{/* Mobile menu toggle */}
					<button className="sm:hidden w-12 h-12 relative" onClick={() => setMobileDown(!mobileDown)}>
						<div className="absolute bg-black w-full h-[3px] transition-all duration-300" style={{top: mobileDown ? 'calc(50% - 1.5px)' : '33%', transform: mobileDown ? 'rotate(45deg)' : ''}}></div>
						<div className="absolute bg-black w-full h-[3px] transition-all duration-300" style={{bottom: mobileDown ? 'calc(50% - 1.5px)' : '33%', transform: mobileDown ? 'rotate(-45deg)' : ''}}></div>
					</button>

					{scavState && (
						<DraggableCore onDrag={appleDrag} onStop={appleDragStop} disabled={archer.headshot}>
							<img
								ref={apple}
								src={`/assets/svgs/nav/${appleImg}.svg`}
								alt="apple"
								className="no-drag"
								style={{
									position: "absolute",
									bottom: `${appleY}px`,
									width: "4rem",
									right: `${appleX}px`,
								}}
							/>
						</DraggableCore>
					)}
				</div>
			</nav>
		</div>
	);
};
