import { constructMetadata } from "@/utils/meta";
import { Privacy } from "../_sections";

export const metadata = constructMetadata({ title: "Privacy Policy" });

export default function PrivacyPage() {
	return <Privacy />;
}
