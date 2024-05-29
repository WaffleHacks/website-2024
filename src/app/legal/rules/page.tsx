import { Rules } from "@/app/(legal)/_sections";
import { constructMetadata } from "@/utils/meta";

export const metadata = constructMetadata({ title: "Rules" });

export default function RulesPage() {
	return <Rules />;
}
