"use strict";

const Point = require("./point");

class Rectangle {
  constructor(endA, endB) {
    this.diagonalEndA = new Point(endA.x, endA.y);
    this.diagonalEndB = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Rectangle (${this.diagonalEndA.x},${this.diagonalEndA.y}) to (${this.diagonalEndB.x},${this.diagonalEndB.y})]`;
  }
}

module.exports = Rectangle;
