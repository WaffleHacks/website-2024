import type React from "react";
import { CenterLayout, TransitionAnimation,  } from "@/components";
export default function LegalBaseLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<CenterLayout
			Element={`main`}
			className={` h-screen flex items-center justify-center overflow-y-scroll
				my-auto mx-auto w-screen
				text-[#3c2415]
			`}
		>
			<TransitionAnimation>
				{children}
			</TransitionAnimation>
		</CenterLayout>
	)
}