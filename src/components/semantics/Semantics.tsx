"use client";
import type React from "react";
import { createContext, useRef, useState } from "react";
import { FooterBar } from "./footer";
import { NavBar } from "./nav";
import { UnusedNavBar } from "./nav/UnusedNav";

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
		activeHeadSpot: number;
	};
	biker: {
		backWheelPopped: boolean;
		frontWheelPopped: boolean;
		setBackWheelPopped: (state: boolean) => void;
		setFrontWheelPopped: (state: boolean) => void;
	}
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
		activeHeadSpot: -1
	},
	biker: {
		backWheelPopped: false,
		frontWheelPopped: false,
		setBackWheelPopped: (state: boolean) => {},
		setFrontWheelPopped: (state: boolean) => {},
	}
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
						activeHeadSpot: -1,
					},
					biker: {
						backWheelPopped,
						frontWheelPopped,
						setBackWheelPopped,
						setFrontWheelPopped,
					}
				}}
			>
				<NavBar />
				{children}
				<FooterBar />
			</ScavContext.Provider>
		</>
	);
};
