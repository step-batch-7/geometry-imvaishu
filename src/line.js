"use strict";

const Point = require("./point.js");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(start, end) {
    this.endA = { x: start.x, y: start.y };
    this.endB = { x: end.x, y: end.y };
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
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
    if (this.slope === 0) {
      return this.endA.x;
    }

    if (y > this.endB.y) {
      return NaN;
    }

    if (y < this.endA.y) {
      return NaN;
    }

    let LHS = y - this.endA.y;
    LHS = LHS / this.slope;
    return LHS + this.endA.x;
  }

  findY(x) {
    if (this.slope === Infinity) {
      return this.endB.y;
    }

    if (x > this.endB.x) {
      return NaN;
    }

    if (x < this.endA.x) {
      return NaN;
    }

    let RHS = x - this.endA.x;
    RHS = this.slope * RHS;
    return RHS + this.endA.y;
  }

  split() {
    const midPoint = {
      x: (this.endA.x + this.endB.x) / 2,
      y: (this.endA.y + this.endB.y) / 2
    };

    const firstHalfLine = new Line(this.endA, midPoint);
    const secondHAlfLine = new Line(midPoint, this.endB);
    return [firstHalfLine, secondHAlfLine];
  }

  hasPoint(point) {
    return (
      point instanceof Point &&
      (this.findX(point.y) == point.x || this.findY(point.x) == point)
    );
  }
}

module.exports = Line;
