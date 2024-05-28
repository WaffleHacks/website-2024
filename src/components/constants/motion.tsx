"use client";
import { type Variants, cubicBezier, motion } from "framer-motion";

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

export const variants = {
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

export const CrossFadeVariants: Variants = {
	fadeOut: {
		opacity: 1,
		transition: {
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "reverse",
			delay: 7,
			duration: 10,
			repeatDelay: 7,
		},
	},
	fadeIn: {
		opacity: 0,
		transition: {
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "reverse",
			delay: 7,
			duration: 10,
			repeatDelay: 7,
		},
	},
};

export const fadeInAnimationVariants = {
	initial: { opacity: 0, y: -100 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
			duration: 1,
			staggerChildren: 1.25,
		},
	},
	end: { opacity: 0, y: -100 },
};
