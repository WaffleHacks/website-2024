'use client';
import type React from 'react';

interface SpeechBubbleProps {
	children: any;
	className?: string;
	style?: React.CSSProperties;
}

const SpeechBubble = ({ children, className, style }: SpeechBubbleProps) => {
	return (
		<div className={'speech-bubble inline ' + (className ? className : '')} style={style}>
			{children}
		</div>
	);
};

export default SpeechBubble;
