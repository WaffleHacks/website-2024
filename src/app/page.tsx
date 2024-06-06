import { CenterLayout } from "@/components";
import { LandingPanel, PageSections } from "./(main)/_sections";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center overflow-x-hidden relative">
			<LandingPanel />
			<CenterLayout
				Element={`main`}
				className="flex flex-col w-screen items-center justify-center gap-20 top-0"
			>
				<PageSections />
			</CenterLayout>
		</div>
	);
}
