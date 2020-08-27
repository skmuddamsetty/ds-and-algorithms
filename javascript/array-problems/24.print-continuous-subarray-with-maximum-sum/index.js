/**
 * https://www.techiedelight.com/print-continuous-subarray-with-maximum-sum/
 * @param {Array} A
 *
 * Kadanes Algorithm
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const printContinuosSubArrayWithMaximumSum = (A) => {
  let beg = 0;
  let end = 0;
  let maxSumSoFar = 0;
  let currentSum = 0;
  for (let i = 0; i < A.length; i++) {
    currentSum = currentSum + A[i];
    if (currentSum < 0) {
      beg = i + 1;
      currentSum = 0;
      maxSumSoFar = 0;
    }
    if (maxSumSoFar < currentSum) {
      maxSumSoFar = currentSum;
      end = i;
    }
  }
  return [beg, end];
};

printContinuosSubArrayWithMaximumSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

module.exports = { printContinuosSubArrayWithMaximumSum };
