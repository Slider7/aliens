export const pathFromBezierCurve = (cubicBezierCurve) => {
  const {
    startPoint, cPoint1, cPoint2, endPoint
  } = cubicBezierCurve;
  return `
    M${startPoint.x} ${startPoint.y}
    c ${cPoint1.x} ${cPoint1.y}
    ${cPoint2.x} ${cPoint2.y}
    ${endPoint.x} ${endPoint.y}
  `;
};
