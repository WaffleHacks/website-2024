"use client";

import { CustomPicture as Picture, ScavContext } from "@/components";
import Switch from "@mui/material/Switch";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useContext, useRef, useState } from "react";

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
		{ href: "#tracks-and-awards", text: "Tracks" },
		{ href: "#calendar", text: "Calendar" },
		{ href: "#meet-the-team", text: "Team" },
		{ href: "#sponsors", text: "Sponsors" },
		{ href: "#faqs", text: "FAQs" },
		{ href: "#apply", text: "Apply" },
	];

	const label = {
		inputProps: { "aria-label": "Scavenger hunt switch" },
	};

	const { scavState, setScavState, archer } = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [appleImg, setAppleImg] = useState("apple1");
	const [appleX, setAppleX] = useState<number>(-100);
	const [appleY, setAppleY] = useState<number>(0);
	const interval = useRef<NodeJS.Timeout>();

	useIsomorphicLayoutEffect(() => {
		const body: HTMLBodyElement = document.querySelector(
			"body",
		)! as HTMLBodyElement;
		const targetElement: HTMLElement = document.querySelector(
			"#target-element",
		)! as HTMLElement;
		let lastScroll = 0;

		const handleScroll = () => {
			const currentScroll = window.scrollY;
			const targetPosition =
				targetElement.getBoundingClientRect().top + window.scrollY;

			if (currentScroll <= 0) {
				body.classList.remove("scroll-up");
				return;
			}

			if (
				currentScroll > lastScroll &&
				!body.classList.contains("scroll-down")
			) {
				body.classList.remove("scroll-up");
				body.classList.add("scroll-down");
			} else if (
				currentScroll < lastScroll &&
				body.classList.contains("scroll-down")
			) {
				body.classList.remove("scroll-down");
				body.classList.add("scroll-up");
			}

			if (currentScroll >= targetPosition) {
				body.classList.add("hide-nav");
			} else {
				body.classList.remove("hide-nav");
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

	const ScrollIntoCenterView = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			const elementRect = element.getBoundingClientRect();
			const absoluteElementTop = elementRect.top + window.scrollY;
			const middle =
				absoluteElementTop +
				Math.floor(elementRect.height / 2) -
				Math.floor(window.innerHeight / 2);
			window.scrollTo({
				top: middle,
				behavior: "smooth",
			});
		}
	};

	useIsomorphicLayoutEffect(() => {
		if (interval.current) {
			clearInterval(interval.current);
		}
		if (scavState) {
			interval.current = setInterval(appleInterval, 25);
		} else {
			setAppleY(0);
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
			setAppleX(
				window.innerWidth - (h1[0] + h1[1]) / 2 - (3 * apRect.width) / 5,
			);
			archer.activeHeadSpot = 1;
		} else if (mx > h2[0] && mx < h2[1] && my > h2[2] && my < h2[3]) {
			setAppleY(navRect.bottom - h2[3] - apRect.height / 8);
			setAppleX(
				window.innerWidth - (h2[0] + h2[1]) / 2 - (3 * apRect.width) / 5,
			);
			archer.activeHeadSpot = 2;
		} else {
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

	const [mobileDown, setMobileDown] = useState(false);

	return (
		<>
			{/* mobile dropdown menu */}
			<div
				style={{ height: mobileDown ? "100%" : "0" }}
				className={`
					mobile-nav-slide fixed z-40 top-[100px]
					left-0 w-full shadow-lg overflow-hidden
					sm:hidden text-[#3C2415]
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
									ScrollIntoCenterView(link.href);
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
			<nav
				className={cn(
					"",
					`navbar fixed top-0 z-50 peek-a-boo
					w-full flex flex-row justify-between h-[100px] p-4
					shadow-lg font-semibold items-center
					px-4`,
				)}
			>
				<div
					className={`
						flex items-center justify-between 
						p-5 w-full max-w-screen-lg mx-auto
					`}
				>
					<div className="flex gap-8 justify-center items-center">
						<Picture
							className={`
								w-20 h-20
							`}
							onClick={() => window.location.reload()}
						>
							<Image
								src={`/assets/svgs/header.png`}
								alt={``}
								height={80}
								width={80}
								className={`
									cursor-pointer
									object-cover object-center
									rounded-full
								`}
							/>
						</Picture>
						<ul
							className={`
								hidden sm:flex 
							`}
						>
							{Links.map((link, index) => (
								<li
									key={index}
									className={`
										ml-0 sm:ml-4
									`}
								>
									<Link
										href={link.href}
										onClick={(e) => {
											e.preventDefault();
											ScrollIntoCenterView(link.href);
										}}
									>
										<p>{link.text}</p>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Scavenger hunt toggle */}
					<form className="ml-auto sm:flex justify-end items-center hidden">
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
									"& .MuiSwitch-switchBase.Mui-checked": {
										color: "#3C2415",
										"&:hover": {
											backgroundColor: "rgba(60,36,21,0.08)",
										},
									},
									"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
										backgroundColor: "#3C2415",
									},
								}}
							/>
						</Tooltip>
					</form>

					{/* Mobile menu toggle */}
					<button
						className={`sm:hidden w-12 h-12 relative p-4`}
						onClick={() => setMobileDown(!mobileDown)}
					>
						<div
							className="absolute bg-black w-full h-[3px] transition-all duration-300"
							style={{
								top: mobileDown ? "calc(50% - 1.5px)" : "33%",
								transform: mobileDown ? "rotate(45deg)" : "",
							}}
						></div>
						<div
							className="absolute bg-black w-full h-[3px] transition-all duration-300"
							style={{
								bottom: mobileDown ? "calc(50% - 1.5px)" : "33%",
								transform: mobileDown ? "rotate(-45deg)" : "",
							}}
						></div>
					</button>

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
				</div>
			</nav>
		</>
	);
};
