const { zeroSumSubArray } = require('./index');
it('should tell if zero sum sub array exists', () => {
  expect(zeroSumSubArray([3, 4, -7, 3, 1, 3, 1, -4, -2, -2])).toBe(true);
  expect(zeroSumSubArray([3, 4, -7])).toBe(true);
  expect(zeroSumSubArray([3, 4])).toBe(false);
});
