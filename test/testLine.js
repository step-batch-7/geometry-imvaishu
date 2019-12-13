const assert = require("assert");
Line = require("../src/line.js");

describe("Line", function() {
  it("should return toString", function() {
    let actualValue = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });
    actualValue = actualValue.toString();
    const expectedValue = "Line (1,4) (3,9)";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("isEqualTO", function() {
  it("should return true if lines are equal ", function() {
    let actualValue = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });
    const expectedValue = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });
    actualValue = actualValue.isEqualTo(expectedValue);
    assert.strictEqual(actualValue, true);
  });

  it("should return false if both are lines and points are not equal", function() {
    let actualValue = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const expectedValue = new Line({ x: 1, y: 4 }, { x: 3, y: 9 });
    actualValue = actualValue.isEqualTo(expectedValue);
    assert.strictEqual(actualValue, false);
  });

  it("should return false if one is not line and points are equal", function() {
    let actualValue = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const expectedValue = { endA: { x: 2, y: 3 }, endB: { x: 4, y: 7 } };
    actualValue = actualValue.isEqualTo(expectedValue);
    assert.strictEqual(actualValue, false);
  });

  it("should return false if one is not line and points are not equal", function() {
    let actualValue = new Line({ x: 2, y: 3 }, { x: 4, y: 7 });
    const expectedValue = { endA: { x: 1, y: 4 }, endB: { x: 3, y: 9 } };
    actualValue = actualValue.isEqualTo(expectedValue);
    assert.strictEqual(actualValue, false);
  });
});
