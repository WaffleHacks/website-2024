import { Terms } from "@/app/(legal)/_sections";
import { constructMetadata } from "@/utils";

export const metadata = constructMetadata({ title: "Terms of Service" });

export default function TermsPage() {
	return <Terms />;
}
