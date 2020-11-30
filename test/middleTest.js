const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5', '6', '7', '8', '9']), ['7']); 
  });
});
