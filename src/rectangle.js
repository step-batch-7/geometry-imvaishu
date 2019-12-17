"use strict";

const Point = require("./point");
const Line = require("./line");

const getDimension = function(pointA, pointC) {
  const pointB = new Point(pointC.x, pointA.y);
  const pointD = new Point(pointA.x, pointC.y);

  const length = pointA.findDistanceTo(pointB);
  const width = pointA.findDistanceTo(pointD);

  return { length, width };
};

class Rectangle {
  constructor(endA, endB) {
    this.pointA = new Point(endA.x, endA.y);
    this.pointC = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointC.x},${this.pointC.y})]`;
  }

  get area() {
    const { length, width } = getDimension(this.pointA, this.pointC);

    return length * width;
  }

  get perimeter() {
    const { length, width } = getDimension(this.pointA, this.pointC);

    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;

    const line1 = new Line(this.pointA, this.pointC);
    const line2 = new Line(other.pointA, other.pointC);

    return line1.isEqualTo(line2);
  }
}

module.exports = Rectangle;
