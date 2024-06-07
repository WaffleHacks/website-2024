'use client';
import { button_style } from '@/components';
import { cn } from '@/lib';
import { Button } from '@nextui-org/button';
import type React from 'react';
export const ApplyPanel = () => {
	return (
		<>
			<Button
				className={cn(
					button_style,
					`px-4 py-2 text-white
				bg-[#3C2415]/100
				hover:bg-[#3C2415]/90
					rounded-md shadow-lg transition-all 
					w-[200px] h-[55px] font-semibold mb-14 mt-5
				`
				)}
				onClick={() => {}}
			>
				Apply
			</Button>
		</>
	);
};
