"use client";
import { sponsorsData } from "@/constants";
import { Slugify } from "@/utils";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const SponsorsPanel = () => {

	const getTextColor = (tier: string): string => {
		switch (tier) {
			case "Platinum":
				return "text-blue-300";
			case "Gold":
				return "text-yellow-600";
			case "Silver":
				return "text-gray-500";
			case "Bronze":
				return "text-orange-600";
			default:
				return "text-[#fff]";
		}
	};

	const getBorderColor = (tier: string): string => {
		switch (tier) {
			case "Platinum":
				return "border-blue-300";
			case "Gold":
				return "border-yellow-600";
			case "Silver":
				return "border-gray-500";
			case "Bronze":
				return "border-orange-600";
			default:
				return "border-[#fff]";
		}
	};

	return (
		<>
		<h2 className="text-4xl font-bold mb-4">Sponsors</h2>
		<article className="card mb-8">
			{sponsorsData.tiers.map((tierData, index) => (
				<div key={Slugify((index + 1).toString())} className="mb-8">
					<section
						className={`
							flex flex-row justify-center items-center
							w-full gap-4
						`}
					>
						<div
							className={`
								px-2 pt-4 relative
								rounded-none flex flex-row 
								items-center justify-center gap-2
								border-b-4 ${getBorderColor(tierData.tier)}
							`}
						>
							<Image
								src={`/assets/svgs/sponsors/tier/${tierData.tier.toLowerCase()}.svg`}
								alt={tierData.tier}
								className={`
									object-contain object-center
									h-[70px] w-[70px] no-drag
								`}
								width={70}
								height={70}
							/>
							<span
								className={`
									font-semibold ${getTextColor(tierData.tier)} text-[40px]
								`}
							>
								{tierData.tier}
							</span>
						</div>
					</section>
					<div className="flex flex-row flex-wrap items-center justify-center p-4 gap-4">
						{tierData.sponsors.map((sponsor, sponsorIndex) => (
							<Link
								key={sponsorIndex}
								href={
									sponsor.link
										? sponsor.link
										: `https://www.google.com/search?q=${sponsor.name}`
								}
								target="_blank"
								rel="noopener noreferrer"
								className="relative h-fit w-fit"
							>
								<Image
									src={sponsor.image}
									alt={sponsor.name}
									className="object-fit transition-all w-full h-full overflow-hidden mix-blend-multiply max-h-[5rem]"
									fetchPriority="low"
									sizes="(min-width: 1280px) 300px, (min-width: 1024px) 250px, (min-width: 768px) 200px, (min-width: 640px) 150px, 100px"
								/>
							</Link>
						))}
					</div>
				</div>
			))}
		</article>
		</>
	);
};
