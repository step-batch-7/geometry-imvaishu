"use strict";

const Point = require("./point.js");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

const arePointsInRange = function(range, value) {
  const sortedRange = range.sort((a, b) => a - b);

  return value >= sortedRange[0] && value <= sortedRange[1];
};

const arePointsCollinear = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
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
    return (
      other instanceof Line &&
      !arePointsCollinear(this.endA, this.endB, other.endA) &&
      this.slope == other.slope
    );
  }

  findX(y) {
    if (this.slope === 0) {
      return this.endA.x;
    }

    if (!arePointsInRange([this.endA.y, this.endB.y], y)) {
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

    if (!arePointsInRange([this.endA.x, this.endB.x], x)) {
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
      (this.findX(point.y) === point.x || this.findY(point.x) === point.y)
    );
  }
}

module.exports = Line;
