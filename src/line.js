class Line {
  constructor(x1, y1, x2, y2) {
    this.endA = { x: x1, y: y1 };
    this.endB = { x: x2, y: y2 };

    // this.x1Axis = x1Axis;
    // this.x2Axis = x2Axis;
    // this.y1Axis = y1Axis;
    // this.y2Axis = y2Axis;
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) (${this.endB.x},${this.endB.y})`;
  }
  // isEqualTo(other) {
  //   return this === other;
  // }
}

module.exports = Line;
