"use strict";

const Point = require("./point");
const Line = require("./line");

const isValueBetweenRange = function(range, value) {
  const sortedRange = range.sort((a, b) => a - b);

  return value > sortedRange[0] && value < sortedRange[1];
};

const getPointBAndD = function(pointA, pointC) {
  const pointB = new Point(pointC.x, pointA.y);
  const pointD = new Point(pointA.x, pointC.y);

  return { pointB, pointD };
};

const getDimension = function(pointA, pointC) {
  const { pointB, pointD } = getPointBAndD(pointA, pointC);

  const length = pointA.findDistanceTo(pointB);
  const width = pointA.findDistanceTo(pointD);

  return { length, width };
};

const getSides = function(pointA, pointC) {
  const { pointB, pointD } = getPointBAndD(pointA, pointC);

  const AB = new Line(pointA, pointB);
  const BC = new Line(pointB, pointC);
  const CD = new Line(pointC, pointD);
  const AD = new Line(pointA, pointD);

  return [AB, BC, CD, AD];
};

class Rectangle {
  constructor(endA, endB) {
    this.pointA = new Point(endA.x, endA.y);
    this.pointC = new Point(endB.x, endB.y);

    Object.defineProperties(this, {
      pointA: { writable: false },
      pointC: { writable: false }
    });
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
    const { pointB, pointD } = getPointBAndD(this.pointA, this.pointC);

    const diagonalOfThis = new Line(this.pointA, this.pointC);
    const alterDiagonalOfThis = new Line(pointB, pointD);
    const diagonalOfOther = new Line(other.pointA, other.pointC);

    return (
      diagonalOfThis.isEqualTo(diagonalOfOther) ||
      alterDiagonalOfThis.isEqualTo(diagonalOfOther)
    );
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;

    const sides = getSides(this.pointA, this.pointC);

    return sides.some(side => side.hasPoint(other));
  }

  covers(point) {
    if (!(point instanceof Point)) return false;

    return (
      isValueBetweenRange([this.pointA.x, this.pointC.x], point.x) &&
      isValueBetweenRange([this.pointA.y, this.pointC.y], point.y)
    );
  }
}

module.exports = Rectangle;
