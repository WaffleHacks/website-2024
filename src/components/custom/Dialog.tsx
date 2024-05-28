"use client";

import { cn } from "@/lib";
import { cva } from "class-variance-authority";
import * as React from "react";

type DialogProps = React.ComponentPropsWithoutRef<"dialog"> & {
	variant?: "primary" | "secondary";
};

export const CustomDialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	({ className, style, variant, ...props }, ref) => {
		return (
			<dialog
				className={cn(DialogVariants({ variant }), className)}
				ref={ref as React.LegacyRef<HTMLDialogElement>}
				style={style}
				{...props}
			/>
		);
	},
);

const DialogVariants = cva("overflow-hidden", {
	variants: {
		variant: {
			primary: "rounded-lg overflow-hidden",
			secondary: "rounded-md overflow-hidden",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

CustomDialog.displayName = "Dialog";
