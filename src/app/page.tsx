"use client";
import CustomSlider from "@/src/components/CustomSlider";
import { Switch } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import AboutPanel from "../components/AboutPanel";
import Calendar from "../components/Calendar";
import FaqPanel from "../components/FaqPanel";
import LandingPanel from "../components/LandingPanel";
import Sponsors from "../components/Sponsors";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Home: NextPage = (): JSX.Element => {
	return (
		<main className="flex flex-col w-screen">
			<LandingPanel />
			<AboutPanel />
			<Calendar />
			<FaqPanel />

			<Sponsors />
		</main>
	);
};
export default Home;
