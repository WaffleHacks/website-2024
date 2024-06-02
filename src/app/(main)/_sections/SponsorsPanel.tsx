"use client";
import { sponsorsData } from "@/constants";
import { Slugify } from "@/utils";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const SponsorsPanel = () => {
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
			return "bg-blue-300";
		} else if (selectedTier === "Gold" && tierData.tier === "Gold") {
			return "bg-yellow-300";
		} else if (selectedTier === "Silver" && tierData.tier === "Silver") {
			return "bg-gray-400";
		} else if (selectedTier === "Bronze" && tierData.tier === "Bronze") {
			return "bg-orange-300";
		} else {
			return "bg-[#fff]";
		}
	};

	return (
		<article
			className={`
				card
			`}
		>
			<div
				className="flex flex-row justify-center mb-4 flex-wrap max-w-screen-2xl mx-auto gap-1"
				aria-label={`Sponsors`}
			>
				{sponsorsData.tiers.map((tierData, index) => (
					<>
						<Button
							key={Slugify((index + 1).toString())}
							onClick={() => setSelectedTier(tierData.tier)}
							className={`
									px-2 py-4 border
									w-[150px] h-[50px]
									rounded-lg flex flex-row 
									items-center justify-center gap-2
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
							<span
								className={`
										text-lg font-semibold
										${
											selectedTier === tierData.tier
												? "text-[#f5f5f5]"
												: "text-[#3C2415]"
										}
									`}
							>
								{tierData.tier}
							</span>
						</Button>
					</>
				))}
			</div>
			<article className="flex flex-row flex-wrap items-center justify-center p-4 gap-4">
				{selectedTier &&
					sponsorsData.tiers
						.find((tierData) => tierData.tier === selectedTier)
						?.sponsors.map((sponsor, sponsorIndex) => {
							return (
								<Link
									key={sponsorIndex}
									href={
										sponsor.link
											? sponsor.link
											: `https://www.google.com/search?q=${sponsor.name}`
									}
									target="_blank"
									rel="noopener noreferrer"
									className="relative h-fit w-fit rounded-lg shadow-lg border-none"
								>
									<Card className="relative p-4 h-[175px] w-[300px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
										<Image
											src={sponsor.image}
											alt={sponsor.name}
											className="object-fit transition-all w-full h-full overflow-hidden mix-blend-multiply"
											fetchPriority="low"
											sizes="(min-width: 1280px) 300px, (min-width: 1024px) 250px, (min-width: 768px) 200px, (min-width: 640px) 150px, 100px"
										/>
									</Card>
								</Link>
							);
						})}
			</article>
		</article>
	);
};
