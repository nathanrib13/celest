import React from "react";

export const BrandIcon = ({ size = "2rem", starColor, arcColor, className }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M50 6 C52 26 58 32 80 34 C58 36 52 42 50 62 C48 42 42 36 20 34 C42 32 48 26 50 6 Z"
      fill={starColor}
    />
    <path
      d="M16 82 Q50 64 84 82"
      stroke={arcColor}
      strokeWidth="7"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
