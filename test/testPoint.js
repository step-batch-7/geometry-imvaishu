const chai = require("chai");
const assert = chai.assert;
Point = require("../src/point.js");

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
  });
});
