import React from 'react';
import logo from '../../images/logo.png'; // Adjust path if needed

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        {/* Centering the logo by adjusting x and y */}
        <foreignObject x="8.5" y="15" width="60" height="60">
          <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </foreignObject>
      </g>
    </g>
  </svg>
);

export default IconLogo;
