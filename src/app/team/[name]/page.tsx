import { TeamCard } from "@/app/(main)/_components";
import { memberDescription } from "@/constants";
import { createAPIClient, getTeamColor } from "@/lib";
import React from "react";

export const generateMetadata = ({
	params: { name },
}: { params: { name: string } }) => ({
	title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
	description: `${memberDescription[name]}`,
});

export default async function Page({
	params: { name },
}: { params: { name: string } }) {
	const { member } = await createAPIClient().team.get(name);
	const teamColor = getTeamColor(member.top.name) as string;
	return <TeamCard member={member} color={teamColor} />;
}
