import { motion } from "framer-motion";
import React from "react";

export const Reveal = ({ children, delay = 0, x = 0, y }) => (
  <motion.div
    initial={{ opacity: 0, x, y: y ?? (x ? 0 : 28) }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
