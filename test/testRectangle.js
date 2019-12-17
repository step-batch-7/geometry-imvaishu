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
});
