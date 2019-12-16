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
});
