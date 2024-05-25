import type React from "react";
import { FooterBar } from "./footer";
import { NavBar } from "./nav";

export const Semantics: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<FooterBar />
		</>
	);
};
