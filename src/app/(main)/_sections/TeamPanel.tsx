"use client";

import { Article, CustomPicture as Picture, Slide } from "@/components";
import { cn } from "@/lib";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";
import { TeamMembers } from "../_components/Teams";

export const TeamPanel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const isXLarge = useMediaQuery("(min-width: 1500px)");
	const isLarge = useMediaQuery("(min-width: 1200px)");
	const isMedium = useMediaQuery("(min-width: 890px)");
	const isSmall = useMediaQuery("(min-width: 640px)");
	const isMediumOrLarger = isMedium || isLarge || isXLarge;

	const router = useRouter();

	const fileToName = (file: string) =>
		file.split("/").pop()?.replace(".png", "");

	const handleNext = () => {
		let nextIndex = currentIndex + howMuchToShow;
		if (nextIndex >= TeamMembers.length) {
			nextIndex = TeamMembers.length - 1;
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

	const howMuchToShow = isXLarge
		? 5
		: isLarge
			? 4
			: isMedium
				? 3
				: isSmall
					? 2
					: 1;

	return (
		<article>
			<Article className="mt-2 px-10 w-full mb-8">
				<div className="w-full">
					<div className="relative">
						<div className="flex space-x-4 flex-row items-center justify-center mx-auto gap-2">
							{TeamMembers.slice(
								currentIndex,
								currentIndex + howMuchToShow,
							).map((member, index) => (
								<Slide key={currentIndex + index} delay={(index + 1) * 0.1}>
									<Link href={`/team/${fileToName(member.panel_photo)}`}>
										<Card
											className="relative overflow-hidden h-[210px] min-w-[210px] bg-[#f5f5f5] hover:bg-[#e0e0e0] transition-colors transition-duration-800 rounded-xl flex justify-center items-center shadow-lg border-none cursor-pointer"
											onClick={() =>
												router.push(`/team/${fileToName(member.panel_photo)}`)
											}
										>
											<Picture className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-xl overflow-hidden mix-blend-multiply">
												<img
													src={member.panel_photo}
													alt={member.name}
													className="object-cover mix-blend-multiply relative"
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
					flex items-center justify-between bg-gray-100/50 p-4 rounded-md shadow-md mt-6 mx-auto 
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
								<FaArrowLeft className={`w-10`} color={`#f5f5f5`} />
							</Button>
						</li>
					)}
					<li className="text-lg font-semibold whitespace-nowrap overflow-hidden text-overflow-ellipsis">
						{currentIndex + 1} -{" "}
						{Math.min(currentIndex + howMuchToShow, TeamMembers.length)} of{" "}
						{TeamMembers.length}
					</li>
					{currentIndex < TeamMembers.length - howMuchToShow && (
						<li>
							<Button
								onClick={handleNext}
								className={cn("", "ml-2")}
								color={`primary`}
							>
								<FaArrowRight className={`w-10`} color={`#f5f5f5`} />
							</Button>
						</li>
					)}
				</menu>
			</Article>
		</article>
	);
};
