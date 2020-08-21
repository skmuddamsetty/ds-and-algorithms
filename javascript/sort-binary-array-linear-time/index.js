/**
 * https://www.techiedelight.com/sort-binary-array-linear-time/
 * this will return all zeros first followed by ones
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const sortBinaryArray_sol_1 = (A) => {
  let zeros = 0;
  // counting number of zeros
  for (let num of A) {
    if (num === 0) {
      zeros++;
    }
  }
  let count = 0;
  // filling zeros
  while (count < zeros) {
    A[count] = 0;
    count++;
  }
  // filling ones
  while (zeros < A.length) {
    A[zeros] = 1;
    zeros++;
  }
  return A;
};

/**
 * partitioning logic of quick sort
 * this will return all zeros first followed by ones
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const sortBinaryArray_sol_2 = (A) => {
  let pos = 0;
  let index = 0;
  for (let num of A) {
    // if num === 0 swapping and incrementing the position
    if (num === 0) {
      let temp = A[pos];
      A[pos] = 0;
      A[index] = temp;
      pos++;
    }
    index++;
  }
  return A;
};

/**
 * partitioning logic of quick sort
 * this will return all ones first followed by zeros
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const sortBinaryArray_sol_3 = (A) => {
  let pos = 0;
  let index = 0;
  for (let num of A) {
    // if num === 0 swapping and incrementing the position
    if (num === 1) {
      let temp = A[pos];
      A[pos] = 1;
      A[index] = temp;
      pos++;
    }
    index++;
  }
  return A;
};
module.exports = {
  sortBinaryArray_sol_1,
  sortBinaryArray_sol_2,
  sortBinaryArray_sol_3,
};
