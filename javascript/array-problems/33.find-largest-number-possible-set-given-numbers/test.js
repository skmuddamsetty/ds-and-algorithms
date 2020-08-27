const {
  findLargestNumberPossible,
} = require('../33.find-largest-number-possible-set-given-numbers/index');
it('findLargestNumberPossible: should return the largest number possible', () => {
  expect(findLargestNumberPossible(['10', '68', '75', '7', '21', '12'])).toBe(
    '77568211210'
  );
});
