const {
  findLengthofSmallestSubArray_sol_1,
} = require('../32.length-of-smallest-subarray-with-sum-greater-number/index');
it('findLengthofSmallestSubArray_sol_1', () => {
  expect(findLengthofSmallestSubArray_sol_1([1, 2, 3, 4, 5, 6, 7, 8], 20)).toBe(
    3
  );
  expect(findLengthofSmallestSubArray_sol_1([1, 2, 3, 4, 5, 6, 7, 8], 7)).toBe(
    1
  );
  expect(findLengthofSmallestSubArray_sol_1([1, 2, 3, 4, 5, 6, 7, 8], 21)).toBe(
    4
  );
  expect(findLengthofSmallestSubArray_sol_1([1, 2, 3, 4, 5, 6, 7, 8], 40)).toBe(
    -1
  );
});
