const chai = require("chai");
const assert = chai.assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

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
      const other = { center: { x: 2, y: 3 }, radius: 15 };

      assert.deepStrictEqual(circle.isEqualTo(other), false);
    });

    it("should return true if center and radius are same", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);

      assert.deepStrictEqual(circle1.isEqualTo(circle2), true);
    });

    it("should return false if center and radius are not same", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 2, y: 4 }, 12);

      assert.deepStrictEqual(circle1.isEqualTo(circle2), false);
    });

    it("should return false if center are same but radius is not same", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 12);

      assert.deepStrictEqual(circle1.isEqualTo(circle2), false);
    });

    it("should return false if radius is same but center are not same", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 3, y: 4 }, 5);

      assert.deepStrictEqual(circle1.isEqualTo(circle2), false);
    });
  });

  describe("area", function() {
    it("should calculate area 0 if radius of circle is zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      const actualArea = circle.area;
      const expectedArea = 0;

      assert.deepStrictEqual(actualArea, expectedArea);
    });

    it("should calculate area if radius of circle is more than zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actualArea = circle.area;
      const expectedArea = 78.53981633974483;

      assert.deepStrictEqual(actualArea, expectedArea);
    });
  });

  describe("perimeter", function() {
    it("should calculate perimeter 0 if radius of circle is zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      const actualArea = circle.perimeter;
      const expectedArea = 0;

      assert.deepStrictEqual(actualArea, expectedArea);
    });

    it("should calculate perimeter if radius of circle is more than zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actualArea = circle.perimeter;
      const expectedArea = 31.41592653589793;

      assert.deepStrictEqual(actualArea, expectedArea);
    });
  });

  describe("hasPoint", function() {
    it("should return false if other one is not instance of point", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = { x: 3, y: 8 };

      assert.isNotOk(circle.hasPoint(point));
    });

    it("should return true if circle has point and given point is instance of Point", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = new Point(3, 5);

      assert.isOk(circle.hasPoint(point));
    });

    it("should return false if circle has not point", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = new Point(7, 8);

      assert.isNotOk(circle.hasPoint(point));
    });

    it("should return false if circle has x point but has not y point", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = new Point(3, 8);

      assert.isNotOk(circle.hasPoint(point));
    });

    it("should return false if circle has y point but has not x point", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const point = new Point(8, 6);

      assert.isNotOk(circle.hasPoint(point));
    });
  });
});
