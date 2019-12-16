"use strict";

const Point = require("./point.js");

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
    this.endA = new Point(start.x, start.y);
    this.endB = new Point(end.x, end.y);
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  isEqualTo(other) {
    return (
      other instanceof Line &&
      (this.endA.isEqualTo(other.endA) || this.endA.isEqualTo(other.endB)) &&
      (this.endB.isEqualTo(other.endB) || this.endB.isEqualTo(other.endA))
    );
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  get slope() {
    const yCoordinatePointsDist = this.endB.y - this.endA.y;
    const xCoordinatePointsDist = this.endB.x - this.endA.x;
    const slope = yCoordinatePointsDist / xCoordinatePointsDist;

    return slope == -Infinity ? Infinity : slope;
  }

  isParallelTo(other) {
    return (
      other instanceof Line &&
      !arePointsCollinear(this.endA, this.endB, other.endA) &&
      this.slope == other.slope
    );
  }

  findX(y) {
    if (!arePointsInRange([this.endA.y, this.endB.y], y)) {
      return NaN;
    }

    if (this.slope === 0) {
      return this.endA.x;
    }

    return (y - this.endA.y) / this.slope + this.endA.x;
  }

  findY(x) {
    if (!arePointsInRange([this.endA.x, this.endB.x], x)) {
      return NaN;
    }

    if (this.slope === Infinity) {
      return this.endA.y;
    }

    return (x - this.endA.x) * this.slope + this.endA.y;
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
