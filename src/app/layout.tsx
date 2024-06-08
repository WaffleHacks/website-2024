import { Semantics } from '@/components';
import { Providers } from '@/providers';
import { constructMetadata, constructViewport } from '@/utils';
import type { NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import type React from 'react';

import '@/styles/css/globals.css';
import '@/styles/sass/globals.scss';

export const metadata = constructMetadata();
export const viewport = constructViewport();

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
	if (metric.label === 'web-vital') {
		console.log(metric);
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`
				bg-[#fafafa !important]
			`}
			data-a11y-animated-images="system"
			data-a11y-link-underlines="false"
			data-turbo-loaded
		>
			<Head>
				<link rel={`preload`} href="/assets/images/about.webp" as="image" />
			</Head>
			<body
				className={`
					box-border overflow-x-hidden flex flex-col
					items-center justify-center w-full
					relative
				`}
			>
				<>
					<Providers>
						<Semantics>{children}</Semantics>
					</Providers>
				</>
			</body>
		</html>
	);
}
