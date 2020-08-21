/**
 *
 * https://www.techiedelight.com/find-duplicate-element-limited-range-array/
 * @param {Array} A
 * Hashing Technique
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const dupElementInArray_sol_1 = (A) => {
  let map = {};
  for (let num of A) {
    if (map[num] !== undefined) {
      return num;
    } else {
      map[num] = true;
    }
  }
  return -1;
};

/**
 * using visited element technique
 * @param {Array} A
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 */
const dupElementInArray_sol_2 = (A) => {
  let index = 0;
  for (let num of A) {
    if (A[num - 1] === -1) {
      return num;
    }
    A[num - 1] = -1;
    index++;
  }
  return -1;
};

/**
 * Using xor technique
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 */
const dupElementInArray_sol_3 = (A) => {
  let length = A.length - 1;
  let dupNumber = 0;
  while (length >= 0) {
    dupNumber = dupNumber ^ A[length] ^ length;
    length--;
  }
  return dupNumber;
};

module.exports = {
  dupElementInArray_sol_1,
  dupElementInArray_sol_2,
  dupElementInArray_sol_3,
};
