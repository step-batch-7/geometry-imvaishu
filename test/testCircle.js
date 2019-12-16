const chai = require("chai");
const assert = chai.assert;
const Circle = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should return toString representation of Circle class", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actualString = circle.toString();
      const expectedToString = "[Circle @(1,2) radius 5]";

      assert.strictEqual(actualString, expectedToString);
    });
  });

  describe("isEqualTo", function() {
    it("should return false if other is not instance of Circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const other = { center: { x: 1, y: 2 }, radius: 5 };

      assert.deepStrictEqual(circle.isEqualTo(other), false);
    });

    it("should return true if center and radius are same", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);

      assert.deepStrictEqual(circle1.isEqualTo(circle2), true);
    });
  });
});
