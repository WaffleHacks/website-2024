"use client";
import { sponsorsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SponsorsPanel = () => {
	return (
		<div id="sponsors" className="font-mplus p-8">
			<h1 className="text-4xl font-extrabold mb-4">Sponsors</h1>
			<div className="flex flex-col items-center">
				{Object.entries(sponsorsData.tiers).map(
					([index, { tier, sponsors }]) => (
						<div key={index} className="flex flex-col items-center mb-8">
							<div className="text-2xl font-bold flex items-center mb-4 grid grid-cols-2 w-[10rem]">
								<img
									src={`/assets/svgs/sponsors/tier/${tier.toLowerCase()}.svg`}
									alt={`${tier} medal`}
									className="w-16"
								/>
								<span
									className={`${
										tier === "Platinum"
											? "text-[#9DDCF8]"
											: tier === "Gold"
												? "text-[#FBAD24]"
												: tier === "Silver"
													? "text-[#AEAEAE]"
													: tier === "Bronze"
														? "text-[#A47556]"
														: ""
									} font-bold`}
								>
									{tier}
								</span>
							</div>

							<div className="flex flex-row gap-4 flex-wrap justify-center">
								{sponsors.map((sponsor, sponsorIndex) => (
									<Link
										key={sponsorIndex}
										href={`${"link" in sponsor ? sponsor.link : "/"}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={sponsor.image}
											alt={sponsor.name}
											className={
												tier === "Gold"
													? "h-20"
													: tier === "Silver"
														? "h-16"
														: "h-24"
											}
										/>
									</Link>
								))}
							</div>
						</div>
					),
				)}
			</div>
		</div>
	);
};
