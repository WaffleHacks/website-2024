'use client';
import type React from 'react';
import { createContext, use, useRef, useState } from 'react';
import { FooterBar } from './footer';
import { NavBar } from './nav';

interface ScavContextParameters {
	scavState: boolean;
	setScavState: (state: boolean) => void;
	archer: {
		headspot1: React.MutableRefObject<HTMLDivElement | null> | null;
		headspot2: React.MutableRefObject<HTMLDivElement | null> | null;
		landing1: React.MutableRefObject<HTMLImageElement | null> | null;
		landing2: React.MutableRefObject<HTMLImageElement | null> | null;
		headshot: boolean;
		setHeadshot: (state: boolean) => void;
		activeHeadSpot: React.MutableRefObject<number>;
	};
	biker: {
		backWheelPopped: boolean;
		frontWheelPopped: boolean;
		setBackWheelPopped: (state: boolean) => void;
		setFrontWheelPopped: (state: boolean) => void;
	};
	shards: {
		shards: number[];
		setShards: (order: number[]) => void;
	};
	waffle: {
		hidingSpot: number;
		setHidingSpot: (spot: number) => void;
	};
}

export const ScavContext = createContext<ScavContextParameters>({
	scavState: false,
	setScavState: (state: boolean) => {},
	archer: {
		headspot1: null,
		headspot2: null,
		landing1: null,
		landing2: null,
		headshot: false,
		setHeadshot: (state: boolean) => {},
		activeHeadSpot: { current: -1 },
	},
	biker: {
		backWheelPopped: false,
		frontWheelPopped: false,
		setBackWheelPopped: (state: boolean) => {},
		setFrontWheelPopped: (state: boolean) => {},
	},
	shards: {
		shards: [],
		setShards: (order: number[]) => {},
	},
	waffle:  {
		hidingSpot: 0,
		setHidingSpot: (spot: number) => {},
	},
});

export const Semantics: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	const [scavState, setScavState] = useState<boolean>(false);
	const [backWheelPopped, setBackWheelPopped] = useState<boolean>(false);
	const [frontWheelPopped, setFrontWheelPopped] = useState<boolean>(false);
	const [headshot, setHeadshot] = useState<boolean>(false);
	const [shards, setShards] = useState<number[]>([]);
	const [hidingSpot, setHidingSpot] = useState<number>(0);

	return (
		<>
			<ScavContext.Provider
				value={{
					scavState,
					setScavState,
					archer: {
						headspot1: useRef<HTMLDivElement | null>(null),
						headspot2: useRef<HTMLDivElement | null>(null),
						landing1: useRef<HTMLImageElement | null>(null),
						landing2: useRef<HTMLImageElement | null>(null),
						headshot,
						setHeadshot,
						activeHeadSpot: useRef<number>(-1),
					},
					biker: {
						backWheelPopped,
						frontWheelPopped,
						setBackWheelPopped,
						setFrontWheelPopped,
					},
					shards: {
						shards,
						setShards,
					},
					waffle: {
						hidingSpot,
						setHidingSpot,
					},	
				}}
			>
				<NavBar />
				{children}
				<FooterBar />
			</ScavContext.Provider>
		</>
	);
};
