'use client';
import { ScavContext } from '@/components';
import React, { useState, useRef, useLayoutEffect, useContext, useEffect } from 'react';
import CarrakatuDialog from '../_components/CarrakatuDialog';

import Draggable, { DraggableCore, type DraggableData, type DraggableEvent } from 'react-draggable';

import Image from 'next/image';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { NumberDisplay } from '../_components';
import Modal from '../_components/Modal';
import WrenShopDialog from '../_components/WrenShopDialog';

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
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
	const gotHeadshot = useRef(false);

	const swordElement = useRef<HTMLImageElement>(null);

	const road = useRef<HTMLImageElement>(null);
	const backWheel = useRef<HTMLImageElement>(null);
	const frontWheel = useRef<HTMLImageElement>(null);
	const biker = useRef<HTMLDivElement>(null);
	const [bikingForwards, setBikingForwards] = useState(false);
	const [bikerPos, setBikerPos] = useState({ x: 0, y: 0, falling: false });
	const [bikerGone, setBikerGone] = useState(false);
	const bikerInterval = useRef<NodeJS.Timeout | null>(null);
	const bikerGoals = useRef({
		started: false,
		fell: false,
		stopped: false,
	});
	const tennisPlayer = useRef<HTMLImageElement>(null);

	const container = useRef<HTMLDivElement>(null);
	const img_box = useRef<HTMLDivElement>(null);
	const windowSize = useWindowSize();

	const carrakatu = useRef<HTMLImageElement>(null);
	const [carrakatuPos, setCarrakatuPos] = useState({ x: 0, y: -500 });
	const [carrakatuSetPosition, setCarrakatuSetPosition] = useState({
		from: { x: 1000, y: -500 },
		to: { x: 1000, y: -500 },
		at: 0,
	});
	const carrakatuInterval = useRef<NodeJS.Timeout | null>(null);
	const carrakatuPickedUp = useRef(false);
	const carrakatuDroppedOff = useRef(false);
	const [carrySpeaking, setCarrySpeaking] = useState(false);
	const carrySpeakingDone = useRef(false);
	const [carryDone, setCarryDone] = useState(false);

	const [wrenPopup, setWrenPopup] = useState(false);

	const ctx = useContext(ScavContext);

	function onSizing() {
		if (container.current && img_box.current) {
			const img = img_box.current;
			const aspect_ratio = 1510 / 599;
			const container_aspect_ratio = container.current.clientWidth / container.current.clientHeight;

			if (container_aspect_ratio < aspect_ratio) {
				img.style.width = '98%';
				img.style.height = 'auto';
			} else {
				img.style.width = 'auto';
				img.style.height = '100%';
			}
		}
	}

	useIsomorphicLayoutEffect(onSizing, [container.current, img_box.current, windowSize]);
	const images = [
		{
			src: '/assets/svgs/landing/red_pf.svg',
			className: 'no-drag absolute left-[34.5%] top-[31.5%] w-[31%]',
		},
		{
			src: '/assets/svgs/landing/fencer_pf.svg',
			className: 'no-drag absolute left-[68.2%] top-[31.5%] w-[31%]',
		},
		{
			src: '/assets/svgs/landing/fencer_body.svg',
			className: 'no-drag absolute left-[77.8%] top-[15.2%] w-[11.6%]',
		},
		{
			src: '/assets/svgs/landing/archer_pf.svg',
			className: 'no-drag absolute left-[16.2%] top-[67.5%] w-[31%]',
		},
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
		return arX >= box.left && arX <= box.right && arY >= box.top && arY <= box.bottom;
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
					(ctx.archer.activeHeadSpot.current == 1 && h1 && arrowIntersectsBox(box, h1)) ||
					(ctx.archer.activeHeadSpot.current == 2 && h2 && arrowIntersectsBox(box, h2))
				) {
					gotHeadshot.current = true;
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

	function dragSword(e: DraggableEvent) {
		if (!swordElement.current) return;
		const sword = swordElement.current;
		const swordRect = sword.getBoundingClientRect();
		// get left middle
		const swordX = swordRect.left;
		const swordY = swordRect.top + swordRect.height / 2;
		// check intersection with front wheel
		const frontWheelRect = frontWheel.current?.getBoundingClientRect();
		if (frontWheelRect) {
			if (
				swordX >= frontWheelRect.left &&
				swordX <= frontWheelRect.right &&
				swordY >= frontWheelRect.top &&
				swordY <= frontWheelRect.bottom
			) {
				ctx.biker.setFrontWheelPopped(true);
			}
		}
		// check intersection with back wheel
		const backWheelRect = backWheel.current?.getBoundingClientRect();
		if (backWheelRect) {
			if (
				swordX >= backWheelRect.left &&
				swordX <= backWheelRect.right &&
				swordY >= backWheelRect.top &&
				swordY <= backWheelRect.bottom
			) {
				ctx.biker.setBackWheelPopped(true);
			}
		}
	}

	function bikeForwardsInterval() {
		if (!ctx.scavState) {
			clearInterval(bikerInterval.current as NodeJS.Timeout);
			bikerInterval.current = null;
			return;
		}
		bikerGoals.current.started = true;
		setBikerPos((prevPos) => {
			if (!bikingForwards) return prevPos;
			if (!road.current || !ctx.archer.landing1?.current) return prevPos;
			if (!biker.current) return prevPos;
			if (!frontWheel.current || !backWheel.current) return prevPos;
			if (!tennisPlayer.current) return prevPos;

			// if both wheels are popped, stop
			if (ctx.biker.frontWheelPopped && ctx.biker.backWheelPopped) {
				setBikingForwards(false);
				clearInterval(bikerInterval.current as NodeJS.Timeout);
				bikerInterval.current = null;
				return prevPos;
			}

			const bikerRect = biker.current.getBoundingClientRect();
			const frontWheelRect = frontWheel.current.getBoundingClientRect();
			const tennisPlayerRect = tennisPlayer.current.getBoundingClientRect();
			const roadRect = road.current.getBoundingClientRect();
			const tennisPfRect = ctx.archer.landing1.current.getBoundingClientRect();

			// if biker intersects tennis player while the apple is on their head, stop
			if (
				boxesIntersect(bikerRect, tennisPlayerRect) &&
				ctx.archer.activeHeadSpot.current == 1 &&
				!ctx.archer.headshot
			) {
				bikerGoals.current.stopped = true;
				return prevPos;
			}

			const nextX = bikerPos.x + 0.25;
			let falling = false;
			// check intersection of front wheel with road
			if (!boxesIntersect(frontWheelRect, roadRect)) {
				falling = true;
				bikerGoals.current.fell = true;
			}
			// check intersection of front wheel with tennis pf
			if (
				boxesIntersect(frontWheelRect, tennisPfRect) &&
				frontWheelRect.bottom > tennisPfRect.top + tennisPfRect.height / 2
			) {
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

			return { x: nextX, y: nextY, falling: falling };
		});
	}

	function liftFlag(e: DraggableEvent) {
		if (!road.current) return;
		const roadRect = road.current.getBoundingClientRect();
		const target = e.target as HTMLImageElement;
		const targetRect = target.getBoundingClientRect();
		// check intersection with road
		if (targetRect.bottom <= roadRect.top && !bikingForwards && !bikerInterval.current) {
			// lift flag
			setBikingForwards(true);
		}
	}

	function interpolateWithCurve(
		from: { x: number; y: number },
		to: { x: number; y: number },
		t: number
	) {
		// rounded curve from t = 0 to 1, with variation in x and y
		const curve = Math.sin((t * Math.PI) / 2);
		const x = from.x + (to.x - from.x) * t;
		const y = from.y + (to.y - from.y) * curve;
		return { x, y };
	}

	function lakatuBringsBikerBack() {
		if (!ctx.scavState) return;
		if (!road.current) return;
		setCarrakatuSetPosition((pos) => {
			const nextT = pos.at + 0.01;
			return { ...pos, at: nextT };
		});
	}

	function startPopup() {
		setWrenPopup(true);
	}
	function closePopup() {
		setWrenPopup(false);
		ctx.shop.setLookingAtTable(false);
	}

	// set headshot after getting a headshot
	useEffect(() => {
		if (gotHeadshot.current && !ctx.archer.headshot) {
			ctx.archer.setHeadshot(true);
		}
	}, [arrowPos, ctx.archer.headshot]);

	// control biker
	useEffect(() => {
		if (!ctx.scavState) {
			clearInterval(arrowInterval.current as NodeJS.Timeout);
			arrowInterval.current = null;

			clearInterval(bikerInterval.current as NodeJS.Timeout);
			bikerInterval.current = null;
			return;
		}
		if (!bikerInterval.current && bikingForwards) {
			bikerInterval.current = setInterval(bikeForwardsInterval, 15);
		}
		return () => {
			clearInterval(bikerInterval.current as NodeJS.Timeout);
			bikerInterval.current = null;
		};
	}, [bikingForwards, bikerPos, ctx.scavState, ctx.archer.headshot]);

	// reset arrow position when going out of scav
	useEffect(() => {
		if (!ctx.scavState) {
			setArrowPos({ x: 0, y: 0, angle: 0, vx: 0, vy: 0 });
		}
	}, [ctx.scavState]);

	// get carrakatu to go when: headshot, both tires popped, apple fell
	useEffect(() => {
		if (!ctx.scavState) {
			clearInterval(carrakatuInterval.current as NodeJS.Timeout);
			carrakatuInterval.current = null;
			return;
		}
		if (
			ctx.archer.headshot &&
			ctx.biker.frontWheelPopped &&
			ctx.biker.backWheelPopped &&
			bikerGoals.current.started &&
			bikerGoals.current.fell &&
			bikerGoals.current.stopped
		) {
			if (!carrakatuInterval.current) {
				const bikerPos = biker.current?.getBoundingClientRect();
				if (!bikerPos) return;
				setCarrakatuSetPosition({
					...carrakatuSetPosition,
					to: {
						x: bikerPos.left + bikerPos.width / 2,
						y: bikerPos.top + bikerPos.height / 2,
					},
				});
				carrakatuInterval.current = setInterval(lakatuBringsBikerBack, 15);
			}
		}
		return () => {
			clearInterval(carrakatuInterval.current as NodeJS.Timeout);
			carrakatuInterval.current = null;
		};
	}, [ctx.scavState, ctx.archer.headshot, ctx.biker.frontWheelPopped, ctx.biker.backWheelPopped]);

	// control carrakatu position as it brings the biker back, starts dialog
	useEffect(() => {
		if (!ctx.scavState) return;
		if (!carrakatuInterval.current) return;
		if (!road.current) return;
		if (!biker.current) return;
		if (!img_box.current) return;
		if (carryDone) return;

		const containerRect = img_box.current.getBoundingClientRect();
		const bikerPos = biker.current.getBoundingClientRect();

		const t = carrakatuSetPosition.at;
		const { x, y } = interpolateWithCurve(carrakatuSetPosition.from, carrakatuSetPosition.to, t);
		setCarrakatuPos({ x, y });

		if (carrakatuPickedUp.current && !carrakatuDroppedOff.current) {
			const bikerX = ((x - bikerPos.width - containerRect.left) * 100) / containerRect.width;
			const bikerY = ((y - bikerPos.height - containerRect.top) * 100) / containerRect.height;
			setBikerPos({ x: bikerX, y: bikerY, falling: false });
		}

		if (!carrakatuPickedUp.current && t >= 1) {
			carrakatuPickedUp.current = true;
			const roadRect = road.current.getBoundingClientRect();
			const nextPos = {
				x: roadRect.left + roadRect.width / 2,
				y: roadRect.top + roadRect.height / 2,
			};
			setCarrakatuSetPosition({
				from: { x, y },
				to: nextPos,
				at: 0,
			});
			clearInterval(carrakatuInterval.current as NodeJS.Timeout);
			carrakatuInterval.current = null;

			setTimeout(() => {
				carrakatuInterval.current = setInterval(lakatuBringsBikerBack, 15);
			}, 500);
		} else if (carrakatuPickedUp.current && !carrakatuDroppedOff.current && t >= 1) {
			// move to the right by biker_width
			carrakatuDroppedOff.current = true;
			const nextPos = { x: x + bikerPos.width, y: y };
			setCarrakatuSetPosition({
				from: { x, y },
				to: nextPos,
				at: 0,
			});
			clearInterval(carrakatuInterval.current as NodeJS.Timeout);
			carrakatuInterval.current = null;

			setTimeout(() => {
				carrakatuInterval.current = setInterval(lakatuBringsBikerBack, 15);
			}, 500);
		} else if (carrakatuDroppedOff.current && t >= 1) {
			clearInterval(carrakatuInterval.current as NodeJS.Timeout);
			carrakatuInterval.current = null;
			if (!carrySpeakingDone.current) {
				setCarrySpeaking(true);
			} else {
				setCarryDone(true);
			}
		}
	}, [carrakatuSetPosition, carryDone]);

	function finishWithCarry() {
		setCarrySpeaking(false);
		ctx.shards.setShards([...ctx.shards.shards, 1]);
		carrySpeakingDone.current = true;
		const { x, y } = carrakatuPos;
		const to = { x: 1000, y: -500 };
		setCarrakatuSetPosition({
			from: { x, y },
			to,
			at: 0,
		});
		setTimeout(() => {
			carrakatuInterval.current = setInterval(lakatuBringsBikerBack, 15);
		}, 500);
	}

	return (
		<>
			<header className="relative font-mplus px-2 sm:px-12 pt-44 max-h-[850.5px] w-full box-border max-w-screen-2xl mx-auto mb-11">
				{/* TODO: Bigger screens edge case */}

				<div className="max-w-screen-2xl flex justify-center">
					<div className="w-full max-w-screen-2xl">
						<h2 className="text-2xl font-normal">Put your best code forward for the</h2>
						<h1 className="text-[2.5rem] font-medium leading-8">WaffleHacks games!</h1>
					</div>
				</div>

				<div
					ref={container}
					onResize={onSizing}
					className="landing-panel-img-container p-2 relative max-w-screen-2xl"
				>
					<div ref={img_box} className="absolute" style={{ aspectRatio: 1510 / 599 }}>
						{/* Biker road */}
						<img
							ref={road}
							src="/assets/svgs/landing/road.svg"
							alt=""
							className="absolute left-[-0.2%] top-[31.5%] w-[32.9%]"
						/>

						{/* fencer platform */}
						<img
							ref={ctx.archer.landing2}
							src="/assets/svgs/landing/fencer_pf.svg"
							className="no-drag absolute left-[68.2%] top-[31.5%] w-[31%]"
							alt=""
						/>

						{/* tennis platform */}
						<img
							ref={ctx.archer.landing1}
							src="/assets/svgs/landing/tennis_pf.svg"
							className="no-drag absolute left-[50.05%] top-[67.9%] w-[31%]"
							alt=""
						/>

						{images.map(({ src, className }: { src: string; className: string }, index) => {
							return <img key={index} src={src} alt="" className={className} />;
						})}

						{/* tennis player */}
						<img
							ref={tennisPlayer}
							src="/assets/svgs/landing/tennis.svg"
							className="no-drag absolute left-[60.4%] top-[48.8%] w-[8.4%]"
							alt=""
						/>

						{/* WH logo / stand */}
						<div id="landing-wh-logo">
							<div
								className="absolute left-[42.9%] top-[7.1%] w-[14.85%]"
								style={{ aspectRatio: '1/1' }}
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
								style={{ aspectRatio: '1/1' }}
							>
								<img
									className="absolute left-[14.7%] top-[14.9%] w-[70.5%]"
									src="/assets/svgs/landing/scav/stand_bkg.svg"
									alt=""
								/>
								<img
									src="/assets/svgs/landing/scav/wren_stand.png"
									alt="Wren"
									className="absolute left-[32%] top-[20%] w-[40%]"
								/>

								<img
									className="absolute left-[14.7%] top-[14.9%] w-[70.5%]"
									src="/assets/svgs/landing/scav/stand_inner_shadow.svg"
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

								<button
									onClick={startPopup}
									className="absolute left-[26%] top-[20%] w-[42%]"
									style={{ aspectRatio: 0.65 }}
								></button>
							</div>
						</div>

						{/* archer headspots */}
						{ctx.scavState && (
							<>
								<div
									ref={ctx.archer.headspot1}
									className="absolute w-[3%] h-[6%] left-[63.2%] top-[47%] w-[14.85%] h-[14.85%]"
								></div>
								<div
									ref={ctx.archer.headspot2}
									className="absolute w-[3%] h-[6%] left-[81%] top-[9.4%] w-[14.85%] h-[14.85%]"
								></div>
							</>
						)}

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
										transformOrigin: 'bottom',
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
											transformOrigin: 'center',
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
									(ctx.scavState && ctx.biker.backWheelPopped ? -15 : 0) +
									(ctx.scavState && ctx.biker.frontWheelPopped ? 15 : 0) +
									(ctx.scavState && bikerPos.falling ? 30 : 0)
								}deg)`,
								transition: 'transform 0.5s ease-in',
								transformOrigin: 'bottom center',
								top: ctx.scavState ? `calc(${bikerPos.y}% + 13.7%)` : '13.7%',
								left: ctx.scavState ? `calc(${bikerPos.x}% + 9.4%)` : '9.4%',
								display: ctx.scavState && bikerGone ? 'none' : 'block',
							}}
						>
							<img
								ref={backWheel}
								src="/assets/svgs/landing/wheel.svg"
								alt={'bike back wheel'}
								className="no-drag bike-wheel-rotate absolute left-0 top-[56.8%] w-[40%] h-[42%]"
								style={{
									height: ctx.scavState && ctx.biker.backWheelPopped ? '24%' : '42.5%',
								}}
							/>
							<img
								ref={frontWheel}
								src="/assets/svgs/landing/wheel.svg"
								alt={'bike front wheel'}
								className="no-drag bike-wheel-rotate absolute left-[59.8%] top-[56.8%] w-[40%]"
								style={{
									height: ctx.scavState && ctx.biker.frontWheelPopped ? '24%' : '42.5%',
								}}
							/>
							<img
								src="/assets/svgs/landing/biker.svg"
								alt={'bike biker wheel'}
								className="no-drag absolute left-[30%] top-0 w-[51%]"
							/>
						</div>

						{/* biker flag */}
						{ctx.scavState && (
							<Draggable axis="y" onDrag={liftFlag}>
								<img
									className="biker-flag no-drag absolute left-[29.4%] bottom-[53%]"
									src="/assets/svgs/landing/scav/bike_flag.svg"
									alt=""
								/>
							</Draggable>
						)}

						{/* stabby */}
						<Draggable
							onDrag={(e) => dragSword(e)}
							disabled={!ctx.scavState}
							position={ctx.scavState ? undefined : { x: 0, y: 0 }}
						>
							<img
								ref={swordElement}
								className="no-drag absolute left-[72.2%] top-[22.5%] w-[5.8%]"
								src="/assets/svgs/landing/fencer_sword.svg"
								alt=""
							/>
						</Draggable>
					</div>
				</div>
				{/* carrakatu */}
				{ctx.scavState && (
					<img
						ref={carrakatu}
						className="no-drag absolute w-[12%]"
						style={{
							top: carrakatuPos.y + 'px',
							left: carrakatuPos.x + 'px',
							transform: 'translateY(-100%',
						}}
						src="/assets/svgs/landing/scav/carrakatu.svg"
						alt=""
					/>
				)}

				{ctx.scavState && carrySpeaking && (
					<CarrakatuDialog
						whenDone={finishWithCarry}
						className="bg-white rounded-lg shadow-lg p-4 max-w-[16rem]"
						style={{
							top: `calc(${carrakatuPos.y}px - 20vw)`,
							right: window.innerWidth - carrakatuPos.x + 'px',
						}}
					/>
				)}
				<div className="flex justify-flex-end">
					<NumberDisplay className="ml-auto" />
				</div>
			</header>

			{ctx.scavState && wrenPopup && (
				<div
					className="wren-shop-dialog fixed top-0 left-0 w-screen h-screen z-[60] flex justify-center items-center"
					style={{ backdropFilter: 'blur(4px)', background: 'rgba(0, 0, 0, 0.2)' }}
				>
					<div className="relative w-5/6 h-5/6 rounded-xl overflow-hidden border-white border-4 ">
						<WrenShopDialog />
						<button
							onClick={closePopup}
							className="bg-white absolute top-4 left-4 p-2 rounded-md shadow-md border-[1px] border-gray-300"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
};
