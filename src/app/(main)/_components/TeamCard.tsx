"use client";
import {
	Article,
	Aside,
	CustomPicture,
	Footer,
	Header,
	Picture,
	Section,
	Subtract,
	Text,
} from "@/components";
import { ScavContext } from "@/components";
import {
	colorClasses,
	team_members_png,
	teams,
	waffleImageClasses,
	waffle_png,
} from "@/constants";
import { lazyImages } from "@/data/lazyImages";
import Image from "next/image";
import type React from "react";
import { useContext } from "react";
import { FaFlag, FaGraduationCap } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const getFirstName = (fullName: string) => {
	return fullName.split(" ")[0];
};
import { usePathname, useRouter } from "next/navigation";

const getMemberImage = (name: string, type: "team" | "waffles") => {
	const firstName = getFirstName(name) as string;
	const images = type === "team" ? team_members_png : waffle_png;
	return images[firstName];
};

const memberTeamAssociations: Record<string, string> = Object.fromEntries(
	Object.entries(teams).flatMap(([team, members]) =>
		members.map((member) => [member, team]),
	),
);

export const TeamCard: React.FC<{ member: TeamMember; color: string }> = ({
	member,
	color,
}) => {
	if (!member || !member.top || !member.top.name) {
		throw new Error("Invalid member data");
	}

	const teamImage = getMemberImage(member.top.name, "team") as string;
	const waffleImage = getMemberImage(member.top.name, "waffles") as string;
	const name = waffleImage.split("/").pop()?.replace(".png", "");

	const waffleImageClass = name ? waffleImageClasses[name] : "";
	const colorClass = name ? colorClasses[name] : "";
	const team = memberTeamAssociations[name as string];

	const pathName: string = usePathname();
	const isTeam = pathName.includes("team");
	const router = useRouter();

	return (
		<Article
			className={`
				flex flex-col gap-3 w-[687px]
				h-[884px] rounded-xl shadow-lg
				border-none py-10 mx-auto
				bg-[#f5f5f5] relative
			`}
		>
			<Picture className="w-full h-8 flex flex-col items-center justify-center mb-2">
				<img src="/assets/svgs/logo-small.svg" alt="" />
				<img src="/assets/svgs/line-shadow.svg" alt="" />
			</Picture>
			<Header className="flex flex-row gap-7 items-center w-full px-8 ml-auto justify-center">
				<Aside
					className={`w-52 h-52 flex flex-col justify-center rounded-full items-center overflow-hidden bg-transparent relative before:content-[''] before:absolute before:inset-0 before:w-52 before:h-52 before:rounded-full before:z-[0] ${colorClass} before:shadow-lg`}
				>
					<CustomPicture className="w-full h-fit flex flex-row justify-center items-center z-20 rounded-full">
						<Image
							src={teamImage}
							alt={member.top.name}
							className="rounded-full"
							width={208}
							height={208}
							quality={100}
							priority
							placeholder="blur"
							blurDataURL={lazyImages[name as string]}
						/>
					</CustomPicture>
				</Aside>
				<Aside>
					<Header className="flex flex-col gap-3">
						<h3
							className={`
								flex justify-center items-center
								text-center relative card-title
								${!isTeam ? "cursor-pointer" : ""}
							`}
							onClick={() => {
								if (!isTeam) {
									router.push(`/team/${name}`);
								}
							}}
						>
							<span className="text-3xl font-semibold rounded-[18px] w-[275px] h-[68px] bg-[#ffeebb] text-center flex justify-center items-center relative z-10 text-[#3C2415]">
								{member.top.name}
							</span>
						</h3>
						<Article className="flex flex-col gap-1 w-full ml-[24px] text-[#3C2415] font-semibold items-center justify-start mr-auto">
							<Section className="flex gap-3 flex-row w-full">
								<Picture className="w-full h-fit flex flex-row gap-2 items-center justify-center rounded-md">
									<img
										src="/assets/svgs/logo-year.svg"
										alt=""
										className="rounded-md h-[35px] w-[35px]"
									/>
									<Text
										className="w-full"
										text={`Team Waffle ${member.top.waffle_team}`}
									/>
								</Picture>
							</Section>
							<Section className="flex gap-3 flex-row w-full">
								<Picture className="w-full h-fit flex flex-row gap-2 items-center justify-center">
									<img
										src="/assets/images/medal.png"
										alt=""
										className="rounded-md h-[35px] w-[35px]"
									/>
									<Text
										className="w-full"
										text={`${member.top.member_since}x ${team} ${member.top.position}`}
									/>
								</Picture>
							</Section>
						</Article>
					</Header>
				</Aside>
			</Header>
			<Section className="flex m-0 p-0 items-center justify-center relative">
				<Subtract className="z-[10]" color={color} />
				<Section className="text-center text-[#3C2415] font-semibold z-[20] absolute w-[687px] h-[559px] pl-20 pr-10 pt-[5.75rem] pb-24">
					<Header className="flex flex-row items-start">
						<Article className="w-1/2">
							<h4 className="text-[25px] font-bold text-[#3C2415] text-left">
								Looking forward to...
							</h4>
							<Text
								text={`"${member.middle.looking_forward}"`}
								className="text-[#3C2415] font-semibold text-left"
							/>
						</Article>
						<div
							className={`w-[46.7%] h-[153px] z-[10] relative before:z-[-1] before:absolute before:w-full before:h-[88.8%] before:rounded-l-full ${waffleImageClass} before:right-[0px]`}
						/>
					</Header>
					<Header className="w-full top-0">
						<p className="w-full text-right">
							<span className="text-[#3C2415]">
								{member.middle.favorite_waffle.type}
							</span>
						</p>
					</Header>
					<Picture className="w-full h-2 flex flex-col items-center justify-center my-4">
						<img src="/assets/svgs/line.svg" alt="" />
					</Picture>
					<Footer className="px-0 flex flex-row gap-3 items-center justify-between w-full h-[55%]">
						<Section className="w-1/2 h-full">
							<ul className="flex items-start flex-col justify-start mr-auto left-0 gap-6">
								<li className="text-[19.25px] text-[#3C2415] text-left font-normal flex flex-row items-center justify-start gap-2">
									<FaFlag />
									<Text text={member.bottom.education.school.name} />
								</li>
								<li className="text-[19.25px] text-[#3C2415] text-left font-normal flex flex-row items-center justify-start gap-2">
									<FaGraduationCap size={`24`} />
									<Text text={`Class of ${member.bottom.education.class}`} />
								</li>
								<li className="text-[19.25px] text-[#3C2415] text-left font-normal flex flex-row items-center justify-start gap-2">
									<FaBookOpenReader size={`24`} />
									<Text text={member.bottom.education.major} />
								</li>
							</ul>
						</Section>
						<Section className="w-1/2 h-full flex flex-col items-center justify-between">
							<h4 className="text-[17.69px] text-[#3C2415] text-left font-extrabold">
								Favorite Olympic Sport:
							</h4>
							<Picture className="w-full h-full flex items-center justify-center">
								<img
									src={`/assets/svgs/team/${getFirstName(member.top.name)}.svg`}
									alt={member.bottom.favorite_olympic_sport}
								/>
							</Picture>
						</Section>
					</Footer>
				</Section>
			</Section>
		</Article>
	);
};
