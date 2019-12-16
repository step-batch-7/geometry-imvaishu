const chai = require("chai");
const assert = chai.assert;
const Point = require("../src/point.js");
const Line = require("../src/line");
const Circle = require("../src/circle");

describe("Point", function() {
  describe("toString", function() {
    it("should return toString of point", function() {
      const point = new Point(1, 2);
      const expectedString = "[Point @(1,2)]";

      assert.deepStrictEqual(point.toString(), expectedString);
    });
  });

  describe("visit", function() {
    it("should visit the function with point x and y", function() {
      const point = new Point(1, 2);
      const activity = (x, y) => x + y;

      assert.strictEqual(point.visit(activity), 3);
    });

    it("should visit the other function with point x and y", function() {
      const point = new Point(4, 2);
      const activity = (x, y) => x * y;

      assert.strictEqual(point.visit(activity), 8);
    });
  });

  describe("clone", function() {
    it("should return new point but with different reference", function() {
      const point = new Point(1, 2);
      const newPoint = point.clone();

      assert.deepStrictEqual(newPoint, point);
    });
  });

  describe("isEqualTo", function() {
    it("should return true if points are equal", function() {
      const point = new Point(1, 2);
      const other = new Point(1, 2);

      assert.strictEqual(point.isEqualTo(other), true);
    });

    it("should return false if points are not equal", function() {
      const point = new Point(1, 2);
      const other = new Point(2, 2);

      assert.strictEqual(point.isEqualTo(other), false);
    });

    it("should return false if one is not point and points are equal", function() {
      const point = new Point(1, 2);
      const other = { Point: { x: 1, y: 2 } };

      assert.strictEqual(point.isEqualTo(other), false);
    });

    it("should return false if one is not line and points are not equal", function() {
      const point = new Point(1, 2);
      const other = { Point: { x: 3, y: 5 } };

      assert.strictEqual(point.isEqualTo(other), false);
    });
  });

  describe("findDistanceTo", function() {
    it("should return NaN if other is not instance of Point class", function() {
      const point = new Point(7, 4);
      const other = { Point: { x: 3, y: 5 } };

      assert.isNaN(point.findDistanceTo(other));
    });

    it("should return 0 if both are instance of point and same", function() {
      const point1 = new Point(4, 4);
      const point2 = new Point(4, 4);

      assert.deepStrictEqual(point1.findDistanceTo(point2), 0);
    });

    it("should return distance if both are instance of point and both are different", function() {
      const point1 = new Point(3, 5);
      const point2 = new Point(6, 9);

      assert.deepStrictEqual(point1.findDistanceTo(point2), 5);
    });

    it("should work for decimal distance if both are instance of point and ", function() {
      const point1 = new Point(7, 5);
      const point2 = new Point(6, 9);

      assert.deepStrictEqual(point1.findDistanceTo(point2), 4.123105625617661);
    });
  });

  describe("isOn", function() {
    it("should return true if point is present on line", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(3, 8);

      assert.ok(point.isOn(line));
    });

    it("should return false if point is not present on line", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(5, 12);

      assert.notOk(point.isOn(line));
    });

    it("should return true if point is present on circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = new Point(1, 7);

      assert.ok(point.isOn(circle));
    });

    it("should return false if point is not present on circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = new Point(7, 8);

      assert.notOk(point.isOn(circle));
    });
  });
});
