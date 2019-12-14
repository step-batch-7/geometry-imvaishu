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
}

module.exports = Point;
