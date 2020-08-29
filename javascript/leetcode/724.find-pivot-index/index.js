/**Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (A) {
  let currSum = 0;
  let totalSum = 0;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < A.length; i++) {
    totalSum = totalSum + A[i];
  }
  for (let i = 0; i < A.length; i++) {
    currSum = currSum + A[i];
    leftSum = currSum - A[i];
    rightSum = totalSum - currSum;
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

module.exports = { pivotIndex };
