import { CenterLayout, TransitionAnimation } from "@/components";
import type React from "react";

export default function TeamBaseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CenterLayout
			Element={`main`}
			className={`w-screen h-screen flex items-center justify-center`}
		>
			<TransitionAnimation>{children}</TransitionAnimation>
		</CenterLayout>
	);
}
