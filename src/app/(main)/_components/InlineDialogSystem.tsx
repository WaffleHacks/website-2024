'use client';
import type React from 'react';
import type { ReactElement } from 'react';

interface BubbleDialogSystemProps {
	children: ReactElement[];
	child?: number;
	className?: string;
	style?: React.CSSProperties;
}

const InlineDialogSystem = ({ children, child, className, style }: BubbleDialogSystemProps) => {
	if (!child) child = 0;

	return (
		<div className={className} style={style}>
			{children[child]}
		</div>
	);
};

export default InlineDialogSystem;
