const assert = require("assert");
Line = require("../src/line.js");

describe("Line", function() {
  it("should return toString", function() {
    let actualValue = new Line(1, 3, 4, 9);
    actualValue = actualValue.toString();
    const expectedValue = "{ x1Axis: 1, x2Axis: 3, y1Axis: 4, y2Axis: 9}";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

// describe("Line",function(){
//     it("should compare objects are equal or not",function(){

// });
