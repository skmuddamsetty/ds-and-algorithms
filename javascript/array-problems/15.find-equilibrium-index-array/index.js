/**
 * https://www.techiedelight.com/find-equilibrium-index-array/
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findEquilibriumIndexes = (A) => {
  let currSum = 0;
  let totalSum = 0;
  let leftSum = 0;
  let rightSum = 0;
  let results = [];
  for (let i = 0; i < A.length; i++) {
    totalSum = totalSum + A[i];
  }
  for (let i = 0; i < A.length; i++) {
    currSum = currSum + A[i];
    leftSum = currSum - A[i];
    rightSum = totalSum - currSum;
    if (leftSum === rightSum) {
      results.push(i);
    }
  }
  return results;
};

module.exports = { findEquilibriumIndexes };
