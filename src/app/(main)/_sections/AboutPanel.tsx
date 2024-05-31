"use client";
import { Picture, Text, heading_style } from "@/components";
import { cn } from "@/lib";
import { CardHeader } from "@mui/material";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
export const AboutPanel = () => {
	const isXLarge = useMediaQuery("(min-width: 1280px)");
	const isLarge = useMediaQuery("(min-width: 1024px)");
	const isMedium = useMediaQuery("(min-width: 768px)");
	const isSmall = useMediaQuery("(min-width: 640px)");
	const isXSmall = useMediaQuery("(min-width: 480px)");
	const isXXSmall = useMediaQuery("(min-width: 320px)");
	return (
		<article
			className={cn(`
						font-mplus px-8 flex flex-row
						justify-center items-center gap-4
						bg-opacity-40 shadow-md rounded-xl
				`)}
		>
			<Card
				className={`
            flex flex-col justify-between shadow-xl
            back drop-blur-lg p-8 rounded-2xl
            transition-transform duration-300 transform
            max-w-9xl overlay
          `}
			>
				<>
					<h2 className="text-5xl leading-11 font-bold tracking-tighter mb-8 bg-gradient-to-r from-[#CD9E71]/70 via-[#AF7F4E] to-[#CD9E71]/70 bg-clip-text text-transparent">
						WaffleHacks 2024: Empowering Communities and Small Businesses
						through Tech Solutions
					</h2>
				</>
				<CardBody className="flex flex-col justify-between gap-2">
					<Text
						className={`
								text-xl font-semibold text-left
							`}
						text={[
							"We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us on June 23th - 25th, 2023.",
							"WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local communities and small businesses.",
						]}
					/>
				</CardBody>
			</Card>
			<Picture
				className={`
				
				`}
			>
				<img src="/assets/svgs/logo.svg" alt="" className="w-5/12" />
			</Picture>
		</article>
	);
};
