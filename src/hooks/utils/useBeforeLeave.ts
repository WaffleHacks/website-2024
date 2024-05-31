import { useIsomorphicLayoutEffect } from "usehooks-ts";

const useBeforeLeave = (onBefore: () => void) => {
	useIsomorphicLayoutEffect(() => {
		const handle = (e: MouseEvent) => {
			const { clientY } = e;
			if (clientY <= 0) {
				onBefore();
			}
		};

		document.addEventListener("mouseleave", handle);
		return () => document.removeEventListener("mouseleave", handle);
	}, [onBefore]);
};

export default useBeforeLeave;
