"use client";
import { Team, members, team_members_png, waffle_png } from "@/constants";
import Image from "next/image";
import type React from "react";

const getFirstName = (fullName: string) => {
	return fullName.split(" ")[0];
};

const getMemberImage = (name: string, type: Directory) => {
	const firstName = getFirstName(name);
	const images = type === "team" ? team_members_png : waffle_png;
	return images[firstName!];
};

const TeamCard: React.FC<{ member: any; color: string }> = ({ member, color }) => {
	return (
		<div className={`bg-[${color}] p-6 rounded-lg shadow-lg text-center`}>
			<Image
				src={getMemberImage(member.top.name, "team")!}
				alt={member.top.name}
				className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
				width={400}
				height={400}
			/>
			<h2 className="text-xl font-semibold mb-2">{member.top.name}</h2>
			<p className="text-gray-600 mb-2">{member.top.position}</p>
			<p className="text-gray-600 mb-2">Waffle Team: {member.top.waffle_team}</p>
			<p className="text-gray-600 mb-4">Member Since: {member.top.member_since}x</p>
			<p className="text-gray-600 mb-2">Looking Forward To: {member.middle.looking_forward}</p>
			<div className="mb-4">
				<img
					src={getMemberImage(member.top.name, "waffles")}
					alt={`${member.middle.favorite_waffle.type} waffle`}
					className="w-16 h-16 mx-auto rounded-full object-cover mb-2"
				/>
				<p className="text-gray-600">Favorite Waffle: {member.middle.favorite_waffle.type}</p>
			</div>
			<p className="text-gray-600 mb-2">School: {member.bottom.education.school.name}</p>
			{member.bottom.education.school.subtext && (
				<p className="text-gray-600 mb-2">{member.bottom.education.school.subtext}</p>
			)}
			<p className="text-gray-600 mb-2">Class of {member.bottom.education.class}</p>
			<p className="text-gray-600 mb-4">Major: {member.bottom.education.major}</p>
			<p className="text-gray-600">Favorite Olympic Sport: {member.bottom.favorite_olympic_sport}</p>
		</div>
	);
};

export const TeamPanel: React.FC = () => {
	return (
		<div className="p-6">
			{Team.map((teamCategory) =>
				Object.entries(teamCategory).map(([categoryName, categoryData]) => (
					<div key={categoryName} className={`mb-8`}>
						<h1 className="text-3xl font-bold text-center mb-6">
							{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
						</h1>
						<div
							className={`flex flex-wrap justify-center gap-6 border-t-4 pt-4`}
							style={{ borderColor: categoryData.color }}
						>
							{categoryData.members.map((member, index) => (
								<TeamCard key={index} member={member} color={categoryData.color} />
							))}
						</div>
					</div>
				))
			)}
		</div>
	);
};