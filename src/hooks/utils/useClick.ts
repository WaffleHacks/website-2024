import { useEffect, useRef } from "react";

const useClick = (onClick: () => void) => {
	const element = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const { current } = element;

		if (current) {
			current.addEventListener("click", onClick);
		}

		return () => {
			if (current) {
				current.removeEventListener("click", onClick);
			}
		};
	}, [onClick]);

	return element;
};

export default useClick;
