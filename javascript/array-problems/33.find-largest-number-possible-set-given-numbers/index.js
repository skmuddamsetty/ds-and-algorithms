/**
 * https://www.techiedelight.com/find-largest-number-possible-set-given-numbers/
 * @param {Array} A
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */
const findLargestNumberPossible = (A) => {
  // ascending order
  A.sort((a, b) => {
    return a + b > b + a ? -1 : 0;
  });
  return A.join('');
};

console.log(findLargestNumberPossible(['10', '68', '75', '7', '21', '12']));
module.exports = { findLargestNumberPossible };
