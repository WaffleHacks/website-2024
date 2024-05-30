"use client";

import type React from "react";
import { useContext, useRef, useState } from "react";

import { ScavContext } from "@/components";

import Image from "next/image";
import Link from "next/link";

import Switch from "@mui/material/Switch";
import {
	Navbar,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";

import { motion } from "framer-motion";

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

	const [scrollTop, setScrollTop] = useState<number>(0);
	const [navHide, setNavHide] = useState<boolean>(false);

	useIsomorphicLayoutEffect(() => {
		function onScroll(e: any) {
			setScrollTop(e.target.documentElement.scrollTop);
			if (scrollTop > 100) {
				setNavHide(true);
			} else setNavHide(false);
		}
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	const label = { inputProps: { "aria-label": "Scav switch" } };

	let {scavState, setScavState, archer} = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [appleImg, setAppleImg] = useState("apple1");
	const [appleX, setAppleX] = useState<number>(-100);
	const [appleY, setAppleY] = useState<number>(0);
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
		if (interval.current) {
			clearInterval(interval.current);
		}
		if (scavState) {
			interval.current = setInterval(appleInterval, 25);
		}
		return () => clearInterval(interval.current);
	}, [scavState]);

	function appleDrag(e: DraggableEvent, pos: DraggableData) {
		clearInterval(interval.current);

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
			interval.current = setInterval(appleInterval, 25);
		}
	}

	return (
		<>
			<Navbar
				className={cn(
					"",
					`
					navbar fixed top-0 z-50
					w-full flex flex-row h-[100px] p-4
					shadow-lg font-semibold items-center
					justify-center px-4 mx-auto
				`,
				)}
			>
				<motion.div
					transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
					initial={{ y: "-100%" }}
					animate={{ y: "0%" }}
					className={`
						flex items-center justify-between 
						p-5 w-full max-w-screen-xl mx-auto
					`}
				>
					<div className="flex gap-8 justify-center items-center">
						<Image
							src={`/assets/svgs/header.png`}
							alt={``}
							height={80}
							width={80}
						/>
						{Links.map((link, index) => (
							<NavbarItem key={index} className="hidden sm:flex">
								<Link href={link.href}>
									<p>{link.text}</p>
								</Link>
							</NavbarItem>
						))}
					</div>
					<div
						className={`

					`}
					>
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
						<NavbarContent className="sm:hidden flex" justify="start">
							<NavbarMenuToggle />
						</NavbarContent>

						<NavbarMenu className="">
							{Links.map((link, index) => (
								<NavbarMenuItem key={index}>
									<Link href={link.href}>
										<p className="text-lg">{link.text}</p>
									</Link>
								</NavbarMenuItem>
							))}
							<form className="justify-end mr-8 items-center">
								<Tooltip
									placement="bottom"
									content="Toggle Scavenger Hunt Mode"
									color="primary"
									offset={-5}
								>
									<Switch {...label} onChange={setScav} value={scavState} />
								</Tooltip>
							</form>
						</NavbarMenu>
					</div>

					{scavState && (
						<DraggableCore onDrag={appleDrag} onStop={appleDragStop}>
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
				</motion.div>
			</Navbar>
		</>
	);
};
