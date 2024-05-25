import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div
			id="footer"
			className="w-full flex flex-col items-center py-4 space-y-4 mt-8 bg-[#dec199]"
		>
			<span>© WaffleHacks 2024</span>
			<div className="flex flex-row gap-4 flex-wrap px-8 justify-around">
				<Link href="/privacy" target="_blank">
					Privacy Policy
				</Link>
				<Link href="/rules" target="_blank">
					Rules
				</Link>
				<Link
					href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
					rel="noreferrer"
					target="_blank"
				>
					MLH Code of Conduct
				</Link>
			</div>
			<div className="text-gray-800">
				<p>
					Fiscally sponsored by{" "}
					<a
						href="https://the.hackfoundation.org/"
						target="_blank"
						rel="noreferrer"
					>
						The Hack Foundation
					</a>
				</p>
				<p>Non-profit EIN: 81-2908499</p>
			</div>
		</div>
	);
};

export default Footer;
