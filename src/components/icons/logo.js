import React from 'react';
import logo from '../../images/logo.png';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Logo</title>
    <g>
      {/* Hexagon polygon */}
      <polygon
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="50,5 11,27 11,72 50,95 89,73 89,28"
        fill="none"
      />
      {/* Logo image centered and scaled */}
      <foreignObject x="20" y="20" width="60" height="60">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'contain',
            transform: 'scale(1.1)', // Slightly increase scale to better fill the hexagon
          }}
        />
      </foreignObject>
    </g>
  </svg>
);

export default IconLogo;
