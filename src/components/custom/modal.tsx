"use client";

import { cn } from "@/lib";
import { motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";
import { fadeInAnimationVariants } from "../constants";

export const Modal = ({
	children,

	className,
	isOpen,
	onClose,
}: {
	children: React.ReactNode;

	className?: string;
	isOpen: boolean;
	onClose: Dispatch<SetStateAction<boolean>>;
}) => {
	const dialogRef = useRef<React.ElementRef<"dialog">>(
		null,
	) as React.MutableRefObject<React.ElementRef<"dialog">>;

	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isOpen]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const dialogDimensions = dialogRef.current?.getBoundingClientRect();
			if (
				dialogDimensions &&
				(e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom)
			) {
				onClose(false);
			}
		};

		if (isOpen) {
			// document.body.classList.toggle("no-scroll");
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			// document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			dialogRef.current?.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen, onClose]);

	return (
		<section
			className={`
				fixed inset-0 z-50 flex flex-col items-center justify-center
				backdrop:bg-black/80 backdrop:backdrop-blur-sm w-screen h-screen
				${isOpen ? "block" : "hidden"}
			`}
			onClick={(e) => e.stopPropagation()}
		>
			<motion.dialog
				ref={dialogRef}
				className={cn(
					`
					border-none fixed inset-0 z-50 rounded-lg
					focus:outline-none bg-white
				`,
					className,
				)}
				variants={fadeInAnimationVariants}
			>
				{children}
			</motion.dialog>
		</section>
	);
};
