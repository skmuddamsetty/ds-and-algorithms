/**
 * https://www.techiedelight.com/find-minimum-difference-index-two-given-elements-present-array/
 * @param {Array} A
 * @param {Number} x
 * @param {Number} y
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const findMinDiffBetweenIndexOfGivenElements = (A, x, y) => {
  let elem1Index;
  let elem2Index;
  let minDiff = Number.MAX_VALUE;
  let index = 0;
  for (let num of A) {
    if (num === x) {
      elem1Index = index;
    }
    if (num === y) {
      elem2Index = index;
    }
    if (elem1Index && elem2Index) {
      minDiff = Math.min(minDiff, Math.abs(elem1Index - elem2Index));
    }
    index++;
  }
  return minDiff;
};

module.exports = { findMinDiffBetweenIndexOfGivenElements };
