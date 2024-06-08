'use client';
import { useRouter } from 'next/navigation';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export default function page() {
	const router = useRouter();
	useIsomorphicLayoutEffect(() => {
		document.title = 'WaffleHacks - Legal';
		router.push('/');
	}, []);
	return (
		<>
			<p
				className={`
					text-center text-2xl font-bold
					text-[#3C2415] mt-10
				`}
			>
				Redirecting...
			</p>
		</>
	);
}
