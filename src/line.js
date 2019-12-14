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

  isEqualTo(other) {
    return (
      other instanceof Line &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  get length() {
    const yCoordinatePointsDist = this.endB.y - this.endA.y;
    const xCoordinatePointsDist = this.endB.x - this.endA.x;
    return Math.sqrt(xCoordinatePointsDist ** 2 + yCoordinatePointsDist ** 2);
  }

  get slope() {
    const yCoordinatePointsDist = this.endB.y - this.endA.y;
    const xCoordinatePointsDist = this.endB.x - this.endA.x;
    return yCoordinatePointsDist / xCoordinatePointsDist;
  }

  isParallelTo(other) {
    return other instanceof Line && this.slope == other.slope;
  }

  findX(y) {
    let LHS = y - this.endA.y;
    LHS = LHS / this.slope;
    return LHS + this.endA.x;
  }
}

module.exports = Line;
