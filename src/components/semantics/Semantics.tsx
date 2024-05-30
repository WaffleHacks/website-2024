"use client";
import type React from "react";
import { createContext, useRef, useState } from "react";
import { FooterBar } from "./footer";
import { NavBar } from "./nav";

interface ScavContextParameters {
	scavState: boolean;
	setScavState: (state: boolean) => void;
	headspot1: React.MutableRefObject<HTMLDivElement | null> | null;
	headspot2: React.MutableRefObject<HTMLDivElement | null> | null;
}

export const ScavContext = createContext<ScavContextParameters>({
	scavState: false,
	setScavState: (state: boolean) => {},
	headspot1: null,
	headspot2: null,
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
					headspot1: useRef<HTMLDivElement | null>(null),
					headspot2: useRef<HTMLDivElement | null>(null),
				}}
			>
				<NavBar />
				{children}
				<FooterBar />
			</ScavContext.Provider>
		</>
	);
};
