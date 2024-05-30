"use client";
import { sponsorsData } from "@/constants";
import { Button } from "@nextui-org/button";
import { Card, Image } from "@nextui-org/react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const SponsorsPanel: React.FC = () => {
	const [selectedTier, setSelectedTier] = useState<string>("Platinum");
	const isXLarge = useMediaQuery("(min-width: 1280px)");
	const isLarge = useMediaQuery("(min-width: 1024px)");
	const isMedium = useMediaQuery("(min-width: 768px)");
	const isSmall = useMediaQuery("(min-width: 640px)");

	const getBackgroundColor = (
		selectedTier: string,
		tierData: { tier: string },
	): string => {
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
	};
	return (
		<article
			className="font-mplus p-8 w-full"
			style={{
				maxWidth: "1536px",
			}}
		>
			<h2
				className="text-4xl font-extrabold mb-4 w-full sm:text-center sm:mx-auto sm:w-fit md:text-left"
				aria-label={`Sponsors`}
			>
				Sponsors
			</h2>
			<div
				className={`
					flex flex-row justify-center
					mb-8 flex-wrap 
				`}
				aria-label={`Sponsors`}
			>
				{sponsorsData.tiers.map((tierData, index) => (
					<menu
						key={index + 1}
						className={`flex flex-col items-center justify-center`}
					>
						<li>
							<Button
								onClick={() => setSelectedTier(tierData.tier)}
								className={`
                  mx-2 px-2 py-4 border rounded-lg 
                  flex flex-row items-center
									justify-center gap-2
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
					</menu>
				))}
			</div>
			<article
				className={`
					flex flex-row items-center justify-center gap-4 overflow-x-auto overflow-y-hidden  
					h-[300px] max-w-screen-xl mx-auto
				`}
			>
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
  
                  relative h-fit w-fit

									rounded-lg shadow-lg border-none
                `}
							>
								<Card
									className={`
                    relative p-4
										h-[175px] w-[300px]
										flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105
                  `}
								>
									<Image
										src={sponsor.image}
										alt={sponsor.name}
										className={`
												object-fit transition-all
												w-full h-full
												overflow-hidden
                    `}
										fetchPriority={`low`}
										sizes={`(min-width: 1280px) 300px, (min-width: 1024px) 250px, (min-width: 768px) 200px, (min-width: 640px) 150px, 100px`}
									/>
								</Card>
							</Link>
						))}
			</article>
		</article>
	);
};
