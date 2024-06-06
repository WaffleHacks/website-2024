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
import {
	colorClasses,
	teams,
	waffleImageClasses,
} from "@/constants";
import Image from "next/image";
import type React from "react";
import { FaFlag, FaGraduationCap } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { TeamMemberData } from "./Teams";

import { usePathname, useRouter } from "next/navigation";

const memberTeamAssociations: Record<string, string> = Object.fromEntries(
	Object.entries(teams).flatMap(([team, members]) =>
		members.map((member) => [member, team]),
	),
);

export const TeamCard: React.FC<{ member: TeamMemberData; }> = ({
	member,
}) => {
	if (!member || !member.name) {
		throw new Error("Invalid member data");
	}

	const CIRCLE_PATH = '/assets/images/team/';
	const WAFFLE_PATH = '/assets/images/waffles/'

	const teamImage = CIRCLE_PATH + member.photo_name + '.png';
	const waffleImage = WAFFLE_PATH + member.photo_name + '.png';;
	const name = waffleImage.split("/").pop()?.replace(".png", "");

	const waffleImageClass = name ? waffleImageClasses[name] : "";
	const colorClass = name ? colorClasses[name] : "";
	const team = memberTeamAssociations[name as string];

	const pathName: string = usePathname();
	const isTeam = pathName.includes("team");
	const router = useRouter();

	return (
		<>
		<div className="h-screen w-screen p-4 pt-36 flex justify-center items-center">
			<img className="h-full w-full" src={"/assets/svgs/team/cards/" + member.photo_name + '.svg'} alt="" />

		</div>
		
		</>
	);
};
