"use client";
import { ScavContext } from "@/components/semantics/Semantics";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import Link from "next/link";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";
import React, {useContext, useEffect, useRef, useState} from "react";
import {DraggableEvent, DraggableCore, DraggableData} from "react-draggable";

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

  	const [scrollTop, setScrollTop] = useState(0);
	const [navHide, setNavHide] = useState(false);

	useEffect(() => {
		function onScroll(e: any){
		  setScrollTop(e.target.documentElement.scrollTop);
		  if (scrollTop > 100){
			setNavHide(true);
		  }
		  else setNavHide(false);
		};
		window.addEventListener("scroll", onScroll);
	
		return () => window.removeEventListener("scroll", onScroll);
	  }, [scrollTop]);

	const label = { inputProps: { "aria-label": "Scav switch" } };

	let {scavState, setScavState, headspot1, headspot2} = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [appleImg, setAppleImg] = useState('apple1');
	const [appleX, setAppleX] = useState(-100);
	const [appleY, setAppleY] = useState(0);
	const interval = useRef<NodeJS.Timeout>();

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


	function setScav(e: React.ChangeEvent<HTMLInputElement>) {
		setScavState(e.target.checked);
		if (e.target.checked) document.body.classList.add("scav");
		else document.body.classList.remove("scav");
		console.log(e.target.checked);
	}

	function appleInterval() {
		let files = ['apple1', 'apple2', 'apple3', 'apple2'];
		
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

		let h1: [number, number, number, number] = [-1000, -1000, -1000, -1000];
		let h2: [number, number, number, number] = [-1000, -1000, -1000, -1000];

		if (headspot1?.current){
			h1 = [
				headspot1.current.getBoundingClientRect().left, 
				headspot1.current.getBoundingClientRect().right,
				headspot1.current.getBoundingClientRect().top,
				headspot1.current.getBoundingClientRect().bottom];
		}
		if (headspot2?.current){
			h2 = [
				headspot2.current.getBoundingClientRect().left, 
				headspot2.current.getBoundingClientRect().right,
				headspot2.current.getBoundingClientRect().top,
				headspot2.current.getBoundingClientRect().bottom];
		}

		let mouseX = pos.x - (pos.lastX - apRect.right);
		let mouseY = pos.y - (pos.lastY - apRect.bottom);

		let mx = (e as any).clientX;
		let my = (e as any).clientY;

		if (mx > h1[0] && mx < h1[1] && my > h1[2] && my < h1[3]){
			setAppleY(navRect.bottom - h1[3] - apRect.height/8);
			setAppleX(window.innerWidth - ((h1[0] + h1[1]) / 2) - 3*apRect.width/5);
			console.log('on h1', h1)
		}
		else if (mx > h2[0] && mx < h2[1] && my > h2[2] && my < h2[3]){
			setAppleY(navRect.bottom - h2[3] - apRect.height/8);
			setAppleX(window.innerWidth - ((h2[0] + h2[1]) / 2) - 3*apRect.width/5);
			console.log('on h2', h2)
		}
		else {
			setAppleY(navRect.bottom - mouseY);
			setAppleX(window.innerWidth - mouseX);
		}

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
			<nav
				className={`
					navbar fixed left-0 z-50
					py-6 shadow-lg font-semibold
					bg-white flex justify-between
					items-center px-4 md:px-8 w-screen
					transition-all duration-300 ease-in-out
				`}
				style={{top: navHide ? '-10rem' : 0}}
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
				
			</nav>
		</>
	);
};
