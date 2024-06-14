'use client';
import Link from 'next/link';
import type React from 'react';
export const ApplyPanel = () => {
	return (
		<>
			<Link
				href="https://apply.wafflehacks.org/"
				className={`px-4 py-2 text-white
				bg-[#3C2415]/100
				hover:bg-[#3C2415]/90
				rounded-md shadow-lg transition-all 
				w-[200px] h-[55px] font-semibold mb-14 mt-5 grid place-items-center
			`}
				target="_blank"
				rel="noopener noreferrer"
			>
				Apply
			</Link>
		</>
	);
};
