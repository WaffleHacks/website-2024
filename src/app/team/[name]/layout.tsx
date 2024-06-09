'use client';
import { CenterLayout, TemplateAnimation } from '@/components';
import type React from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export default function MemberLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useIsomorphicLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<CenterLayout Element={`main`} className={`w-screen h-screen flex items-center justify-center`}>
			<TemplateAnimation>{children}</TemplateAnimation>
		</CenterLayout>
	);
}
