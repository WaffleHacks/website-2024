import { constructMetadata } from "@/utils/meta";
import { Rules } from "../../_sections";

export const metadata = constructMetadata({ title: "Rules" });

export default function RulesPage() {
	return <Rules />;
}
