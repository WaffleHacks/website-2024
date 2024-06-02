"use client";

import {
	Article,
	CustomPicture as Picture,
	ScavContext,
	Slide,
} from "@/components";
import { team_members_panel_png } from "@/constants";
import { useOverlay, useTeam } from "@/core";
import { lazyImages } from "@/data/lazyImages";
import { cn, getTeamColor } from "@/lib";
import { objToArray } from "@/utils";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";

const MAX_CONCURRENT_REQUESTS: number = 5;
const NUM_MEMBERS: number = 15;

export const TeamPanel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [processingQueue, setProcessingQueue] = useState(false);
	const [teamData, setTeamData] = useState<
		Array<{ mem: string; member: any; color: string }>
	>([]);
	const [selectedMember, setSelectedMember] = useState<any>(null);

	const { showOverlay, setShowOverlay } = useOverlay();
	const [loading, setLoading] = useState(true);

	const team = objToArray(team_members_panel_png);
	const { getTeamMember } = useTeam();

	const memberDataMap = useRef(new Map());
	const requestQueue = useRef<string[]>([]);

	const isXLarge = useMediaQuery("(min-width: 1500px)");
	const isLarge = useMediaQuery("(min-width: 1200px)");
	const isMedium = useMediaQuery("(min-width: 890px)");
	const isSmall = useMediaQuery("(min-width: 640px)");
	const isMediumOrLarger = isMedium || isLarge || isXLarge;

	const ctx = useContext(ScavContext);

	const router = useRouter();

	const fileToName = (file: string) =>
		file.split("/").pop()?.replace(".png", "");

	const handleNext = () => {
		let nextIndex = currentIndex + howMuchToShow;
		if (nextIndex >= NUM_MEMBERS) {
			nextIndex = NUM_MEMBERS - 1;
		}
		setCurrentIndex(nextIndex);
	};

	const handlePrev = () => {
		let prevIndex = currentIndex - howMuchToShow;
		if (prevIndex < 0) {
			prevIndex = 0;
		}
		setCurrentIndex(prevIndex);
	};

	if (currentIndex > NUM_MEMBERS - 3) {
		setCurrentIndex(0);
	}

	useIsomorphicLayoutEffect(() => {
		setLoading(false);
	}, []);

	useIsomorphicLayoutEffect(() => {
		const uniqueTeam = Array.from(new Set(team));
		const queue: string[] = [];

		uniqueTeam.forEach((mem) => {
			if (!memberDataMap.current.has(mem)) {
				queue.push(mem);
			}
		});

		requestQueue.current.push(...queue);
		if (!processingQueue) {
			setProcessingQueue(true);
		}
	}, [team]);

	useIsomorphicLayoutEffect(() => {
		const processQueue = async () => {
			if (processingQueue && requestQueue.current.length > 0) {
				const requests = requestQueue.current.splice(
					0,
					MAX_CONCURRENT_REQUESTS,
				);
				await Promise.all(
					requests.map(async (mem) => {
						if (!memberDataMap.current.has(mem)) {
							const getMemberName = (mem: string) => fileToName(mem);
							const member = await getTeamMember(getMemberName(mem)!);

							let color = "";
							if (member?.top?.name) {
								color = getTeamColor(member.top.name) as string;
							}

							memberDataMap.current.set(mem, { mem, member, color });
							setTeamData((prev) => [...prev, { mem, member, color }]);
						}
					}),
				);
				if (requestQueue.current.length > 0) {
					processQueue();
				} else {
					setProcessingQueue(false);
				}
			}
		};
		processQueue();
	}, [processingQueue]);

	const howMuchToShow = isXLarge
		? 5
		: isLarge
			? 4
			: isMedium
				? 3
				: isSmall
					? 2
					: 1;

	const howMuchToShowFunc = (): number => {
		if (isXLarge) {
			return 5;
		} else if (isLarge) {
			return 4;
		} else if (isMedium) {
			return 3;
		} else if (isSmall) {
			return 2;
		} else {
			return 1;
		}
	};
	return (
		<>
		<h2 className="text-4xl font-bold mb-4">Meet The Team</h2>
		<Article
			className={`
				mt-2 px-10 w-full mb-8
			`}
		>
			<div className="w-full">
				<div className="relative">
					<div className="flex space-x-4 flex-row items-center justify-center mx-auto gap-2">
						{loading
							? Array.from({ length: 3 }, (_, index) => index).map((index) => (
									<Skeleton
										key={index}
										className={`
										relative overflow-hidden h-[210px] min-w-[210px] bg-[#f5f5f5] hover:bg-[#e0e0e0] transition-colors transition-duration-800 rounded-xl flex justify-center items-center shadow-lg border-none cursor-pointer
									`}
									/>
								))
							: teamData
									.slice(currentIndex, currentIndex + howMuchToShow)
									.map(({ mem, member, color }, index) => (
										<Slide key={`${mem}-${index}`} delay={(index + 1) * 0.1}>
											<Link href={`/team/${fileToName(mem)}`}>
												<Card
													className={`
												relative overflow-hidden h-[210px] min-w-[210px] bg-[#f5f5f5] hover:bg-[#e0e0e0] transition-colors transition-duration-800 rounded-xl flex justify-center items-center shadow-lg border-none cursor-pointer
											`}
													onClick={() => {
														setShowOverlay(mem);
														setSelectedMember({ mem, member, color });
														router.push(`/team/${fileToName(mem)}`);
													}}
												>
													<AnimatePresence>
														{selectedMember?.mem ||
															(showOverlay === mem && (
																<motion.div
																	className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
																	initial={{ opacity: 0 }}
																	animate={{ opacity: 0.5 }}
																	exit={{ opacity: 0 }}
																>
																	<div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
																</motion.div>
															))}
													</AnimatePresence>
													<Picture
														className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-xl overflow-hidden mix-blend-multiply`}
													>
														<Image
															src={mem}
															alt={mem}
															fill={true}
															fetchPriority="high"
															className="object-cover mix-blend-multiply relative"
															placeholder="blur"
															blurDataURL={
																lazyImages[fileToName(mem) as string]
															}
															sizes="(min-width: 1280px) 280px, (min-width: 1024px) 250px, (min-width: 768px) 200px"
														/>
													</Picture>
												</Card>
											</Link>
										</Slide>
									))}
					</div>
				</div>
			</div>
			<menu
				className={`
					flex items-center justify-between 
				bg-gray-100/50 p-4 rounded-md
					shadow-md mt-6 mx-auto 
					${isMediumOrLarger ? "w-1/2" : "w-full"}

				`}
			>
				{currentIndex > 0 && (
					<li className="flex">
						<Button
							onClick={handlePrev}
							className={cn("", "mr-2")}
							color={`primary`}
						>
							<FaArrowLeft className={`w-10`} color={`#3c2415`} />
						</Button>
					</li>
				)}
				<li className="text-lg font-semibold whitespace-nowrap overflow-hidden text-overflow-ellipsis">
					{currentIndex + 1} - {currentIndex + howMuchToShow} of {NUM_MEMBERS}
				</li>
				{currentIndex < NUM_MEMBERS - howMuchToShow && (
					<li>
						<Button
							onClick={handleNext}
							className={cn("", "ml-2")}
							color={`primary`}
						>
							<FaArrowRight className={`w-10`} color={`#3c2415`} />
						</Button>
					</li>
				)}
			</menu>
		</Article>
		</>
	);
};
