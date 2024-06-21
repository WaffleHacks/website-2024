import { ScavContext } from '@/components';
import React, { useContext, useRef, useState } from 'react';
import BubbleDialogSystem from './BubbleDialogSystem';

const WrenShopDialog = () => {
	const stand = '/assets/svgs/landing/scav/waffle shack.png';
	const table = '/assets/svgs/landing/scav/table.png';
	const holding = '/assets/svgs/landing/scav/holding waffle.png';
	const yo = '/assets/svgs/landing/scav/yo.png';
	const [counterDialogChild, setCounterDialogChild] = useState(0);
	const [completed, setCompleted] = useState(false);

	const ctx = useContext(ScavContext);

	return (
		<div
			className={
				'w-full h-full flex justify-center items-center' + (completed ? ' bg-orange-100' : '')
			}
		>
			<div className="relative w-full h-full flex justify-center items-center">
				{completed ? (
					<img
						src={holding}
						alt="shop"
						className="completed-image h-full bg-orange-100 object-contain"
					/>
				) : ctx.shop.lookingAtTable ? (
					<img
						src={table}
						alt="shop"
						className="object-contain w-full h-full"
						style={{
							filter: 'brightness(0.8)',
						}}
					/>
				) : ctx.completed ? (
					<img src={yo} alt="shop" className="object-contain w-full h-full" />
				) : (
					<img src={stand} alt="shop" className="object-contain w-full h-full" />
				)}

				{ctx.shop.lookingAtTable && (
					<>
						<div
							ref={ctx.shop.table}
							className="absolute w-[86%] h-[60%] left-[7.3%] top-[18%]"
							style={{
								clipPath: 'polygon(14.5% 0, 87% 0, 100% 100%, 0 100%)',
							}}
						></div>
					</>
				)}
				{ctx.shop.lookingAtTable && (
					<button
						onClick={() => ctx.shop.setLookingAtTable(false)}
						className="absolute bottom-4 left-4 p-2 bg-white rounded-md border-2 border-gray-300"
					>
						Back
					</button>
				)}
			</div>

			{!ctx.shop.lookingAtTable && !completed && (
				<BubbleDialogSystem
					child={counterDialogChild}
					style={{
						right: '55%',
						bottom: '55%',
						maxWidth: '40%',
					}}
				>
					<div className="p-4">
						{ctx.completed ? (
							<>
								<span>
									Hey homie, you already got your waffle! <br />
									Wanna look at it again?
								</span>
								<br />
								<br />
								<button
									className="bg-gray-300 rounded-md px-2 py-px mr-4"
									onClick={() => {
										setCompleted(true);
									}}
								>
									Yes!
								</button>
							</>
						) : (
							<>
								<span>Hi, welcome to Wren's Waffle Shop!</span>
								<br />
								<span>Do you have your ticket?</span>
								<br />
								<br />
								<button
									className="bg-gray-300 rounded-md px-2 py-px mr-4"
									onClick={() => {
										if (ctx.shards.taped) {
											ctx.shards.setShards([]);
											setCompleted(true);
											ctx.setCompleted(true);
											ctx.setCompletedTime(new Date());
										} else {
											setCounterDialogChild(2);
										}
									}}
								>
									Yes!
								</button>

								<button
									className="bg-gray-300 rounded-md px-2 py-px mr-4"
									onClick={() => {
										setCounterDialogChild(4);
									}}
								>
									No :(
								</button>
								<button
									className="bg-gray-300 rounded-md px-2 py-px"
									onClick={() => setCounterDialogChild(3)}
								>
									What ticket?
								</button>
							</>
						)}
					</div>

					<div className="w-full h-full">
						<span>Great! Here's your waffle!</span>
						<br />
						<span>Enjoy!</span>
					</div>

					<div className="p-4">
						<span>Looks like you don't have your ticket yet.</span>
						<br />
						<span>Feel free to sit at a table though.</span>
						<br />
						<br />
						<button
							className="bg-gray-300 rounded-md px-2 py-px mr-4"
							onClick={() => {
								setCounterDialogChild(0);
							}}
						>
							Back
						</button>
						<button
							className="bg-gray-300 rounded-md px-2 py-px"
							onClick={() => {
								ctx.shop.setLookingAtTable(true);
							}}
						>
							Go to table
						</button>
					</div>

					<div className="p-4">
						<p>
							You need a ticket to get a waffle. I told the WaffleHacks Games committee to give
							everyone one ticket for a waffle. Yours should hopefully be around somewhere. Maybe
							you need to search for it?
						</p>
						<br />
						<button
							className="bg-gray-300 rounded-md px-2 py-px"
							onClick={() => {
								setCounterDialogChild(0);
							}}
						>
							Back
						</button>
					</div>

					<div className="p-4">
						<span>Oh, well you'll need your ticket to get a waffle.</span>
						<br />
						<span>You can find it, I believe in you!</span>
						<br />
						<span>If you would like to take a seat at the table, feel free.</span>
						<br />
						<br />
						<button
							className="bg-gray-300 rounded-md px-2 py-px mr-4"
							onClick={() => {
								setCounterDialogChild(0);
							}}
						>
							Back
						</button>
						<button
							className="bg-gray-300 rounded-md px-2 py-px"
							onClick={() => {
								ctx.shop.setLookingAtTable(true);
							}}
						>
							Go to table
						</button>
					</div>
				</BubbleDialogSystem>
			)}

			{completed && (
				<>
					<div className="absolute top-0 w-full backdrop-blur-[6px] text-center p-2">
						<span className="text-xl font-bold">You got your waffle!!</span>
						<br />
						<span className="text-xl">DM @Ethan a screenshot to submit your time!</span>
					</div>

					<div className="absolute right-4 bottom-4 text-xl">
						<span>
							{ctx.completedTime.getUTCMonth() + 1}/{ctx.completedTime.getUTCDate()}/
							{ctx.completedTime.getUTCFullYear()} {ctx.completedTime.getUTCHours()}:
							{ctx.completedTime.getUTCMinutes()}:{ctx.completedTime.getUTCSeconds()} UTC
						</span>
					</div>
				</>
			)}
		</div>
	);
};

export default WrenShopDialog;
