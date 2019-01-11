import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
    </svg>
  );
};

/*
CannonPipe.rotation:это свойство привязано к состоянию Redux store путем маппинга функций (mapStateToProps и mapDispatchToProps) 
внутри функции connect, внутри контейнера Game.
svg.onMouseMove: этот слушатель событий добавлен на холст, чтобы определять положение мыши.
*/

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;