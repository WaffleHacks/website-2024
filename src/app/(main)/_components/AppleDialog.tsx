import type React from "react";
import { useState } from "react";

import BubbleDialogSystem from "./BubbleDialogSystem";

interface CarrakatuDialogProps {
	whenDone: () => void;
	className?: string;
	style?: React.CSSProperties;
}

const AppleDialog = ({ whenDone, className, style }: CarrakatuDialogProps) => {
	const [child, setChild] = useState(0);

	function nextChild() {
		setChild(child + 1);
	}

	return (
		<BubbleDialogSystem child={child} className={className} style={style || {}}>
			<>
				<span>Thanks! :P</span>
				<br />
				<button
					onClick={nextChild}
					className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none"
				>
					No problem bud!
				</button>
			</>

			<div className="text-left">
				<span>
					Oh! Oh! And I found this piece of paper when I was walking on the
					navbar :D You wannit?
				</span>
				<br />
				<div className="flex justify-end">
					<button
						onClick={nextChild}
						className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none"
					>
						Uh, sure.
					</button>
				</div>
			</div>

			<div className="text-left">
				<span>Walking Time! I made this flag myself you know.</span>
				<br />
				<div className="flex justify-end">
					<button
						onClick={whenDone}
						className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none"
					>
						Done
					</button>
				</div>
			</div>
		</BubbleDialogSystem>
	);
};

export default AppleDialog;
