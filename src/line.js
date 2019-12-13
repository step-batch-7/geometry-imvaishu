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
    const distance =
      (this.endB.x - this.endA.x) ** 2 + (this.endB.y - this.endA.y) ** 2;
    return Math.sqrt(distance);
  }

  get slope() {
    const yCoordinatePointsDist = this.endB.y - this.endA.y;
    const xCoordinatePointsDist = this.endB.x - this.endA.x;
    return yCoordinatePointsDist / xCoordinatePointsDist;
  }

  isParallelTo(other) {
    return this.slope == other.slope;
  }
}

module.exports = Line;
