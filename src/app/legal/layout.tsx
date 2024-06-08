import { CenterLayout, TransitionAnimation } from '@/components';
import type React from 'react';
import '@/styles/css/globals.css';
import '@/styles/sass/globals.scss';

export default function LegalBaseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CenterLayout
			Element={`section`}
			className={` h-screen flex items-center justify-center overflow-y-scroll
				my-auto mx-auto w-screen
				*:text-[#3c2415]
			`}
		>
			<TransitionAnimation>{children}</TransitionAnimation>
		</CenterLayout>
	);
}
