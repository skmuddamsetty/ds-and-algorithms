const {
  printContinuosSubArrayWithMaximumSum,
} = require('../24.print-continuous-subarray-with-maximum-sum/index');

it('printContinuosSubArrayWithMaximumSum: should return an array with lowest and highest indices with maximum sum in the array', () => {
  expect(
    printContinuosSubArrayWithMaximumSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  ).toEqual([3, 6]);
  expect(
    printContinuosSubArrayWithMaximumSum([8, -7, -3, 5, 6, -2, 3, -4, 2])
  ).toEqual([3, 6]);
  expect(
    printContinuosSubArrayWithMaximumSum([8, -7, -3, 5, 6, -2, 3, 4, 2])
  ).toEqual([3, 8]);
});
