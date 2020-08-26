/**
 * https://www.techiedelight.com/find-subarray-having-given-sum-given-array/
 * @param {Array} arr
 *
 * Sliding Window technique
 *
 * Time Complexity: o(n)
 * Space Complexity: o(n)
 */
const findSubArrayWithGivenSum_sol_1 = (A, targetSum) => {
  let windowSum = 0;
  let high = 0;
  for (let low = 0; low < A.length; low++) {
    while (windowSum < targetSum && high < A.length) {
      windowSum = windowSum + A[high];
      high++;
    }
    if (windowSum === targetSum) {
      return [low, high - 1];
    }
    if (windowSum > targetSum) {
      windowSum = windowSum - A[low];
    }
  }
};

/**
 *
 * @param {Array} A
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const findSubArrayWithGivenSum_sol_2 = (A, targetSum) => {
  let currentSum;
  for (let i = 0; i < A.length; i++) {
    currentSum = A[i];
    for (let j = i + 1; j < A.length; j++) {
      if (currentSum === targetSum) {
        return [i, j - 1];
      }
      if (currentSum > targetSum) {
        break;
      }
      currentSum = currentSum + A[j];
    }
  }
  return -1;
};

/**
 *
 * @param {Array} A
 * @param {Number} targetSum
 *
 * This will only work with positive numbers
 */
const findSubArrayWithGivenSum_sol_3 = (A, targetSum) => {
  let currentSum = 0;
  let lastIndex = 0;
  for (let i = 0; i < A.length; i++) {
    while (currentSum < targetSum && lastIndex < A.length) {
      currentSum = currentSum + A[lastIndex];
      lastIndex++;
    }
    if (currentSum === targetSum) {
      return [i, lastIndex - 1];
    }
    if (currentSum > targetSum) {
      currentSum = currentSum - A[i];
    }
  }
  return -1;
};

// console.log(findSubArrayWithGivenSum_sol_3([1, 4, 20, 3, 10, 5], 33));
console.log(findSubArrayWithGivenSum_sol_3([1, 4], 0));
console.log(
  findSubArrayWithGivenSum_sol_2([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10], -3)
);

module.exports = {
  findSubArrayWithGivenSum_sol_1,
  findSubArrayWithGivenSum_sol_2,
  findSubArrayWithGivenSum_sol_3,
};
