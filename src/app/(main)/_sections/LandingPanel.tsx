"use client";
import { ScavContext } from "@/components";
import React, { useState, useRef, useLayoutEffect, useContext, useEffect } from "react";

import Draggable, {
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

	const swordElement = useRef<HTMLImageElement>(null);

	const road = useRef<HTMLImageElement>(null);
	const backWheel = useRef<HTMLImageElement>(null);
	const frontWheel = useRef<HTMLImageElement>(null);
	const biker = useRef<HTMLDivElement>(null);
	const [bikingForwards, setBikingForwards] = useState(false);
	const [bikerPos, setBikerPos] = useState({x: 0, y: 0, falling: false});
	const [bikerGone, setBikerGone] = useState(false);
	const bikerInterval = useRef<NodeJS.Timeout | null>(null);
	const tennisPlayer = useRef<HTMLImageElement>(null);
	const tennisPf = useRef<HTMLImageElement>(null);

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
			className: "no-drag absolute left-[34.5%] top-[31.5%] w-[31%]",
		},
		{
			src: "/assets/svgs/landing/fencer_pf.svg",
			className: "no-drag absolute left-[68.2%] top-[31.5%] w-[31%]",
		},
		{
			src: "/assets/svgs/landing/fencer_body.svg",
			className: "no-drag absolute left-[77.8%] top-[15.2%] w-[11.6%]",
		},
		{
			src: "/assets/svgs/landing/archer_pf.svg",
			className: "no-drag absolute left-[16.2%] top-[67.5%] w-[31%]",
		}
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

	function arrowIntersectsBox(arBox: DOMRect, box: DOMRect) {
		// check if arrow tip intersects box
		const arX = arBox.left + arBox.width;
		const arY = arBox.top + arBox.height;
		return (
			arX >= box.left && arX <= box.right && arY >= box.top && arY <= box.bottom
		);
	}
	function boxesIntersect(box1: DOMRect, box2: DOMRect) {
		return !(
			box2.left >= box1.right ||
			box2.right <= box1.left ||
			box2.top >= box1.bottom ||
			box2.bottom <= box1.top
		);
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

				const h1 = ctx.archer.headspot1?.current?.getBoundingClientRect();
				const h2 = ctx.archer.headspot2?.current?.getBoundingClientRect();

				if (
					(ctx.archer.activeHeadSpot == 1 &&
						h1 &&
						arrowIntersectsBox(box, h1)) ||
					(ctx.archer.activeHeadSpot == 2 && h2 && arrowIntersectsBox(box, h2))
				) {
					clearInterval(arrowInterval.current as NodeJS.Timeout);
					ctx.archer.headshot = true;
					return newPos;
				}

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

	function dragSword(e: DraggableEvent){
		if (!swordElement.current) return;
		let sword = swordElement.current;
		let swordRect = sword.getBoundingClientRect();
		// get left middle
		let swordX = swordRect.left;
		let swordY = swordRect.top + swordRect.height / 2;
		// check intersection with front wheel
		let frontWheelRect = frontWheel.current?.getBoundingClientRect();
		if(frontWheelRect){
			if(swordX >= frontWheelRect.left && swordX <= frontWheelRect.right &&
				swordY >= frontWheelRect.top && swordY <= frontWheelRect.bottom){
				ctx.biker.setFrontWheelPopped(true);
			}
		}
		// check intersection with back wheel
		let backWheelRect = backWheel.current?.getBoundingClientRect();
		if(backWheelRect){
			if(swordX >= backWheelRect.left && swordX <= backWheelRect.right &&
				swordY >= backWheelRect.top && swordY <= backWheelRect.bottom){
				ctx.biker.setBackWheelPopped(true);
			}
		}

	}

	function bikeForwardsInterval(){
		if (!ctx.scavState){
			clearInterval(bikerInterval.current as NodeJS.Timeout);
			bikerInterval.current = null;
			return;
		}
		setBikerPos(prevPos => {
			if (!bikingForwards) return prevPos;
			if (!road.current || !tennisPf.current) return prevPos;
			if (!biker.current) return prevPos;
			if (!frontWheel.current || !backWheel.current) return prevPos;
			if (!tennisPlayer.current) return prevPos;
			
			// if both wheels are popped, stop
			if(ctx.biker.frontWheelPopped && ctx.biker.backWheelPopped){
				setBikingForwards(false);
				clearInterval(bikerInterval.current as NodeJS.Timeout);
				bikerInterval.current = null;
				return prevPos;
			}

			let bikerRect = biker.current.getBoundingClientRect();
			let frontWheelRect = frontWheel.current.getBoundingClientRect();
			let tennisPlayerRect = tennisPlayer.current.getBoundingClientRect();
			let roadRect = road.current.getBoundingClientRect();
			let tennisPfRect = tennisPf.current.getBoundingClientRect();

			// if biker intersects tennis player while the apple is on their head, stop
			if(boxesIntersect(bikerRect, tennisPlayerRect) && ctx.archer.activeHeadSpot == 1){
				return prevPos;
			}

			let nextX = bikerPos.x + 0.25;
			let falling = false;
			// check intersection of front wheel with road
			if (!boxesIntersect(frontWheelRect, roadRect)) {
				falling = true;
			}
			// check intersection of front wheel with tennis pf
			if (boxesIntersect(frontWheelRect, tennisPfRect) && frontWheelRect.bottom > tennisPfRect.top + tennisPfRect.height/2){
				falling = false;
			}

			let nextY = bikerPos.y;
			if (falling) nextY += 1;

			if (bikerPos.y > window.innerHeight) {
				setBikerGone(true);
				setBikingForwards(false);
				clearInterval(bikerInterval.current as NodeJS.Timeout);
				bikerInterval.current = null;
			}

			return {x: nextX, y: nextY, falling: falling};
		}
		);
	}

	function liftFlag(e: DraggableEvent){
		if (!road.current) return;
		const roadRect = road.current.getBoundingClientRect();
		let target = e.target as HTMLImageElement;
		let targetRect = target.getBoundingClientRect();
		// check intersection with road
		if(targetRect.bottom <= roadRect.top && !bikingForwards && !bikerInterval.current){
			// lift flag
			setBikingForwards(true);
			
		}
	}

	useEffect(() => {
		if (!ctx.scavState) {
			clearInterval(arrowInterval.current as NodeJS.Timeout);
			arrowInterval.current = null;
			return;
		}
		if (!bikerInterval.current && bikingForwards){
			bikerInterval.current = setInterval(bikeForwardsInterval, 15);
		}
		return () => {
			clearInterval(bikerInterval.current as NodeJS.Timeout);
			bikerInterval.current = null;
		}
	}, [bikingForwards, bikerPos, ctx.scavState]);

	useEffect(() => {
		if(!ctx.scavState){
			setArrowPos({ x: 0, y: 0, angle: 0, vx: 0, vy: 0 });
		}
	}, [ctx.scavState]);

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

					{/* Biker road */}
					<img
						ref={road}
						src="/assets/svgs/landing/road.svg"
						alt="road"
						className="absolute left-[-0.2%] top-[31.5%] w-[32.9%]"
					/>

					{/* tennis platform */}
					<img
						ref={tennisPf}
						src="/assets/svgs/landing/tennis_pf.svg"
						className="no-drag absolute left-[50.05%] top-[67.9%] w-[31%]"
						alt="road"
					/>
					
					{images.map(
						({ src, className }: { src: string; className: string }, index) => {
							return <img key={index} src={src} alt="" className={className} />;
						},
					)}

					{/* tennis player */}
					<img 
						ref={tennisPlayer}
						src="/assets/svgs/landing/tennis.svg"
						className= "no-drag absolute left-[60.4%] top-[48.8%] w-[8.4%]"
						alt="" />

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

					{/* archer headspots */}
					{
						ctx.scavState && <>
							<div
								ref={ctx.archer.headspot1}
								className="absolute w-[3%] h-[6%] left-[63.2%] top-[47%] w-[14.85%] h-[14.85%]"
							></div>
							<div
								ref={ctx.archer.headspot2}
								className="absolute w-[3%] h-[6%] left-[81%] top-[9.4%] w-[14.85%] h-[14.85%]"
							></div>
						</>
					}
					

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


					{/* biker */}
					<div 
						ref={biker}
						id="svg-biker" 
						className="absolute w-[14%] h-[33%]"
						style={{
							transform: `rotate(${
									((ctx.scavState && ctx.biker.backWheelPopped) ? -15 : 0) + 
									((ctx.scavState && ctx.biker.frontWheelPopped) ? 15 : 0) +
									((ctx.scavState && bikerPos.falling) ? 30 : 0)
								}deg)`,
							transition: "transform 0.5s ease-in",
							transformOrigin: "bottom center",
							top: ctx.scavState ? `calc(${bikerPos.y}% + 13.7%)` : "13.7%",
							left: ctx.scavState ? `calc(${bikerPos.x}% + 9.4%)` : "9.4%",
							display: (ctx.scavState && bikerGone) ? "none" : "block"
						}}
					>
						<img 
							ref={backWheel}
							src="/assets/svgs/landing/wheel.svg" 
							alt={"bike back wheel"} 
							className="no-drag bike-wheel-rotate absolute left-0 top-[56.8%] w-[40%] h-[42%]"
							style={{height: (ctx.scavState && ctx.biker.backWheelPopped) ? "24%" : "42.5%"}} 
						/>
						<img 
							ref={frontWheel}
							src="/assets/svgs/landing/wheel.svg" 
							alt={"bike front wheel"} 
							className="no-drag bike-wheel-rotate absolute left-[59.8%] top-[56.8%] w-[40%]"
							style={{height: (ctx.scavState && ctx.biker.frontWheelPopped) ? "24%" : "42.5%"}} 
						/>
						<img src="/assets/svgs/landing/biker.svg" alt={"bike biker wheel"} className="no-drag absolute left-[30%] top-0 w-[51%]" />
					</div>

					{/* biker flag */}
					{
						ctx.scavState && 
						<Draggable axis="y" onDrag={liftFlag}>
							<img 
								className="biker-flag no-drag absolute left-[29.4%] bottom-[53%]"
								src="/assets/svgs/landing/scav/bike_flag.svg" 
								alt="" />
						</Draggable>
					}
					


					{/* stabby */}
					<Draggable onDrag={e => dragSword(e)} disabled={!ctx.scavState} position={ctx.scavState ? undefined : {x: 0, y: 0}}>
						<img 
							ref={swordElement}
							className="no-drag absolute left-[72.2%] top-[22.5%] w-[5.8%]"
							src="/assets/svgs/landing/fencer_sword.svg" 
							alt="" />
					</Draggable>

				</div>
			</div>
		</header>
	);
};
