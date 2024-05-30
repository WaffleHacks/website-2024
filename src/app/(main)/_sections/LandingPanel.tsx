"use client";
import { ScavContext } from "@/components";
import React, {
	useEffect,
	useState,
	useRef,
	useLayoutEffect,
	useContext,
} from "react";
import {
	DraggableCore,
	type DraggableData,
	type DraggableEvent,
} from "react-draggable";

const NumberDisplay = ({ number, text }: { number: number; text: string }) => {
	let num_chars = number.toString();
	if (num_chars.length < 2) num_chars = "0" + num_chars;
	return (
		<header className="flex flex-col items-center relative">
			<div className="flex flex-row gap-2">
				{num_chars.split("").map((char, index) => {
					return (
						<span
							key={index}
							className="numberdisplay-number text-2xl font-extrabold bg-gray-200 rounded-lg py-3 px-3"
						>
							{char}
						</span>
					);
				})}
			</div>
			<span className="text-base font-medium absolute top-[100%]">{text}</span>
		</header>
	);
};

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
	const [daysLeft, setDaysLeft] = useState(0);
	const [hoursLeft, setHoursLeft] = useState(0);
	const [minutesLeft, setMinutesLeft] = useState(0);
	const [secondsLeft, setSecondsLeft] = useState(0);

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

	useEffect(() => {
		function showtime() {
			const subDate = Date.UTC(2024, 5, 23, 16, 0, 0);
			const now = Date.now();
			let subTimeLeft = Math.max(0, subDate - now);

			const daysLeft = Math.floor(subTimeLeft / (1000 * 60 * 60 * 24));
			subTimeLeft -= daysLeft * 24 * 60 * 60 * 1000;

			const hoursLeft = Math.floor(subTimeLeft / (1000 * 60 * 60));
			subTimeLeft -= hoursLeft * 60 * 60 * 1000;
			const minutesLeft = Math.floor(subTimeLeft / (1000 * 60));
			subTimeLeft -= minutesLeft * 60 * 1000;
			const secondsLeft = Math.floor(subTimeLeft / 1000);

			setDaysLeft(daysLeft);
			setHoursLeft(hoursLeft);
			setMinutesLeft(minutesLeft);
			setSecondsLeft(secondsLeft);
		}

		const interval = setInterval(() => {
			showtime();
		}, 1000);

		showtime();

		return () => {
			clearInterval(interval);
		};
	}, []);

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

	useEffect(onSizing, [container.current, img_box.current, windowSize]);
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

		const mouseX = e.clientX;
		const mouseY = e.clientY;

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
		setArrowPos({ x: 0, y: 0, angle: 0, vx: 10, vy: 0 });

		arrowInterval.current = setInterval(() => {
			setArrowPos((pos) => {
				console.log("going");
				const nextX = pos.x + pos.vx;
				const nextY = pos.y + pos.vy;
				const nextAngle = (Math.atan2(pos.vy, pos.vx) * 180) / Math.PI;

				const aAngle = (archerAngle * Math.PI) / 180;

				const gravity = [-Math.cos(aAngle), Math.sin(aAngle)];
				const gravStrength = 0.15;

				const nextVx = pos.vx + gravity[1] * gravStrength;
				const nextVy = pos.vy - gravity[0] * gravStrength;

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
		<div className="font-mplus px-12 pt-44 h-screen w-full">
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

			<div className="flex flex-row justify-end w-full">
				<div>
					<span className="text-2xl">Countdown to the WaffleHacks Games</span>
					<div className="flex text-2xl font-bold gap-2 items-center">
						<NumberDisplay number={daysLeft} text="Days" /> <span>:</span>
						<NumberDisplay number={hoursLeft} text="Hours" /> <span>:</span>
						<NumberDisplay number={minutesLeft} text="Minutes" /> <span>:</span>
						<NumberDisplay number={secondsLeft} text="Seconds" />
					</div>
				</div>
			</div>
		</div>
	);
};
