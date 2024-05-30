"use client";
import { ScavContext } from "@/components/semantics/Semantics";
import Switch from "@mui/material/Switch";
import { Button } from "@nextui-org/button";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";
import React, {useContext, useEffect, useRef, useState} from "react";
import Draggable, {DraggableEvent, DraggableCore, DraggableData} from "react-draggable";

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

	const label = { inputProps: { "aria-label": "Scav switch" } };

	let {scavState, setScavState} = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [walkState, setWalkState] = useState(1);
	const [appleImg, setAppleImg] = useState('apple1');
	const [appleX, setAppleX] = useState(-100);
	const [appleY, setAppleY] = useState(0);
	const interval = useRef<NodeJS.Timeout>();


	function setScav(e: React.ChangeEvent<HTMLInputElement>) {
		setScavState(e.target.checked);
		if (e.target.checked) document.body.classList.add("scav");
		else document.body.classList.remove("scav");
		console.log(e.target.checked);
	}

	const isMediumOrLarger = useMediaQuery("(min-width: 768px)");

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
	function appleInterval() {
		let files = ['apple1', 'apple2', 'apple3', 'apple2'];
		setWalkState(walk => {
			let nextWalk = (walk + 1) % 4
			
			return nextWalk
		});
		
		setAppleX(x => {
			let nextX = x + 1;
			let next_ind = Math.floor(nextX / 4) % 4;
			if (next_ind < 0) next_ind = (4 - next_ind + 4) % 4;
			let file = files[next_ind];
			if (file == undefined){
				console.log('undefined', file, next_ind);
			}
			setAppleImg(files[next_ind] as string);
			if (nextX > window.innerWidth) nextX = -100;
			return nextX;
		});
	}

	useEffect(() => {
		if (interval.current){
			clearInterval(interval.current);
		}
		if (scavState){
			interval.current = setInterval(appleInterval, 25);
		}
		return () => clearInterval(interval.current);
	}, [scavState]);

	
	function appleDrag(e: DraggableEvent, pos: DraggableData){
		clearInterval(interval.current);

		let ap = apple.current;
		if (!ap) return;
		let navRect = document.querySelector('nav')?.getBoundingClientRect();
		if (!navRect) return;
		let apRect = ap.getBoundingClientRect();

		let mouseX = pos.x - (pos.lastX - apRect.right);
		let mouseY = pos.y - (pos.lastY - apRect.bottom);

		setAppleY(navRect.bottom - mouseY);
		setAppleX(window.innerWidth - mouseX);

		setAppleImg('applesit');
	}
	function appleDragStop(e: DraggableEvent){
		let ap = apple.current;
		if (!ap) return;
		let appleRect = ap.getBoundingClientRect();
		let navRect = document.querySelector('nav')?.getBoundingClientRect();
		if (!navRect) return;
		if (appleRect.bottom <= navRect.bottom){
			ap.style.bottom = '0';
			ap.style.top = 'unset';
			setAppleY(0);
			interval.current = setInterval(appleInterval, 25);
		}
	}


	return (
		<>
			<Navbar
				className={`
					navbar fixed top-0 left-0 z-50
					py-6 shadow-lg font-semibold
				bg-white flex justify-between
					items-center px-4 md:px-8 w-full
					transition-all duration-300 ease-in-out
				`}
			>
				<div
					className={`
						flex justify-between w-full
						md:w-auto
					`}
				>
					<Link
						href={`/`}
					>
						<Image
							src={`/assets/svgs/header.png`}
							alt={`Logo`}
							height={80}
							width={80}
							className={`
								hidden md:block
							`}
						/>
					</Link>
				</div>
				<div
					className={`
						md:flex w-full md:w-auto
					`}
				>
					<div className="flex flex-col md:flex-row items-center md:gap-8 mt-4 md:mt-0">
						{Links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="block px-2 py-1 md:py-0"
							>
								{link.text}
							</Link>
						))}
						<Image
							src={`/assets/svgs/header.png`}
							alt={`Logo`}
							height={80}
							width={80}
							className="hidden md:block"
						/>
						<div className="flex items-center">
							<Switch {...label} onChange={setScav} checked={scavState} />
							<span>Scavenger Hunt</span>
						</div>
					</div>
				</div>
				
				{
					scavState && 
					<DraggableCore onDrag={appleDrag} onStop={appleDragStop}>
						<img ref={apple} src={`/assets/svgs/nav/${appleImg}.svg`} alt="apple" className="no-drag" style={{position: 'absolute', bottom: appleY + 'px', width: '4rem', right: appleX + 'px'}} />
					</DraggableCore>
				}
				
			</Navbar>
		</>
	);
};
