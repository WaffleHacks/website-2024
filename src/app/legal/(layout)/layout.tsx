import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type React from 'react';

export default function LegalLayerLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ScrollArea
			className={`
        h-screen flex flex-col items-center justify-center overflow-y-scroll
        my-auto mx-auto w-screen
        *:text-[#3c2415]
      `}
		>
			{children}
			<ScrollBar />
		</ScrollArea>
	);
}
