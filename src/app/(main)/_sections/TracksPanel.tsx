'use client';

import { Article, EnterAnimation, CustomPicture as Picture, ScavContext, Section } from '@/components';
import { Tracks } from '@/constants';
import { cn } from '@/lib';
import { Slugify } from '@/utils';
import { Button } from '@nextui-org/button';
import { Skeleton } from '@nextui-org/skeleton';
import Image from 'next/image';
import { useQueryState } from 'nuqs';
import type React from 'react';
import { useContext, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

const TrackSlide: React.FC<{
	track: Tracks;
}> = ({ track }) => {
	const [waf2Done, setWaf2Done] = useState<boolean>(false);
	const ctx = useContext(ScavContext);

	function waf2Finish(){
		setWaf2Done(true);

		setTimeout(() => 
		ctx.waffle.setHidingSpot(ctx.waffle.hidingSpot + 1)
		, 500);
	}

	return (
		<EnterAnimation>
			<Section
				className={cn(
					`
					p-4 mx-2 h-auto rounded-lg 
					`,
					`
					bg-[#f5f5f5] shadow-lg
				`
				)}
			>
				<Article className="flex flex-col md:flex-row items-center justify-center h-full w-full">
					<Picture className="w-full max-w-[450px] h-auto rounded-md">
						{
							(ctx.scavState && ctx.waffle.hidingSpot == 1 && track.title == "Food Insecurity [TRACK]" ) &&
							<button id="waf2" className={'absolute bottom-0' + (waf2Done ? ' finished' : '')} onClick={waf2Finish}>
								<img src="/assets/svgs/scav/wawa.svg" alt="" className='w-16'  />
							</button>	
						}
						<Image
							src={track.trackImage}
							alt={`${track.title} image`}
							className="object-cover object-center"
							width={450}
							height={450}
							sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
						/>
					</Picture>
					<Article className="mt-4 md:mt-0 md:ml-4 w-full">
						<h3 className="text-2xl font-bold">{track.title}</h3>
						<p className="text-lg">{track.description}</p>
						<Article>
							<h4 className="text-xl font-bold">Prize(s)</h4>

							<Picture className="flex flex-row flex-wrap gap-2 w-full relative rounded-sm mt-2">
								{track.prizeImages.map((image: string, index: number) => (
									<Image
										key={index}
										src={image}
										alt={`Prize ${index + 1}`}
										className="rounded-lg w-[100px] h-[100px] md:w-[175px] md:h-[175px]"
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
	const [currentSlide, setCurrentSlide] = useQueryState('track', {
		parse: Number,
		defaultValue: 0,
		clearOnDefault: true,
	});
	const [loading, setLoading] = useState(true);
	const totalSlides = Tracks.length;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div
			className={`
				relative w-full overflow-hidden flex flex-col-reverse gap-4 sm:block
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
						<TrackSlide key={Slugify(Tracks[currentSlide]!.title)} track={Tracks[currentSlide]!} />
					</Section>
				)}
			</div>
			<div
				className={`
					flex flex-row items-center justify-between
					w-full mx-auto mt-4 px-4
				`}
			>
				<Button
					onClick={prevSlide}
					className={`bg-[#3C2415]`}
					color={`primary`}
					aria-label="Previous"
				>
					<FaArrowLeft size={20} color={`#f5f5f5`} className={`bg-[#3C2415]`} />
				</Button>

				<div>
					<span className="font-bold text-xl block">
						{currentSlide + 1} of {totalSlides}
					</span>
				</div>

				<Button onClick={nextSlide} className={`bg-[#3C2415]`} aria-label="Next">
					<FaArrowRight size={20} color={`#f5f5f5`} className={`bg-[#3C2415]`} />
				</Button>
			</div>
		</div>
	);
};

export const TracksPanel = () => {
	return (
		<>
			<div
				className={`
				w-full px-10
				`}
			>
				<h2
					className={`
					text-4xl font-semibold text-center sm:text-left max-w-screen-2xl flex items-center sm:justify-between justify-center mx-auto mb-4 mt-4
					`}
				>
					Tracks & Prizes
				</h2>
			</div>

			<div
				className={`
					font-mplus p-2 pt-0 max-w-screen-2xl mx-auto
					`}
			>
				<CustomSlider />
			</div>
		</>
	);
};
