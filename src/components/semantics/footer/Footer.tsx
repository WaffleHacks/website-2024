"use client";
import { app, LegalLinks } from "@/constants";
import Link from "next/link";
import React from "react";

export const FooterBar = (): JSX.Element => {
	return (
		<footer className="bg-gray-900 text-white py-6">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
				<div className="flex items-center mb-4 lg:mb-0">
					<p className="mr-4">&copy; {app.name} 2023</p>
					<ul className="flex space-x-4">
						{LegalLinks.map((links, index) => (
							<li key={index}>
								<Link href={links.href}>
									<span className="hover:text-gray-300">{links.text}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="text-center lg:text-left">
					<span>© WaffleHacks 2023</span>
					<div className="flex flex-wrap justify-center lg:justify-start mt-4">
						<Link href="/privacy" target="_blank">
							<span className="mr-4 hover:text-gray-300">Privacy Policy</span>
						</Link>
						<Link href="/rules" target="_blank">
							<span className="hover:text-gray-300">Rules</span>
						</Link>
					</div>
					<div className="text-gray-400 mt-2">
						<p>
							Fiscally sponsored by{" "}
							<Link
								href="https://the.hackfoundation.org/"
								target="_blank"
								rel="noreferrer"
								className="hover:text-gray-300"
							>
								The Hack Foundation
							</Link>
						</p>
						<p>Non-profit EIN: 81-2908499</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
