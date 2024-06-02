import { Semantics } from "@/components";
import { Providers } from "@/providers";
import { constructMetadata, constructViewport } from "@/utils";
import type { NextWebVitalsMetric } from "next/app";
import type React from "react";

import "@/styles/css/globals.css";
import "@/styles/sass/globals.scss";

export const metadata = constructMetadata();
export const viewport = constructViewport();

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
	if (metric.label === "web-vital") {
		console.log(metric);
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`
					box-border overflow-x-hidden flex flex-col
					items-center justify-center w-[100dvw]
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
