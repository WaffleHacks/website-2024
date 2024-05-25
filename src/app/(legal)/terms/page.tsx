import { constructMetadata } from "@/utils";
import { Terms } from "../_sections";

export const metadata = constructMetadata({ title: "Terms of Service" });

export default function TermsPage() {
	return <Terms />;
}
