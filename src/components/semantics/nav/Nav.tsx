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
import { useContext, useState } from "react";
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
			</Navbar>
		</>
	);
};
