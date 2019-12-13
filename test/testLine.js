const assert = require("assert");
Line = require("../src/line.js");

describe("Line", function() {
  it("should return toString", function() {
    let actualValue = new Line({ x: 1, y: 4 }, { x: 3, y: 9 }).toString();
    const expectedValue = "Line (1,4) (3,9)";

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("isEqualTO", function() {
  it("should return true if lines are equal ", function() {
    const line = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });
    const other = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });

    assert.strictEqual(line.isEqualTo(other), true);
  });

  it("should return false if both are lines and points are not equal", function() {
    const line = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const other = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });

    assert.strictEqual(line.isEqualTo(other), false);
  });

  it("should return false if one is not line and points are equal", function() {
    const line = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const other = { endA: { x: 2, y: 3 }, endB: { x: 4, y: 7 } };

    assert.strictEqual(line.isEqualTo(other), false);
  });

  it("should return false if one is not line and points are not equal", function() {
    const line = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const other = { endA: { x: 1, y: 4 }, endB: { x: 3, y: 9 } };

    assert.strictEqual(line.isEqualTo(other), false);
  });
});

describe("length", function() {
  it("should calculate length of line segment if points are positive integer", function() {
    const line = new Line({ x: 1, y: 6 }, { x: 6, y: 15 });
    const actualLength = line.length;
    const expectedLength = 10.295630140987;

    assert.strictEqual(actualLength, expectedLength);
  });

  it("should calculate length of line segment if points are negative integer", function() {
    const line = new Line({ x: 1, y: -3 }, { x: -6, y: 6 });
    const actualLength = line.length;
    const expectedLength = 11.40175425099138;
    assert.strictEqual(actualLength, expectedLength);
  });

  it("should calculate length of line segment if points are positive and length is floored", function() {
    const line = new Line({ x: 1, y: 6 }, { x: 4, y: 10 });
    const actualLength = line.length;
    const expectedLength = 5;
    assert.strictEqual(actualLength, expectedLength);
  });

  it("should calculate length of line segment if points are zero", function() {
    const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
    const actualLength = line.length;
    const expectedLength = 0;
    assert.strictEqual(actualLength, expectedLength);
  });
});

describe("slope", function() {
  it("should calculate slope of line if points are positive integer", function() {
    const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
    const actualSlope = line.slope;
    const expectedSlope = 2;
    assert.strictEqual(actualSlope, expectedSlope);
  });

  it("should calculate slope of line if points are negative integer", function() {
    const line = new Line({ x: -2, y: -4 }, { x: 1, y: 5 });
    const actualSlope = line.slope;
    const expectedSlope = 3;
    assert.strictEqual(actualSlope, expectedSlope);
  });

  it("should calculate slope of line if y-axis points are zero ", function() {
    const line = new Line({ x: 2, y: 0 }, { x: 3, y: 0 });
    const actualSlope = line.slope;
    const expectedSlope = 0;
    assert.strictEqual(actualSlope, expectedSlope);
  });

  it("should calculate slope of line if x-axis points are zero ", function() {
    const line = new Line({ x: 0, y: 1 }, { x: 0, y: 2 });
    const actualSlope = line.slope;
    const expectedSlope = Infinity;
    assert.strictEqual(actualSlope, expectedSlope);
  });

  it("should calculate slope of line if all points are zero ", function() {
    const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
    const actualSlope = line.slope;
    const expectedSlope = NaN;
    assert.strictEqual(actualSlope, expectedSlope);
  });
});

describe("isParallelTo", function() {
  it("should return if two lines are parallel", function() {
    const line = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const other = new Line({ x: 9, y: 11 }, { x: 4, y: 1 });

    assert.strictEqual(line.isParallelTo(other), true);
  });
});
