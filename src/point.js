"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(activity) {
    return activity(this.x, this.y);
  }

  isEqualTo(other) {
    return other instanceof Point && this.x == other.x && this.y == other.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;

    const yCoordinatePointsDist = other.y - this.y;
    const xCoordinatePointsDist = other.x - this.x;

    return Math.sqrt(xCoordinatePointsDist ** 2 + yCoordinatePointsDist ** 2);
  }
}

module.exports = Point;
