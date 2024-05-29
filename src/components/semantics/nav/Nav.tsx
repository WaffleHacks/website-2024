"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useContext, useEffect, useRef, useState} from "react";
import { ScavContext } from "@/components/semantics/Semantics";
import Switch from '@mui/material/Switch';

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

	const label = { inputProps: { 'aria-label': 'Scav switch' } };

	let {scavState, setScavState} = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [walkState, setWalkState] = useState(1);
	const [appleImg, setAppleImg] = useState('apple1');
	const [appleX, setAppleX] = useState(-100);
	const interval = useRef<NodeJS.Timeout>();


	function setScav(e: React.ChangeEvent<HTMLInputElement>){
		setScavState(e.target.checked);
		if (e.target.checked) document.body.classList.add('scav');
		else document.body.classList.remove('scav');
		console.log(e.target.checked);
	}

	useEffect(() => {
		if (interval.current){
			clearInterval(interval.current);
		}
		if (scavState){
			interval.current = setInterval(() => {
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
			}, 25);
		}
		return () => clearInterval(interval.current);
	}, [scavState]);

	



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
					<img ref={apple} src={`/assets/svgs/nav/${appleImg}.svg`} alt="apple" className="no-drag" style={{position: 'absolute', bottom: 0, width: '4rem', right: appleX + 'px'}} />
				}
				
			</nav>
		</>
	);
};
