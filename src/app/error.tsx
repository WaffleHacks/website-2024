'use client';

import { useLayoutEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useLayoutEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<section
			className={`
			h-screen flex items-center justify-center
			w-screen
			`}
		>
			<article className="cardNoise ">
				<p
					className={`
					text-center text-2xl font-bold
					text-[#3C2415] mt-10
					`}
				>
					An error occurred. Please try again later.
				</p>
				<p
					className={`
					text-center text-lg
						text-[#3C2415] mt-2
						`}
				>
					{error.message}
				</p>
				<button
					className={`
					px-3 py-1
					text-center text-lg font-bold
					text-[#3C2415] mt-4
					border-2 border-[#3C2415]
					rounded-md
					hover:bg-[#3C2415] hover:text-white
					transition-colors w-full 
					`}
					onClick={reset}
				>
					Try Again
				</button>
			</article>
		</section>
	);
}
