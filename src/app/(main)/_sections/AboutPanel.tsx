"use client";
import { CustomPicture as Picture, Text, heading_style } from "@/components";
import { cn } from "@/lib";
import { CardHeader } from "@mui/material";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
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
		<article className="font-mplus pr-8 flex flex-col md:flex-row justify-center items-center gap-4 bg-opacity-40 shadow-md rounded-xl w-full max-w-screen-2xl mx-auto my-8 md:my-16 lg:my-24 xl:my-32 ">
			<article className="flex flex-col justify-between shadow-xl back drop-blur-lg p-4 md:p-8 rounded-2xl transition-transform duration-300 transform max-w-md md:max-w-9xl overlay">
				<>
					<h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-11 font-bold tracking-tighter mb-4 md:mb-8 bg-gradient-to-r from-[#CD9E71]/70 via-[#AF7F4E] to-[#CD9E71]/70 bg-clip-text text-transparent">
						WaffleHacks 2024: Empowering Communities and Small Businesses
						through Tech Solutions
					</h2>
				</>
				<div className="flex flex-col justify-between gap-2">
					<Text
						className="text-xs md:text-sm lg:text-md xl:text-lg font-semibold text-left"
						text={[
							"We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us on June 23th - 25th, 2023.",
							"WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local communities and small businesses.",
						]}
					/>
				</div>
			</article>
			<Picture className="flex flex-row justify-center items-center transition-transform duration-300 transform w-64 h-64 md:w-96 md:h-96 lg:w-128 lg:h-128 xl:w-144 xl:h-144">
				<Image
					src="/assets/images/about.png"
					alt=""
					className="rounded-2xl object-contain object-center w-full h-full"
					width={isXLarge ? 500 : isLarge ? 400 : isMedium ? 300 : 200}
					height={isXLarge ? 500 : isLarge ? 400 : isMedium ? 300 : 200}
				/>
			</Picture>
		</article>
	);
};
