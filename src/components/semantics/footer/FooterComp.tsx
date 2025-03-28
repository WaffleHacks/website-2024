'use client';
import { Picture } from '@/components/templates';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const FooterComp: React.FC<FooterProps> = ({ top, bottom }) => {
	const router = useRouter();
	return (
		<footer
			className={`
			text-[#3C2415] py-6 flex
				flex-col bottom-0 w-full
				backdrop-blur-[10px] backdrop-filter bg-opacity-50
			`}
		>
			<div
				className={`
					container flex flex-col
					justify-center items-center px-4
					pt-12 pb-6 mx-auto sm:px-6 lg:px-8
					lg:pt-14 max-w-screen-2xl
				`}
			>
				<div
					className={`
						flex flex-wrap justify-between
						mb-4 lg:mb-0 w-full items-center
					`}
				>
					<div
						className={`
							flex flex-col lg:flex-row
							gap-4 items-center justify-start
							w-full lg:w-auto mb-6 lg:mb-4
						`}
					>
						<div
							className={`
								flex flex-col sm:flex-row
								items-center gap-4 w-full
								sm:w-auto
							`}
						>
							<Picture onClick={() => router.push('/')}>
								<Image
									src={`/assets/svgs/header.webp`}
									alt={``}
									height={80}
									width={80}
									className={`
									cursor-pointer
									object-cover object-center
								`}
								/>
							</Picture>
							<div
								className={`
									flex flex-row gap-4
									flex-wrap justify-center
								`}
							>
								{top.left.icons.map((icon, index) => (
									<Link
										key={index}
										href={icon.href}
										target={`_blank`}
										rel={`noopener noreferrer`}
										aria-label={icon.href.replace(/https?:\/\/(www\.)?/, '').split('/')[0]}
									>
										{icon.icon}
									</Link>
								))}
							</div>
						</div>
					</div>
					<div
						className={`
							text-center lg:text-right w-full 
							lg:w-auto mb-2 lg:mb-0
						`}
					>
						Fiscally sponsored by{' '}
						<Link
							href={top.right.link}
							target={`_blank`}
							rel={`noopener noreferrer`}
							className={`
								underline cursor-pointer	
							`}
						>
							{top.right.sponsor}
						</Link>
					</div>
				</div>
				<div
					className={`
						text-center lg:text-left flex flex-col
						justify-center items-center w-full border-t-3 gap-3
						border-[#3C2415] pt-4
					`}
				>
					<div
						className={`
							flex flex-wrap justify-center
							lg:justify-start mt-4
						`}
					>
						{bottom.right.links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								target={`_self`}
								rel={`noopener noreferrer`}
								className={`
								text-sm cursor-pointer
								underline
							`}
							>
								<span className="mr-4 hover:font-bold">{link.text}</span>
							</Link>
						))}
					</div>
					<p className="mb-4 lg:mb-0 text-sm">
						<span className="mr-4">
							&copy; {bottom.left.name} {new Date().getFullYear()}
						</span>
						{'|'}
						<span className="ml-4"> Non-profit EIN: {bottom.left.ein}</span>
					</p>
				</div>
			</div>
		</footer>
	);
};
