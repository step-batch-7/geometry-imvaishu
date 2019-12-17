const chai = require("chai");
const assert = chai.assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should return toString of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actualString = rectangle.toString();
      const expectedString = "[Rectangle (1,1) to (2,3)]";

      assert.deepStrictEqual(actualString, expectedString);
    });
  });

  describe("area", function() {
    it("should return area 0 if length and width is zero", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      const area = rectangle.area;

      assert.deepStrictEqual(area, 0);
    });

    it("should return area if length and width is more than zero", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 7 });
      const area = rectangle.area;

      assert.deepStrictEqual(area, 10);
    });
  });
});
