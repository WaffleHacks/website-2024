import { TeamCard } from "@/app/(main)/_components";
import { memberDescription } from "@/constants";
import React from "react";
import { TeamMemberData, TeamMembers } from "@/app/(main)/_components/Teams";

export const generateMetadata = ({
	params: { name },
}: { params: { name: string } }) => ({
	title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
	description: `${memberDescription[name]}`,
});

export function generateStaticParams() {
	return [{ name: 'jendy' }, 
			{ name: 'kevin' },
			{ name: 'amara' }, 
			{ name: 'pranav' },
			{ name: 'jasmine' },
			{ name: 'samihah' },
			{ name: 'sammi' },
			{ name: 'arthi' },
			{ name: 'tammy' },
			{ name: 'nisarg' },
			{ name: 'ethan' },
			{ name: 'laaveshwaran' },
			{ name: 'mike' },
			{ name: 'alex' },
			{ name: 'bisman' }
		]
  }

export default async function Page({
	params: { name },
}: { params: { name: string } }) {
	const member = TeamMembers.find((member) => member.photo_name == name);
	return <TeamCard member={member as TeamMemberData} />;
}
