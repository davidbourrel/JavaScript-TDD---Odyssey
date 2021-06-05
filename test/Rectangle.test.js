const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('isSquare should return true', () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it('isSquare should return false', () => {
    const rectangle = new Rectangle(6, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('getArea should return the area', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it('getPerimeter should return the perimeter', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
