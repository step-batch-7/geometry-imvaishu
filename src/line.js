"use strict";

const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(start, end) {
    this.endA = { x: start.x, y: start.y };
    this.endB = { x: end.x, y: end.y };
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) (${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(otherLine) {
    const isTypeEqual = otherLine instanceof Line;
    const areStartPointsEqual = arePointsEqual(this.endA, otherLine.endA);
    const areEndPointsEqual = arePointsEqual(this.endB, otherLine.endB);
    return isTypeEqual && areStartPointsEqual && areEndPointsEqual;
  }
}

module.exports = Line;
