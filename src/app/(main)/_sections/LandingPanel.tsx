"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

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
	const container = useRef<HTMLDivElement>(null);
	const img_box = useRef<HTMLDivElement>(null);
	const windowSize = useWindowSize();

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
		{
			src: "/assets/svgs/landing/archer.svg",
			className: "absolute left-[27.3%] top-[40.55%] w-[10.8%]",
		},
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
	return (
		<div className="font-mplus px-12 pt-44 h-screen w-full">
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

					<div
						className="absolute left-[42.9%] top-[7.1%] w-[14.85%]"
						style={{ aspectRatio: "1/1" }}
					>
						<img
							id="stand-sign"
							className="absolute left-[9%] top-[0%] w-[85%]"
							src="/assets/svgs/landing/scav/stand_sign.svg"
							alt=""
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
