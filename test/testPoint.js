const chai = require("chai");
const assert = chai.assert;
Point = require("../src/point.js");

describe("Point", function() {
  describe("toString", function() {
    it("should return toString of point", function() {
      const actualValue = new Point(1, 2);
      const expectedValue = "[Point @(1,2)]";

      assert.deepStrictEqual(actualValue.toString(), expectedValue);
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
});
