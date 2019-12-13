"use strict";

const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(start, end) {
    this.endA = { ...start };
    this.endB = { ...end };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y}) (${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(otherLine) {
    const isTypeEqual = otherLine instanceof Line;
    return (
      isTypeEqual &&
      arePointsEqual(this.endA, otherLine.endA) &&
      arePointsEqual(this.endB, otherLine.endB)
    );
  }
}

module.exports = Line;
