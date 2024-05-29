"use client";
import { sponsorsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const SponsorsPanel = () => {
	const [selectedTier, setSelectedTier] = useState<string>("Platinum");

	return (
		<div className="font-mplus p-8">
			<h2 className="text-4xl font-extrabold mb-4">Sponsors</h2>
			<div className="flex flex-row justify-center mb-8">
				{sponsorsData.tiers.map((tierData, index) => (
					<button
						key={index + 1}
						onClick={() => setSelectedTier(tierData.tier)}
						className="mx-2 p-2 border rounded"
					>
						{tierData.tier}
					</button>
				))}
			</div>
			<div className="flex flex-col items-center">
				{selectedTier &&
					sponsorsData.tiers
						.find((tierData) => tierData.tier === selectedTier)
						?.sponsors.map((sponsor, sponsorIndex) => (
							<div
								key={sponsorIndex + 1}
								className="flex flex-col items-center mb-8"
							>
								<Link
									href={`${"link" in sponsor ? sponsor.link : "/"}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={sponsor.image}
										alt={sponsor.name}
										className={
											selectedTier === "Gold"
												? "h-20"
												: selectedTier === "Silver"
													? "h-16"
													: "h-24"
										}
									/>
								</Link>
							</div>
						))}
			</div>
		</div>
	);
};
