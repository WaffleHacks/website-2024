"use client";
import { cn } from "@/lib";
import type { SVGAttributes } from "react";

export const Subtract: React.FC<
	Readonly<SVGAttributes<SVGElement>> & {
		color: string;
		className: string;
	}
> = ({ color, className, ...props }) => {
	return (
		<>
			<svg
				width="687"
				height="559"
				viewBox="0 0 687 559"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={cn(className)}
				{...props}
			>
				<g filter="url(#filter0_d_138_1787)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M53 520C41.9543 520 33 511.046 33 500V61C33 49.9543 41.9543 41 53 41H634C645.046 41 654 49.9543 654 61V93H439.5C402.221 93 372 123.221 372 160.5C372 197.779 402.221 228 439.5 228H654V500C654 511.046 645.046 520 634 520H53Z"
						fill={color}
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_138_1787"
						x="-9"
						y="0"
						width="705"
						height="563"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters={`sRGB`}
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feMorphology
							radius="2"
							operator="dilate"
							in="SourceAlpha"
							result="effect1_dropShadow_138_1787"
						/>
						<feOffset dy="1" />
						<feGaussianBlur stdDeviation="20" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_138_1787"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_138_1787"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};
