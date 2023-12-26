"use client"
import { motion } from "framer-motion";
export const MotionDiv = motion.div;
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
}