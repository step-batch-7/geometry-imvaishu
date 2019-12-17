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

const getSides = function(pointA, pointC) {
  const AB = new Line(pointA, new Point(pointC.x, pointA.y));
  const BC = new Line(new Point(pointC.x, pointA.y), pointC);
  const CD = new Line(pointC, new Point(pointA.x, pointC.y));
  const AD = new Line(pointA, new Point(pointA.x, pointC.y));

  return [AB, BC, CD, AD];
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

    const diagonalOfThis = new Line(this.pointA, this.pointC);
    const diagonalOfOther = new Line(other.pointA, other.pointC);

    return diagonalOfThis.isEqualTo(diagonalOfOther);
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;

    const sides = getSides(this.pointA, this.pointC);

    return sides.some(side => side.hasPoint(other));
  }
}

module.exports = Rectangle;
