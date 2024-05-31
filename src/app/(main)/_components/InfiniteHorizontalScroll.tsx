"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export const InfiniteHorizontalScroll: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const FAST_DURATION = 25;
	const SLOW_DURATION = 75;

	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);

	const [duration, setDuration] = useState<number>(25);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useIsomorphicLayoutEffect(() => {
		let controls;
		const finalPosition = -width / 2 - 8;
		console.log(finalPosition);
		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}
		return controls?.stop;
	}, [rerender, xTranslation, duration, width]);

	return (
		<>
			<motion.div
				className="left-0 flex gap-4 justify-center items-center max-w-screen-xl w-full h-fit"
				style={{ x: xTranslation }}
				ref={ref}
				onHoverStart={() => {
					setMustFinish(true);
					setDuration(SLOW_DURATION);
				}}
				onHoverEnd={() => {
					setMustFinish(true);
					setDuration(FAST_DURATION);
				}}
			>
				{children}
			</motion.div>
		</>
	);
};
