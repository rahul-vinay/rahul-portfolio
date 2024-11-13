import React from 'react';
import logo from '../../images/logo.png'; // Path to your logo image

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Logo</title>
    <g>
      <polygon
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="50,5 11,27 11,72 50,95 89,73 89,28"
        fill="none"
      />
      <foreignObject x="25" y="25" width="50" height="50">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'contain', // Ensures the logo fits within the polygon
            transform: 'translate(-10%, -8%) scale(1.0)', // Adjust positioning and scaling as needed
          }}
        />
      </foreignObject>
    </g>
  </svg>
);

export default IconLogo;
