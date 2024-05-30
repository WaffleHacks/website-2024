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
import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import Draggable, {
	type DraggableEvent,
	DraggableCore,
	type DraggableData,
} from "react-draggable";
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

	const label = { inputProps: { "aria-label": "Scav switch" } };

	const { scavState, setScavState } = useContext(ScavContext);

	const apple = useRef<HTMLImageElement>(null);
	const [walkState, setWalkState] = useState(1);
	const [appleImg, setAppleImg] = useState("apple1");
	const [appleX, setAppleX] = useState(-100);
	const [appleY, setAppleY] = useState(0);
	const interval = useRef<NodeJS.Timeout>();

	function setScav(e: React.ChangeEvent<HTMLInputElement>) {
		setScavState(e.target.checked);
		if (e.target.checked) document.body.classList.add("scav");
		else document.body.classList.remove("scav");
		// console.log(e.target.checked);
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
		const files: string[] = ["apple1", "apple2", "apple3", "apple2"];
		setWalkState((walk) => {
			const nextWalk: number = (walk + 1) % 4;

			return nextWalk;
		});

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

		const mouseX = pos.x - (pos.lastX - apRect.right);
		const mouseY = pos.y - (pos.lastY - apRect.bottom);

		setAppleY(navRect.bottom - mouseY);
		setAppleX(window.innerWidth - mouseX);

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
		<Navbar
			className="navbar fixed top-0 left-0 z-50 py-6 shadow-lg font-semibold bg-white flex justify-between items-center px-4 md:px-8 w-full transition-all duration-300 ease-in-out"
			disableAnimation
			isBordered
		>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<NavbarBrand>
					<Image src={`/assets/svgs/header.png`} alt={`ACME`} height={80} width={80} />
					<p className="font-bold text-inherit">ACME</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarBrand>
					<Image src={`/assets/svgs/header.png`} alt={`ACME`} height={80} width={80} />
					<p className="font-bold text-inherit">ACME</p>
				</NavbarBrand>
				{Links.slice(0, 3).map((link, index) => (
					<NavbarItem key={index}>
						<Link href={link.href}>
							<p>{link.text}</p>
						</Link>
					</NavbarItem>
				))}
				<Image src={`/assets/svgs/header.png`} alt={`ACME`} height={80} width={80} />
				{Links.slice(3).map((link, index) => (
					<NavbarItem key={index}>
						<Link href={link.href}>
							<p>{link.text}</p>
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>


			<NavbarMenu>
				{Links.map((item, index) => (
					<NavbarMenuItem key={index}>
						<Link
							className="w-full"
							color={index === 2 ? "warning" : index === Links.length - 1 ? "danger" : "foreground"}
							href={item.href}
						>
							{item.text}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>

			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle />
				<form action="">
					<Switch {...label} onChange={setScav} checked={scavState}/>
					<label>Scavenger Hunt</label>
				</form>
			</NavbarContent>

			{scavState && (
				<DraggableCore onDrag={appleDrag} onStop={appleDragStop}>
					<img
						ref={apple}
						src={`/assets/svgs/nav/${appleImg}.svg`}
						alt="apple"
						className="no-drag"
						style={{
							position: "absolute",
							bottom: appleY + "px",
							width: "4rem",
							right: appleX + "px",
						}}
					/>
				</DraggableCore>
			)}
		</Navbar>
	);
};