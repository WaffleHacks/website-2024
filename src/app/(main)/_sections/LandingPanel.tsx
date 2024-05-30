"use client";
import { ScavContext } from "@/components";
import React, { useState, useRef, useLayoutEffect, useContext } from "react";

import {
	DraggableCore,
	type DraggableData,
	type DraggableEvent,
} from "react-draggable";

import { useIsomorphicLayoutEffect } from "usehooks-ts";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

export const LandingPanel = () => {
	const [archerAngle, setArcherAngle] = useState(0);
	const [arrowPos, setArrowPos] = useState({
		x: 0,
		y: 0,
		angle: 0,
		vx: 0,
		vy: 0,
	});
	const archerBox = useRef<HTMLDivElement>(null);
	const arrow = useRef<HTMLImageElement>(null);
	const arrowInterval = useRef<NodeJS.Timeout | null>(null);

	const container = useRef<HTMLDivElement>(null);
	const img_box = useRef<HTMLDivElement>(null);
	const windowSize = useWindowSize();

	const ctx = useContext(ScavContext);

	function onSizing() {
		if (container.current && img_box.current) {
			const img = img_box.current;
			const aspect_ratio = 1510 / 599;
			const container_aspect_ratio =
				container.current.clientWidth / container.current.clientHeight;

			if (container_aspect_ratio < aspect_ratio) {
				img.style.width = "100%";
				img.style.height = "auto";
			} else {
				img.style.width = "auto";
				img.style.height = "100%";
			}
		}
	}

	useIsomorphicLayoutEffect(onSizing, [
		container.current,
		img_box.current,
		windowSize,
	]);
	const images = [
		{
			src: "/assets/svgs/landing/red_pf.svg",
			className: "absolute left-[34.5%] top-[31.5%] w-[31%]",
		},
		{
			src: "/assets/svgs/landing/fencer_pf.svg",
			className: "absolute left-[68.2%] top-[31.5%] w-[31%]",
		},
		{
			src: "/assets/svgs/landing/fencer.svg",
			className: "absolute left-[72.4%] top-[15.3%] w-[17%]",
		},
		{
			src: "/assets/svgs/landing/archer_pf.svg",
			className: "absolute left-[16.2%] top-[67.5%] w-[31%]",
		},
		// {
		// 	src: "/assets/svgs/landing/archer.svg",
		// 	className: "absolute left-[27.3%] top-[40.55%] w-[10.8%]",
		// },
		{
			src: "/assets/svgs/landing/tennis_pf.svg",
			className: "absolute left-[50.05%] top-[67.9%] w-[31%]",
		},
		{
			src: "/assets/svgs/landing/tennis.svg",
			className: "absolute left-[60.4%] top-[48.8%] w-[8.4%]",
		},
		// {
		// 	src: "/assets/svgs/landing/scav/wh_inner.svg",
		// 	className: "absolute left-[45.06%] top-[12.65%] w-[10.47%]",
		// },
		// {
		// 	src: "/assets/svgs/landing/scav/wh_cut.svg",
		// 	className: "absolute left-[42.9%] top-[7.1%] w-[14.85%]",
		// },
	];

	function rotateArcher(e: DraggableEvent, pos: DraggableData) {
		if (!ctx.scavState) return;
		// center of rotation is at 14.3vw, 5.5vw
		const box = archerBox.current;
		if (!box) return;

		const boxRect = box.getBoundingClientRect();

		const box_y_middle = boxRect.top + boxRect.height / 2;
		const box_x_middle = boxRect.left + boxRect.width / 2;

		const mouseX = (e as any).clientX;
		const mouseY = (e as any).clientY;

		const angle = Math.atan2(mouseY - box_y_middle, mouseX - box_x_middle);
		const degrees = angle * (180 / Math.PI);
		setArcherAngle(degrees);
	}

	function shootArrow() {
		if (!ctx.scavState) return;

		if (arrowInterval.current) {
			clearInterval(arrowInterval.current);
		}

		// initializa angles
		// start with velocity of 10
		setArrowPos({ x: 0, y: 0, angle: 0, vx: 13, vy: 0 });

		arrowInterval.current = setInterval(() => {
			setArrowPos((pos) => {
				const nextX = pos.x + pos.vx;
				const nextY = pos.y + pos.vy;
				const nextAngle = (Math.atan2(pos.vy, pos.vx) * 180) / Math.PI;

				const aAngle = (archerAngle * Math.PI) / 180;

				const gravStrength = 0.15;

				const nextVx = pos.vx + Math.sin(aAngle) * gravStrength;
				const nextVy = pos.vy + Math.cos(aAngle) * gravStrength;

				let newPos = {
					x: nextX,
					y: nextY,
					angle: nextAngle,
					vx: nextVx,
					vy: nextVy,
				};

				const ar = arrow.current;
				if (!ar) {
					clearInterval(arrowInterval.current as NodeJS.Timeout);
					arrowInterval.current = null;
					newPos = { x: 0, y: 0, angle: 0, vx: 0, vy: 0 };
					return newPos;
				}
				const box = ar.getBoundingClientRect();

				if (
					box.bottom <= 0 ||
					box.right <= 0 ||
					box.top >= window.innerHeight ||
					box.left >= window.innerWidth
				) {
					clearInterval(arrowInterval.current as NodeJS.Timeout);
					arrowInterval.current = null;
					newPos = { x: 0, y: 0, angle: 0, vx: 0, vy: 0 };
				}

				return newPos;
			});
		}, 15);
	}

	return (
		<header className="font-mplus px-2 sm:px-12 pt-44 h-[70vh] w-full max-w-screen-2xl mx-auto">
			<img
				id="landing-blob"
				className="absolute top-24 right-0 h-[50%]"
				src="/assets/svgs/landing/scav/blob.svg"
				alt=""
			/>

			<h2 className="text-2xl font-normal">
				Put your best code forward for the
			</h2>
			<h1 className="text-[2.5rem] font-medium">WaffleHacks games!</h1>

			<div
				ref={container}
				onResize={onSizing}
				className="landing-panel-img-container p-2 relative"
			>
				<div
					ref={img_box}
					className="absolute"
					style={{ aspectRatio: 1510 / 599 }}
				>
					<img
						src="/assets/svgs/landing/road.svg"
						alt="road"
						className="absolute left-[-0.2%] top-[31.5%] w-[32.9%]"
					/>
					<div id="svg-biker">
						{[
							{
								src: "/assets/svgs/landing/wheel.svg",
								alt: "wheel",
								className:
									"bike-wheel-rotate absolute left-[9.4%] top-[32.4%] w-[5.5%]",
							},
							{
								src: "/assets/svgs/landing/wheel.svg",
								alt: "wheel",
								className:
									"bike-wheel-rotate absolute left-[17.8%] top-[32.4%] w-[5.5%]",
							},
							{
								src: "/assets/svgs/landing/biker.svg",
								alt: "biker",
								className: "absolute left-[13.7%] top-[14%] w-[7%]",
							},
						].map(({ src, alt, className }, index) => (
							<img key={index} src={src} alt={alt} className={className} />
						))}
					</div>
					{images.map(
						({ src, className }: { src: string; className: string }, index) => {
							return <img key={index} src={src} alt="" className={className} />;
						},
					)}

					{/* WH logo / stand */}
					<div id="landing-wh-logo">
						<div
							className="absolute left-[42.9%] top-[7.1%] w-[14.85%]"
							style={{ aspectRatio: "1/1" }}
						>
							<img
								id="stand-sign"
								className="absolute left-[9%] top-[0%] w-[85%]"
								src="/assets/svgs/landing/scav/stand_sign.svg"
								alt="Sign"
							/>
						</div>

						<img
							id="stand-shadow"
							className="absolute left-[42.9%] top-[7.1%] w-[14.85%]"
							src="/assets/svgs/landing/scav/wh_cut_shadow.svg"
							alt=""
						/>
						<div
							className="overflow-hidden absolute left-[42.9%] top-[7.1%] w-[14.85%]"
							style={{ aspectRatio: "1/1" }}
						>
							<img
								className="absolute left-[14.7%] top-[14.9%] w-[70.5%]"
								src="/assets/svgs/landing/scav/stand_bkg.svg"
								alt=""
							/>
							<img
								id="stand-logo-inner"
								className="absolute left-[14.7%] top-[14.9%] w-[70.5%]"
								src="/assets/svgs/landing/scav/wh_inner.svg"
								alt=""
							/>
							<img
								id="stand-bar"
								className="absolute left-[24%] top-[100%] w-[52%]"
								src="/assets/svgs/landing/scav/stand_bar.svg"
								alt=""
							/>
							<img
								className="absolute top-0 left-0 w-full h-full"
								src="/assets/svgs/landing/scav/wh_cut.svg"
								alt=""
							/>
						</div>
					</div>

					<div
						ref={ctx.headspot1}
						className="absolute w-[3%] h-[6%] left-[63.2%] top-[47%] w-[14.85%] h-[14.85%]"
					></div>
					<div
						ref={ctx.headspot2}
						className="absolute w-[3%] h-[6%] left-[81%] top-[9.4%] w-[14.85%] h-[14.85%]"
					></div>

					{/* archer */}
					<div>
						<img
							className="absolute left-[30%] top-[63.55%] w-[3.36%]"
							src="/assets/svgs/landing/archer_lower.svg"
							alt=""
						/>
						<DraggableCore onDrag={rotateArcher} onStop={shootArrow}>
							<div
								ref={archerBox}
								style={{
									transformOrigin: "bottom",
									transform: `rotateZ(${ctx.scavState ? archerAngle : 0}deg)`,
								}}
								className="absolute left-[27.25%] top-[40.3%] w-[10.2%] h-[25%]"
							>
								<img
									className="no-drag absolute left-[32.5%] top-[60%] w-[74%]"
									ref={arrow}
									style={{
										left: `calc(32.5% + ${arrowPos.x}px)`,
										top: `calc(60% + ${arrowPos.y}px)`,
										transformOrigin: "center",
										transform: `rotateZ(${arrowPos.angle}deg)`,
									}}
									src="/assets/svgs/landing/archer_arrow.svg"
									alt=""
								/>
								<img
									className="no-drag absolute left-[66%] top-0 w-[35.4%]"
									src="/assets/svgs/landing/archer_bow.svg"
									alt=""
								/>
								<img
									className="no-drag absolute left-0 top-[33%] w-[100%]"
									src="/assets/svgs/landing/archer_upper.svg"
									alt=""
								/>
							</div>
						</DraggableCore>
					</div>
				</div>
			</div>
		</header>
	);
};
