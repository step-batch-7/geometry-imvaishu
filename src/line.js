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
    return (
      otherLine instanceof Line &&
      arePointsEqual(this.endA, otherLine.endA) &&
      arePointsEqual(this.endB, otherLine.endB)
    );
  }
}

module.exports = Line;
