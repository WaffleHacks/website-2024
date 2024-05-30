import { CenterLayout } from "@/components";
import { LandingPanel, PageSections } from "./(main)/_sections";
export default async function Home() {
	return (
		<>
			<LandingPanel />
			<CenterLayout
				Element={`main`}
				className="flex flex-col w-screen items-center justify-center gap-14"
			>
				<PageSections />
			</CenterLayout>
		</>
	);
}
