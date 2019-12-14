"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
}

const a = new Point(1, 2);
console.log(a);
console.log(a.toString());
module.exports = Point;
