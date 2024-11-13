import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 100 100" width="84" height="96">
    <title>Logo</title>
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="50" r="45" /> {/* Main circular outline of the logo */}
      <path d="M30,50 L70,50 M50,30 L50,70" /> {/* Minimal "R" and "V" shape paths */}
    </g>
  </svg>
);

export default IconLogo;
