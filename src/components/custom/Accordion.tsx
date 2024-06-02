"use client";

import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

import {
	Accordion as Acc,
	AccordionDetails,
	AccordionGroup,
	AccordionSummary,
} from "@mui/joy";

const AccordionBody: React.FC<AccordionTextProps> = (props) => {
	const { title, description, expandedIndex, index, setExpandedIndex } = props;
	const isExpanded = expandedIndex === index;

	const toggleAccordion = () => {
		setExpandedIndex(isExpanded ? null : index);
	};
	return (
		<Acc expanded={isExpanded} onChange={toggleAccordion}>
			<AccordionSummary
				aria-controls="faq-content"
				id="panel1a-header"
				sx={{
					"&.MuiAccordionSummary-root": {
						color: "#3C2415",
					},
				}}
				aria-label={`Expand ${title}`}
			>
				{title}
			</AccordionSummary>
			<AccordionDetails
				className={`
					mb-2 overflow-hidden duration-700
					ease-in-out transition-max-height
				`}
				sx={{
					"&.MuiAccordionDetails-root": {
						color: "#3C2415",
					},
				}}
				color={`primary`}
			>
				{description}
			</AccordionDetails>
		</Acc>
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
			className={`
				min-w-[300px] max-w-[400px] 
			`}
		>
			<AccordionGroup
				sx={{
					"&.MuiAccordionSummary-button": {
						"&:hover": {
							color: "#3C2415",
						},
					},
				}}
			>
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
