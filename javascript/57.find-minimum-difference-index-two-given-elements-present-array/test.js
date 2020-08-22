const { findMinDiffBetweenIndexOfGivenElements } = require('./index');
it('findMinDiffBetweenIndexOfGivenElements: shoudl return the min difference', () => {
  expect(
    findMinDiffBetweenIndexOfGivenElements([1, 3, 5, 4, 8, 2, 4, 3, 6, 5], 3, 2)
  ).toBe(2);
  expect(
    findMinDiffBetweenIndexOfGivenElements([1, 3, 5, 4, 8, 2, 4, 3, 6, 5], 2, 5)
  ).toBe(3);
});
