import { motion } from "framer-motion";
import React from "react";

export const Rocket = ({ size = 90, className }) => (
  <motion.svg
    viewBox="0 0 100 160"
    width={size}
    height={size * 1.6}
    className={className}
    aria-hidden="true"
    focusable="false"
    animate={{ y: [0, -16, 0], rotate: [-4, 4, -4] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M50 4C68 24 74 54 70 92H30C26 54 32 24 50 4Z" fill="#F4F2EC" />
    <circle cx="50" cy="46" r="12" fill="#5B7FBF" />
    <path d="M30 78 L10 108 L30 98 Z" fill="#5B7FBF" />
    <path d="M70 78 L90 108 L70 98 Z" fill="#5B7FBF" />
    <motion.path
      d="M38 92 C42 112 58 112 62 92 C56 100 44 100 38 92 Z"
      fill="#E8A33D"
      style={{ transformOrigin: "50px 92px" }}
      animate={{ scaleY: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.svg>
);
