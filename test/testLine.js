const chai = require("chai");
const assert = chai.assert;
const Line = require("../src/line.js");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should return toString of line", function() {
      let line = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });
      const expectedString = "[Line (1,4) to (3,9)]";

      assert.deepStrictEqual(line.toString(), expectedString);
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

    it("should validate if equal lines are given with altered start and end", function() {
      const line = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
      const other = new Line({ x: 4, y: 7 }, { x: 2, y: 3 });

      assert.strictEqual(line.isEqualTo(other), true);
    });

    it("should give true if points are altered", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const other = new Line({ x: 5, y: 5 }, { x: 1, y: 1 });

      assert.deepStrictEqual(line.isEqualTo(other), true);
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

    it("should give Infinity as slope when line is parallel to y-axis and direction is upwards", function() {
      const line = new Line({ x: 2, y: 5 }, { x: 2, y: 8 });
      const actualSlope = line.slope;

      assert.strictEqual(actualSlope, Infinity);
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

    it("should return false if two lines are overlapping", function() {
      const line = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });
      const other = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });

      assert.strictEqual(line.isParallelTo(other), false);
    });

    it("should return false if two lines are overlapping and start and end points are different", function() {
      const line = new Line({ x: 2, y: 4 }, { x: 4, y: 8 });
      const other = new Line({ x: 1, y: 2 }, { x: 3, y: 6 });

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

    it("should return true if slope of line is -Infinity", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      const other = new Line({ x: 1, y: 1 }, { x: 1, y: -3 });

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

      assert.strictEqual(line.findX(1), 2);
    });

    it("should return NaN if slope of line is 0 but value of y is not in range", function() {
      const line = new Line({ x: 2, y: 1 }, { x: 3, y: 1 });

      assert.isNaN(line.findX(3));
    });

    it("should give x value for given y for line is going down ", function() {
      const line = new Line({ x: -1, y: 1 }, { x: 2, y: -5 });

      assert.deepStrictEqual(line.findX(-1), 0);
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

    it("should return value of y1 if slope of line is infinity ", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 2 });

      assert.strictEqual(line.findY(0), 1);
    });

    it("should give y value of start point if there are multiple y values available for a given x", function() {
      const line = new Line({ x: 2, y: 1 }, { x: 2, y: 3 });

      assert.strictEqual(line.findY(2), 1);
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

    it("should split line equally from midpoint if line is vertical", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 2, y: 10 });
      const firstHalfLine = new Line({ x: 2, y: 6 }, { x: 2, y: 8 });
      const secondHalfLine = new Line({ x: 2, y: 8 }, { x: 2, y: 10 });
      const expectedLines = [firstHalfLine, secondHalfLine];

      assert.deepStrictEqual(line.split(), expectedLines);
    });

    it("should split line equally from midpoint if length is zero", function() {
      const line = new Line({ x: -5, y: -5 }, { x: -5, y: -5 });
      const firstHalfLine = new Line({ x: -5, y: -5 }, { x: -5, y: -5 });
      const secondHalfLine = new Line({ x: -5, y: -5 }, { x: -5, y: -5 });
      const expectedLines = [firstHalfLine, secondHalfLine];

      assert.deepStrictEqual(line.split(), expectedLines);
    });
  });

  describe("hasPoint", function() {
    it("should return true if line has point and both are line and point", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(3, 8);

      assert.isOk(line.hasPoint(point));
    });

    it("should return false if line has not point and both are line and point", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(1, 2);

      assert.isNotOk(line.hasPoint(point));
    });

    it("should return false if one is not Point", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = { x: 3, y: 8 };

      assert.isNotOk(line.hasPoint(point));
    });

    it("should return false if line has x point but has not y point", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(3, 2);

      assert.isNotOk(line.hasPoint(point));
    });

    it("should return false if line has y point but has not x point", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(1, 6);

      assert.isNotOk(line.hasPoint(point));
    });

    it("should return false if line is vertical and it does not have that point", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 2, y: 10 });
      const point = new Point(2, 2);

      assert.isNotOk(line.hasPoint(point));
    });
  });

  describe("findPointFromStart", function() {
    it("should return null if the distance is greater than line length", function() {
      const line = new Line({ x: 2, y: 1 }, { x: 5, y: 2 });

      assert.isNull(line.findPointFromStart(5));
    });

    it("should return null if the distance is less than 0", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 3 });

      assert.isNull(line.findPointFromStart(-1));
    });

    it("should return endPoint if distance from startPoint is same as length ", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 4, y: 10 });

      assert.deepStrictEqual(line.findPointFromStart(5), new Point(4, 10));
    });

    it("should return point if valid distance is given from startPoint of line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });

      assert.deepStrictEqual(line.findPointFromStart(3), new Point(4, 1));
    });

    it("should return startPoint if given distance is 0", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 6 });

      assert.deepStrictEqual(line.findPointFromStart(0), new Point(1, 2));
    });
  });

  describe("findPointFromEnd", function() {
    it("should return null if the distance is greater than line length", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 4, y: 10 });

      assert.isNull(line.findPointFromEnd(6));
    });

    it("should return null if the distance is less than 0", function() {
      const line = new Line({ x: 6, y: 2 }, { x: 9, y: 3 });

      assert.isNull(line.findPointFromEnd(-1));
    });

    it("should return startPoint if distance from endPoint is same as length ", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 4, y: 10 });

      assert.deepStrictEqual(line.findPointFromEnd(5), new Point(1, 6));
    });

    it("should return endPoint if given distance is 0", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 6 });

      assert.deepStrictEqual(line.findPointFromEnd(0), new Point(4, 6));
    });
  });
});
