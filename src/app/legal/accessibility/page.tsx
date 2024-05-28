import { constructMetadata } from "@/utils/meta";
import { Accessibility } from "../../_sections";

export const metadata = constructMetadata({ title: "Accessibility" });

export default function AccessibilityPage() {
	return <Accessibility />;
}
