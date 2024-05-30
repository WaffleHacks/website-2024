"use client";

import { useLayoutEffect } from "react";

export default function GlobalError({
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
		<html>
			<body>
				<h2
					className={`text-4xl font-extrabold mb-4 w-full sm:text-center md:text-left`}
				>
					Something went wrong!
				</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
