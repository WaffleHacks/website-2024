"use client";
import { ScavContext } from "@/components/semantics/Semantics";
import { h } from "@/utils";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import Link from "next/link";
import React, {useContext, useEffect, useRef, useState} from "react";
import Draggable, {DraggableEvent, DraggableCore, DraggableData} from "react-draggable";
import internal from "stream";

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

	let {scavState, setScavState, headspot1, headspot2} = useContext(ScavContext);

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
			setAppleImg(files[next_ind]);
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

		let mx = e.clientX;
		let my = e.clientY;

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
			<nav className="navbar fixed z-50 w-screen grid grid-cols-3 py-6 shadow-lg font-semibold">
				<div></div>
				<div className="flex gap-8 justify-center items-center">
					{Links.slice(0, 3).map((link, index) => (
						<Link key={index} href={link.href}>
							<p>{link.text}</p>
						</Link>
					))}
					<Image
						src={`/assets/svgs/header.png`}
						alt={``}
						height={80}
						width={80}
					/>
					{Links.slice(3).map((link, index) => (
						<Link key={index} href={link.href}>
							<p>{link.text}</p>
						</Link>
					))}
				</div>

				<div className="flex justify-end mr-8 items-center">
					<Switch {...label} onChange={setScav} value={scavState} />
					<span>Scavenger Hunt</span>
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
