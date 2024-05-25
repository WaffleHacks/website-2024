import { FooterBar, NavBar, Semantics } from "@/components/semantics";
import { Providers } from "@/providers";
import { constructMetadata, constructViewport } from "@/utils";
import type { NextWebVitalsMetric } from "next/app";
import type React from "react";

import "@/styles/css/globals.css";
import "@/styles/sass/globals.scss";

export const metadata = constructMetadata();
export const viewport = constructViewport();

export function reportWebVitals(metric: NextWebVitalsMetric) {
	if (metric.label === "web-vital") {
		console.log(metric);
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={``}>
			<body
				className={`
					box-border overflow-x-hidden
					
				`}
			>
				<Providers>
					<Semantics>{children}</Semantics>
				</Providers>
			</body>
		</html>
	);
}
