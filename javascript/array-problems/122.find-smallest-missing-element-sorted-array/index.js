/**
 * https://www.techiedelight.com/find-smallest-missing-element-sorted-array/
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findSmallestMissingElement_sol_1 = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i) {
      return i;
    }
  }
  return A.length;
};

/**
 *
 * @param {Array} A
 *
 * Binary Search: O(logn)
 * Space Complexity: O(logn) for the auxilary space used by program for call stack
 */
const findSmallestMissingElement_sol_2 = (A) => {
  let left = 0;
  let right = A.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (A[mid] > mid) {
      right = mid - 1;
    } else if (A[mid] <= mid) {
      left = mid + 1;
    }
  }
  if (left > right) {
    return left;
  }
};

findSmallestMissingElement_sol_2([0, 1, 2, 6, 9, 11, 15]);

module.exports = {
  findSmallestMissingElement_sol_1,
  findSmallestMissingElement_sol_2,
};
