"use client"
import { sponsorsData } from "@/constants";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Image, Card } from "@nextui-org/react";
import { useLoaded } from "@/core";
export const SponsorsPanel: React.FC = () => {
	const [selectedTier, setSelectedTier] = useState<string>("Platinum");
	const isXLarge = useMediaQuery("(min-width: 1280px)");
	const isLarge = useMediaQuery("(min-width: 1024px)");
	const isMedium = useMediaQuery("(min-width: 768px)");
	const isSmall = useMediaQuery("(min-width: 640px)");

	const getSponsorClass = () => {
		if (isXLarge) return "w-1/2 h-1/4";
		if (isLarge) return "w-2/5 h-1/5";
		if (isMedium) return "w-1/3 h-1/6";
		if (isSmall) return "w-1/2 h-1/4";
		return "w-full h-full";
	};

	const getImageClass = () => {
		if (isXLarge) return "h-20 w-40";
		if (isLarge) return "h-16 w-32";
		if (isMedium) return "h-12 w-24";
		if (isSmall) return "h-10 w-20";
		return "h-8 w-16";
	};

	const getBackgroundColor = (selectedTier: string, tierData: { tier: string }): string => {
		if (selectedTier === "Platinum" && tierData.tier === "Platinum") {
			return "bg-gray-300";
		} else if (selectedTier === "Gold" && tierData.tier === "Gold") {
			return "bg-yellow-300";
		} else if (selectedTier === "Silver" && tierData.tier === "Silver") {
			return "bg-gray-500";
		} else if (selectedTier === "Bronze" && tierData.tier === "Bronze") {
			return "bg-orange-300";
		} else {
			return "bg-gray-300";
		}
	}
	return (
		<div className="font-mplus p-8">
			<h2 className="text-4xl font-extrabold mb-4">Sponsors</h2>
			<div className="flex flex-row justify-center mb-8" aria-label="Sponsors">
				{sponsorsData.tiers.map((tierData, index) => (
					<ul
						key={index + 1}
						className={`flex flex-col items-center justify-center`}
					>
						<li>
							<Button
								onClick={() => setSelectedTier(tierData.tier)}
								className={`
                  mx-2 p-2 border rounded-lg 
                  flex flex-row items-center
                  ${getBackgroundColor(selectedTier, tierData)}
                `}
							>
								<Image
									src={`/assets/svgs/sponsors/tier/${tierData.tier.toLowerCase()}.svg`}
									alt={tierData.tier}
									className="h-10"
									width={40}
									height={40}
								/>
								{tierData.tier}
							</Button>
						</li>
						<li>
							<Image
								src={`/assets/svgs/sponsors/tier/strip/gold.svg`}
								className={``}
								alt=""
								width={100}
								height={100}
								sizes="(min-width: 1280px) 300px, (min-width: 1024px) 250px, (min-width: 768px) 200px, (min-width: 640px) 150px, 100px"
							/>
						</li>
					</ul>
				))}
			</div>
			<div className="flex flex-row items-center justify-center gap-4 relative">
				{selectedTier &&
					sponsorsData.tiers
						.find((tierData) => tierData.tier === selectedTier)
						?.sponsors.map((sponsor, sponsorIndex) => (
							<Link
								key={sponsorIndex + 1}
								href={`${
									sponsor.link
										? sponsor.link
										: `https://www.google.com/search?q=${sponsor.name}`
								}`}
								rel="noopener noreferrer"
								className={`
                  ${getSponsorClass()}
                  relative overflow-hidden h-[300px] min-w-[300px] bg-slate-200 hover:bg-slate-400 transition-colors transition-duration-800 rounded-xl flex justify-center items-center shadow-lg border-none mx-4
                `}
							>
								<Card
									className={`
                    w-full h-full p-4
                    ${getImageClass()}
                  `}
								>
									<Image
										src={sponsor.image}
										alt={sponsor.name}
										className={`
                      ${getImageClass()}
                      object-fit transition-all
                      w-full h-full
                    `}
										fetchPriority={`low`}
										sizes={`(min-width: 1280px) 300px, (min-width: 1024px) 250px, (min-width: 768px) 200px, (min-width: 640px) 150px, 100px`}
									/>
								</Card>
							</Link>
						))}
			</div>
		</div>
	);
};
