import { TeamCard } from '@/app/(main)/_components';
import { type TeamMemberData, TeamMembers } from '@/app/(main)/_components/Teams';
import { memberDescription } from '@/constants';
import React from 'react';

export const generateMetadata = ({ params: { name } }: { params: { name: string } }) => ({
	title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
	description: `${memberDescription[name]}`,
});

export function generateStaticParams() {
	return [
		{ name: 'jendy' },
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
		{ name: 'bisman' },
		{ name: 'kevin' },
	];
}

export default async function Page({ params: { name } }: { params: { name: string } }) {
	const member = TeamMembers.find((member) => member.name?.split(' ')[0]?.toLowerCase() == name);
	return  (
	<div className='flex justify-center mt-24'>
		<TeamCard member={member as TeamMemberData} style={{
			width: '80vw', 
			maxHeight: '80vh'}} />
	</div>
	);
	
	
}
