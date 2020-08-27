/**
 * https://www.techiedelight.com/move-zeros-present-array-end/
 * @param {Array} A
 *
 * using partitioning logic of quick sort
 * Time Complexity: O(n)
 * Space Complexity: 0(1)
 */
const moveAllZerosToEnd_sol_1 = (A) => {
  let pos = 0;
  let index = 0;
  for (let num of A) {
    // if number is not equal to zero, swapping the elements and incrementing the position
    if (num !== 0) {
      let temp = A[pos];
      A[pos] = num;
      A[index] = temp;
      pos++;
    }
    index++;
  }
  return A;
};

/**
 *
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: 0(1)
 */
const moveAllZerosToEnd_sol_2 = (A) => {
  let k = 0;
  for (let num of A) {
    if (num !== 0) {
      A[k++] = num;
    }
  }
  for (let i = k; i < A.length; i++) {
    A[i] = 0;
  }
  return A;
};
module.exports = { moveAllZerosToEnd_sol_1, moveAllZerosToEnd_sol_2 };
