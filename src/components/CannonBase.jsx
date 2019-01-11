import React from 'react';

const CannonBase = (props) => {
  const cannonBaseStyle = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };

  const bWith = 80;
  const halfBase = 40;
  const height = 60;
  const nHeight = height * -1;

  return (
    <g>
     <path
        style={cannonBaseStyle}
        d="M-halfBase height C 20 -height 60 -height bWith 0"
      />
      <line
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        style={cannonBaseStyle}
      />
    </g>
  );
};

export default CannonBase;