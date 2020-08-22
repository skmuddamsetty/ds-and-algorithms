/**
 * https://www.techiedelight.com/find-missing-number-array-without-extra-space/
 * https://leetcode.com/problems/missing-number/
 *
 * @param {Array} A
 *
 * XOR solution
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findMissingNumber_sol_1 = (A) => {
  let missingNumber = 0;
  // finding the xor result of all numbers in the given array
  for (let num of A) {
    missingNumber = missingNumber ^ num;
  }
  // starting from 1 looping through n+1 --> n is the length of the array
  let index = 1;
  while (index <= A.length + 1) {
    missingNumber = missingNumber ^ index;
    index++;
  }
  return missingNumber;
};

/**
 *
 * @param {Array} A
 *
 * Hashing solution
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const findMissingNumber_sol_2 = (A) => {
  let map = {};
  // preparing an array with numbers in the array
  for (let num of A) {
    map[num] = true;
  }
  // starting from 1 looping through n+1 --> n is the length of the array
  let index = 1;
  while (index <= A.length + 1) {
    // if the index is not found in the map, then it is the missing number
    if (map[index] === undefined) {
      return index;
    }
    index++;
  }
};

/**
 *
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findMissingNumber_sol_3 = (A) => {
  let index = 0;
  for (let num of A) {
    num = Math.abs(num);
    if (num - 1 < A.length) {
      A[num - 1] = -A[num - 1];
    }
  }
  while (index < A.length) {
    if (A[index] > 0) {
      return index + 1;
    }
    index++;
  }
  return index + 1;
};

module.exports = {
  findMissingNumber_sol_1,
  findMissingNumber_sol_2,
  findMissingNumber_sol_3,
};
