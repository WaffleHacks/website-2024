"use client";

import {
	Article,
	EnterAnimation,
	CustomPicture as Picture,
	Section,
	card_style,
} from "@/components";
import { Tracks } from "@/constants";
import { cn } from "@/lib";
import { Slugify } from "@/utils";
import { Typography } from "@mui/joy";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";

const TrackSlide: React.FC<{
	track: Tracks;
}> = ({ track }) => {
	const [loading, setLoading] = useState<boolean>(true);

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);

	return (
		<EnterAnimation>
			<Section
				className={cn(`
					p-4 mx-2 h-auto rounded-lg ${card_style}
					`, `
					
				`)}
			>
				<Article
					className={`
					flex flex-col md:flex-row items-center
					justify-center h-full w-full
				`}
				>
					<Picture
						className={`
						w-full max-w-[450px]
						h-auto rounded-md
					`}
					>
						<Image
							src={track.trackImage}
							alt={`${track.title} image`}
							className={`
							object-cover object-center
						`}
							width={450}
							height={450}
							sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
						/>
					</Picture>
					<Article
						className={`
						mt-4 md:mt-0 md:ml-4 w-full
					`}
					>
						<h3
							className={`
							
						`}
						>
							{track.title}
						</h3>
						<p
							className={`
							
						`}
						>
							{track.description}
						</p>
						<Article
							className={`

						`}
						>
							<h4
								className={`

							`}
							>
								Prize(s)
							</h4>
							{loading && <Skeleton className="h-16 w-full" />}
							<Picture
								className={`
								flex flex-row flex-wrap gap-2
								w-full relative rounded-sm
							`}
							>
								{track.prizeImages.map((image, index) => (
									<Image
										key={index}
										src={image}
										alt={`Prize ${index + 1}`}
										className="mx-2 rounded-sm w-[100px] h-[100px] md:w-[175px] md:h-[175px]"
										width={175}
										height={175}
										sizes="(max-width: 768px) 100, (min-width: 768px) 175"
									/>
								))}
							</Picture>
						</Article>
					</Article>
				</Article>
			</Section>
		</EnterAnimation>
	);
};

const CustomSlider: React.FC<{ slidesToShow: number }> = ({ slidesToShow }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = Tracks.length;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const isXXSmall = useMediaQuery("(max-width: 320px)");
	const isXSmall = useMediaQuery("(max-width: 480px)");
	const isSmall = useMediaQuery("(max-width: 640px)");
	const isMedium = useMediaQuery("(max-width: 768px)");

	return (
		<div
			className={`
				relative w-full overflow-hidden
				border border-blue-500
			`}
		>
			<div
				className={`
					overflow-hidden relative mx-auto
				`}
				style={{
					maxWidth: "80%",
				}}
			>
				<Section
					key={currentSlide}
					className={`
						flex-shrink-0 w-full
					`}
				>
					<TrackSlide
						key={Slugify(Tracks[currentSlide]!.title)}
						track={Tracks[currentSlide]!}
					/>
				</Section>
			</div>
			<div
				className={`
					flex flex-row items-center justify-between
					w-full mx-auto mt-4 px-4
				`}
			>
				{isSmall && (
					<Button
						onClick={prevSlide}
						className={`

					`}
					>
						<FaArrowLeft size={20} />
					</Button>
				)}
				<div
					className={`
						pagination w-full
					`}
				>
					{Array.from({ length: totalSlides }).map((_, index) => (
						<div
							key={index}
							className={`
								pagination-button 
								${currentSlide === index ? "active" : ""}
							`}
							onClick={() => goToSlide(index)}
						/>
					))}
				</div>
				{isSmall && (
					<Button onClick={nextSlide}>
						<FaArrowRight size={20} />
					</Button>
				)}
			</div>
		</div>
	);
};

export const TracksPanel: React.FC = () => {
	const [loading, setLoading] = useState(true);

	const isLarge = useMediaQuery("(max-width: 1024px)");
	const isXLarge = useMediaQuery("(max-width: 1280px)");
	const itemsToShow = isXLarge ? 3 : isLarge ? 2 : 1;

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div
			className={`
				font-mplus p-8 border border-red-400

			`}
		>
			{loading ? (
				<Skeleton
					className={`
						h-64 w-full
					`}
				/>
			) : (
				<CustomSlider slidesToShow={itemsToShow} />
			)}
		</div>
	);
};
