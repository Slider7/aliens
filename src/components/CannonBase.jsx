import React from 'react';
import {pathFromBezierCurve} from '../utils/formula.js';

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

  const cbc = {
  	startPoint: {
      x: -halfBase,
      y: height,
    },
    cPoint1: {
      x: 20,
      y: nHeight,
    },
    cPoint2: {
      x: 60,
      y: nHeight,
    },
    endPoint: {
      x: bWith,
      y: 0,
    }
  };
  return (
    <g>
     <path
        style={cannonBaseStyle}
        d={pathFromBezierCurve(cbc)}
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