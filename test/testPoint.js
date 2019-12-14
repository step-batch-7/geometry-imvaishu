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
});
