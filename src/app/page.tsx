"use client";
import CustomSlider from "@/src/components/CustomSlider";
import { Switch } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { Header, NavLinks } from "../components/semantics";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Home: NextPage = (): JSX.Element => {
	return (
		<main className="flex w-screen h-screen items-center justify-between p-10 box-border">
			<img
				src="/assets/images/olympics_placeholder.png"
				alt=""
				style={{ objectFit: "contain" }}
			/>

			{/* //   <Header />
    //   {NavLinks.map((link, index) => {
    //     return (
    //       <section
    //         key={index}
    //         id={link[index]}
    //         className={`
    //           flex items-center justify-center ${(index % 2 === 0) ? `bg-gray-100` : `bg-gray-500`} w-full h-[80dvh]
    //         `}
    //       >
    //         <h2
    //           className={``}
    //         >
    //           {link} section
    //         </h2>
    //       </section>
    //     )
    //   })} */}
		</main>
	);
};
export default Home;
