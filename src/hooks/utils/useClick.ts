import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

const useClick = (onClick: () => void) => {
	const element = useRef<HTMLDivElement | null>(null);

	useIsomorphicLayoutEffect(() => {
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
