"use client";
import { ScavContext } from "@/components/semantics/Semantics";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useContext } from "react";
import { useMediaQuery } from "usehooks-ts";

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
			</nav>
		</>
	);
};
