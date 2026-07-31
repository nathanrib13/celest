import { motion } from "framer-motion";
import React from "react";

export const ResultChart = () => (
  <svg viewBox="0 0 260 140" width="100%" aria-hidden="true" focusable="false">
    <line x1="0" y1="120" x2="260" y2="120" stroke="#293349" strokeWidth="1" />
    <motion.path
      d="M10 115 C 60 105, 90 85, 130 65 S 200 35, 250 15"
      fill="none"
      stroke="#E8A33D"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    />
    <motion.circle
      cx="250"
      cy="15"
      r="6"
      fill="#5B7FBF"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.3, duration: 0.4 }}
    />
  </svg>
);
