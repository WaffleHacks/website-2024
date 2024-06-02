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
				className={cn(
					`
					p-4 mx-2 h-auto rounded-lg 
					`,
					`
					bg-[#f5f5f5] shadow-lg
				`,
				)}
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
								text-2xl font-bold
						`}
						>
							{track.title}
						</h3>
						<p
							className={`
								text-lg
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
									text-xl font-bold
							`}
							>
								Prize(s)
							</h4>

							<Picture
								className={`
								flex flex-row flex-wrap gap-2
								w-full relative rounded-sm mt-2
								`}
							>
								{track.prizeImages.map((image: string, index: number) => (
									<Image
										key={index}
										src={image}
										alt={`Prize ${index + 1}`}
										className={`
												rounded-lg w-[100px] h-[100px]
												md:w-[175px] md:h-[175px]
											`}
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

const CustomSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loading, setLoading] = useState(true);
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

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);

	const isMedium = useMediaQuery("(max-width: 768px)");

	return (
		<div
			className={`
				relative w-full overflow-hidden
			`}
		>
			<div
				className={`
					overflow-hidden relative mx-auto
				`}
			>
				{loading ? (
					<Skeleton
						className={`
						w-full h-[450px]
						rounded-lg
					`}
					/>
				) : (
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
				)}
			</div>
			<div
				className={`
					flex flex-row items-center justify-between
					w-full mx-auto mt-4 px-4
				`}
			>
				<Button onClick={prevSlide} className={`bg-[#bb8653]`}>
					<FaArrowLeft size={20} color={`#3c2415`} className={`bg-[#bb8653]`} />
				</Button>
				<div
					className={`
						pagination w-full
					`}
				>
					{!isMedium && (
						<>
							{Array.from({ length: Math.min(3, totalSlides) }).map(
								(_, index) => {
									const slideIndex = currentSlide - 1 + index;
									if (slideIndex < 0 || slideIndex >= totalSlides) return null;
									return (
										<div
											key={slideIndex}
											className={`
                pagination-button 
                ${currentSlide === slideIndex ? "active" : ""}
            `}
											onClick={() => goToSlide(slideIndex)}
										/>
									);
								},
							)}
						</>
					)}
				</div>
				<Button onClick={nextSlide} className={`bg-[#bb8653]`}>
					<FaArrowRight
						size={20}
						color={`#3c2415`}
						className={`bg-[#bb8653]`}
					/>
				</Button>
			</div>
		</div>
	);
};

export const TracksPanel = () => {
	return (
		<>
			<h2 className="text-4xl font-bold mb-4">Tracks / Prizes</h2>
			<div
				className={`
				font-mplus p-8 pt-0
			`}
			>
				<CustomSlider />
			</div>
		</>
	);
};
