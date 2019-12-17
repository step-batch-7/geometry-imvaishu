const chai = require("chai");
const assert = chai.assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

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

    it("should calculate area if diagonal is parallel to x-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 2 });
      const area = rectangle.area;

      assert.deepStrictEqual(area, 0);
    });

    it("should calculate area if diagonal is parallel to y-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 1, y: 4 });
      const area = rectangle.area;

      assert.deepStrictEqual(area, 0);
    });

    it("should calculate area if length and width are equal", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });
      const area = rectangle.area;

      assert.deepStrictEqual(area, 4);
    });
  });

  describe("perimeter", function() {
    it("should return perimeter 0 if length and width is zero", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      const perimeter = rectangle.perimeter;

      assert.deepStrictEqual(perimeter, 0);
    });

    it("should return perimeter if length and width is more than zero", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 7 });
      const perimeter = rectangle.perimeter;

      assert.deepStrictEqual(perimeter, 14);
    });

    it("should calculate perimeter if diagonal is parallel to x-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 2 });
      const perimeter = rectangle.perimeter;

      assert.deepStrictEqual(perimeter, 6);
    });

    it("should calculate perimeter if diagonal is parallel to y-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 1, y: 4 });
      const perimeter = rectangle.perimeter;

      assert.deepStrictEqual(perimeter, 4);
    });

    it("should calculate perimeter if length and width are equal", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });
      const perimeter = rectangle.perimeter;

      assert.deepStrictEqual(perimeter, 8);
    });
  });

  describe("isEqualTo", function() {
    it("should return false if given rectangle is not instance of Rectangle class", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });
      const other = {
        rectangle: { pointA: { x: 1, y: 2 }, pointC: { x: 3, y: 4 } }
      };

      assert.isNotOk(rectangle.isEqualTo(other));
    });

    it("should return true if given rectangles points are equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });

      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should return false if both rectangles and points are not equal", function() {
      const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 1, y: 4 }, { x: 3, y: 9 });

      assert.isNotOk(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate if equal Rectangles are given with altered pointA and pointC", function() {
      const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 4, y: 7 }, { x: 2, y: 3 });

      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should give true if points are altered and same", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      const rectangle2 = new Rectangle({ x: 5, y: 5 }, { x: 1, y: 1 });

      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("hasPoint", function() {
    it("should return false if given point is not instance of Point", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });
      const other = { point: { x: 1, y: 2 } };

      assert.isNotOk(rectangle.hasPoint(other));
    });

    it("should return true if rectangle has point on AD side", function() {
      const rectangle = new Rectangle({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(2, 8);

      assert.isOk(rectangle.hasPoint(point));
    });

    it("should return true if rectangle has point on AB side", function() {
      const rectangle = new Rectangle({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(3, 6);

      assert.isOk(rectangle.hasPoint(point));
    });

    it("should return true if rectangle has point on BC side", function() {
      const rectangle = new Rectangle({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(4, 7);

      assert.isOk(rectangle.hasPoint(point));
    });

    it("should return true if rectangle has point on CD side", function() {
      const rectangle = new Rectangle({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(3, 10);

      assert.isOk(rectangle.hasPoint(point));
    });

    it("should return false if rectangle has not point on any side", function() {
      const rectangle = new Rectangle({ x: 2, y: 6 }, { x: 4, y: 10 });
      const point = new Point(5, 10);

      assert.notOk(rectangle.hasPoint(point));
    });
  });
});
