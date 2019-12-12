const assert = require("assert");
Line = require("../src/line.js");

describe("Line", function() {
  it("should return toString", function() {
    let actualValue = new Line(1, 4, 3, 9);
    actualValue = actualValue.toString();
    const expectedValue = "Line (1,4) (3,9)";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

// describe("Line", function() {
//   it("should compare objects are equal or not", function() {
//     let actualValue = new Line(1, 2, 3, 4);
//     const expectedValue = new Line(1, 2, 3, 4);
//     actualValue = actualValue.isEqual(expectedValue);
//     assert.strictEqual(actualValue, true);
//   });
// });
