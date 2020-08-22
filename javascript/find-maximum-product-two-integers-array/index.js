/**
 *
 * https://www.techiedelight.com/find-maximum-product-two-integers-array/
 * @param {Array} A
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
const findMaxProduct_sol_1 = (A) => {
  A.sort((a, b) => a - b);
  if (A.length > 3) {
    return Math.max(A[0] * A[1], A[A.length - 1] * A[A.length - 2]);
  } else if (A.length === 2) {
    return A[0] * A[1] > 0 ? A[0] * A[1] : -1;
  }
};

/**
 *
 * @param {Array} A
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findMaxProduct_sol_2 = (A) => {
  let min1 = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;
  let max1 = Number.MIN_VALUE;
  let max2 = Number.MIN_VALUE;

  for (let num of A) {
    // computing min1 and min2 values
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
    // computing max1 and max2 values
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return Math.max(min1 * min2, max1 * max2);
};
module.exports = { findMaxProduct_sol_1, findMaxProduct_sol_2 };
