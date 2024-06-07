import { CenterLayout, TemplateAnimation } from '@/components';
import type React from 'react';

export default function MemberLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<CenterLayout Element={`main`} className={`w-screen h-screen flex items-center justify-center`}>
			<TemplateAnimation>{children}</TemplateAnimation>
		</CenterLayout>
	);
}
