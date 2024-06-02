import type React from "react";

export const CardNoise: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	return (
		<article className={`cardNoise`}>
			<svg
				viewBox="0 0 100% 100%"
				xmlns="http://www.w3.org/2000/svg"
				className="noise"
			>
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.85"
						numOctaves="6"
						stitchTiles="stitch"
					/>
				</filter>

				<rect
					width="100%"
					height="100%"
					preserveAspectRatio="xMidYMid meet"
					filter="url(#noiseFilter)"
				/>
			</svg>
			<div className={`content`}>{children}</div>
		</article>
	);
};
