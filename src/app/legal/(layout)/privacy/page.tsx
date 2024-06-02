import { Privacy } from "@/app/(legal)/_sections";
import { constructMetadata } from "@/utils/meta";

export const metadata = constructMetadata({ title: "Privacy Policy" });

export default function PrivacyPage() {
	return <Privacy />;
}
