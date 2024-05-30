"use client";
import type React from "react";
import { createContext, useRef, useState } from "react";
import { FooterBar } from "./footer";
import { NavBar } from "./nav";

interface ScavContextParameters {
	scavState: boolean;
	setScavState: (state: boolean) => void;
	archer: {
		headspot1: React.MutableRefObject<HTMLDivElement | null> | null;
		headspot2: React.MutableRefObject<HTMLDivElement | null> | null;
		headshot: boolean;
		activeHeadSpot: number;
	}
	
}

export const ScavContext = createContext<ScavContextParameters>({
	scavState: false,
	setScavState: (state: boolean) => {},
	archer: {
		headspot1: null,
		headspot2: null,
		headshot: false,
		activeHeadSpot: -1
	
	}
});

export const Semantics: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	const [scavState, setScavState] = useState<boolean>(false);

	return (
		<>
			<ScavContext.Provider
				value={{
					scavState,
					setScavState,
					archer: {
						headspot1: useRef<HTMLDivElement | null>(null),
						headspot2: useRef<HTMLDivElement | null>(null),
						headshot: false,
						activeHeadSpot: -1
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
