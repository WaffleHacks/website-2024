import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const Links: Record<string, string>[] = [
		{ href: "#about", text: "About" },
		{ href: "#tracks", text: "Tracks" },
		{ href: "#calendar", text: "Calendar" },
		{ href: "#sponsors", text: "Sponsors" },
		{ href: "#faqs", text: "FAQs" },
		{ href: "#apply", text: "Apply Now" },
	];
	return (
		<>
			<div className="fixed z-50 bg-white w-screen flex gap-8 justify-center items-center py-6 shadow-lg font-semibold">
				{Links.slice(0, 3).map((link, index) => (
					<Link key={index} href={link.href}>
						<p>{link.text}</p>
					</Link>
				))}
				<Image className="" src="/assets/images/header.svg" alt="Header" />
				{Links.slice(3).map((link, index) => (
					<Link key={index} href={link.href}>
						<p>{link.text}</p>
					</Link>
				))}
			</div>
		</>
	);
};

export default Header;
