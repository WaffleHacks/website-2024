"use client";
import { Picture } from "@/components/templates";
import Link from "next/link";

export const FooterComp: React.FC<FooterProps> = ({ top, bottom }) => {
	return (
		<footer className="bg-gray-900 text-white py-6 flex flex-col">
			<div className="container mx-auto flex flex-col justify-center items-center px-6 max-w-screen-xl">
				<div className="flex items-center mb-4 lg:mb-0 justify-start flex-row">
					<div
						className={`
							flex flex-row gap-4
						`}
					>
						<Picture>
							<img
								src={top.left.image}
								alt={top.right.sponsor}
								className="mr-4"
							/>
						</Picture>
						<div
							className={`
							flex flex-row gap-4
							`}
						>
							{top.left.icons.map((icon, index) => (
								<Link key={index} href={icon.href}>
									{icon.icon}
								</Link>
							))}
						</div>
					</div>
					<div className="text-center lg:text-right">
						<Link href={top.right.link}>{top.right.sponsor}</Link>
					</div>
				</div>
				<div className="text-center lg:text-left">
					<p
						className={`
							
						`}
					>
						<span>
							&copy; {bottom.left.name} {new Date().getFullYear()}
						</span>
						<span>Non-profit EIN: {bottom.left.ein}</span>
					</p>
					<div className="flex flex-wrap justify-center lg:justify-start mt-4">
						{bottom.right.links.map((link, index) => (
							<Link key={index} href={link.href}>
								<span className="mr-4 hover:text-gray-300">{link.text}</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
