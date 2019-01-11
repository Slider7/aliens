import React from 'react';
import PropTypes from 'prop-types';
import {pathFromBezierCurve} from '../utils/formula.js';

const CannonPipe = (props) => {
  const cannonPipeStyle = {
    fill: '#999',
    stroke: '#667',
    strokeWidth: '2px',
  };
  const transform = `rotate(${props.rotation}, 0, 0)`;

  const mWidth = 40;
  const halfM = 20;
  const height = 100;
  const yBasis = 70;

  const cbc = {
      startPoint: {
        x: -halfM,
        y: -yBasis,
      },
      cPoint1: {
        x: -40,
        y: height*1.7,
      },
      cPoint2: {
        x: 80,
        y: height*1.7,
      },
      endPoint: {
        x: mWidth,
        y: 0,
      }
    };

  return (
    <g transform={transform}>
      <path
        style={cannonPipeStyle}
        d={pathFromBezierCurve(cbc)}
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