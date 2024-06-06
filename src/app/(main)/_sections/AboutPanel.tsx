"use client";
import { CustomPicture as Picture, Text } from "@/components";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
import React from "react";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";
export const AboutPanel = () => {
	const [loading, setLoading] = React.useState(true);

	const isXLarge = useMediaQuery("(min-width: 1280px)");
	const isLarge = useMediaQuery("(min-width: 1024px)");
	const isMedium = useMediaQuery("(min-width: 768px)");

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);
	return (
		<article
			className={`
				font-mplus flex flex-col-reverse md:flex-row
				justify-center items-center gap-2
				w-full max-w-screen-2xl mx-auto
				px-10
			`}
		>
			<article
				className={`
					flex flex-col justify-between rounded-2xl
					transition-transform duration-300 transform max-w-screen-2xl
					md:max-w-9xl flex-1
				`}
			>
				<hgroup
					className={`
					text-[#3C2415]
            w-full flex items-center justify-center flex-col
            text-left 
        `}
				>
					<h2
						className={`
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                leading-11 font-bold tracking-tighter mb-2  w-full
            `}
					>
						WaffleHacks 2024
					</h2>
					<h3
						className={`
                w-full text-xl md:text-2xl lg:text-3xl xl:text-4xl
                font-bold tracking-tighter leading-11 mb-9
            `}
					>
						Let the Hacking Begin!
					</h3>
				</hgroup>
				<div className="flex flex-col justify-between gap-8">
					<Text
						className="text-lg font-normal text-left"
						text={[
							"Wafflehacks is a 48 - hour student - organized hackathon working to inspire high school and university students of all technical backgrounds to learn and create solutions that impact local communities and small businesses.",
							"This year, gear up for our hottest competition yet. With pre-hackathon workshops on  June 19th & 20th, we’ll make sure you’re in tip-top shape to compete in the hackathon weekend from June 21st - 23rd.",
						]}
					/>
					<span
						className={`
                text-[#3C2415]
                sm:text-md text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                font-bold tracking-tighter leading-11 mt-4
            `}
					>
						Start training everyone - it's game time!
					</span>
				</div>
			</article>
			{loading ? (
				<Skeleton className="flex flex-row justify-center items-center transition-transform duration-300 transform w-64 h-64 md:w-96 md:h-96 lg:w-128 lg:h-128 xl:w-144 xl:h-144 flex-1 pt-5 sm:pt-0" />
			) : (
				<Picture className="flex flex-row justify-center items-center transition-transform duration-300 transform w-64 h-64 md:w-96 md:h-96 lg:w-128 lg:h-128 xl:w-144 xl:h-144 flex-1 pt-5 sm:pt-0">
					<Image
						src="/assets/images/about.png"
						alt=""
						className="rounded-2xl object-contain object-center w-full h-full"
						fetchPriority={`high`}
						loading={`eager`}
						width={isXLarge ? 500 : isLarge ? 400 : isMedium ? 300 : 200}
						height={isXLarge ? 500 : isLarge ? 400 : isMedium ? 300 : 200}
					/>
				</Picture>
			)}
		</article>
	);
};
