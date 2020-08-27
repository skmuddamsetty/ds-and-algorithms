/**
 * https://www.techiedelight.com/length-of-smallest-subarray-with-sum-greater-number/
 *
 * @param {Array} A
 * @param {Number} targetSum
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findLengthofSmallestSubArray_sol_1 = (A, targetSum) => {
  let smallestSubArrayLength = Number.MAX_VALUE;
  let lastIndex = 0;
  let currentSum = 0;
  for (let i = 0; i < A.length; i++) {
    while (currentSum <= targetSum && lastIndex < A.length) {
      currentSum = currentSum + A[lastIndex];
      lastIndex++;
    }
    if (currentSum > targetSum) {
      smallestSubArrayLength =
        Math.min(smallestSubArrayLength, lastIndex - 1 - i) + 1;
      currentSum = currentSum - A[i];
    }
  }
  return smallestSubArrayLength === Number.MAX_VALUE
    ? -1
    : smallestSubArrayLength;
};

module.exports = { findLengthofSmallestSubArray_sol_1 };
