"use client";

import { motion } from "framer-motion";

import * as Acc from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import type React from "react";
import { useState } from "react";

import { useMediaQuery } from "usehooks-ts";

const AccordionBody: React.FC<AccordionTextProps> = (props) => {
	const isMobile = useMediaQuery("(max-width: 640px)");
	const { title, description, expandedIndex, index, setExpandedIndex } = props;
	const isExpanded = expandedIndex === index;

	const toggleAccordion = () => {
		setExpandedIndex(isExpanded ? null : index);
	};
	return (
		<Acc.default expanded={isExpanded} onChange={toggleAccordion}>
			<AccordionSummary>{title}</AccordionSummary>
			<AccordionDetails className="mb-2 overflow-hidden duration-700 ease-in-out transition-max-height">
				{description}
			</AccordionDetails>
		</Acc.default>
	);
};

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(-1);
	return (
		<motion.aside
			initial="exit"
			animate="enter"
			exit="exit"
			variants={{
				enter: {
					y: 0,
					opacity: 1,
					height: "auto",
					transition: {
						height: {
							type: "spring",
							stiffness: 500,
							damping: 30,
							duration: 1,
						},
						opacity: {
							ease: "easeInOut",
							duration: 1,
						},
					},
				},
				exit: {
					y: -10,
					opacity: 0,
					height: 0,
					transition: {
						height: {
							ease: "easeInOut",
							duration: 0.25,
						},
						opacity: {
							ease: "easeInOut",
							duration: 0.3,
						},
					},
				},
			}}
		>
			<AccordionGroup>
				{data.map((item, index) => (
					<AccordionBody
						key={index}
						title={item.title}
						description={item.description}
						index={index}
						expandedIndex={expandedIndex}
						setExpandedIndex={setExpandedIndex}
					/>
				))}
			</AccordionGroup>
		</motion.aside>
	);
};
