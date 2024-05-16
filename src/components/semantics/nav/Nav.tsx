"use client";
import { appName } from "@/src/constants";
import { Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";
// TODO: Determine what is needed

export const NavLinks: Array<string> = [
	"About",
	"Tracks",
	"Calendar",
	"FAQs",
	"Sponsors",
];
// "Accessibility": `/accessibility`,
// "Terms of Service": `/terms`,
// "Privacy Policy": `/privacy`,

export const Nav = (): JSX.Element => {
	return (
		<nav
			className={`
        flex flex-row items-center justify-between top-0 left-0 w-full h-[50px] px-3 py-2
      `}
		>
			<menu
				className={`
          flex flex-row items-center justify-center gap-3 cursor-pointer
        `}
			>
				<li>
					<Image
						src={`/assets/images/Logo.png`}
						alt={`Logo`}
						className={`
              rounded-sm
            `}
						width={44}
						height={44}
						onClick={() => {
							window.location.href = `/`;
						}}
					/>
				</li>
				<li>
					<Typography level={`body-sm`} gutterBottom>
						{appName}
					</Typography>
				</li>
			</menu>
			<menu
				className={`
          flex flex-row items-center justify-center gap-3
        `}
			>
				{NavLinks.map((link, index) => {
					return (
						<li
							key={index}
							className={`
              flex items-center justify-center
            `}
						>
							<Typography level={`body-sm`} gutterBottom>
								{link}
							</Typography>
						</li>
					);
				})}
				<li>
					<button
						className={`
              bg-orange-400 p-2 rounded-md
            `}
					>
						Apply Today
					</button>
				</li>
			</menu>
		</nav>
	);
};
