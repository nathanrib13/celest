import React from "react";

const POINTS = [
  { x: 60, y: 80, r: 2.5, delay: "0s" },
  { x: 320, y: 60, r: 2, delay: "0.6s" },
  { x: 350, y: 200, r: 3, delay: "1.2s" },
  { x: 40, y: 260, r: 2, delay: "0.3s" },
  { x: 140, y: 340, r: 2.5, delay: "1.6s" },
  { x: 300, y: 330, r: 2, delay: "0.9s" },
  { x: 200, y: 40, r: 1.8, delay: "2s" },
  { x: 90, y: 180, r: 1.8, delay: "1.3s" },
];

export const Constellation = ({ className }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <g stroke="#5B7FBF" strokeOpacity="0.35" strokeWidth="1">
      {POINTS.map((p, i) => (
        <line key={i} x1="200" y1="200" x2={p.x} y2={p.y} />
      ))}
    </g>
    {POINTS.map((p, i) => (
      <circle
        key={i}
        cx={p.x}
        cy={p.y}
        r={p.r}
        fill="#F4F2EC"
        style={{ animationDelay: p.delay }}
        className="celest-star-dot"
      />
    ))}
    <path
      d="M200 150 C204 182 214 192 246 196 C214 200 204 210 200 242 C196 210 186 200 154 196 C186 192 196 182 200 150 Z"
      fill="#E8A33D"
    />
  </svg>
);
