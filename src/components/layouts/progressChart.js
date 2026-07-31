import { motion } from "framer-motion";
import React from "react";

const STAR_PATH =
  "M0 -28 C2 -8 8 -2 30 0 C8 2 2 8 0 28 C-2 8 -8 2 -30 0 C-8 -2 -2 -8 0 -28 Z";

const POINTS = [
  { x: 70, y: 260, number: "01", title: "Diagnóstico" },
  { x: 280, y: 195, number: "02", title: "Proposta" },
  { x: 490, y: 120, number: "03", title: "Desenvolvimento" },
  { x: 700, y: 55, number: "04", title: "Lançamento" },
];

const STAR = { x: 745, y: 32 };

const PATH_D =
  "M70 260 C 160 240, 200 210, 280 195 C 350 178, 420 145, 490 120 C 560 95, 630 75, 700 55";

export const ProgressChart = () => (
  <svg
    viewBox="0 0 800 320"
    width="100%"
    role="img"
    aria-label="Linha do processo, do diagnóstico ao resultado"
  >
    <defs>
      <filter id="celest-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="10" />
      </filter>
    </defs>

    <line x1="30" y1="290" x2="780" y2="290" stroke="#293349" strokeWidth="1" />

    <motion.path
      d={PATH_D}
      fill="none"
      stroke="#5B7FBF"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    />

    {POINTS.map((p, i) => (
      <motion.g
        key={p.number}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.35, duration: 0.4 }}
        style={{ transformOrigin: `${p.x}px ${p.y}px` }}
      >
        <circle
          cx={p.x}
          cy={p.y}
          r="8"
          fill="#0D1220"
          stroke="#E8A33D"
          strokeWidth="3"
        />
        <text
          x={p.x}
          y={p.y + 34}
          textAnchor="middle"
          fill="#E8A33D"
          fontFamily="Sora, sans-serif"
          fontSize="14"
          fontWeight="700"
        >
          {p.number}
        </text>
        <text
          x={p.x}
          y={p.y + 54}
          textAnchor="middle"
          fill="#F4F2EC"
          fontFamily="Inter, sans-serif"
          fontSize="15"
          fontWeight="600"
        >
          {p.title}
        </text>
      </motion.g>
    ))}

    <motion.circle
      cx={STAR.x}
      cy={STAR.y}
      r="34"
      fill="#E8A33D"
      filter="url(#celest-glow)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      viewport={{ once: true }}
      transition={{ delay: 1.8, duration: 0.6 }}
    />
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.9, duration: 0.5, ease: "backOut" }}
      style={{ transformOrigin: `${STAR.x}px ${STAR.y}px` }}
    >
      <path
        d={STAR_PATH}
        fill="#E8A33D"
        transform={`translate(${STAR.x} ${STAR.y}) scale(1.1)`}
      />
    </motion.g>
  </svg>
);
