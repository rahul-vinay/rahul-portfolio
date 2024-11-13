import React from 'react';
import logo from '../../images/logo.png'; // Adjusted path based on your folder structure

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
      <foreignObject x="25" y="25" width="50" height="50">
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
      </foreignObject>
    </g>
  </svg>
);

export default IconLoader;
