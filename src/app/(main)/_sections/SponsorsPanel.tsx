'use client';
import { sponsorsData } from '@/constants';
import { cn } from '@/lib';
import { Slugify } from '@/utils';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export const SponsorsPanel = () => {
	const [loading, setLoading] = useState(true);

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);

	const getTextColor = (tier: string): string => {
		switch (tier) {
			case 'Platinum':
				return 'text-[#0651AC]';
			case 'Gold':
				return 'text-[#684803]';
			case 'Silver':
				return 'text-[#4F545F]';
			default:
				return 'text-[#fff]';
		}
	};

	const getBorderColor = (tier: string): string => {
		switch (tier) {
			case 'Platinum':
				return 'border-[#0651AC]';
			case 'Gold':
				return 'border-[#684803]';
			case 'Silver':
				return 'border-[#4F545F]';
			default:
				return 'border-[#fff]';
		}
	};

	const sizes = ['max-h-[5.5rem]', 'max-h-[4.5rem]', 'max-h-[3.5rem]'];

	return (
		<>
			<article
				className={cn(
					`card`,
					`
				sm:px-10 px-0 w-full
			`
				)}
			>
				<h2
					className={`
							text-4xl font-semibold text-center sm:text-left max-w-screen-2xl flex items-center sm:justify-between justify-center mx-auto mb-4 mt-4
					`}
				>
					Our Sponsors
				</h2>
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
										sponsor.link ? sponsor.link : `https://www.google.com/search?q=${sponsor.name}`
									}
									target="_blank"
									rel="noopener noreferrer"
									className="relative h-fit w-fit"
								>
									<Image
										src={sponsor.image}
										alt={sponsor.name}
										className={
											'object-fit transition-all w-full h-full overflow-hidden mix-blend-multiply ' +
											sizes[index]
										}
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
