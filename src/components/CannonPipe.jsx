import React from 'react';
import PropTypes from 'prop-types';

const CannonPipe = (props) => {
  const cannonPipeStyle = {
    fill: '#999',
    stroke: '#060606',
    strokeWidth: '2px',
  };
  const transform = `rotate(${props.rotation}, 0, 0)`;

  const mWidth = 40;
  const halfM = 20;
  const height = 100;
  const yBasis = 70;

  return (
    <g transform={transform}>
      <path
        style={cannonPipeStyle}
        d="M -halfM -yBasis c -40 height*1.7 80 height*1.7 mWidth 0"
      />
      <line
        x1={-halfM}
        y1={-yBasis}
        x2={halfM}
        y2={-yBasis}
        style={cannonPipeStyle}
      />
    </g>
  );
};

CannonPipe.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default CannonPipe;