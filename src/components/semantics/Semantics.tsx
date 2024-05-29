"use client"
import type React from "react";
import { FooterBar } from "./footer";
import { createContext, useState } from "react";
import { NavBar } from "./nav";

export const ScavContext = createContext({
	scavState: false,
	setScavState: (state: boolean) => {}
});

export const Semantics: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {


	const [scavState, setScavState] = useState<boolean>(false);

	return (
		<>
			<ScavContext.Provider value={{
				scavState,
				setScavState
			}}>
			<NavBar />
			{children}
			<FooterBar />
			</ScavContext.Provider>
		</>
	);
};
