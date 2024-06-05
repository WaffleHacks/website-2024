"use client";
import { LegalLinks, app } from "@/constants";
import type React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FooterComp } from "./FooterComp";

export const FooterBar = () => {
	const footerProps = {
		top: {
			left: {
				image: "/assets/svgs/logo.svg",
				icons: [
					{
						icon: <FaLinkedin className={`w-6 h-6 hover:scale-110 `} />,
						href: "https://www.linkedin.com/company/wafflehacks/",
					},
					{
						icon: <FaInstagram className={`w-6 h-6 hover:scale-110 `} />,
						href: "https://www.instagram.com/waffle.hacks/",
					}
				],
			},
			right: {
				sponsor: "The Hack Foundation",
				link: "https://the.hackfoundation.org/",
			},
		},
		bottom: {
			left: {
				name: `${app.name}`,
				ein: `${app.ein}`,
			},
			right: {
				links: LegalLinks,
			},
		},
	};

	return (
		<>
			<FooterComp {...footerProps} />
		</>
	);
};
