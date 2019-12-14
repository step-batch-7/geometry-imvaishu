const chai = require("chai");
const assert = chai.assert;
Line = require("../src/line.js");

describe("Line", function() {
  describe("toString", function() {
    it("should return toString of line", function() {
      let actualValue = new Line({ x: 1, y: 4 }, { x: 3, y: 9 }).toString();
      const expectedValue = "[Line (1,4) to (3,9)]";

      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("isEqualTo", function() {
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
      assert.isNaN(actualSlope);
    });
  });

  describe("isParallelTo", function() {
    it("should return true if two lines are parallel", function() {
      const line = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
      const other = new Line({ x: 9, y: 11 }, { x: 4, y: 1 });

      assert.strictEqual(line.isParallelTo(other), true);
    });

    it("should return false if two lines are not parallel", function() {
      const line = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });
      const other = new Line({ x: 9, y: 11 }, { x: 4, y: 1 });

      assert.strictEqual(line.isParallelTo(other), false);
    });

    it.skip("should return false if two lines are overlapping", function() {
      const line = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });
      const other = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });

      assert.strictEqual(line.isParallelTo(other), false);
    });

    it("should return false if one is not line", function() {
      const line = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });
      const other = { endA: { x: 2, y: 3 }, endB: { x: 5, y: 7 } };

      assert.strictEqual(line.isParallelTo(other), false);
    });

    it("should return true if lines are vertical", function() {
      const line = new Line({ x: 4, y: 0 }, { x: 4, y: 5 });
      const other = new Line({ x: 5, y: 0 }, { x: 5, y: 5 });

      assert.strictEqual(line.isParallelTo(other), true);
    });

    it("should return true if lines are horizontal", function() {
      const line = new Line({ x: 4, y: 3 }, { x: 10, y: 3 });
      const other = new Line({ x: 5, y: 4 }, { x: 15, y: 4 });

      assert.strictEqual(line.isParallelTo(other), true);
    });
  });

  describe("findX", function() {
    it("should find x  if y  given", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });

      assert.strictEqual(line.findX(8), 3);
    });

    it("should return Nan if y is greater than endPoint", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });

      assert.isNaN(line.findX(18));
    });

    it("should return Nan if y is less than startPoint", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });

      assert.isNaN(line.findX(1));
    });

    it("should return value of x1 if slope of line is 0", function() {
      const line = new Line({ x: 2, y: 1 }, { x: 3, y: 1 });

      assert.strictEqual(line.findX(3), 2);
    });
  });

  describe("findY", function() {
    it("should find y if x given", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });

      assert.strictEqual(line.findY(4), 10);
    });

    it("should return Nan if x is greater than endPoint", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });

      assert.isNaN(line.findY(8));
    });

    it("should return Nan if x is less than startPoint", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });

      assert.isNaN(line.findY(1));
    });

    it("should return value of y1 if slope of line is infinity or -infinity", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 2 });

      assert.strictEqual(line.findY(0), 2);
    });
  });

  describe("split", function() {
    it("should split line equally from midpoint", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 6, y: 10 });
      const firstHalfLine = new Line({ x: 2, y: 6 }, { x: 4, y: 8 });
      const secondHalfLine = new Line({ x: 4, y: 8 }, { x: 6, y: 10 });
      const expectedLines = [firstHalfLine, secondHalfLine];

      assert.deepStrictEqual(line.split(), expectedLines);
    });

    it("should split line equally from midpoint if both endPoints are zero", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
      const firstHalfLine = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
      const secondHalfLine = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
      const expectedLines = [firstHalfLine, secondHalfLine];

      assert.deepStrictEqual(line.split(), expectedLines);
    });
  });
});
