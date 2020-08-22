const { findMaxLengthSubArrayWithGivenSum } = require('./index');
it('should return the max length of sub array having given sum', () => {
  expect(findMaxLengthSubArrayWithGivenSum([1, 4, 3, 2, 1, 1], 7)).toBe(4);
  expect(
    findMaxLengthSubArrayWithGivenSum([5, 6, -5, 5, 3, 5, 3, -2, 0], 8)
  ).toBe(4);
});
