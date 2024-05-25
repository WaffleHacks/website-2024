import type React from "react";
import { createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

type Faq = {};

const TeamContext = createContext<Faq | undefined>(undefined);

export const TeamProvider: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	const [team, setTeam] = useLocalStorage("", "");

	const toggleTeam = () => {
		setTeam((prevTeam: string) => (prevTeam === "" ? "" : ""));
	};

	return (
		<TeamContext.Provider
			value={{
				team,
				toggleTeam,
			}}
		>
			{children}
		</TeamContext.Provider>
	);
};

export const useTeam = () => {
	const context = useContext(TeamContext);
	if (context === undefined) {
		throw new Error("useTeam must be used within a TeamProvider");
	}
	return context;
};
