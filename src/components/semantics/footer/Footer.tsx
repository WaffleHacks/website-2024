import { appName } from "@/constants/app";
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

/**
 * import Link from 'next/link';

const Footer = () => {
	return (
		<div id="footer" className="flex flex-col items-center py-4 space-y-4 mt-8">
			<span>© WaffleHacks 2023</span>
			<div className="flex flex-row gap-4 flex-wrap px-8 justify-around">
				<Link href="/privacy" target="_blank">
					Privacy Policy
				</Link>
				<Link href="/rules" target="_blank">
					Rules
				</Link>
			</div>
			<div className="text-gray-800">
				<p>
					Fiscally sponsored by{' '}
					<a href="https://the.hackfoundation.org/" target="_blank" rel="noreferrer">
						The Hack Foundation
					</a>
				</p>
				<p>Non-profit EIN: 81-2908499</p>
			</div>
		</div>
	);
};

export default Footer;
 * 
*/
