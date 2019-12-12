class Line {
  constructor(x1Axis, x2Axis, y1Axis, y2Axis) {
    this.x1Axis = x1Axis;
    this.x2Axis = x2Axis;
    this.y1Axis = y1Axis;
    this.y2Axis = y2Axis;
  }
  toString() {
    return `{ x1Axis: ${this.x1Axis}, x2Axis: ${this.x2Axis}, y1Axis: ${this.y1Axis}, y2Axis: ${this.y2Axis}}`;
  }
  // isEqualTo(other) {
  //   return other === other;
  // }
}

module.exports = Line;
