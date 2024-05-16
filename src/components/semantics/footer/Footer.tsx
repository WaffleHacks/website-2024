import { appName } from "@/src/constants";
import Link from "next/link";
import React from "react";
// TODO: Determine what is needed
interface LegalLinks {
	href: string;
	text: string;
}
interface LegalLinksProps extends Array<LegalLinks> {}
[];
export const LegalLinks: LegalLinksProps = [
	{
		href: `/accessibility`,
		text: `Accessibility`,
	},
	{
		href: `/terms`,
		text: `Terms of Service`,
	},
	{
		href: `/privacy`,
		text: `Privacy Policy`,
	},
];

export const Footer = (): JSX.Element => {
	return (
		<footer
			className={`
        bottom-0 left-0 w-full h-[50px] px-3
      `}
		>
			<menu
				className={`
          flex flex-row items-center justify-between
        `}
			>
				<li>
					<p>&copy; {appName} 2023</p>
				</li>
				<li
					className={`
            flex flex-row items-center justify-between gap-3
          `}
				>
					{LegalLinks.map((links, index) => {
						return (
							<Link key={index} href={links.href}>
								<p>{links.text}</p>
							</Link>
						);
					})}
				</li>
			</menu>
		</footer>
	);
};
