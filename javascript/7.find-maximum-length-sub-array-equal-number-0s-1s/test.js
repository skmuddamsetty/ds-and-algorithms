const { findMaxLengthSubArrayWithEqualZerosAndOnes } = require('./index');
it('should return the maximum length sub array with equal zeros and ones', () => {
  expect(
    findMaxLengthSubArrayWithEqualZerosAndOnes([0, 0, 1, 0, 1, 0, 0])
  ).toBe(4);
  expect(
    findMaxLengthSubArrayWithEqualZerosAndOnes([1, 0, 1, 0, 1, 0, 0])
  ).toBe(6);
  expect(
    findMaxLengthSubArrayWithEqualZerosAndOnes([0, 0, 1, 0, 1, 0, 1])
  ).toBe(6);
});
