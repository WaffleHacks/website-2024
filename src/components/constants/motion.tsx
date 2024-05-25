"use client";
import { motion } from "framer-motion";

export const MotionArticle = motion.article;
export const MotionDiv = motion.div;
export const MotionFigure = motion.figure;
export const MotionFooter = motion.footer;
export const MotionHeader = motion.header;
export const MotionMain = motion.main;
export const MotionMenu = motion.menu;
export const MotionNav = motion.nav;
export const MotionPicture = motion.picture;
export const MotionSection = motion.section;
export const MotionAside = motion.aside;

export const Variants = {
	main: {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: "easeInOut",
			},
		},
		exit: {
			opacity: 0,
			y: 20,
			transition: {
				duration: 0.4,
				ease: "easeInOut",
			},
		},
	},
};
